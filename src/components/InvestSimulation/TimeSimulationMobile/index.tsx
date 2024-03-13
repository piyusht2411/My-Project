import React from 'react';
import style from './index.module.scss';
import InputBox from '../../FormBox/InputBox';
import Button from '../../ButtonV2';
import waveAbove from '../../../assets/svg/waves-above.svg';
import waveBottom from '../../../assets/svg/waves-bottom.svg';
import imLogo from '../../../assets/svg/imLogo.svg';
const TimeSimulationMobile = () => {
  return (
    <div className={style.sectionConatiner}>
      <img src={waveAbove} alt="wave" loading="lazy" className={style.aboveWave} />
      <div className={style.mainConatiner}>
        <div className={style.inputBoxContainer}>
          <h2>IM10 Real Time Simulator</h2>
          <InputBox img={imLogo} placeholder="15" />
        </div>
        <div className={style.borderLine}></div>
        <div>
          <div className={style.priceContainer}>
            <h4>Needed LEX</h4>
            <p>130.13</p>
          </div>
          <div className={style.totalPriceContainer}>
            <h4>Total</h4>
            <p>
              <span className={style.dollarSign}>$</span>
              <span>3278.10</span>
            </p>
          </div>
        </div>
        <Button label="INVEST NOW" className={style.button} />
      </div>
      <img src={waveBottom} alt="wave" loading="lazy" className={style.belowWave} />
    </div>
  );
};

export default TimeSimulationMobile;
