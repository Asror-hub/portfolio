import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`card overflow-hidden transition-all duration-300 ${
            activeIndex === index ? 'scale-105' : 'scale-100'
          }`}
        >
          <button
            className="w-full py-2 px-4 flex items-center justify-between"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <h3 className="text-lg font-semibold text-neutral-100 text-left">{faq.question}</h3>
            <FaChevronDown
              className={`text-primary-500 transition-transform duration-300 ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="p-4 pt-0">
              <p className="text-sm text-neutral-300 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ; 