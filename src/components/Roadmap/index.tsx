/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './index.module.scss';
import { FaRegCircle, FaRegDotCircle } from 'react-icons/fa';
import RoadMap from '../Svg/RoadMap';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

type Development = {
  Q1a: string[];
  Q1b: string[];
  Q2a: string[];
  Q2b: string[];
  Q3a: string[];
  Q3b: string[];
  Q4a: string[];
  Q4b: string[];
};

const YEARS = [2021, 2022, 2023, 2024, 2025];

const Roadmap = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const [data, setData] = useState<Development[]>([]);

  useEffect(() => {
    setData([
      {
        Q1a: ['Private Funding Round'],
        Q1b: ['Technical Competetion Analysis', 'The need of a crypto index'],
        Q2a: ['Market Research'],
        Q2b: ['SWOT Analysis'],
        Q3a: ['Product Design'],
        Q3b: ['Imperium and LEX token concept'],
        Q4a: ['Proof of conecpt'],
        Q4b: ['SLR algorithm concept']
      },
      {
        Q1a: ['EU Authorization'],
        Q1b: ['Website development'],
        Q2a: ['Team expansion & Partnerships Official Launch'],
        Q2b: ['MVP Investment Simulator deployment'],
        Q3a: ['Marketing & Strategic Partnerships'],
        Q3b: ['Sectoral Indices'],
        Q4a: ['Seed Funding Round'],
        Q4b: ['CMC API automated integration for the MVP Simulator']
      },
      {
        Q1a: ['Private Funding Round'],
        Q1b: ['SLR Algorithm Testnet'],
        Q2a: [
          'Public Sale (Launchpad)',
          'TGE for LEX Token',
          'Tier 1 CEX listing for LEX Token',
          'LP incentive program for LEX Token',
          'Imperium Top Indices Launch'
        ],
        Q2b: [
          'SLR Algorithm Mainnet',
          'Digital assets custodial infrastructure integration (Bitcoins Suisse custodial integration)'
        ],
        Q3a: ['Staking for LEX Token', 'DeFi Sectoral Index Launch'],
        Q3b: ['LEX Deployment on TRON'],
        Q4a: ['Additional Tier 1 CEX Listing for LEX Token'],
        Q4b: ['LEX Deployment on BSC']
      },
      {
        Q1a: ['Metaverse Sectoral Index Launch', 'Fiat on/off ramp provides integration'],
        Q1b: ['LEX deployment on FTM'],
        Q2a: ['Additional CEX listings', 'Made to measure (Tailor-Made On-Demand Indices)'],
        Q2b: ['LEX deployment on Polygon'],
        Q3a: ['Additional Sectoral Indices'],
        Q3b: ['LEX deployment on Solana'],
        Q4a: ['DEX listing on additional EVM compatible blockchains'],
        Q4b: ['Imperium mobile app deployment', 'Additional EVM compatible blockchains integration']
      }
    ]);
  }, []);

  const onReverse = (trigg: number, sele: number) => {
    console.log({ trigg, sele });

    if (sele > trigg) {
      setSelectedButton(trigg);
    }
  };

  useGSAP(() => {
    let selectedBtn = 0;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#roadmap',
          scrub: true,
          pin: true,
          start: 'top top'
        }
      })
      .to(
        '#rocket',
        {
          autoAlpha: 1,
          duration: 0.05
        },
        0
      )
      .to(
        '.roadmap_year_0',
        {
          width: '100%',
          duration: 4,
          onComplete() {
            setSelectedButton(1);
            selectedBtn = 1;
          },
          onUpdate: () => onReverse(0, selectedBtn)
        },
        0
      )
      .to('.roadmap_year_1', {
        width: '100%',
        duration: 4,
        onComplete() {
          setSelectedButton(2);
          selectedBtn = 2;
        },
        onUpdate: () => onReverse(1, selectedBtn)
      })
      .to('.roadmap_year_2', {
        width: '100%',
        duration: 4,
        onComplete() {
          setSelectedButton(3);
          selectedBtn = 3;
        },
        onUpdate: () => onReverse(2, selectedBtn)
      })
      .to(
        '#rocket',
        {
          duration: 4,
          repeat: 1,
          motionPath: {
            path: '#rocket_path',
            align: '#rocket_path',
            autoRotate: true,
            start: 0.1,
            end: 0.95,
            alignOrigin: [0.5, 0.5]
            // align: 'path'
          }
        },
        0
      )
      .to(
        '#rocket',
        {
          duration: 2,
          motionPath: {
            path: '#rocket_path',
            align: '#rocket_path',
            autoRotate: true,
            start: 0.01,
            end: 0.58,
            alignOrigin: [0.5, 0.5]
            // align: 'path'
          }
        },
        8
      )
      .to('#rocket', {
        autoAlpha: 0,
        duration: 0.01
      });
  });

  return (
    <div className="container">
      <div className={`${styles.roadMap}`} id="roadmap" style={{ marginTop: '4rem' }}>
        <h1>Our Roadmap</h1>
        <p className={styles.subHead}>Find the main milestones on our big journey.</p>
        <div className={styles.linedButtons}>
          {[2021, 2022, 2023, 2024].map((ele, index) => (
            <div key={ele} className={styles.linedBtnWrapper}>
              <div className={styles.linedBtn}>
                <button
                // onClick={() => {
                //   setSelectedButton(index);
                // }}
                >
                  {selectedButton >= index ? (
                    <FaRegDotCircle color="#00D7FB" size={30} />
                  ) : (
                    <FaRegCircle color="#00D7FB" size={30} />
                  )}
                </button>
                {index !== 3 && (
                  <div style={{ flex: 1, position: 'relative' }}>
                    <div style={{ border: '1px dashed #4DA6FF' }}></div>
                    {
                      <div
                        style={{ width: 0 }}
                        className={`roadmap_year_${index} ${styles.lineFill}`}
                      ></div>
                    }
                  </div>
                )}
              </div>
              <p style={selectedButton === index ? { color: '#00D7FB' } : {}}>{ele}</p>
            </div>
          ))}
        </div>
        {/*  */}

        <div className="">
          <div style={{ position: 'relative' }}>
            <div>
              <div>
                <p className={styles.startDate}>{YEARS[selectedButton]}</p>
                <p className={styles.endDate}>{YEARS[selectedButton + 1]}</p>
              </div>
              <div className={styles.milestones}>
                <div className={styles.q1a}>
                  {data[selectedButton]?.Q1a.map((ele) => <p key={ele}>{ele}</p>)}
                </div>
                <div className={styles.q1b}>
                  {data[selectedButton]?.Q1b.map((ele) => <p key={ele}>{ele}</p>)}
                </div>
                <div className={styles.q2a}>
                  {data[selectedButton]?.Q2a.map((ele) => <p key={ele}>{ele}</p>)}
                </div>
                <div className={styles.q2b}>
                  {data[selectedButton]?.Q2b.map((ele) => <p key={ele}>{ele}</p>)}
                </div>
                <div className={styles.q3a}>
                  {data[selectedButton]?.Q3a.map((ele) => <p key={ele}>{ele}</p>)}
                </div>
                <div className={styles.q3b}>
                  {data[selectedButton]?.Q3b.map((ele) => <p key={ele}>{ele}</p>)}
                </div>
                <div className={styles.q4a}>
                  {data[selectedButton]?.Q4a.map((ele) => <p key={ele}>{ele}</p>)}
                </div>
                <div className={styles.q4b}>
                  {data[selectedButton]?.Q4b.map((ele) => <p key={ele}>{ele}</p>)}
                </div>
              </div>
            </div>

            <RoadMap year={YEARS[selectedButton]} />
          </div>
        </div>
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default Roadmap;
