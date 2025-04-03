# LifeShare - Blood Donation Platform

A user-friendly and interactive blood donation platform designed to connect donors with recipients and inspire more people to become blood donors. Built with modern web technologies and focused on creating social impact.

![LifeShare Platform Preview](/api/placeholder/800/400)

## 🎯 Mission

To save lives by making blood donation more accessible and creating awareness about its importance. Our platform aims to:
- Connect blood donors with those in need
- Educate people about blood donation
- Share inspiring stories from donors and recipients
- Make the blood donation process more transparent and efficient

## ✨ Features

### 1. Homepage
- Interactive blood type matcher
- Real-time emergency blood requests
- Success stories carousel
- Blood donation facts and statistics
- Upcoming blood donation camps/events
- Quick registration buttons for donors

### 2. Blood Donation Registration
- Simple and intuitive registration process
- Health eligibility questionnaire
- Donation history tracking
- Appointment scheduling system
- Digital donor card generation
- Donation reminders
- Personalized donor dashboard

### 3. Blood Request System
- Emergency request submission
- Hospital verification system
- Real-time status tracking
- Automated donor matching
- SMS/Email notification system
- Request history
- Priority handling for emergencies

### 4. Testimonials
- Success story submissions
- Impact statistics
- Donor recognition wall

### 5. Contact System
- 24/7 emergency helpline
- Hospital directory
- Blood bank locations
- FAQ section
- Live chat support
- Feedback system

## 🛠️ Technical Stack

### Frontend
- React.js
- Tailwind CSS
- Material-UI components
- React Router for navigation
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB database


## 📱 Responsive Design

### Desktop (> 1024px)
- Full-featured dashboard
- Interactive maps
- Detailed statistics
- Advanced search options

### Tablet (768px - 1024px)
- Optimized navigation
- Touch-friendly interfaces
- Collapsible sections
- Responsive tables

### Mobile (< 768px)
- Mobile-first approach
- Bottom navigation
- Swipeable cards
- Click-to-call buttons
- Emergency quick actions

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lifeshare.git
cd lifeshare
```

2. Install dependencies:
```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

3. Set up environment variables:
```env
# Backend (.env)
MONGODB_URI=your_mongodb_uri
```

4. Run the application:
```bash
# Frontend
npm start

# Backend
npm run dev
```

## 📁 Project Structure
```
lifeshare.health/
├── public/                        # Public assets accessible in the browser
│   ├── index.html                 # Main HTML file for React
│   └── favicon.ico                 # Favicon for the website
├── src/                           # React application source code
│   ├── components/                # Reusable UI components
│   │   ├── Registration.jsx       # User registration form
│   │   ├── Contact.jsx            # Contact page component
│   │   ├── FAQ.jsx                # Frequently Asked Questions
│   │   ├── Home.jsx               # Home page
│   │   ├── Home.css               # Home page styles
│   │   ├── Navbar.jsx             # Navigation bar
│   │   └── BloodRequest.jsx            # About us page
│   ├── services/                  # API service functions
│   │   └── api.js                 # Handles API calls
│   ├── App.jsx                    # Main React component
│   ├── index.js                   # React entry point
│   └── index.css                  # Global CSS styles
├── server/                        # Backend (Express.js & MongoDB)
│   ├── config/                    # Configuration files
│   │   └── db.js                  # MongoDB connection setup
│   ├── controllers/               # Business logic
│   │   ├── contactController.js   # Handles contact form logic
│   │   ├── registrationController.js # Handles user registration logic
│   │   └── bloodRequestController.js      # Handles authentication logic
│   ├── models/                    # Mongoose schema definitions
│   │   ├── Contact.js             # Contact form schema
│   │   ├── User.js                # User schema
│   │   └── BloodRequest.js        # Blood request schema
│   ├── routes/                    # API routes
│   │   ├── contactRoutes.js       # Contact-related routes
│   │   ├── registrationRoutes.js  # Registration-related routes
│   │   └── bloodRequestRoutes.js  # Blood request routes
│   ├── middleware/                # Middleware functions
│   │   └── update.js      # Authentication middleware
│   ├── .env                       # Environment variables
│   ├── package.json               # Backend dependencies
│   ├── server.js                  # Express server entry point
│   ├── README.md                   # Backend documentation
└── .gitignore                      # Files to ignore in Git

├── package.json                   # Frontend dependencies
└── README.md                       # Project documentation

```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Documentation

Detailed documentation is available in the `/docs` folder:
- API Documentation
- User Guides
- System Architecture
- Security Protocols
- Contribution Guidelines

## 🌟 Social Impact Metrics

Track our platform's impact:
- Lives saved through donations
- Active donors
- Successful matches
- Emergency requests fulfilled
- Response time statistics
- Community growth


## 📞 Support

- 24/7 Emergency Hotline: +1-XXX-XXX-XXXX
- Email: support@lifeshare.com
- Live Chat: Available 9 AM - 6 PM
- Twitter: @LifeShareSupport

