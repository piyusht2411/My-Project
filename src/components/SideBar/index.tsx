import React from 'react';
import { SlQuestion } from 'react-icons/sl';
import queshion from '../../assets/svg/queshion.svg';
import style from './index.module.scss';
import { IoCloseSharp } from 'react-icons/io5';

interface Props {
  closeMenu: () => void;
  tournamentRef?: React.MutableRefObject<undefined>;
  referalProgram: React.MutableRefObject<undefined>;
  investmentSimulation: React.MutableRefObject<undefined>;
  detailedSimulation: React.MutableRefObject<undefined>;
  topIndices: React.MutableRefObject<undefined>;
  sectoralIndices: React.MutableRefObject<undefined>;
  TailorIndices: React.MutableRefObject<undefined>;
}

const Sidebar = ({
  closeMenu,
  tournamentRef,
  referalProgram,
  investmentSimulation,
  detailedSimulation,
  topIndices,
  sectoralIndices,
  TailorIndices
}: Props) => {
  const navBarHeight = 100;
  return (
    <div className={style.sidebarConatiner}>
      <button className={style.close} onClick={closeMenu}>
        <IoCloseSharp />
      </button>
      <div className={style.contentWrapper}>
        <div className={style.mainHeadingConatiner}>
          <h2 className={style.mainHeading}>
            <span className={style.mainHeadBlue}>How </span>
            <span className={style.mainHeadGreen}>it </span>
            <span className={style.mainHeadYellow}>Works </span>
          </h2>
        </div>
        <div>
          <div>
            <div className={style.subHeading}>
              <span className={style.subHeadIcom}>
                <SlQuestion />
              </span>
              <a href="#videoSection">
                <h4>Video explainers</h4>
              </a>
            </div>
          </div>
          <div>
            <div>
              <div className={style.subHeading}>
                <span className={style.subHeadIcom}>
                  <SlQuestion />
                </span>
                <h4>Earn points</h4>
              </div>
              <div className={style.subHeadingText}>
                <p
                  className={style.clickAble}
                  onClick={() => {
                    const tournamentRefSection = tournamentRef?.current;
                    if (tournamentRefSection) {
                      // @ts-expect-error sss
                      const scrollPosition = tournamentRefSection.offsetTop - navBarHeight;
                      window.scrollTo({
                        top: scrollPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  //
                >
                  Tournaments
                </p>
                <p
                  className={style.clickAble}
                  onClick={() => {
                    const referalProgramSection = referalProgram?.current;
                    if (referalProgramSection) {
                      // @ts-expect-error sss
                      const scrollPosition = referalProgramSection.offsetTop - navBarHeight;
                      window.scrollTo({
                        top: scrollPosition,
                        behavior: 'smooth'
                      });
                    }
                    //
                  }}
                  //
                >
                  Referal program
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <div>
            <div className={style.subHeading}>
              <span className={style.subHeadIcom}>
                <SlQuestion />
              </span>
              <h4>Run index simulation</h4>
            </div>
            <div className={style.subHeadingText}>
              <p
                className={style.clickAble}
                onClick={() => {
                  const investmentSimulationSection = investmentSimulation?.current;
                  if (investmentSimulationSection) {
                    // @ts-expect-error sss
                    const scrollPosition = investmentSimulationSection.offsetTop - navBarHeight;
                    window.scrollTo({
                      top: scrollPosition,
                      behavior: 'smooth'
                    });
                  }
                  //
                }}
                //
              >
                Investment simulation
              </p>
              <p
                className={style.clickAble}
                onClick={() => {
                  const detailedSimulationSection = detailedSimulation?.current;
                  if (detailedSimulationSection) {
                    // @ts-expect-error sss
                    const scrollPosition = detailedSimulationSection.offsetTop - navBarHeight;
                    window.scrollTo({
                      top: scrollPosition,
                      behavior: 'smooth'
                    });
                  }
                  //
                }}
                //
              >
                Detailed simulation
              </p>
            </div>
          </div>
          <div>
            <div className={style.subHeading}>
              <span className={style.subHeadIcom}>
                <SlQuestion />
              </span>
              <h4>Indices</h4>
            </div>
            <div className={style.subHeadingText}>
              <p
                className={style.clickAble}
                onClick={() => {
                  const topIndicesSection = topIndices?.current;
                  if (topIndicesSection) {
                    // @ts-expect-error sss
                    const scrollPosition = topIndicesSection.offsetTop - navBarHeight;
                    window.scrollTo({
                      top: scrollPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                //
              >
                Top (Alt) Indices
              </p>

              <p
                className={style.clickAble}
                onClick={() => {
                  const sectoralIndicesSection = sectoralIndices?.current;
                  if (sectoralIndicesSection) {
                    // @ts-expect-error sss
                    const scrollPosition = sectoralIndicesSection.offsetTop - navBarHeight;
                    window.scrollTo({
                      top: scrollPosition,
                      behavior: 'smooth'
                      //
                    });
                  }
                }}
                //
              >
                Sectoral Indices{' '}
              </p>

              <p
                className={style.clickAble}
                onClick={() => {
                  const TailorIndicesSection = TailorIndices?.current;
                  if (TailorIndicesSection) {
                    // @ts-expect-error sss
                    const scrollPosition = TailorIndicesSection.offsetTop - navBarHeight;
                    window.scrollTo({
                      top: scrollPosition,
                      behavior: 'smooth'
                      //
                    });
                  }
                }}
                //
              >
                Tailor-Made Indices
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.QueshtionIcon}>
        <img src={queshion} alt="any queshion" loading="lazy" />
      </div>
    </div>
  );
};

export default Sidebar;
