import React from 'react';
import shuftipro from '../../assets/svg/partners/Frame (1).svg';
import zfortGroup from '../../assets/svg/partners/zfortLogo.svg';
import LEWBEN from '../../assets/svg/partners/Frame.svg';
import Nordgain from '../../assets/svg/partners/nordgain-logo.svg';
import voxility from '../../assets/svg/partners/voxility_logo.svg';
import Intech from '../../assets/svg/partners/inntech_logo.svg';
import style from './index.module.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.2 // Trigger animation when 50% of the component is visible
  });
  return (
    <>
      <div className={style.partnerConatiner}>
        <div className={style.leftConatiner}>
          <div className={style.partnerHeading}>
            <h3>Executive Partners</h3>
          </div>
          <div className={style.firstGroupPartner}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 1 }}
              className={style.logoContainer}
              //
            >
              <div className={style.image}>
                <img src={shuftipro} loading="lazy" alt="logo" />
              </div>
              <p>KYC & KYB/AML</p>
            </motion.div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 1 }}
              className={style.logoContainer}
              //
            >
              <div className={style.image}>
                <img src={zfortGroup} loading="lazy" alt="logo" />
              </div>
              <p>SOFTWARE DEVELOPMENT</p>
            </motion.div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 1 }}
              className={style.logoContainer}
              //
            >
              <div className={style.image}>
                <img src={LEWBEN} loading="lazy" alt="logo" />
              </div>
              <p>LEGAL SERVICE</p>
            </motion.div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 1 }}
              className={style.logoContainer}
              //
            >
              <div className={style.image}>
                <img src={Nordgain} loading="lazy" alt="logo" />
              </div>
              <p>Accounting</p>
            </motion.div>
          </div>
        </div>
        <div className={style.upper} />
        <div className={style.lower} />
        <hr className={style.dottedLine} />
        <div className={style.rightConatiner}>
          <div className={style.partnerHeading}>
            <h3>Partners</h3>
          </div>
          <div className={style.secondGroupPartner}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 1 }}
              className={style.logoContainer}
              //
            >
              <div className={style.image}>
                <img src={voxility} loading="lazy" />
              </div>
              <p>Infrastructure</p>
            </motion.div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 1 }}
              className={style.logoContainer}
              //
            >
              <div className={style.image}>
                <img src={Intech} loading="lazy" />
              </div>
              <p>Web Development</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
