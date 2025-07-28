import React, { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis, purus at ultricies congue, justo mauris accumsan turpis, ut eleifend turpis mi eget neque.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis, purus at ultricies congue, justo mauris accumsan turpis, ut eleifend turpis mi eget neque.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis, purus at ultricies congue, justo mauris accumsan turpis, ut eleifend turpis mi eget neque.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis, purus at ultricies congue, justo mauris accumsan turpis, ut eleifend turpis mi eget neque.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faqsection">
      <p className="testimonialtitle">Aapke Sawaalon ke Jawaab</p>
      <p className="testimonialdetails">
        Shaadi ke sawaal sabke hote hain- humare paas unka jawab hai.
      </p>
      <div className="faqmainbox">
        {faqs.map((faq, index) => (
          <div className="perfaqbox" key={index}>
            <div className="faqquestion" onClick={() => toggleFAQ(index)}>
              <p className={activeIndex === index ? "active-question" : ""}>
                {faq.question}
              </p>
              <i
                className={`fa ${
                  activeIndex === index ? "fa-minus" : "fa-plus"
                }`}
              ></i>
            </div>
            {activeIndex === index && (
              <div className="faqanswer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
