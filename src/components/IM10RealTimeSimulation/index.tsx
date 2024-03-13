import React from 'react';
import styles from './index.module.scss';
import SimulationBoxWeb from './SimulationBoxWeb';

const IM10RealTimeSimulation = () => {
  return (
    <div className={styles.im10RealTimeSimulation}>
      <h1 className={styles.heading}>IM10 Real Time Simulation</h1>
      <p className={styles.description}>
        Compare the profits of your investment, based on the index of your choosing.
      </p>
      <SimulationBoxWeb />
    </div>
  );
};

export default IM10RealTimeSimulation;
