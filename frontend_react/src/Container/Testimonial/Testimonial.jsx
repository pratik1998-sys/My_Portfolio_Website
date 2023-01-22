import React, { useEffect, useState } from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './testimonial.scss'

import { motion } from 'framer-motion'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'

const Testimonial = () => {
  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const query = '*[_type == "testimonials"]'
    const brandsquery = '*[_type == "brands"]'

    client.fetch(brandsquery).then((data) => setBrands(data))
    client.fetch(query).then((data) => {
      setTestimonials(data)
    })
  }, [])

  const test = testimonials[currentIndex]

  const handleCurrentIndex = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className='app__testimonial'>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(test.imageurl)} alt='testimonial' />
            <div className='app__testimonial-item-content'>
              <p>{test.feedback}</p>
            </div>
            <div>
              <h4 className='bold-text'>{test.name}</h4>
              <h5 className='p-text'>{test.company}</h5>
            </div>
          </div>
          <div className='app__testimonial-btns app__flex'>
            <div
              className='app__flex'
              onClick={() =>
                handleCurrentIndex(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className='app__flex'
              onClick={() =>
                handleCurrentIndex(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: [0.5], type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app_testimonial'),
  'testimonial',
  'app__primarybg'
)
