import React from 'react';
import style from './index.module.scss';
import Rocket from '../../assets/svg/Newsletter/rocket.svg';
import Mail1 from '../../assets/svg/Newsletter/mail1.svg';
import Mail2 from '../../assets/svg/Newsletter/mail2.svg';
import Mail3 from '../../assets/svg/Newsletter/mal3.svg';
import Path from '../../assets/svg/Newsletter/path.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import newsletterLeftCorner from '../../assets/svg/newsletterLeftCorner.svg';

const NewsLetter = () => {
  const [mainContainerRef, mainContainerInView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  const [inputOuterContainerRef, inputOuterContainerInView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <div className={style.newsLetterConatineer}>
      <motion.div
        className={style.newsLetterMainConatineer}
        ref={mainContainerRef}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: mainContainerInView ? 1 : 0, y: mainContainerInView ? 0 : 100 }}
        transition={{ duration: 1 }}
        //
      >
        <div className={style.newsLetter}>
          <div className={style.newsletterLeftCornerSvg}>
            <img src={newsletterLeftCorner} className={style.newsletterLeftCornerSvgImage} alt="" />
          </div>
          <h3>Subscribe to Newsletter</h3>
          <p>Receive weekly news and updates about Imperium</p>
          <motion.div
            className={style.InputOuterContainer}
            ref={inputOuterContainerRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: inputOuterContainerInView ? 1 : 0,
              y: inputOuterContainerInView ? 0 : 100
            }}
            transition={{ duration: 0.75 }}
            //
          >
            <div className={style.InputInnerContainer}>
              <div style={{ width: '100%' }} className={style.InputBox}>
                <input
                  type="text"
                  style={{ width: '100%' }}
                  placeholder="Enter your email address"
                />
              </div>
              <button className={style.subscribeBtn}>Subscribe</button>
            </div>
          </motion.div>
        </div>
        <div className={style.iconsWrapper}>
          <motion.img
            src={Path}
            className={`${style.pathIcon}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: mainContainerInView ? 1 : 0,
              x: mainContainerInView ? 0 : -600,
              y: mainContainerInView ? 0 : 200
            }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={Rocket}
            className={`${style.rocketIcon}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: mainContainerInView ? 1 : 0,
              x: mainContainerInView ? 0 : -600,
              y: mainContainerInView ? 0 : 200
            }}
            transition={{ duration: 1 }}
          />
          <div className={style.mailIconWrapper}>
            <motion.img
              src={Mail1}
              className={`${style.Mail1Icon}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: inputOuterContainerInView ? 1 : 0,
                x: inputOuterContainerInView ? 0 : -100
              }}
              transition={{ duration: 2 }}
            />
            <motion.img
              src={Mail2}
              className={`${style.Mail2Icon}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: inputOuterContainerInView ? 1 : 0,
                x: inputOuterContainerInView ? 0 : -100
              }}
              transition={{ duration: 2.95 }}
            />
            <motion.img
              src={Mail3}
              className={`${style.Mail3Icon}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: inputOuterContainerInView ? 1 : 0,
                x: inputOuterContainerInView ? 0 : -100
              }}
              transition={{ duration: 3.5 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsLetter;
