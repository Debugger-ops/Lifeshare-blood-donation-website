import React, { useState } from 'react';

const FAQ = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // For the carousel
  const [activeTab, setActiveTab] = useState('donors'); // For the tabs (donors or recipients)

  const featuredTestimonials = [
    {
      id: 1,
      name: "Laura (Recipient) & James (Donor)",
      story: {
        recipient: "I was diagnosed with a rare blood disorder that required regular transfusions. Without the blood donations from strangers, I wouldn’t have survived to see my daughter graduate or to experience the simple joys of life again. The day I received my last transfusion, I was able to feel like myself once more. I can’t express how grateful I am to the people who donate selflessly. To them, I am forever thankful.",
        donor: "I met Laura during a blood drive at my work. She came up to thank us for donating, and hearing her story really hit me. I’ve donated regularly for years, but I never realized the full impact of my donations until I saw how someone like Laura could benefit from them. It feels so good to know that I’m playing a small part in helping people like her live healthier, longer lives."
      }
    },
    {
      id: 2,
      name: "Tina (Recipient) & Mark (Donor)",
      story: {
        recipient: "I was in a terrible car accident and lost a lot of blood. The doctors told me I would have died if it weren't for the transfusions I received. I will always remember that day when I woke up and felt stronger, thanks to the blood donors who helped me. Now that I’m recovered, I’ve started donating blood myself to pay it forward, hoping my donation can help someone the way it helped me.",
        donor: "I’ve donated blood a few times, but after hearing Tina’s story at a local donor event, I realized just how much of an impact a single donation can make. It wasn’t until I heard firsthand how crucial my donation could be that I felt even more motivated to donate regularly. Knowing I could help save someone’s life makes the process feel so much more rewarding."
      }
    },
    {
      id: 3,
      name: "Tom (Recipient) & Emily (Donor)",
      story: {
        recipient: "As a cancer survivor, I’ve relied on blood transfusions throughout my treatment. The kindness of strangers who donate blood kept me alive during the darkest moments. I’ve met many donors who have made a direct difference in my life, and I’m always grateful to them. One day, I hope to meet my donor in person and personally thank them for the gift of life they gave me.",
        donor: "I’ve always given blood, but when I met Tom at a cancer survivor event, I realized how important my regular donations are. He spoke about his journey and how blood donors helped him through chemotherapy. It made me even more committed to donating. Knowing that my blood could help someone like Tom get another chance at life is incredibly fulfilling."
      }
    },
    {
      id: 4,
      name: "Rachel (Recipient) & David (Donor)",
      story: {
        recipient: "I had no idea how fragile life could be until I was diagnosed with sickle cell anemia. There were days when I couldn’t walk, and the pain was unbearable. But blood transfusions gave me a new lease on life. I now live a more active, fulfilling life thanks to donors who selflessly give their blood. I owe my recovery to people like them, and it’s my goal to raise awareness about the need for more donors.",
        donor: "I’ve always been aware of the need for blood, but Rachel’s story opened my eyes to just how essential it is for people with conditions like sickle cell anemia. Her strength is inspiring. Now, every time I donate, I think about people like Rachel, who rely on blood donations to keep going. It’s such a simple act that can have an incredibly powerful impact."
      }
    },
    {
      id: 5,
      name: "Anna (Recipient) & Chris (Donor)",
      story: {
        recipient: "I was diagnosed with a severe form of anemia and was on the brink of needing a life-saving transfusion. Thanks to the generosity of blood donors, I was able to get the treatment I needed just in time. I’m so thankful for those who give their blood. They don’t know me, yet they saved my life. I can’t imagine where I’d be without them.",
        donor: "When I donated blood last year, I had no idea that my donation would go to someone like Anna. After hearing her story, I felt so proud to be part of the chain of people who helped save her life. Blood donation is easy, but it makes such a huge difference. I’ll never stop donating. It’s one of the most important things I can do to help others."
      }
    }
  ];

  const allTestimonials = {
    donors: [
      {
        name: "John, a first-time donor",
        quote: "I’ve always heard about the importance of blood donation, but it wasn’t until a close friend needed a transfusion after a car accident that I truly understood how vital it is. The process was quick, and the staff made me feel comfortable the entire time. Knowing that something so simple can help save a life really motivates me to keep donating. I’m already planning my next donation!"
      },
      {
        name: "Maria, a regular blood donor",
        quote: "I donate blood every few months, and each time I walk away feeling like I’ve done something meaningful. It’s amazing to think that just a single donation can help save up to three lives. Whether it's for someone undergoing surgery or a child with a blood disorder, I know my blood is making a difference. It’s the least I can do to help others."
      },
      {
        name: "David, a volunteer at a blood drive",
        quote: "Being a volunteer at local blood drives has given me a unique perspective on the impact blood donation has. I’ve seen people come in from all walks of life, and they all have the same goal — to help others. It’s inspiring to witness how the community comes together to ensure that hospitals have the resources they need. I encourage everyone to donate, even if it’s just once. You never know whose life you could change."
      }
    ],
    recipients: [
      {
        name: "Sophie (Cancer Patient)",
        quote: "I was undergoing chemotherapy for breast cancer when my body couldn’t produce enough blood. Without the blood transfusions I received, I would not have been able to finish my treatment. The kindness of strangers who donate blood gave me a second chance at life. I will always be grateful to those who donate—your gift helps people like me survive and thrive."
      },
      {
        name: "Michael (Accident Survivor)",
        quote: "After a serious motorcycle accident, I lost a lot of blood and needed multiple transfusions. I was unconscious for days, and when I woke up, the doctors told me that the blood I received had saved my life. I will never be able to thank the people who donated enough, but I can live my life in a way that honors their generosity."
      },
      {
        name: "Emma (Sickle Cell Anemia)",
        quote: "Living with sickle cell anemia means I need regular blood transfusions to manage my condition. It’s hard to explain how much this impacts my life, but I know I wouldn’t be here without the donors who make those transfusions possible. Every donation is a lifeline for people like me, and I’m forever grateful to those who give so freely.8"
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Real Stories, Real Impact</h1>
          <p className="text-xl sm:text-2xl mb-4">Discover how blood donation changes lives every day</p>
        </div>
      </div>

      {/* Featured Testimonial Carousel */}
      <div className="container mx-auto px-4 py-16">
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 px-4 py-2 border border-black bg-transparent text-black rounded-full sm:px-6 sm:py-3"
            onClick={prevSlide}
          >
            &#8592;
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 px-4 py-2 border border-black bg-transparent text-black rounded-full sm:px-6 sm:py-3"
            onClick={nextSlide}
          >
            &#8594;
          </button>

          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {featuredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white p-8 mx-4 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-red-600 mb-4">“</div>
                      <p className="text-lg sm:text-xl mb-4">{testimonial.story.recipient}</p>
                      <p className="text-lg sm:text-xl mb-4">{testimonial.story.donor}</p>
                      <h3 className="text-xl sm:text-2xl font-bold">{testimonial.name}</h3>
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
              <button
                className={`text-lg sm:text-xl px-8 py-2 ${activeTab === 'donors' ? 'border-b-2 border-red-500 rounded-full' : 'hover:text-red-500'}`}
                onClick={() => setActiveTab('donors')}
              >
                Donor Stories
              </button>
              <button
                className={`text-lg sm:text-xl px-8 py-2 ${activeTab === 'recipients' ? 'border-b-2 border-red-500 rounded-full' : 'hover:text-red-500'}`}
                onClick={() => setActiveTab('recipients')}
              >
                Recipient Stories
              </button>
            </div>
          </div>

          <div>
            {activeTab === 'donors' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {allTestimonials.donors.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p className="mb-4 text-sm sm:text-base">{testimonial.quote}</p>
                    <p className="font-bold">{testimonial.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {allTestimonials.recipients.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p className="mb-4 text-sm sm:text-base">{testimonial.quote}</p>
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
