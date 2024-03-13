import React from 'react';
import wave from '../../assets/svg/wave.svg';
import style from './index.module.scss';

const Wave = () => {
  return (
    <div className={style.waveConatiner}>
      <img src={wave} loading="lazy" />
    </div>
  );
};

export default Wave;
