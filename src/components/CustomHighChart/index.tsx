/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import './index.scss';
import { RangeSelector } from '../Chart';

const CustomHighCharts = ({ option }: { option: any }) => {
  return (
    <div className="container">
      <div className="highcharts-wrapper">
        <RangeSelector />

        <div>
          <HighchartsReact
            constructorType={'stockChart'}
            highcharts={Highcharts}
            options={option}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomHighCharts;
