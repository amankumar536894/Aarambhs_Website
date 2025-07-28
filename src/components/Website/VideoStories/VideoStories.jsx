import React from 'react'
import './VideoStories.css'
import videoone from "../../../assets/story/videoone.mp4";
import videotwo from "../../../assets/story/videotwo.mp4";
import videothree from "../../../assets/story/videothree.mp4";
import videofour from "../../../assets/story/videofour.mp4";

const VideoStories = () => {
  return (
    <>
      <div className="videostories">
        <p className='testimonialtitle'>Real wedding video stories & BTS moments</p>
        <p className='testimonialdetails'>"Patna to Phera" , "Banaras ki Shaadi"</p>
        <div className="videostoriesbox">
          <video autoPlay muted loop className='videostoryper' src={videoone} />
          <video autoPlay muted loop className='videostoryper' src={videotwo} />
          <video autoPlay muted loop className='videostoryper' src={videothree} />
          <video autoPlay muted loop className='videostoryper' src={videofour} />
        </div>
      </div>
    </>
  )
}

export default VideoStories
