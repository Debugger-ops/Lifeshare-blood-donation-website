import React, { useState } from 'react';

const FAQ = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      type: "Recipient",
      story: "After my accident, I needed 4 units of blood to survive. Thanks to generous donors, I'm here today to watch my children grow up. Every donor is a hero in my eyes.",
    },
    {
      id: 2,
      name: "David Chen",
      type: "Regular Donor",
      story: "I've been donating blood every 3 months for the past 5 years. It's such a simple way to make a real difference in someone's life. The staff always makes me feel comfortable and appreciated.",
    },
    {
      id: 3,
      name: "Maria Garcia",
      type: "Recipient",
      story: "During my cancer treatment, blood transfusions gave me strength to keep fighting. Each bag of blood was a gift of hope. Now in remission, I encourage everyone to donate.",
    }
  ];

  const allTestimonials = {
    donors: [
      {
        name: "James Wilson",
        quote: "Started donating after my father needed blood. Now it's part of my routine - just like going to the gym!",
      },
      {
        name: "Emily Roberts",
        quote: "The process is so quick and easy. Knowing I'm helping save lives makes it completely worth it.",
      },
      {
        name: "Michael Lee",
        quote: "As someone with O-negative blood, I know how important regular donation is. The staff makes it a great experience.",
      }
    ],
    recipients: [
      {
        name: "Laura Martinez",
        quote: "Blood donors saved my life during childbirth. I'll never take for granted this precious gift.",
      },
      {
        name: "Robert Taylor",
        quote: "After my surgery, I needed multiple transfusions. I'm grateful for every person who took the time to donate.",
      },
      {
        name: "Sophie Anderson",
        quote: "Regular transfusions help me manage my chronic condition. Each donor makes a difference in my life.",
      }
    ]
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Real Stories, Real Impact
          </h1>
          <p className="text-xl mb-4">
            Discover how blood donation changes lives every day
          </p>
        </div>
      </div>

      {/* Featured Testimonial Carousel */}
      <div className="container mx-auto px-4 py-16">
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 px-4 py-2 border border-black bg-transparent text-black rounded-full"
            onClick={prevSlide}
          >
            &#8592;
          </button>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 px-4 py-2 border border-black bg-transparent text-black rounded-full"
            onClick={nextSlide}
          >
            &#8594;
          </button>

          <div className="overflow-hidden px-12">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {featuredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white p-8 mx-4 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-red-600 mb-4">“</div>
                      <p className="text-lg mb-4">{testimonial.story}</p>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {featuredTestimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-red-600' : 'bg-gray-300'}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Tabs */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex space-x-8">
              <button className="text-lg px-8 py-2" onClick={() => setCurrentSlide(0)}>
                Donor Stories
              </button>
              <button className="text-lg px-8 py-2" onClick={() => setCurrentSlide(1)}>
                Recipient Stories
              </button>
            </div>
          </div>

          <div>
            {currentSlide === 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {allTestimonials.donors.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p className="mb-4">{testimonial.quote}</p>
                    <p className="font-bold">{testimonial.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {allTestimonials.recipients.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p className="mb-4">{testimonial.quote}</p>
                    <p className="font-bold">{testimonial.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FAQ;
