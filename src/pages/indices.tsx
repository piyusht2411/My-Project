import React from 'react';
import IndicesBanner from '../components/IndicesBanner';
import SlidingBar from '../components/SlidingBar';
import Chart from '../components/Chart/index';
import { data, data2, options, options2 } from '../JSON/BehaviourChart';
import { CoinData, CoinData2, CoinOptions, CoinOptions2 } from '../JSON/CoinDominance';
import InvestSimulation from '../components/InvestSimulation';
import Button from '../components/ButtonV2';
import IndexTop10 from '../components/IndexTop10';

const Indices = () => {
  return (
    <>
      <IndicesBanner />
      <SlidingBar />
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span style={{ color: '#00D7FB' }}>IM10</span> <span>Historical</span>{' '}
        <span style={{ color: '#FFAC1A' }}>Behaviour</span>
      </h1>
      <Chart
        data={data}
        data2={data2}
        options={options}
        options2={options2}
        title=""
        showChartIcon={false}
        removeMargin={true}
      />
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span style={{ color: '#00D7FB' }}>IM10</span> <span>Historical</span>{' '}
        <span style={{ color: '#FFAC1A' }}>Coin Dominance</span>
      </h1>
      <Chart
        data={CoinData}
        data2={CoinData2}
        options={CoinOptions}
        options2={CoinOptions2}
        title=""
        showChartIcon={true}
        removeMargin={true}
      />
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span style={{ color: '#00D7FB' }}>IM10</span> <span>Index</span>{' '}
        <span style={{ color: '#FFAC1A' }}>Portfolio</span>
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <span style={{ color: '#9FDDDD', fontWeight: 300 }}>Discover the </span>{' '}
        <span style={{ fontWeight: 400, color: '#00D7FB' }}>top 10 </span>{' '}
        <span style={{ color: '#9FDDDD', fontWeight: 300 }}>cryptocurrencies in </span>
        <span style={{ color: '#FFAC1A' }}>IM 10 </span>
        <span style={{ color: '#9FDDDD', fontWeight: 300 }}>portfolio</span>
      </p>
      <IndexTop10 showTitle={false} />
      <InvestSimulation />
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5rem' }}>
        <Button label="Run A Detailed Investment Simulation" />
      </div>
    </>
  );
};

export default Indices;
