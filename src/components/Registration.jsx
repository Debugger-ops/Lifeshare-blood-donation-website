import React, { useState } from 'react';
import { Heart, Droplet, Users, Phone, Mail, MapPin, User, Calendar, FileText, AlertCircle, Check } from 'lucide-react';

const BloodDonationRegistration = () => {
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
  }
  
  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const modTypes = ['B-', 'AB-', 'A-'];
  const urgentTypes = ['A+', 'O-'];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    gender: '',
    dob: '',
    bloodGroup: '',
    description: ''
  });

  const [file, setFile] = useState(null);
  const [agreed, setAgreed] = useState(false);
  
  const [status, setStatus] = useState({
    error: '',
    success: false,
    loading: false
  });

  const validateForm = () => {
    if (Object.values(formData).some(value => !value)) {
      return 'Please fill out all fields';
    }
    if (formData.phone.length !== 10) {
      return 'Please enter a valid 10-digit phone number';
    }
    const age = new Date().getFullYear() - new Date(formData.dob).getFullYear();
    if (age < 18 || age > 120) {
      return 'You must be between 18 and 120 years old to donate blood';
    }
    if (!file) {
      return 'Please upload a blood report';
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setStatus({ error: '', loading: false, success: true });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        gender: '',
        dob: '',
        bloodGroup: '',
        description: ''
      });
      setFile(null);
      setAgreed(false);  // Uncheck terms
    } catch (error) {
      setStatus({
        error: 'Failed to submit request. Please try again.',
        loading: false,
        success: false
      });
    }
  };

  // Get border class for blood group
  const getBloodGroupBorderClass = (group) => {
    if (urgentTypes.includes(group)) return 'border-red-500';
    if (modTypes.includes(group)) return 'border-yellow-500';
    return 'border-green-500';
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Information Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-red-500" />
            <h1 className="text-3xl sm:text-4xl font-bold">Why Donate Blood?</h1>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl">
                Blood donation is a simple yet powerful act that can save lives. Every day, patients in hospitals
                rely on generous donors like you for critical medical care.
              </p>
              <p className="text-lg sm:text-xl">
                Your single donation can help save up to three lives. Join our community of life-savers
                and make a real difference in someone's life.
              </p>
            </div>

            <div className="border-2 p-3 shadow-md rounded-md">
              <h2 className="font-bold text-xl sm:text-2xl">Current Blood Type Status</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
                {bloodTypes.map(type => {
                  const isCritical = urgentTypes.includes(type);
                  const isModType = modTypes.includes(type);

                  return (
                    <div
                      className={`border-2 p-4 rounded-3xl shadow-md ${isCritical ? 'border-red-500' : isModType ? 'border-yellow-500' : 'border-green-500'}`}
                      key={type}
                    >
                      <div className="font-bold text-lg">{type}</div>
                      <div className={isCritical ? 'text-red-600 font-semibold' : isModType ? 'text-yellow-600 font-semibold' : 'text-green-600'}>
                        {isCritical ? 'Critically Needed' : isModType ? 'Moderately Needed' : 'Standard Need'}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Registration Form</h2>
            <p className="text-gray-600">Register to become a blood donor</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {status.error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md">
                {status.error}
              </div>
            )}

            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <User className="inline-block w-5 h-5 mr-2 text-red-500" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <Mail className="inline-block w-5 h-5 mr-2 text-red-500" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <Phone className="inline-block w-5 h-5 mr-2 text-red-500" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                    className="h-5 w-5 text-red-500 focus:ring-red-500"
                  />
                  <label htmlFor="male" className="ml-2 text-sm text-gray-600">Male</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                    className="h-5 w-5 text-red-500 focus:ring-red-500"
                  />
                  <label htmlFor="female" className="ml-2 text-sm text-gray-600">Female</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="Other"
                    checked={formData.gender === 'Other'}
                    onChange={handleChange}
                    className="h-5 w-5 text-red-500 focus:ring-red-500"
                  />
                  <label htmlFor="other" className="ml-2 text-sm text-gray-600">Other</label>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <MapPin className="inline-block w-5 h-5 mr-2 text-red-500" />
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 h-24"
                placeholder="Enter your full address"
              />
            </div>

            {/* City, State, Postal Code */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <MapPin className="inline-block w-5 h-5 mr-2 text-red-500" />
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <MapPin className="inline-block w-5 h-5 mr-2 text-red-500" />
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <MapPin className="inline-block w-5 h-5 mr-2 text-red-500" />
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Date of Birth & Blood Group */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <Calendar className="inline-block w-5 h-5 mr-2 text-red-500" />
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

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
                  {bloodTypes.map(group => (
                    <option
                      key={group}
                      value={group}
                      className={getBloodGroupBorderClass(group)}
                    >
                      {group}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <FileText className="inline-block w-5 h-5 mr-2 text-red-500" />
                Blood Report
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                What motivates you to donate blood?
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 h-24"
                placeholder="Share your story..."
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="text-red-500 focus:ring-red-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the terms and conditions and confirm that all provided information is accurate
              </label>
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
                    <div className="text-sm">Blood Registration submitted successfully</div>
                  </div>
                </Alert>
              )}

            <button
              type="submit"
              disabled={status.loading}
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
            >{status.loading ? 'Submitting...' : ''}
              <Heart className="inline-block w-5 h-5 mr-2" />
              Register as Donor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BloodDonationRegistration;
