import React from 'react';
import ChartModel from './ChartModel';
import style from './index.module.scss';
import TimeSimulation from './TimeSimulation';
import coins from '../../assets/svg/coinsAnimation.svg';
import TimeSimulationMobile from './TimeSimulationMobile';
import circleSvg from '../../assets/svg/circles.svg';
import groupSvg from '../../assets/svg/Group.svg';

type InvestmentSimulationProps = {
  showTitle?: boolean;
};

const InvestSimulation = (props: InvestmentSimulationProps) => {
  const { showTitle } = props;

  return (
    <div className={style.sectionContainer}>
      <div className={style.leftContainer}>
        <div className={style.headings}>
          {!showTitle && (
            <h1 style={{ fontWeight: 700 }}>
              <span style={{ color: '#00D7FB' }}>BUY NOW </span>{' '}
              <span style={{ color: '#FFAC1A' }}>IM 10</span>
            </h1>
          )}
          {!showTitle && <p>Achieve Crypto Success With Imperium Indices: Invest Wisely Now</p>}
          {showTitle && <h1>IM10 Real Time Simulation</h1>}
          {showTitle && (
            <p>Compare the profit of your investment, based on the index of your choosing </p>
          )}
        </div>
        <TimeSimulation />
        <TimeSimulationMobile />
        <img src={coins} alt="coins" loading="lazy" className={style.coins} />
      </div>
      <div>
        <div
          className={style.outerCircle}
          style={{ backgroundImage: `url(${circleSvg})`, backgroundSize: '100%' }}
          //
        >
          <div
            className={style.innerCircle}
            style={{ backgroundImage: `url(${groupSvg})`, backgroundSize: '100%' }}
            //
          >
            <ChartModel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestSimulation;
