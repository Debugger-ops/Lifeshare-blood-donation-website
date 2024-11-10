import React, { useState } from 'react';
import axios from 'axios';
import { Heart, Droplet, Users } from 'lucide-react';
const BloodDonationRegistration = () => {

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const modTypes = ['B-', 'AB-', 'A-']
  const urgentTypes = ['A+', 'O-'];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
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
  const [error, setError] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate all fields
    if (Object.values(formData).some(value => !value) || !file || !agreed) {
      setError('Please fill out all fields and agree to the terms.');
      return;
    }

    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });
    submitData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        // Reset form
        setFormData({
          name: '',
          email: '',
          password: '',
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
        setAgreed(false);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Information Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <h1 className="text-4xl font-bold">Why Donate Blood?</h1>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <p className="text-lg">
                Blood donation is a simple yet powerful act that can save lives. Every day, patients in hospitals
                rely on generous donors like you for critical medical care.
              </p>
              <p className="text-lg">
                Your single donation can help save up to three lives. Join our community of life-savers
                and make a real difference in someone's life.
              </p>
              <div className='flex gap-10 justify-between mx=5 py-10'>
                <div className='border-2 p-3  hover:bg-red-50 shadow-md rounded-lg'>
                  <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="flex justify-center text-3xl font-bold text-gray-900 mb-1">50,000+</div>
                  <div className="text-gray-600">Lives Saved Last Year</div>
                </div>
                <div className='border-2 p-4 hover:bg-red-50 shadow-md rounded-lg'>
                  <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="flex justify-center text-3xl font-bold text-gray-900 mb-1">10,000+</div>
                  <div className="text-gray-600">Regular Donors</div>
                </div>
                <div className='border-2 p-3  hover:bg-red-50 shadow-md rounded-lg'>
                  <Droplet className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="flex justify-center text-3xl font-bold text-gray-900 mb-1">24/7</div>
                  <div className="text-gray-600">Emergency Response</div>
                </div>
              </div>
            </div>

            <div className='border-2 p-3 shadow-md rounded-md'>
              <h2 className='font-bold text-4xl'>Current Blood Type Status</h2>
              <div className="grid grid-cols-4 md:grid-cols-2 gap-4 p-10 ">
                {bloodTypes.map(type => {
                  const isCritical = urgentTypes.includes(type);
                  const isModType = modTypes.includes(type); 

                  return (
                    <div
                      className={`border-2 p-10 rounded-3xl shadow-md ${isCritical ? 'border-red-500' : isModType ? 'border-yellow-500' : 'border-green-500'
                        }`} 
                      key={type}
                    >
                      <div className='font-bold text-lg'>{type}</div>
                      <div className={isCritical ? 'text-red-600 font-semibold' : isModType ? 'text-yellow-600 font-semibold' : 'text-green-600'}>
                        {isCritical ? 'Critically Need' : isModType ? 'Moderately Need' : 'Standard Need'} {/* Change text color */}
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
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
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

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
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
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  if (/^\d*$/.test(e.target.value)) {
                    handleChange(e);
                  }
                }}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
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

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
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

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <div className="flex space-x-4">
                {['Male', 'Female', 'Other'].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="gender"
                      value={option.toLowerCase()}
                      checked={formData.gender === option.toLowerCase()}
                      onChange={handleChange}
                      className="text-red-500 focus:ring-red-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
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

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Blood Group
                </label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Blood Group</option>
                  {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((group) => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Blood Report
              </label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept=".pdf,.doc,.docx,.txt"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

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

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
            >
              Register as Donor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BloodDonationRegistration;