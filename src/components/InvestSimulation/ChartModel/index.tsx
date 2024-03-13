/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, Plugin, registerables } from 'chart.js';
import { AnyObject } from 'chart.js/dist/types/basic';
import styles from './index.module.scss';

Chart.register(...registerables);

const ChartModel = () => {
  const [chartData, setChartData] = useState({
    labels: [
      'Bitcoin',
      'Ethereum',
      'BNB',
      'XRP',
      'Cardano',
      'Solana',
      'Dogecoin',
      'Polkadot',
      'Polygon',
      'Shiba Inu'
    ],
    datasets: [
      {
        label: '',
        data: [42, 22, 5, 3, 2, 1, 0.5, 0.7, 0.6, 0.5],
        backgroundColor: [
          '#2974B7',
          '#00D7FB',
          '#80CC1D',
          '#E26842',
          '#FFCD2C',
          '#1A77FF',
          '#78FFD2',
          '#977BFF',
          '#FF69CD',
          '#FFFFFF'
        ],
        hoverBackgroundColor: [
          '#2974B7',
          '#00D7FB',
          '#80CC1D',
          '#E26842',
          '#FFCD2C',
          '#1A77FF',
          '#78FFD2',
          '#977BFF',
          '#FF69CD',
          '#FFFFFF'
        ],
        borderColor: ['#000000'],
        borderWidth: 1
      }
    ]
  });
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);
  const [showHover, setShowHover] = useState(false);
  const [coins, setCoins] = useState<string[]>([]);

  useEffect(() => {
    setCoins([
      'Bitcoin',
      'Ethereum',
      'BNB',
      'XRP',
      'Cardano',
      'Solana',
      'Dogecoin',
      'Polkadot',
      'Polygon',
      'Shiba Inu'
    ]);
  }, []);

  const handleHover = (event: any, chartElements: any) => {
    if (chartElements.length > 0) {
      const hoveredIndex = chartElements[0]._index;
      setHoveredIndex(hoveredIndex);
    } else {
      setHoveredIndex(null);
    }
  };
  const options = {
    cutoutPercentage: 20,
    responsive: true,
    maintainAspectRatio: false,
    onHover: handleHover,
    plugins: {
      legend: {
        display: false
      }
    }
  };
  const colorShade = (col: any, amt: number) => {
    col = col.replace(/^#/, '');
    if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

    let [r, g, b] = col.match(/.{2}/g);
    [r, g, b] = [parseInt(r, 16) + amt, parseInt(g, 16) + amt, parseInt(b, 16) + amt];

    r = Math.max(Math.min(255, r), 0).toString(16);
    g = Math.max(Math.min(255, g), 0).toString(16);
    b = Math.max(Math.min(255, b), 0).toString(16);

    const rr = (r.length < 2 ? '0' : '') + r;
    const gg = (g.length < 2 ? '0' : '') + g;
    const bb = (b.length < 2 ? '0' : '') + b;

    return `#${rr}${gg}${bb}`;
  };
  useEffect(() => {
    if (hoveredIndex !== null) {
      if (showHover) {
        const newColors = chartData.datasets[0].backgroundColor.map((color, index) => {
          return index === hoveredIndex ? color : colorShade(color, -120);
        });

        setChartData((prevData) => ({
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              backgroundColor: newColors
            }
          ]
        }));
      }
    } else {
      setChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            backgroundColor: [
              '#2974B7',
              '#00D7FB',
              '#80CC1D',
              '#E26842',
              '#FFCD2C',
              '#1A77FF',
              '#78FFD2',
              '#977BFF',
              '#FF69CD',
              '#FFFFFF'
            ]
          }
        ]
      }));
    }
  }, [hoveredIndex]);

  const icons: Plugin<'doughnut', AnyObject> = {
    id: 'icons',
    beforeDatasetDraw(chart, args, options) {
      // const {
      //   ctx,
      //   chartArea: { top, bottom, left, right }
      // } = chart;
      // const radius = 20;
      // function draw(x: any, y: any, color: any) {
      //   ctx.save();
      //   ctx.beginPath();
      //   ctx.fillStyle = color;
      //   ctx.arc(x, y, radius, 0, Math.PI * 2, false);
      //   ctx.fill();
      // }
      // draw(left + radius, top + radius, 'red');
      // draw(left + radius - 20, top + 50 + radius, 'red');
      // draw(right - radius, top + radius, 'black');
      // draw(left + radius, bottom - radius, 'white');
      // draw(right - radius, bottom - radius, '#2974B7');
    }
  };
  return (
    <>
      <div className={styles.innerCircle}></div>
      <Doughnut
        data={chartData}
        options={options}
        onMouseEnter={() => {
          setShowHover(true);
          setHoveredIndex(hoveredIndex);
        }}
        onMouseLeave={() => {
          setShowHover(false);
          setHoveredIndex(null);
        }}
        plugins={[icons]}
      />
      {coins && (
        <div className={styles.legends}>
          <div
            className={`${styles.legend1} ${styles.legend}`}
            style={{ backgroundColor: '#2974B7', position: 'absolute' }}
            //
          ></div>
          <div className={`${styles.text1} ${styles.text}`} style={{ position: 'absolute' }}>
            {coins[0]}
          </div>
          <div
            className={`${styles.legend2} ${styles.legend}`}
            style={{ backgroundColor: '#00D7FB', position: 'absolute' }}
            //
          ></div>
          <div className={`${styles.text2} ${styles.text}`} style={{ position: 'absolute' }}>
            {coins[1]}
          </div>
          <div
            className={`${styles.legend3} ${styles.legend}`}
            style={{ backgroundColor: '#80CC1D', position: 'absolute' }}
            //
          ></div>
          <div className={`${styles.text3} ${styles.text}`} style={{ position: 'absolute' }}>
            {coins[2]}
          </div>
          <div
            className={`${styles.legend4} ${styles.legend}`}
            style={{ backgroundColor: '#E26842', position: 'absolute' }}
            //
          ></div>
          <div className={`${styles.text4} ${styles.text}`} style={{ position: 'absolute' }}>
            {coins[3]}
          </div>
          <div
            className={`${styles.legend5} ${styles.legend}`}
            style={{ backgroundColor: '#FFCD2C', position: 'absolute' }}
            //
          ></div>
          <div className={`${styles.text5} ${styles.text}`} style={{ position: 'absolute' }}>
            {coins[4]}
          </div>
          <div
            className={`${styles.legend6} ${styles.legend}`}
            style={{ backgroundColor: '#1A77FF', position: 'absolute' }}
            //
          ></div>
          <div className={`${styles.text6} ${styles.text}`} style={{ position: 'absolute' }}>
            {coins[5]}
          </div>
          <div
            className={`${styles.legend7} ${styles.legend}`}
            style={{ backgroundColor: '#78FFD2', position: 'absolute' }}
            //
          ></div>
          <div className={`${styles.text7} ${styles.text}`} style={{ position: 'absolute' }}>
            {coins[6]}
          </div>
          <div
            className={`${styles.legend8} ${styles.legend}`}
            style={{ backgroundColor: '#977BFF', position: 'absolute' }}
            //
          ></div>
          <div className={`${styles.text8} ${styles.text}`} style={{ position: 'absolute' }}>
            {coins[7]}
          </div>
          <div
            className={`${styles.legend9} ${styles.legend}`}
            style={{ backgroundColor: '#FF69CD', position: 'absolute' }}
            //
          ></div>
          <div className={`${styles.text9} ${styles.text}`} style={{ position: 'absolute' }}>
            {coins[8]}
          </div>
          <div
            className={`${styles.legend10} ${styles.legend}`}
            style={{ backgroundColor: '#FFFFFF', position: 'absolute' }}
            //
          ></div>
          <div className={`${styles.text10} ${styles.text}`} style={{ position: 'absolute' }}>
            {coins[9]}
          </div>
        </div>
      )}
    </>
  );
};

export default ChartModel;
