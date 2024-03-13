import React from 'react';
import InputBox from '../../FormBox/InputBox';
import queshionMark from '../../../assets/svg/queshionMark.svg';
import arrow from '../../../assets/svg/longArrow.svg';
import waves from '../../../assets/svg/waves-small.svg';
import style from './index.module.scss';
import Button from '../../ButtonV2';
import imLogo from '../../../assets/svg/imLogo.svg';

const SimulationBoxWeb = () => {
  return (
    <div className={style.sectionConatiner}>
      <div className={style.upperContainer}>
        <h2>IM10 Real Time Simulation</h2>
        <div className={style.inputBoxConatiner}>
          <div className={style.inputBox}>
            <InputBox img={imLogo} placeholder="15" />
            <img src={queshionMark} loading="lazy" alt="queshionMark" />
          </div>
          <img src={arrow} loading="lazy" alt="arrow" />
          <div className={style.rightPart}>
            <h4>Needed LEX</h4>
            <p>130.13</p>
          </div>
          <div></div>
        </div>
        <div className={style.borderLine}></div>
        <div className={style.investSubmitConatiner}>
          <div className={style.investAmount}>
            <p>
              <span className={style.firstText}>Total:</span>
              <span className={style.secondText}>$</span>
              <span className={style.thirdText}>3278.10</span>
            </p>
            <Button label="INVEST NOW" className={style.button} />
          </div>
        </div>
      </div>
      <img src={waves} alt="wave" loading="lazy" className={style.wave} />
    </div>
  );
};

export default SimulationBoxWeb;
