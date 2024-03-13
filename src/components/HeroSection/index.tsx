import styles from './index.module.scss';
import Button from '../ButtonV2';
import Wave from './Wave';
import { motion } from 'framer-motion';
// import Spline from '@splinetool/react-spline';
const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.1
      }}
      style={{ position: 'relative' }}
      //
    >
      <div className={styles.heroSection}>
        <div className="container">
          <div className={`${styles.description}`}>
            <h1 className={styles.heading}>
              <span style={{ color: '#00D7FB' }}>Better</span>{' '}
              <span style={{ color: '#9FDDDD' }}>crypto</span>{' '}
              <span style={{ color: '#FFAC1A' }}>investing</span>
            </h1>
            <p className={styles.subHeading}>Put your crypto on autopilot</p>
            <p className={styles.desc}>
              for portfolio diversification and wealth optimization
              <br />
              with the only real-time rebalanced crypto index in the world
            </p>
            <Button label="Start Now" />
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0
        }}
        //
      >
        <Wave />
        {/* <Spline scene="https://my.spline.design/start-a6ea5b89ec66a7199fd44cf7da398f82" /> */}
      </div>
    </motion.div>
  );
};

export default HeroSection;
