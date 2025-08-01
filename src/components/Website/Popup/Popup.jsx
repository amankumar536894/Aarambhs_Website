import React, { useState, useEffect } from 'react'
import './Popup.css'
import Otpbox from '../otpbox/otpbox'

const Popup = () => {
  const [popup, setPopup] = useState(false)
  const [update, setUpdate] = useState(false)
  const [fullOtp, setFullOtp] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setPopup(true)
    }, 5000)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setUpdate(true)
  }

  return (
    <>

      <div className={`popup ${popup ? 'popupactive' : ''}`}>

        {update ? <Otpbox fullOtp={fullOtp} setFullOtp={setFullOtp} setPopup={setPopup} /> : (
          <form className="popupbox" onSubmit={handleSubmit}>
            <i onClick={() => setPopup(false)} className="fa-solid fa-xmark popupcutmark" />
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 418.135 418.135" xml:space="preserve" className='whatsappsvg'><g><path d="M198.929.242C88.5 5.5 1.356 97.466 1.691 208.02c.102 33.672 8.231 65.454 22.571 93.536L2.245 408.429c-1.191 5.781 4.023 10.843 9.766 9.483l104.723-24.811c26.905 13.402 57.125 21.143 89.108 21.631 112.869 1.724 206.982-87.897 210.5-200.724C420.113 93.065 320.295-5.538 198.929.242zm124.957 321.955c-30.669 30.669-71.446 47.559-114.818 47.559-25.396 0-49.71-5.698-72.269-16.935l-14.584-7.265-64.206 15.212 13.515-65.607-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713 0-43.373 16.89-84.149 47.559-114.819 30.395-30.395 71.837-47.56 114.822-47.56 43.372.001 84.147 16.891 114.816 47.559 30.669 30.669 47.559 71.445 47.56 114.817-.001 42.986-17.166 84.428-47.561 114.822z" fill="#7ad06d" data-original="#7ad06d" ></path><path d="m309.712 252.351-40.169-11.534a14.971 14.971 0 0 0-14.816 3.903l-9.823 10.008c-4.142 4.22-10.427 5.576-15.909 3.358-19.002-7.69-58.974-43.23-69.182-61.007-2.945-5.128-2.458-11.539 1.158-16.218l8.576-11.095a14.97 14.97 0 0 0 1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356-11.211 9.482-24.513 23.891-26.13 39.854-2.851 28.144 9.219 63.622 54.862 106.222 52.73 49.215 94.956 55.717 122.449 49.057 15.594-3.777 28.056-18.919 35.921-31.317 5.362-8.453 1.128-19.679-8.494-22.442z" fill="#7ad06d" data-original="#7ad06d" ></path></g></svg>
            <p className='popuptext'>Enter your mobile number to get updates on WhatsApp</p>
            <input className='popupinput' type="text" placeholder='+91' required />
            <button className='popbtn' type='submit'>Get updates on whatsapp</button>
          </form>
        )}
      </div>
    </>
  )
}

export default Popup
