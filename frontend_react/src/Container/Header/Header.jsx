import React from "react";
import "./header.scss";
import { motion } from "framer-motion";
import { images } from "../../contants";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duaration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duaration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 10 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Pratik</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Frontend Developer</p>
            <p className="p-text">Web Developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duaration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile" className="profile-img" />
        {/* <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duaration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='overlay_circle'
          className='overlay_circle'
        /> */}
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circle"
      >
        {[images.react, images.redux, images.mu5].map((circle, index) => (
          <div className="circle_cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
