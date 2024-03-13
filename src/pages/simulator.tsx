/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import GradientHeader from '../components/GradientHeader';
import Wave from '../components/Wave';
import InvestSimulation from '../components/InvestSimulation';
import FormBox from '../components/FormBox';
import IndexTop10 from '../components/IndexTop10';
import IM10Table from '../components/IM10Table';
import simulatorSvg from '../assets/svg/simulator-icon.svg';
import chartIcon from '../assets/svg/chart-icon.svg';
import topIndexIcon from '../assets/svg/topIndex-icon.svg';
import realTimeSimulatorIcon from '../assets/svg/realTimeSimulator-icon.svg';
import style from './style.module.scss';
import { useMediaQuery } from 'react-responsive';
import CustomHighCharts from '../components/CustomHighChart';

const Simulator = () => {
  const simulatorRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const topIndex = useRef<HTMLDivElement>(null);
  const realTimeSimulator = useRef<HTMLDivElement>(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sideBarActive, setSideBarActive] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: '1100px' });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSidebar(false);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [showSidebar, sideBarActive]);
  const scroll = (reference: React.RefObject<HTMLDivElement>) =>
    reference.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  const [chartOneOpt, setChartOneOpt] = useState<Highcharts.Options>({});
  const [chartTwoOpt, setChartTwoOpt] = useState<Highcharts.Options>({});

  const loadChartOne = async () => {
    const data = await fetch('https://demo-live-data.highcharts.com/aapl-c.json').then(
      async (response) => await response.json()
    );

    setChartOneOpt({
      credits: {
        enabled: false
      },
      // buttons and input date on top
      rangeSelector: {
        enabled: false,
        selected: 2,
        buttonPosition: {
          align: 'right'
        },
        dropdown: 'never',
        buttonSpacing: 30,
        inputEnabled: true,
        inputPosition: {
          align: 'left'
        },
        buttons: [
          {
            type: 'day',
            count: 7,
            text: '7D'
          },
          {
            type: 'month',
            count: 1,
            text: '1M'
          },
          {
            type: 'month',
            count: 3,
            text: '3M'
          },
          {
            type: 'ytd',
            text: 'YTD'
          },
          {
            type: 'year',
            count: 1,
            text: '1Y'
          },
          {
            type: 'all',
            text: 'all'
          }
        ],
        labelStyle: {
          opacity: 0
        },
        buttonTheme: {
          fill: 'none',
          states: {
            hover: {
              fill: 'none'
            },
            select: {
              style: {
                color: '#FFF'
              },
              fill: 'none'
            }
          },
          style: {
            color: '#1A77FF',
            fontSize: '15px',
            fontWeight: '700'
          }
        }
      },

      // range selector ontop of scrollbar
      navigator: {
        height: 80,
        maskFill: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#5773DD80'],
            [1, '#00113300']
          ]
        },
        outlineColor: '#274F8A',

        series: {
          type: 'line'
        },

        xAxis: {
          labels: {
            align: 'top',
            style: {
              color: '#FFF'
            }
          },
          gridLineColor: '#274F8A',
          gridLineWidth: 0.5
        },

        yAxis: {
          plotBands: [
            {
              from: -100,
              to: 10000,
              color: '#001133'
            }
          ]
        }
      },

      // bottom scrollbar
      scrollbar: {
        enabled: true,
        barBorderRadius: 8,
        buttonsEnabled: false,
        height: 18,
        margin: 0,
        rifleColor: '#000',
        trackBackgroundColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#808080'],
            [0.5, '#4D4D4D'],
            [1, '#262626']
          ]
        },
        trackBorderRadius: 10,
        trackBorderColor: '#FFF',
        trackBorderWidth: 0,
        buttonArrowColor: '#FFF',
        barBackgroundColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#1A77FF'],
            [0.35, '#0A97E0'],
            [0.7, '#274F8A'],
            [1, '#1A77FF']
          ]
        }
        // buttonBackgroundColor: 'none',
        // buttonBorderColor: 'none',
        // buttonBorderWidth: 0
        // barBackgroundColor: '#000',
        // trackBorderWidth: 0,
        // barBorderWidth: 1,
      },

      // chart contianer
      chart: {
        backgroundColor: '#000D21',
        shadow: {
          offsetX: 0,
          offsetY: 0,
          color: '#000'
        },
        marginBottom: 30
        // events: {
        //   load() {
        //     const ranBtn = this.rangeSelector.
        //   }
        // }
      },

      xAxis: {
        visible: false,
        scrollbar: {
          buttonsEnabled: false
        }
      },

      yAxis: {
        showFirstLabel: true,
        opposite: false,
        labels: {
          style: {
            color: '#FFF'
          },
          indentation: 20,
          align: 'center'
        },
        // left: 30,
        gridLineColor: '#9FDDDD', // y axis horizontal lines
        gridLineWidth: 0.2
      },

      series: [
        {
          type: 'line',
          name: 'AAPL Stock Price',
          data,
          tooltip: {
            valueDecimals: 2
          }
        }
      ]
    });
  };

  const loadChartTwo = () => {
    setChartTwoOpt({
      chart: {
        backgroundColor: '#000D21',
        shadow: {
          offsetX: 0,
          offsetY: 0,
          color: '#000'
        },
        marginBottom: 30
      },

      navigator: {
        height: 80,
        maskFill: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#5773DD80'],
            [1, '#00113300']
          ]
        },
        outlineColor: '#274F8A',

        series: {
          type: 'line'
        },

        xAxis: {
          labels: {
            align: 'top',
            style: {
              color: '#FFF'
            }
          },
          gridLineColor: '#274F8A',
          gridLineWidth: 0.5
        },

        yAxis: {
          plotBands: [
            {
              from: -100,
              to: 10000,
              color: '#001133'
            }
          ],
          lineColor: '#1A77FF'
        }
      },

      // bottom scrollbar
      scrollbar: {
        enabled: true,
        barBorderRadius: 8,
        buttonsEnabled: false,
        height: 18,
        margin: 0,
        rifleColor: '#000',
        trackBackgroundColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#808080'],
            [0.5, '#4D4D4D'],
            [1, '#262626']
          ]
        },
        trackBorderRadius: 10,
        trackBorderColor: '#FFF',
        trackBorderWidth: 0,
        buttonArrowColor: '#FFF',
        barBackgroundColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#1A77FF'],
            [0.35, '#0A97E0'],
            [0.7, '#274F8A'],
            [1, '#1A77FF']
          ]
        }
      },

      yAxis: {
        showFirstLabel: true,
        opposite: false,
        labels: {
          style: {
            color: '#FFF'
          },
          indentation: 20,
          align: 'center'
        },
        // left: 30,
        gridLineColor: '#9FDDDD', // y axis horizontal lines
        gridLineWidth: 0.2
      },

      plotOptions: {
        series: {
          cumulative: true,
          pointStart: Date.UTC(2023, 0, 1),
          pointIntervalUnit: 'day'
        }
      },

      rangeSelector: {
        enabled: false
      },

      // tooltip: {
      //   pointFormat:
      //     '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> (${point.cumulativeSum})<br/>',
      //   changeDecimals: 2,
      //   valueDecimals: 2,
      //   valuePrefix: '$',
      //   valueSuffix: ' USD'
      // },

      xAxis: {
        minRange: 3 * 24 * 36e5,
        max: Date.UTC(2023, 0, 6)
      },

      series: [
        {
          type: 'area',
          name: 'The Local Bakery',
          data: [678.78, 545.33, 788.72, 406.2, 744.87, 466.03, 822.7, 337.52, 396.67, 470.89],

          color: '#5DA15D',
          zIndex: 10
        },
        {
          type: 'area',
          name: 'The Local Fishmarket',
          data: [
            1340.72, 982.43, 1437.99, 1476.2, 670.23, 429.58, 897.52, 845.11, 1275.79, 1843.01
          ],
          color: '#2974B7'
        }
      ]
    });
  };

  useEffect(() => {
    loadChartOne();
    loadChartTwo();
  }, []);

  return (
    <div>
      <div className={style.navContainer}>
        <div
          className={
            style.navMainContainer + ' ' + (showSidebar && isMobile ? style.showSideBar : '')
          }
        >
          <div onClick={() => scroll(simulatorRef)} className={style.navItem1}>
            <img src={simulatorSvg} alt="simulator-svg" className={style.navItemImg} />
            <div
              className={style.navTextContainer}
              onClick={() => {
                setSideBarActive(!sideBarActive);
              }}
            >
              <p className={style.navItemText}>SIMULATOR</p>
            </div>
          </div>
          <div onClick={() => scroll(chartRef)} className={style.navItem2}>
            <img src={chartIcon} alt="chart-icon" className={style.navItemImg} />
            <div
              className={style.navTextContainer}
              onClick={() => {
                setSideBarActive(!sideBarActive);
              }}
            >
              <p className={style.navItemText}>CHART</p>
            </div>
          </div>
          <div onClick={() => scroll(topIndex)} className={style.navItem3}>
            <img src={topIndexIcon} alt="topIndex-icon" className={style.navItemImg} />
            <div
              className={style.navTextContainer}
              onClick={() => {
                setSideBarActive(!sideBarActive);
              }}
            >
              <p className={style.navItemText}>TOP INDEX</p>
            </div>
          </div>
          <div onClick={() => scroll(realTimeSimulator)} className={style.navItem4}>
            <img
              src={realTimeSimulatorIcon}
              alt="real-time-simulator-icon"
              className={style.navItemImg}
            />
            <div
              className={style.navTextContainer}
              onClick={() => {
                setSideBarActive(!sideBarActive);
              }}
            >
              <p className={style.navItemText}>REAL TIME SIMULATOR</p>
            </div>
          </div>
        </div>
        <div
          className={style.navSideBorder}
          onMouseEnter={() => {
            setShowSidebar(true);
          }}
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        ></div>
      </div>
      <GradientHeader />
      <div
        ref={simulatorRef}
        onClick={() => {
          setShowSidebar(false);
        }}
      >
        <FormBox />
      </div>
      <div style={{ marginTop: 30, marginBottom: 30 }} ref={chartRef}>
        <CustomHighCharts option={chartOneOpt} />
      </div>
      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <CustomHighCharts option={chartTwoOpt} />
      </div>
      <div
        ref={topIndex}
        onClick={() => {
          setShowSidebar(false);
        }}
        //
      >
        <IndexTop10 showTitle={true} />
      </div>
      <Wave />
      <div
        ref={realTimeSimulator}
        onClick={() => {
          setShowSidebar(false);
        }}
      >
        <InvestSimulation showTitle={true} />
      </div>
      <div
        onClick={() => {
          setShowSidebar(false);
        }}
      >
        <IM10Table />
      </div>
    </div>
  );
};

export default Simulator;
