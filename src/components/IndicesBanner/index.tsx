import React from 'react';
import styles from './index.module.scss';
import IndicesPageTable from '../IndicesPageTable';
// import IM10Table from '../IM10Table';

const IndicesBanner = () => {
  return (
    <div className={`${styles.indicesBanner} container`}>
      <div className={styles.upperDiv}>
        <h1 className={styles.heading}>
          <span style={{ color: '#00D7FB' }}>IM10</span>{' '}
          <span style={{ color: 'grey' }}>| THE</span>{' '}
          <span style={{ color: '#FFAC1A' }}>TOP 10 CRYPTO INDEX</span>
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cum culpa quas vel ullam
          assumenda explicabo amet deleniti dolor aliquam.
        </p>
      </div>
      <div className={styles.lowerDiv}>
        <div className={styles.leftDiv}>
          <p className={styles.para}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere blanditiis odit
            molestias eaque in, nisi laboriosam expedita at, fugit qui quo atque esse quas nesciunt
            officia perspiciatis! Deleniti, nobis reiciendis? nisi laboriosam expedita at
          </p>
          <p className={styles.para}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere blanditiis odit
            molestias eaque in, nisi laboriosam expedita at, fugit qui quo atque esse quas nesciunt
            officia perspiciatis! Deleniti, nobis reiciendis? nisi laboriosam expedita at
          </p>
        </div>
        <div className={styles.rightDiv}>
          <IndicesPageTable />
        </div>
      </div>
    </div>
  );
};

export default IndicesBanner;
