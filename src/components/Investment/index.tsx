import { useEffect, useState } from 'react';
import Button from '../Button';
import Button2 from '../ButtonV2';
import styles from './index.module.scss';
// import sectoralImage from '../../assets/svg/sectoral 1.svg';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
// import Spline from '@splinetool/react-spline';

interface InvestmentData {
  title: string | null;
  desc: string | null;
  roi: {
    '1Yr': number | null;
    '3Yr': number | null;
  } | null;
}

const Investment = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [investmentData, setInvestmentData] = useState<InvestmentData[] | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation every time it comes into view
    threshold: 0.5 // Trigger animation when 50% of the component is visible
  });
  useEffect(() => {
    setInvestmentData([
      {
        title: 'Invest in top crypto sectors',
        desc: 'Handpicked collection of assets for enthusiasts in top field',
        roi: {
          '1Yr': 320.4,
          '3Yr': 21800.4
        }
      },
      {
        title: 'Invest in crypto other than Bitcoins',
        desc: 'Look we have something big for you',
        roi: {
          '1Yr': 22.4,
          '3Yr': -59.4
        }
      },
      {
        title: 'Invest in specific crypto sectors',
        desc: 'Handpicked collection of assets for enthusiasts in particular field',
        roi: {
          '1Yr': 32.4,
          '3Yr': 2168.4
        }
      },
      {
        title: 'Invest in tailor made Indices',
        desc: 'Handpicked collection of tailor made indices',
        roi: {
          '1Yr': -29.4,
          '3Yr': 551.4
        }
      }
    ]);
  }, []);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div className={`${styles.investWrapper} container`}>
      <h1 className={styles.heading}>
        <span style={{ color: '#00D7FB' }}>Invest.</span>{' '}
        <span style={{ color: '#9FDDDD' }}>Earn.</span>{' '}
        <span style={{ color: '#FFAC1A' }}>Secure.</span>
      </h1>
      <p className={styles.desc}>
        Take advantage of bull markets and hedge yourself during bear market
        <br /> with a suite of automated crypto indices
      </p>
      <div className={styles.tabs}>
        {/* <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, scale: 0.2 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 1 }} */}
        <div
          className={styles.buttons}
          //
        >
          <Button
            label="Top Crypto"
            className={`${styles.additionalClass} ${activeTab === 0 ? styles.additionalClassActive : ''}`}
            onClick={() => {
              handleTabClick(0);
            }}
          />
          <Button
            label="Top Alts"
            className={`${styles.additionalClass} ${activeTab === 1 ? styles.additionalClassActive : ''}`}
            onClick={() => {
              handleTabClick(1);
            }}
          />
          <Button
            label="Sectoral Indices"
            className={`${styles.additionalClass} ${activeTab === 2 ? styles.additionalClassActive : ''}`}
            onClick={() => {
              handleTabClick(2);
            }}
          />
          <Button
            label="Tailor-Made Indices"
            className={`${styles.additionalClass} ${activeTab === 3 ? styles.additionalClassActive : ''}`}
            onClick={() => {
              handleTabClick(3);
            }}
          />
          {/* </motion.div> */}
        </div>
        <div className={styles.tabContent}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, scale: 0.2 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 1 }}
            // <div
            className={styles.image}
            //
          >
            {/* <img className={styles.img} src={sectoralImage} alt="Sectoral Image" /> */}
            {/* <Spline scene="https://prod.spline.design/DNiTTOBK1nG8l7S2/scene.splinecode" /> */}
            {/* </div> */}
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1 }}
            // <div
            className={styles.content}
            //
          >
            {investmentData ? (
              <>
                <p className={styles.contentHeading}>{investmentData[activeTab].title}</p>
                <p className={styles.contentSubHeading}>{investmentData[activeTab].desc}</p>
                <p>
                  <span className={styles.details}>ROI</span> &nbsp;{' '}
                  <span className={styles.details}>1Yr</span>{' '}
                  <span className={`${styles.details} ${styles.colored}`}>
                    {investmentData[activeTab].roi?.['1Yr']}
                    <span style={{ fontWeight: '300' }}>%</span>
                  </span>{' '}
                  &nbsp; <span className={styles.details}>3Yr</span>{' '}
                  <span className={`${styles.details} ${styles.colored}`}>
                    {investmentData[activeTab].roi?.['3Yr']}
                    <span style={{ fontWeight: '300' }}>%</span>
                  </span>
                </p>
                <div className={styles.btn}>
                  <Button2 label="Invest Now" />
                  <Button label="Learn More" />
                </div>
              </>
            ) : (
              <>
                <p>No data found.</p>
              </>
            )}
          </motion.div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Investment;
