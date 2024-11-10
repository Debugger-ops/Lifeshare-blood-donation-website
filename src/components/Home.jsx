import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Heart} from 'lucide-react';
import { faClock, faTint, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const [openSteps, setOpenSteps] = useState({});

  const toggleDetails = (step) => {
    setOpenSteps(prev => ({ ...prev, [step]: !prev[step] }));
  };

  return (
    <div>
      <Carousel data-bs-theme="dark" interval={null} controls={true} indicators={true}>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              className="w-100 h-screen opacity-95"
              src="https://www.eternalhospital.com/uploadedfiles/gallery/1718272629_Blogs_1300-x-700_Blood-Donation.jpg"
              alt="Blood Donation"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              className="d-block w-100 h-screen"
              src="https://mmhrc.in/file/wp-content/uploads/2022/03/blood-donation.jpg"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h1 className='font-bold text-6xl my-10'>Our Mission</h1>
            <p className='text-2xl justify-center text-black my-20'>
              We are dedicated to ensuring a steady supply of safe blood for hospitals and medical facilities. Every donation can save up to three lives, and our goal is to encourage individuals to become lifelong donors and advocates for this vital cause.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              className="d-block w-100 h-screen"
              src="https://edmc.in/wp-content/uploads/2023/06/pexels-kirill-dratsevich-12227661-1-1024x682.jpg"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h1 className='font-bold text-6xl my-10'>What We Do</h1>
            <p className='text-2xl my-20'>
              We coordinate blood drives, educate the public about the importance of blood donation, and work closely with hospitals and medical facilities to meet their blood supply needs. Our dedicated team of volunteers and staff strive to make the donation process simple, safe, and rewarding for every donor.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              className="d-block w-100 h-screen"
              src="https://images.thequint.com/thequint-fit%2F2021-05%2F53da6762-3b56-4c9b-ac0a-9d6c6cb1aee6%2FiStock_1181591105.jpg?auto=format%2Ccompress&fmt=webp&width=720&w=1200"
              alt="Fourth slide"
            />
          </div>
          <Carousel.Caption>
            <h1 className='font-bold text-6xl my-10'>Join Us</h1>
            <p className='text-2xl my-20'>
              We invite you to be a part of our mission. Whether you're a first-time donor or a regular contributor, your support is invaluable. Together, we can create a healthier future for everyone. Join us in spreading awareness and encouraging others to donate blood.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="bg-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center border-2 border-red-700 p-16 shadow-md hover:bg-red-100">
              <FontAwesomeIcon icon={faClock} className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Every 2 Seconds</h3>
              <p className="text-gray-600">Someone needs blood</p>
            </div>
            <div className="text-center border-2 border-red-700 p-16 shadow-md hover:bg-red-100">
              <FontAwesomeIcon icon={faTint} className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">1 Donation</h3>
              <p className="text-gray-600">Can save up to 3 lives</p>
            </div>
            <div className="text-center border-2 border-red-700 p-16 shadow-md hover:bg-red-100">
              <FontAwesomeIcon icon={faUsers} className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">38,000</h3>
              <p className="text-gray-600">Daily donations needed</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-10 my-20 text-bold'>
        <span className='font-bold text-4xl'>Blood Donation Process: Step-by-Step Guide</span>
      </div>

      {[
        {
          title: "Step 1: Sign Up",
          image:"https://img.freepik.com/free-vector/appointment-booking-with-smartphone_23-2148564871.jpg?t=st=1730549318~exp=1730552918~hmac=4f5039396864e175af2682499927d0f67c478bd61a2959af4a26db1ed4f6600b&w=740",
          details: [
            "Visit the donation center’s website or call to find a nearby location.",
            "Schedule an appointment or check for walk-in availability."
          ],
        },
        {
          title: "Step 2: Health Screening",
          image:"https://img.freepik.com/free-vector/patient-taking-medical-examination-illustrated_23-2148850285.jpg?t=st=1730549245~exp=1730552845~hmac=82341ce91358d260f7707ff48a3ab7567853e31355e10da94458aa737d7462ac&w=826",
          details: [
            "Fill out a health questionnaire and undergo a brief physical examination.",
            "This includes checking your temperature, blood pressure, hemoglobin levels, and overall health."
          ],
        },
        {
          title: "Step 3: Donate Blood",
          image: "https://img.freepik.com/premium-vector/illustration-person-donating-blood-social-active-youth-life-saving-impact-blood_1140815-3914.jpg?w=740",
          details: [
            "Once cleared, you’ll be led to a donation chair.",
            "A healthcare professional will clean your arm, insert a sterile needle, and collect your blood (usually about a pint).",
            "The process typically takes about 10-15 minutes."
          ],
        },
        {
          title: "Step 4: Post-Donation Care",
          image: "https://img.freepik.com/premium-photo/female-doctor-checks-patient-hospital-bed_14117-759453.jpg?w=1060",
          details: [
            "After donating, rest for a few minutes and enjoy some snacks and drinks provided by the center.",
            "This helps replenish your energy and ensures you're feeling well."
          ],
        },
        {
          title: "Step 5: Save Lives",
          image: "https://img.freepik.com/free-vector/blood-donor-day-poster-with-heart-blood-drop_1017-25357.jpg?t=st=1730545651~exp=1730549251~hmac=e0775dab7256c4416857a5abbef0c450d3a709d46ea0c80aa584f828fada0fbd&w=740",
          details: [
            "Your donation is processed and tested before being distributed to hospitals.",
            "Every donation can help save up to three lives!"
          ],
          
        },
      ].map((step, index) => (
        <div className='bg-red-50 mx-10  p-3 my-8 border-2 rounded-2xl shadow-md' key={index}>
          <div className="mb-4 cursor-pointer" onClick={() => toggleDetails(index)}>
            <div className="flex items-center">
            
              <span className="text-2xl font-semibold">{step.title}</span>
              <span className={`ml-2 transform transition-transform ${openSteps[index] ? 'rotate-180' : ''}`}>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="100px" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000" />
                </svg>
              </span>
            </div>
          </div>
          {openSteps[index] && (
            <div className={`flex items-start ${openSteps[index] ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
              <img src={step.image} alt={step.title} className="w-64 mr-4 " />
              <ul className="ml-4 list-disc text-lg my-16">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
      <footer className='bg-red-600 p-6 '>
      <div className="pt-8 border-t border-red-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-300" />
              <span className="text-red-100">© 2024 Life@Share Donation Center. All rights reserved.</span>
            </div>
            <div className="flex space-x-4 text-red-100">
              <span className="hover:text-white cursor-pointer hover:underline">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer hover:underline">Terms of Service</span>
              <span className="hover:text-white cursor-pointer hover:underline">Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
