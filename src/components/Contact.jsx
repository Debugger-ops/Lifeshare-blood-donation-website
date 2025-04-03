import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, AlertCircle, Send, PhoneCall, Calendar, User, MessageCircle, Check,} from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
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

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
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
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Have questions about blood donation? Want to organize a blood drive?
          We're here to help. Contact us through any of the methods below.
        </p>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-8 rounded-lg">
        <div className="flex items-center">
          <AlertCircle className="text-red-600 w-6 h-6 mr-3" />
          <div>
            <h3 className="text-lg font-semibold text-red-800">Emergency Blood Requirements</h3>
            <p className="text-red-700">
              For urgent blood requirements, call our 24/7 helpline:
              <a href="tel:1-800-RED-CROSS" className="font-bold ml-2 hover:underline">
                1-800-RED-CROSS
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information Cards */}
        <div className="lg:col-span-1 space-y-6">
          {/* General Contact */}
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-900">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <p className="text-slate-600">+91 9832xxxxxx</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <p className="text-slate-600">contact@blooddonation.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Location</p>
                    <p className="text-slate-600">123 Blood Center Drive<br />Medical District<br />City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Hours of Operation</p>
                    <p className="text-slate-600">
                      Monday - Friday: 8:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: 10:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="space-y-4 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Quick Actions</h3>
            <div className="flex flex-col gap-4">
              <button className="flex items-center justify-start gap-3 text-slate-700 hover:text-red-600">
                <PhoneCall className="w-5 h-5 text-red-600" />
                Call for Information
              </button>
              <button className="flex items-center justify-start gap-3 text-slate-700 hover:text-red-600">
                <Send className="w-5 h-5 text-red-600" />
                Send Us a Message
              </button>
              <button className="flex items-center justify-start gap-3 text-slate-700 hover:text-red-600">
                <Calendar className="w-5 h-5 text-red-600" />
                Schedule a Blood Donation
              </button>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="lg:col-span-2">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Send us a Message</h2>
            <p className="text-slate-600 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <div className="flex items-center border border-slate-300 rounded-lg">
                    <User className="w-5 h-5 text-red-600 mx-3" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <div className="flex items-center border border-slate-300 rounded-lg">
                    <Mail className="w-5 h-5 text-red-600 mx-3" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <div className="flex items-center border border-slate-300 rounded-lg">
                    <Phone className="w-5 h-5 text-red-600 mx-3" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9832xxxxxx"
                      className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <div className="flex items-center border border-slate-300 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-red-600 mx-3" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={6}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
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
                    <div className="text-sm">Query submitted successfully</div>
                  </div>
                </Alert>
              )}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >{status.loading ? 'Submitting...' : ''}
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
