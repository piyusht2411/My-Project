import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Button from '../Button';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
// import { motion } from 'framer-motion';
type Data = {
  title: string;
  revenue: string;
  today: number;
  week: number;
  month: number;
  year: number;
};

const SlidingBar = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [data, setData] = useState<Data[]>([]);
  const totalSlides = 3;

  useEffect(() => {
    setData([
      {
        title: 'IM10',
        revenue: '673.27$',
        today: +0.84,
        week: +2.8,
        month: -1.28,
        year: +11.56
      },
      {
        title: 'IM Metaverse',
        revenue: '450.28$',
        today: +3.28,
        week: +5.6,
        month: +8.4,
        year: +28.56
      },
      {
        title: 'IM Gaming',
        revenue: '780.33$',
        today: +1.56,
        week: -0.52,
        month: +16.8,
        year: +42.81
      }
    ]);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? totalSlides : prevSlide - 1));
  };

  return (
    <div
      // <motion.div
      //   initial={{ opacity: 0, scale: 0 }}
      //   animate={{ opacity: 1, scale: 1 }}
      //   transition={{
      //     type: 'tween',
      //     duration: 1
      //   }}
      className={`${styles.slidingBar} container`}
      //
    >
      <div className={styles.arrows}>
        <div className={styles.arrowPrev}>
          <IoIosArrowUp color="#00D7FB" size={30} onClick={goToPrevSlide} />
        </div>
        <div className={styles.arrowNext}>
          <IoIosArrowDown color="#00D7FB" size={30} onClick={goToNextSlide} />
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <div
          className={styles.sliderTrack}
          style={{
            transform: `translateY(-${((currentSlide - 1) * 100) / totalSlides}%)`,
            flexDirection: 'column',
            overflow: 'hidden'
          }}
          //
        >
          {data.map((item, i) => {
            return (
              <div key={i} className={styles.slide}>
                <div style={{ display: 'flex', position: 'relative' }}>
                  <div className={styles.title}>
                    <p>
                      {item.title} {item.revenue}%
                    </p>
                  </div>
                  <div className={styles.triangleRight}></div>
                </div>
                <p className={styles.slideMidContent}>
                  <div style={{ display: 'flex', gap: '0.7rem' }}>
                    <span>24Hr</span>
                    <span style={item.today >= 0 ? { color: '#0AC18E' } : { color: '#FF6F03' }}>
                      {`${item.today >= 0 ? '+' : ''}${item.today}%`}
                    </span>
                  </div>{' '}
                  <div style={{ display: 'flex', gap: '0.7rem' }}>
                    <span>1W</span>
                    <span style={item.week >= 0 ? { color: '#0AC18E' } : { color: '#FF6F03' }}>
                      {`${item.week >= 0 ? '+' : ''}${item.week}%`}
                    </span>
                  </div>{' '}
                  <div style={{ display: 'flex', gap: '0.7rem' }}>
                    <span>1M</span>
                    <span style={item.month >= 0 ? { color: '#0AC18E' } : { color: '#FF6F03' }}>
                      {`${item.month >= 0 ? '+' : ''}${item.month}%`}
                    </span>
                  </div>{' '}
                  <div style={{ display: 'flex', gap: '0.7rem' }}>
                    <span>1Yr</span>
                    <span style={item.year >= 0 ? { color: '#0AC18E' } : { color: '#FF6F03' }}>
                      {`${item.year >= 0 ? '+' : ''}${item.year}%`}
                    </span>
                  </div>{' '}
                </p>
                <div className={styles.slideButton}>
                  <Button label="Invest" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default SlidingBar;
