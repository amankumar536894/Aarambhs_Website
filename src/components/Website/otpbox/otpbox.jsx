import React, { useState, useRef, useEffect } from 'react';
import './otpbox.css'

const otpbox = ({ fullOtp, setFullOtp, setPopup }) => {

    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        inputRefs[0].current.focus();
    }, []);

    const handleChange = (e, index) => {
        const value = e.target.value;

        if (value.length > 1) {
            const lastChar = value.charAt(value.length - 1);
            const newOtp = [...otp];
            newOtp[index] = lastChar;
            setOtp(newOtp);
            if (index < otp.length - 1 && lastChar !== '') {
                inputRefs[index + 1].current.focus();
            }
            return;
        }

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== '' && index < otp.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').trim();
        if (pasteData.match(/^\d{4}$/)) {
            const newOtp = pasteData.split('');
            setOtp(newOtp);
            inputRefs[otp.length - 1].current.focus();
        } else {
            alert('Please paste a valid 4-digit number');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join('');
        setFullOtp(enteredOtp);
        console.log('Submitted OTP:', enteredOtp);
        setPopup(false)
    };


    return (
        <>
            <div className="otp-box">
                <i onClick={() => setPopup(false)} className="fa-solid fa-xmark popupcutmark" />
                <p className='otpboxheading'>Enter OTP</p>
                <p className='otpboxtext'>Enter 4-digit code sent to your mobile number.</p>

                <form onSubmit={handleSubmit}>
                    <div className="otp-inputs">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onPaste={index === 0 ? handlePaste : undefined}
                                ref={inputRefs[index]}
                                inputMode="numeric"
                                pattern="[0-9]"
                            />
                        ))}
                    </div>
                    <button className='finalotpbtn' type="submit" disabled={otp.some(d => d === '')}>
                        Verify OTP
                    </button>
                </form>
            </div>
        </>
    )
}

export default otpbox
