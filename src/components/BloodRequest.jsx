import React, { useState } from 'react';
import { AlertCircle, Check, Droplet, Phone, User, Building, Calendar, AlertTriangle } from 'lucide-react';

// Custom Alert Component
const Alert = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gray-100 border-gray-200 text-gray-800',
    destructive: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-green-50 border-green-200 text-green-800'
  };

  return (
    <div className={`p-4 border rounded-lg flex items-start gap-3 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

const BloodRequestForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    bloodGroup: '',
    age: '',
    hospitalAddress: '',
    urgency: 'normal'
  });

  const [status, setStatus] = useState({
    error: '',
    success: false,
    loading: false
  });

  // Blood Group Availability Status
  const bloodGroupAvailability = {
    'A+': 'available',  // Green border
    'A-': 'limited',    // Yellow border
    'B+': 'available',  // Green border
    'B-': 'not-available',  // Red border
    'AB+': 'available',  // Green border
    'AB-': 'limited',    // Yellow border
    'O+': 'available',  // Green border
    'O-': 'not-available',  // Red border
  };

  const validateForm = () => {
    if (Object.values(formData).some(value => !value)) {
      return 'Please fill out all fields';
    }
    if (formData.phone.length !== 10) {
      return 'Please enter a valid 10-digit phone number';
    }
    if (parseInt(formData.age) < 0 || parseInt(formData.age) > 120) {
      return 'Please enter a valid age between 0 and 120';
    }
    return '';
  };

  const availableBloodTypes = ['A+', 'B+', 'O+']; // Example of available blood types

  const getBloodGroupBorderClass = (group) => {
    return bloodGroupAvailability[group] === 'available'
      ? 'border-2 border-green-500' // Green border for available
      : bloodGroupAvailability[group] === 'limited'
      ? 'border-2 border-yellow-500' // Yellow border for limited
      : 'border-2 border-red-500'; // Red border for unavailable
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      if (/^\d{0,10}$/.test(value)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else if (name === 'age') {
      if (/^\d{0,3}$/.test(value)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setStatus({ ...status, error: validationError });
      return;
    }

    setStatus({ error: '', loading: true, success: false });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({ error: '', loading: false, success: true });
      setFormData({
        patientName: '',
        phone: '',
        bloodGroup: '',
        age: '',
        hospitalAddress: '',
        urgency: 'normal'
      });
    } catch (error) {
      setStatus({
        error: 'Failed to submit request. Please try again.',
        loading: false,
        success: false
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left side - Info and Image */}
          <div className="bg-gray-50 p-8 border-l border-gray-100">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Blood Request Form</h1>
              <p className="text-gray-600">Help save lives by connecting patients with blood donors</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Droplet className="w-5 h-5 text-red-500 mr-2" />
                  Available Blood Types
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(group => (
                    <div
                      key={group}
                      className={`bg-white rounded-lg p-2 text-center shadow-sm ${getBloodGroupBorderClass(group)} border`}
                    >
                      <span className="font-medium text-gray-800">{group}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Priority Levels</h3>
                <div className="space-y-3">
                  {['normal', 'urgent', 'emergency'].map(type => (
                    <div key={type} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                      <span className="text-gray-700 capitalize">{type}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${type === 'normal' ? 'bg-blue-100 text-blue-800' :
                        type === 'urgent' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Verification call will be made to the provided number</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Emergency requests are processed within 1 hour</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Keep patient's blood report ready for verification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <User className="w-4 h-4 mr-2 text-red-500" />
                  Patient Name *
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Enter patient name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Phone className="w-4 h-4 mr-2 text-red-500" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Calendar className="w-4 h-4 mr-2 text-red-500" />
                    Age *
                  </label>
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Age"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Droplet className="w-4 h-4 mr-2 text-red-500" />
                    Blood Group *
                  </label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  >
                    <option value="">Select Blood Group</option>
                    {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(group => (
                      <option
                        key={group}
                        value={group}
                        className={`${getBloodGroupBorderClass(group)}`}
                      >
                        {group}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                    Urgency Level *
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  >
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <Building className="w-4 h-4 mr-2 text-red-500" />
                  Hospital Address *
                </label>
                <textarea
                  name="hospitalAddress"
                  value={formData.hospitalAddress}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Enter complete hospital address"
                />
              </div>

              {status.error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <div className="font-medium">Error</div>
                    <div className="text-sm">{status.error}</div>
                  </div>
                </Alert>
              )}

              {status.success && (
                <Alert variant="success">
                  <Check className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium">Success</div>
                    <div className="text-sm">Blood request submitted successfully</div>
                  </div>
                </Alert>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-medium"
              >
                {status.loading ? 'Submitting...' : 'Submit Blood Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodRequestForm;
