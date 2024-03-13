import React from 'react';
import styles from './index.module.scss';

const GradientHeader = () => {
  return (
    <div className={`${styles.gradientHeader} container`}>
      <h1>SRL Algorithm Investments Simulation</h1>
      <p>
        Use our Index Simulator to compare the profits of your hypothetical investment, based on the
        index of your choosing.
      </p>
    </div>
  );
};

export default GradientHeader;
