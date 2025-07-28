import React, { useState } from "react";
import "./SecondFaq.css";
import secondfaq from "../../../assets/secondfaq.webp";

const SecondFaq = () => {
    const [secondopen, setSecondopen] = useState("one");

    const secondfaqdata = [
        {
            id: 'one',
            title: "What payment methods do you accept for online purchases?",
            description:
                "We accept all major credit cards, PayPal, and Apple Pay for your convenience. Yes once your order ships, you ll receive a tracking number via email. Yes, we have a rewards program where you can earn points for every purchase",
        },
        {
            id: 'two',
            title: "What payment methods do you accept for online purchases?",
            description:
                "We accept all major credit cards, PayPal, and Apple Pay for your convenience. Yes once your order ships, you ll receive a tracking number via email. Yes, we have a rewards program where you can earn points for every purchase",
        },
        {
            id: 'three',
            title: "What payment methods do you accept for online purchases?",
            description:
                "We accept all major credit cards, PayPal, and Apple Pay for your convenience. Yes once your order ships, you ll receive a tracking number via email. Yes, we have a rewards program where you can earn points for every purchase",
        },
        {
            id: 'four',
            title: "What payment methods do you accept for online purchases?",
            description:
                "We accept all major credit cards, PayPal, and Apple Pay for your convenience. Yes once your order ships, you ll receive a tracking number via email. Yes, we have a rewards program where you can earn points for every purchase",
        },
        {
            id: 'five',
            title: "What payment methods do you accept for online purchases?",
            description:
                "We accept all major credit cards, PayPal, and Apple Pay for your convenience. Yes once your order ships, you ll receive a tracking number via email. Yes, we have a rewards program where you can earn points for every purchase",
        },
        {
            id: 'six',
            title: "What payment methods do you accept for online purchases?",
            description:
                "We accept all major credit cards, PayPal, and Apple Pay for your convenience. Yes once your order ships, you ll receive a tracking number via email. Yes, we have a rewards program where you can earn points for every purchase",
        },
        {
            id: 'seven',
            title: "What payment methods do you accept for online purchases?",
            description:
                "We accept all major credit cards, PayPal, and Apple Pay for your convenience. Yes once your order ships, you ll receive a tracking number via email. Yes, we have a rewards program where you can earn points for every purchase",
        },
        {
            id: 'eight',
            title: "What payment methods do you accept for online purchases?",
            description:
                "We accept all major credit cards, PayPal, and Apple Pay for your convenience. Yes once your order ships, you ll receive a tracking number via email. Yes, we have a rewards program where you can earn points for every purchase",
        },
       
    ];

    return (
        <>
            <div className="secondfaq">
                <p className="venuesectiontitle secondtitle">
                    Aapke Sawaalon ke Jawaab
                </p>
                <p className="venuesectiondesc">
                    Shaadi ke sawaal sabke hote hain – humare paas unka jawab hai.
                </p>
                <div className="secondfaw-overall">
                    <div className="secondfaq-imgbox">
                        <img src={secondfaq} />
                    </div>
                    <div className="secondfaq-faq">
                        {secondfaqdata.map((item) => {
                            return (
                                <div className="seconffaq-each">
                                    <div className="secondfaq-eachtitle" onClick={() => { secondopen === item.id ? setSecondopen('') : setSecondopen(item.id) }} >
                                        <p>
                                            {item.title}
                                        </p>
                                        <i className={`fa-solid ${secondopen === (item.id) ? "fa-plus" : 'fa-minus'}`} />
                                    </div>
                                    <p className={`secondfaq-eachdesc ${secondopen === (item.id) ? "fullheight" : ""}`} > 
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SecondFaq;
