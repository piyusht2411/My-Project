import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import bitcoinSvg from '../../assets/svg/bitcoin.svg';
import ethereumSvg from '../../assets/svg/ethereum.svg';
import bnbSvg from '../../assets/svg/bnb.svg';
import xrpSvg from '../../assets/svg/xrp.svg';
import cardanoSvg from '../../assets/svg/cardano.svg';
import solanaSvg from '../../assets/svg/solana.svg';
import dogecoinSvg from '../../assets/svg/dogecoin.svg';
import polkadotSvg from '../../assets/svg/polkadot.svg';
import polygonSvg from '../../assets/svg/polygon.svg';
import shibaSvg from '../../assets/svg/shiba.svg';
import { Line } from 'react-chartjs-2';
import Button from '../ButtonV2';
import TableIcon from '../../assets/svg/queshionMarkTable.svg';
import TableIconHover from '../../assets/svg/queshionMarkTableHover.svg';

const data1 = {
  labels: [
    'Jan 21',
    'Feb 21',
    'Mar 21',
    'Apr 21',
    'May 21',
    'Jun 21',
    'Jul 21',
    'Aug 21',
    'Sep 21',
    'Oct 21',
    'Nov 21',
    'Dec 21'
  ],
  datasets: [
    {
      label: '',
      data: [10, 1, 6, 11, 1, 10, 3, 5, 14, 2],
      fill: false,
      borderColor: '#95B22D',
      borderWidth: 1,
      pointRadius: 0,
      pointHoverRadius: 0,
      tension: 0.1
    }
  ]
};
const data2 = {
  labels: [
    'Jan 21',
    'Feb 21',
    'Mar 21',
    'Apr 21',
    'May 21',
    'Jun 21',
    'Jul 21',
    'Aug 21',
    'Sep 21',
    'Oct 21',
    'Nov 21',
    'Dec 21'
  ],
  datasets: [
    {
      label: '',
      data: [5, 15, 6, 10, 1, 10, 18, 3, 10, 2],
      fill: false,
      borderColor: '#5E5AFF',
      borderWidth: 1,
      pointRadius: 0,
      pointHoverRadius: 0,
      tension: 0.1
    }
  ]
};
const options2 = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      position: 'top',
      display: false,
      barPercentage: 20,
      categoryPercentage: 20,
      beginAtZero: false,
      ticks: {
        font: {
          size: 15
        }
      }
    },
    y: {
      display: false,
      beginAtZero: true,
      ticks: {
        font: {
          size: 10
        }
      },
      grid: {
        color: 'rgb(20,39,57)'
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

type Data = {
  imgUrl: string;
  name: string;
  abbr: string;
  price: number;
  domination: number;
  investmentAmount: number;
  tokenAmount: number;
  marketCap: number;
  change: number;
};

const IM10Table = () => {
  const [value, setValue] = useState<Data[]>([]);
  const [hoverImage, setHoverImage] = useState(false);

  useEffect(() => {
    setValue([
      {
        imgUrl: bitcoinSvg,
        name: 'Bitcoin',
        abbr: 'BTC',
        price: 19439.1065,
        domination: 57.23,
        investmentAmount: 372.3556,
        tokenAmount: 0.0192,
        marketCap: 372375878906,
        change: +0.85
      },
      {
        imgUrl: ethereumSvg,
        name: 'Ethereum',
        abbr: 'ETH',
        price: 1337.1065,
        domination: 25.23,
        investmentAmount: 163.6985,
        tokenAmount: 0.1224,
        marketCap: 163375878906,
        change: -1.64
      },
      {
        imgUrl: bnbSvg,
        name: 'BNB',
        abbr: 'BNB',
        price: 226.1065,
        domination: 6.61,
        investmentAmount: 43.0067,
        tokenAmount: 0.1613,
        marketCap: 372375878906,
        change: +0.85
      },
      {
        imgUrl: xrpSvg,
        name: 'XRP',
        abbr: 'XRP',
        price: 0.3599,
        domination: 2.77,
        investmentAmount: 17.9574,
        tokenAmount: 49.9021,
        marketCap: 163375878906,
        change: -1.64
      },
      {
        imgUrl: cardanoSvg,
        name: 'Cardano',
        abbr: 'ADA',
        price: 0.4478,
        domination: 2.35,
        investmentAmount: 15.2898,
        tokenAmount: 0.0192,
        marketCap: 372375878906,
        change: +0.85
      },
      {
        imgUrl: solanaSvg,
        name: 'Solana',
        abbr: 'SOL',
        price: 31.1579,
        domination: 1.7,
        investmentAmount: 372.3556,
        tokenAmount: 0.0192,
        marketCap: 163375878906,
        change: -1.64
      },
      {
        imgUrl: dogecoinSvg,
        name: 'Dogecoin',
        abbr: 'DOGE',
        price: 0.0576,
        domination: 1.19,
        investmentAmount: 372.3556,
        tokenAmount: 0.0192,
        marketCap: 372375878906,
        change: +0.85
      },
      {
        imgUrl: polkadotSvg,
        name: 'Polkadot',
        abbr: 'DOT',
        price: 6.4554,
        domination: 1.11,
        investmentAmount: 372.3556,
        tokenAmount: 0.0192,
        marketCap: 163375878906,
        change: -1.64
      },
      {
        imgUrl: polygonSvg,
        name: 'Polygon',
        abbr: 'MATIC',
        price: 0.7541,
        domination: 1.01,
        investmentAmount: 372.3556,
        tokenAmount: 0.0192,
        marketCap: 372375878906,
        change: +0.85
      },
      {
        imgUrl: shibaSvg,
        name: 'Shiba Inu',
        abbr: 'XRP',
        price: 0,
        domination: 0.9,
        investmentAmount: 372.3556,
        tokenAmount: 0.0192,
        marketCap: 163375878906,
        change: -1.64
      }
    ]);
  }, []);

  return (
    <div className={`${styles.im10Table} container`}>
      <div className={styles.table}>
        <div className={styles.fixed}>
          <div className={styles.box} style={{ borderTopLeftRadius: '0.5rem' }}>
            <p className={styles.heading}>TOKEN</p>
          </div>
          {value.map((coin, i) => (
            <div
              key={i}
              className={`${styles.box} ${styles.coin}` + ' ' + (i === 9 && styles.bottomRow)}
              style={i % 2 === 0 ? { backgroundColor: '#001133' } : { backgroundColor: '#0D1C3F' }}
              //
            >
              <div className={styles.indexNo}>
                <p>{i + 1}</p>
              </div>
              <div className={styles.imageDiv}>
                <img src={coin.imgUrl} className={styles.coinLogo} alt="" />
              </div>
              <div className={styles.nameDiv}>
                <p className={styles.coinName}>{coin.name}</p>
                <p className={styles.coinAbbr}>{coin.abbr}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.scrollable}>
          <div className={styles.price}>
            <div className={styles.box}>
              <p className={styles.heading}>PRICE</p>
            </div>
            {value.map((coin, i) => (
              <div
                key={i}
                className={`${styles.box} ${styles.coinPrice}`}
                style={
                  i % 2 === 0 ? { backgroundColor: '#001133' } : { backgroundColor: '#0D1C3F' }
                }
                //
              >
                <p>
                  <span style={{ color: '#00D7FB' }}>$ </span>
                  {coin.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.dominance}>
            <div className={styles.box}>
              <p className={styles.heading}>DOMINANCE %</p>
              <img
                src={hoverImage ? TableIconHover : TableIcon}
                alt="icon"
                onMouseEnter={() => {
                  setHoverImage(true);
                }}
                onMouseLeave={() => {
                  setHoverImage(false);
                }}
              />
            </div>
            {value.map((coin, i) => (
              <div
                key={i}
                className={`${styles.box} ${styles.coinDominance}`}
                style={
                  i % 2 === 0 ? { backgroundColor: '#001133' } : { backgroundColor: '#0D1C3F' }
                }
                //
              >
                <p className={styles.coinName}>
                  {coin.domination}
                  <span style={{ color: '#00D7FB' }}> %</span>
                </p>
                <div className={styles.progressBar}>
                  <div
                    style={{
                      position: 'absolute',
                      width: `${coin.domination}%`,
                      backgroundColor: '#001133',
                      height: '6px',
                      borderRadius: '0.3rem'
                    }}
                    //
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.investmentAmount}>
            <div className={styles.box}>
              <p className={styles.heading}>INVESTMENT AMOUNT</p>
            </div>
            {value.map((coin, i) => (
              <div
                key={i}
                className={`${styles.box} ${styles.coinInvestmentAmount}`}
                style={
                  i % 2 === 0 ? { backgroundColor: '#001133' } : { backgroundColor: '#0D1C3F' }
                }
                //
              >
                <p>
                  <span style={{ color: '#00D7FB' }}>$ </span>
                  {coin.investmentAmount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.tokenAmount}>
            <div className={styles.box}>
              <p className={styles.heading}>TOKEN AMOUNT</p>
            </div>
            {value.map((coin, i) => (
              <div
                key={i}
                className={`${styles.box} ${styles.coinTokenAmount}`}
                style={
                  i % 2 === 0 ? { backgroundColor: '#001133' } : { backgroundColor: '#0D1C3F' }
                }
                //
              >
                <p>
                  <span style={{ color: '#00D7FB' }}>$ </span>
                  {coin.tokenAmount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.marketCap}>
            <div className={styles.box}>
              <p className={styles.heading}>MARKET CAP</p>
            </div>
            {value.map((coin, i) => (
              <div
                key={i}
                className={`${styles.box} ${styles.coinMarketCap}`}
                style={
                  i % 2 === 0 ? { backgroundColor: '#001133' } : { backgroundColor: '#0D1C3F' }
                }
                //
              >
                <p>
                  <span style={{ color: '#00D7FB' }}>$ </span>
                  {coin.marketCap.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.change}>
            <div className={styles.box} style={{ borderTopRightRadius: '0.5rem' }}>
              <p className={styles.heading}>30 DAYS CHANGE %</p>
            </div>
            {value.map((coin, i) => (
              <div
                key={i}
                className={
                  `${styles.box} ${styles.coinChange}` + ' ' + (i === 9 && styles.bottomRow)
                }
                style={
                  i % 2 === 0 ? { backgroundColor: '#001133' } : { backgroundColor: '#0D1C3F' }
                }
                //
              >
                <div style={{ width: '60%', height: '70%', position: 'relative' }}>
                  {/* @ts-expect-error: https */}
                  <Line data={data2} options={options2} />
                  <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0 }}>
                    {/* @ts-expect-error: https */}
                    <Line data={data1} options={options2} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button label="Run A Detailed Investment Simulation" className={styles.bottomButton} />
    </div>
  );
};

export default IM10Table;
