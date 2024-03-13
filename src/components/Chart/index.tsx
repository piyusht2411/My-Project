/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import style from './index.module.scss';
import { Chart, registerables } from 'chart.js';
import Draggable from 'react-draggable';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import badge from '../../assets/svg/badge.svg';
import badgeSkyBlue from '../../assets/svg/badge-skyblue.svg';
import CalenderBox from '../FormBox/CalenderBox';
import doubleArrow from '../../assets/svg/double side arrow.svg';
import chartArrowMobile from '../../assets/svg/chart arrow mobile.svg';
import QueshionMark from '../../assets/svg/queshionMark.svg';

Chart.register(...registerables);

type ChartData = {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    borderWidth: number;
    pointRadius: number;
    pointHoverRadius: number;
    tension: number;
  }>;
};

type ChartOptions = {
  responsive: boolean;
  maintainAspectRatio: boolean;
  scales: {
    x: {
      position?: any;
      barPercentage: number;
      categoryPercentage: number;
      beginAtZero: boolean;
      display: boolean;
      ticks?: any;
    };
    y: {
      display: boolean;
      beginAtZero: boolean;
      ticks: any;
      grid: {
        color: string;
      };
    };
  };
  plugins: {
    legend: {
      display: boolean;
    };
  };
};

interface Props {
  data: ChartData;
  data2: ChartData;
  options: ChartOptions;
  options2: ChartOptions;
  title?: string;
  showChartIcon: boolean;
  removeMargin?: boolean;
}
const chartIcons = [
  {
    title: 'Bitcoin',
    color: '#2974B7',
    border: 'none'
  },
  {
    title: 'Ethereum',
    color: '#000C28',
    border: '1px solid #00D7FB'
  },
  {
    title: 'BNB',
    color: '#80CC1D',
    border: 'none'
  },
  {
    title: 'XRP',
    color: '#E26842',
    border: 'none'
  },
  {
    title: 'Cardano',
    color: '#000C28',
    border: '1px solid #00D7FB'
  },
  {
    title: 'Dogecoin',
    color: '#000C28',
    border: '1px solid #00D7FB'
  },
  {
    title: 'Solana',
    color: '#000C28',
    border: '1px solid #00D7FB'
  },
  {
    title: 'Polkadot',
    color: '#000C28',
    border: '1px solid #00D7FB'
  },
  {
    title: 'Polygon',
    color: '#000C28',
    border: '1px solid #00D7FB'
  },
  {
    title: 'Shiba Inu',
    color: '#000C28',
    border: '1px solid #00D7FB'
  }
];

const RANGE_SELECTOR = ['7 D', '1 M', '3 M', 'YTD', '1 Y', 'all'];

export const RangeSelector = () => {
  const [showHoverImage, setShowHoverImage] = useState([false, false, false, false, false, false]);
  const [showClickImage, setShowClickImage] = useState([false, false, false, false, false, true]);
  // @ts-expect-error www
  const handleMouseEnter = (index) => {
    console.log(index);
    const updatedHoverState = showHoverImage.map((value, i) => i === index);
    setShowHoverImage(updatedHoverState);
  };
  const handleMouseLeave = () => {
    setShowHoverImage([false, false, false, false, false, false]);
  };
  const handleButtonClick = (index: number) => {
    const updatedHoverState = showClickImage.map((value, i) => i === index);
    setShowClickImage(updatedHoverState);
  };

  return (
    <div className={style.filterContainer}>
      <div className={style.filterLeft}>
        <div className={style.CalenderConatiner}>
          <h4>Investment date</h4>
          <CalenderBox />
        </div>
        <img src={doubleArrow} loading="lazy" alt="arrow" className={style.longArrow} />
        <img src={chartArrowMobile} loading="lazy" alt="arrow" className={style.smallArrow} />
        <div className={style.CalenderConatiner}>
          <h4>Cash-out date</h4>
          <CalenderBox />
        </div>
        <img src={QueshionMark} loading="lazy" alt="arrow" className={style.queshionMarkIcon} />
      </div>
      <div className={style.chartFilter}>
        {RANGE_SELECTOR.map((ele, index) => (
          <span key={ele} className={style.filterSpan}>
            <p
              className={style.dayFilter + ' ' + (showClickImage[index] && style.activeText)}
              onMouseEnter={() => {
                handleMouseEnter(index);
              }}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                handleButtonClick(index);
              }}
              //
            >
              {ele}
            </p>
            {showClickImage[index] && <img src={badge} className={style.badge} />}
            {showHoverImage[index] && <img src={badgeSkyBlue} className={style.badgeBlue} />}
          </span>
        ))}
      </div>
    </div>
  );
};

const MyChart = ({ data, options, data2, options2, title, showChartIcon, removeMargin }: Props) => {
  return (
    <div className={style.sectionContainer} style={removeMargin ? { marginTop: 0 } : {}}>
      {title && <h1>{title}</h1>}
      <div className={style.mainContainer}>
        <RangeSelector />
        <div className={style.chartContainer}>
          <div className={style.firstChartContainer}>
            <Line data={data} options={options} className={style.chart} />
          </div>
          <div className={style.secondChartContainer}>
            <Draggable bounds="parent" axis="x" defaultClassName={style.dragger}>
              <div className={style.draggerConatiner}>
                <div className={style.draggerUpper}></div>
                <div className={style.draggerButton}>
                  <span>
                    <IoIosArrowDropleftCircle />
                  </span>
                  <p>||||||</p>
                  <span>
                    <IoIosArrowDroprightCircle />
                  </span>
                </div>
              </div>
            </Draggable>

            <Line data={data2} options={options2} />
            <div className={style.dragPath}>
              <div className={style.dragPathUnder}></div>
            </div>
          </div>
        </div>
        {showChartIcon && (
          <div>
            <div className={style.chartIconContainer}>
              {chartIcons.map((ele, index) => {
                return (
                  <div key={index}>
                    <button
                      className={style.chartIconButtons}
                      style={{ backgroundColor: ele.color, border: ele.border }}
                      //
                    ></button>
                    <p className={style.chartIconTitle}>{ele.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyChart;
