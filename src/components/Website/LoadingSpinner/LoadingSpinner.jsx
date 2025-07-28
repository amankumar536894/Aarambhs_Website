import React from 'react'
import './LoadingSpinner.css'
import logo from "../../../assets/aarambhlogo.png";

const LoadingSpinner = () => {
  return (
    <>
      <div className="loadingspinner">
        <img src={logo} />
      </div>
    </>
  )
}

export default LoadingSpinner
