import React, { useState } from 'react';
import styles from './index.module.scss';
import InputBox from './InputBox';
import { FaDollarSign } from 'react-icons/fa6';
import { LuCalendarDays } from 'react-icons/lu';
import CalenderBox from './CalenderBox';
import { AiFillQuestionCircle } from 'react-icons/ai';
import Switch from 'react-switch';
import graphLogo from '../../assets/svg/tableicon.svg';
import { FaRegCircle, FaRegDotCircle } from 'react-icons/fa';
import Button from '../ButtonV2';
import waveSvg from '../../assets/svg/wave.svg';
import coinsSvg from '../../assets/svg/coins.svg';
import helpSvg from '../../assets/svg/helpicon.svg';
// import arrow from '../../assets/svg/longArrow.svg';

const FormBox = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [selectedButton, setSelectedButton] = useState<number>(1);

  const handleChange = (checked: boolean) => {
    setChecked(checked);
  };

  return (
    <div className={`${styles.formBox} container`}>
      <div className={styles.boxWithInputs}>
        <div className={styles.amountInvested}>
          <p>Amount invested</p>
          <InputBox icon={<FaDollarSign size={22} color="#000C28" />} />
        </div>
        <div className={styles.borderDiv}></div>
        <div className={styles.dateDivs}>
          <div className={styles.dateTitles}>
            <p>Investment date</p>
            <p>Cash-out date</p>
          </div>
          <div className={styles.dateBoxes}>
            <CalenderBox icon={<LuCalendarDays />} />
            <div className={styles.borderBetweenDivs}></div>
            {/* <img src={arrow} alt="arrow" loading="lazy" /> */}
            <CalenderBox icon={<LuCalendarDays />} />
            <AiFillQuestionCircle size={22} className={styles.helpLogo} />
          </div>
        </div>
      </div>
      <div className={styles.borderDiv}></div>
      <div className={styles.middleDiv}>
        <div className={styles.bitcoin}>
          <p>Bitcoin</p>
          <div>
            <span>on</span>
            <Switch
              onChange={handleChange}
              checked={checked}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#000C28"
              offColor="#00D7FB"
            />
            <span>off</span>
          </div>
        </div>
        <div className={styles.index}>
          <div className={styles.graphWithTitle}>
            <img src={graphLogo} alt="" />
            <p>Type of Index</p>
          </div>
          <div className={styles.enabledButtons}>
            <div>
              <p>IM10</p>
              <button
                onClick={() => {
                  setSelectedButton(1);
                }}
                //
              >
                {selectedButton === 1 ? (
                  <FaRegDotCircle color="#00D7FB" size={25} />
                ) : (
                  <FaRegCircle color="#00D7FB" className={styles.radioButton} size={25} />
                )}
              </button>
            </div>
            <div>
              <p>IM20</p>
              <button
                onClick={() => {
                  setSelectedButton(2);
                }}
                //
              >
                {selectedButton === 2 ? (
                  <FaRegDotCircle color="#00D7FB" size={25} />
                ) : (
                  <FaRegCircle color="#00D7FB" className={styles.radioButton} size={25} />
                )}
              </button>
            </div>
            <div>
              <p>IM50</p>
              <button
                onClick={() => {
                  setSelectedButton(3);
                }}
                //
              >
                {selectedButton === 3 ? (
                  <FaRegDotCircle color="#00D7FB" size={25} />
                ) : (
                  <FaRegCircle color="#00D7FB" className={styles.radioButton} size={25} />
                )}
              </button>
            </div>
          </div>
          <div className={styles.disabledButtons}>
            <div>
              <p>IM10</p>
              <button disabled>
                <FaRegCircle color="#00D7FB" size={25} />
              </button>
            </div>
            <div>
              <p>IM20</p>
              <button disabled>
                <FaRegCircle color="#00D7FB" size={25} />
              </button>
            </div>
            <div>
              <p>IM50</p>
              <button disabled>
                <FaRegCircle color="#00D7FB" size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.borderDiv}></div>
      <div className={styles.detailsDiv}>
        <div className={styles.imperium}>
          <p># in Imperium</p>
          <p>
            <span>6.56</span>
          </p>
        </div>
        <div className={styles.lex}>
          <p># of LEX needed</p>
          <p>
            <span>3278.10</span>
          </p>
        </div>
        <div className={styles.earning}>
          <p>Estimated earnings($)</p>
          <p>
            <span>-6676.98</span> or better
          </p>
        </div>
      </div>
      <div className={styles.buttonV2}>
        <Button label="SIMULATE" className={styles.btnV2} />
      </div>
      <div style={{ width: '100%', position: 'relative' }}>
        <img src={waveSvg} className={styles.waveSvg} alt="" />
      </div>
      <div>
        <img src={coinsSvg} className={styles.coinsSvg} alt="" />
      </div>
      <div>
        <img src={helpSvg} className={styles.helpSvg} alt="" />
      </div>
    </div>
  );
};

export default FormBox;
