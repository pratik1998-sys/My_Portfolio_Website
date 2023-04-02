import React from 'react'
import { useState } from 'react'

import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../contants'
import { client } from '../../client'
import './footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const changeHandler = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact).then(() => {
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <div className='app__footer'>
      <h2 className='head-text'>Take a Coffee and chat with Me</h2>
      <div className='app__footer-container'>
        <div className='app__footer-cards'>
          <div className='app__footer-card'>
            <img src={images.email} alt='email' />
            <a href='mailto:pratiksingh260@gmail.com' className='p-text'>
              pratiksingh260@gmail.com
            </a>
          </div>
          <div className='app__footer-card'>
            <img src={images.mobile} alt='mobile' />
            <a href='tel: +91 7488400841'>+91 7488400841</a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className='app__footer-form app__flex'>
            <div className='app__flex'>
              <input
                className='p-text'
                placeholder='Your Name'
                value={name}
                onChange={(event) => changeHandler(event)}
                type='text'
                name='name'
                id='name'
              />
            </div>
            <div className='app__flex'>
              <input
                className='p-text'
                placeholder='Your Email'
                value={email}
                onChange={(event) => changeHandler(event)}
                type='email'
                name='email'
                id='email'
              />
            </div>
            <div className='p-text'>
              <textarea
                type='text'
                placeholder='Your message'
                value={message}
                name='message'
                onChange={(event) => changeHandler(event)}
              />
            </div>
            <button className='p-text' onClick={() => handleSubmit()}>
              {loading ? 'Sending..' : 'Send Message'}
            </button>
          </div>
        ) : (
          <div className='app__footer-thank-msg'>
            <h3 className='head-text'>Thanks for getting in touch!</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app_footer'),
  'contact',
  'app__primarybg'
)
