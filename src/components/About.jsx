import React from 'react'
import about from '../images/about.svg'

const About = () => {
  return (
    <>
    <div className="container mx-auto py-6">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-bold font-sans">About</p>
          <img src={about} alt="" />
        </div>
      </div>
    </>
  )
}

export default About