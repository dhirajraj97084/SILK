


import React, { useState } from 'react';
import Layout from '../../component/layout/Layout';
import { FaQuoteLeft } from 'react-icons/fa';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: ' 1. What makes Jatin Photography one of the best photographers in Dehradun?',
      answer: 'At Jatin Photography, we pride ourselves on capturing timeless moments with a creative and personalized approach. Our attention to detail and commitment to excellence have earned us a reputation as one of the best photographers in Dehradun.',
    },
    {
      question: '2. What types of photography services do you offer? ',
      answer: 'Jatin Photography offers a wide range of services, including wedding photography, family portraits, couple sessions, event photography, and more. We tailor our services to meet your specific needs and ensure a memorable experience.',
    },
    {
      question: '3. How can I book a session with Jatin Photography?',
      answer: 'To book a session with Jatin Photography, you can contact us through our website or call us directly. We recommend booking in advance to secure your preferred date and time with the best photographers in Dehradun.',
    },
    {
      question: '4. What should I expect during a wedding photography session with Jatin Photography?',
      answer: 'During a wedding photography session, our team will capture every significant moment of your special day, from candid shots to posed portraits. We strive to document the essence of your celebration with stunning, high-quality images.',
    },
    {
      question: '5. How long will it take to receive my photos?',
      answer: ' The delivery time for your photos depends on the type of session and the volume of images. Typically, you can expect to receive your edited photos within 2-4 weeks. Jatin Photography ensures timely delivery without compromising on quality.',
    },
    {
      question: '6. Can I see examples of your previous work?',
      answer: 'Yes, you can view our portfolio on the Jatin Photography website. We showcase a variety of projects, including weddings, portraits, and events, highlighting why we are considered among the best photographers in Dehradun',
    },
    {
      question: '7. Do you offer customized photography packages?',
      answer: 'Absolutely! Jatin Photography offers customized packages to suit your unique requirements and budget. Contact us to discuss your needs, and we will create a personalized package just for you',
    },
    {
      question: '8. What should I wear for my portrait session?',
      answer: 'We recommend wearing comfortable, coordinated outfits that reflect your personal style. For family portraits, consider choosing complementary colors. Our team at Jatin Photography can provide additional guidance based on the location and theme of the shoot.',
    },
    {
      question: '9. How do you ensure the quality of your photos?',
      answer: 'Jatin Photography uses state-of-the-art equipment and professional editing software to ensure the highest quality photos. Our expertise and attention to detail guarantee stunning results that you',
    },
    {
      question: '10. Do you travel for destination weddings and events?',
      answer: 'Yes, Jatin Photography is available for destination weddings and events. We love capturing beautiful moments in new and exciting locations. Contact us to discuss travel arrangements and availability.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout className="div">
      <div className="main">
        <div className="main flex justify-center items-center h-[18em] md:h-[36em] lg:h-[34em] bg-no-repeat bg-cover bg-center bg-fixed bg-[url('https://img.freepik.com/free-vector/faq-concept_23-2148151127.jpg?size=626&ext=jpg&ga=GA1.1.672306854.1705143941&semt=ais_user')]">
          <div className="text">
          </div>
        </div>
      </div>
      <div className="  mt-14 px-4 md:px-8 lg:max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className=" w-full text-left p-4 bg-gray-100 rounded-lg shadow-md focus:outline-none"
            >
              <span className="font-semibold">{faq.question}</span>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
            >
              <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="box md:px-6 px-2 py-5 ">
      <div className="text flex gap-4 mx-4 shadow-md px-3 bg-white py-12 md:px-12">
              <div className="logo">
                <FaQuoteLeft className="text-yellow-600 text-4xl " />
              </div>
              <div className="box1">
                <h1 className="text-xl font-serif text-gray-600 ">
                Amazing experience from start to finish! The photographer's attention to detail and ability to capture genuine moments made our couples session unforgettable. The photos are absolutely gorgeous, and we will treasure them forever.
                </h1>
              
              </div>
            </div>
      </div>
    </Layout>
  );
};

export default Faq;

