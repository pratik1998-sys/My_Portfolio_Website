import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://www.linkedin.com/in/pratik-kumar-singh-1b76801a7'>
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href='https://twitter.com/pratiksingh260'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/pratiksingh1998/'>
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
