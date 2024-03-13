import React, { useRef, useState } from 'react';
import Sidebar from '../components/SideBar';
import style from './style.module.scss';
import ship from '../assets/svg/ship.svg';
import { IoMenu } from 'react-icons/io5';
import VideoPlayer from '../components/VideoPlayer';
import MyVideo from '../assets/video/demo.mp4';
import NewsLetter from '../components/NewsLetter';

const HowItWorks = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const tournamentRef = useRef();
  const referalProgram = useRef();
  const investmentSimulation = useRef();
  const detailedSimulation = useRef();
  const topIndices = useRef();
  const sectoralIndices = useRef();
  const TailorIndices = useRef();

  const closeMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="container">
      <div className={style.howitWorksPage}>
        <div className={style.leftConatiner + ' ' + (menuOpen ? style.showMenu : ' ')}>
          <Sidebar
            tournamentRef={tournamentRef}
            referalProgram={referalProgram}
            investmentSimulation={investmentSimulation}
            detailedSimulation={detailedSimulation}
            topIndices={topIndices}
            sectoralIndices={sectoralIndices}
            TailorIndices={TailorIndices}
            closeMenu={closeMenu}
          />
        </div>
        <div></div>
        <div className={style.rightConatiner}>
          <button className={style.hambuger} onClick={closeMenu}>
            <IoMenu />
          </button>
          <div className={style.videoconatiner}>
            <VideoPlayer videoURL={MyVideo} />
            <div className={style.videoText}>
              <p>
                <span className={style.videoTextHightlight}>Purchase $LEX </span>
                <span className={style.videoTextNormal}>
                  tokens from offical addresses to be whitewashed to invest in the Imperium index
                </span>
              </p>
              <p className={style.videoDescription}>
                (Video Timeline chapter description text. 2 line max. Each step icon displayes
                different info)
              </p>
            </div>
          </div>
          {/*
           @ts-expect-error: https */}
          <div ref={tournamentRef} className={style.pagePara} id="tournaments">
            <h3>Imperium Tournaments: Get into the arena and win points</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In cumque doloremque
              doloribus, facilis quae repellat possimus! Fugiat, laudantium ducimus dolores, ab
              quaerat numquam eos minus, quod iste eius impedit earum veritatis ex beatae. Nostrum
              odio autem optio voluptas laborum, dolorum quidem necessitatibus, dolores consequatur
              possimus blanditiis at perspiciatis, sunt magni!
            </p>
            <div className={style.middlePara}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero esse soluta commodi
                dicta nisi laboriosam, atque architecto necessitatibus recusandae fugit perferendis
                dolorum consequuntur culpa numquam obcaecati doloremque odit accusamus mollitia nam
                excepturi amet. Reprehenderit voluptates id qui in, ab eveniet quae voluptatum illo
                neque exercitationem tempora voluptatem, veniam ipsum explicabo assumenda, incidunt
                est animi? Neque perspiciatis nihil harum sint odit perferendis magnam quod.
                Consequuntur ipsa ipsam sit ex tempora, vel aut corporis veritatis, doloremque harum
                nisi asperiores magnam eius recusandae quibusdam dicta sunt! Reprehenderit maxime
                error assumenda facere sint ipsa facilis, iure pariatur cum sed soluta, dignissimos
                cupiditate sit minima!
              </p>
              <div className={style.shipImageConatiner}>
                <img src={ship} alt="ship" loading="lazy" />
                <a href="#">
                  <p>All Active Tournaments</p>
                </a>
              </div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita velit sunt
              repudiandae reiciendis enim laboriosam voluptas eligendi quos nesciunt dolore quo
              amet, inventore quibusdam molestiae rem ea debitis quam eius quas tempora ex eum
              provident magni? Id, cum deserunt alias qui eos laborum ad sit explicabo magni quo,
              saepe sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ex
              harum vel odit officia, eaque modi accusantium perspiciatis dicta. Consectetur.
            </p>
            {/*
           @ts-expect-error: https */}
            <h3 ref={referalProgram} id="referalProgram">
              Get extra points with referal program
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis suscipit dolorem
              modi ut blanditiis provident, earum laborum eos voluptatibus eius, quam praesentium,
              omnis error accusamus consequuntur culpa. Cupiditate labore mollitia nisi veritatis
              aliquid rerum natus expedita impedit illo tempora debitis ullam nemo qui nesciunt
              temporibus, aliquam, provident, delectus iusto fugiat dicta libero? Iusto magnam vero
              sit veniam corporis repudiandae atque qui soluta unde consequuntur, repellendus
              blanditiis aliquam aut odio dolores?
            </p>
            {/*
           @ts-expect-error: https */}
            <h3 ref={investmentSimulation} id="investmentSimulation">
              Investment Simulation
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis suscipit dolorem
              modi ut blanditiis provident, earum laborum eos voluptatibus eius, quam praesentium,
              omnis error accusamus consequuntur culpa. Cupiditate labore mollitia nisi veritatis
              aliquid rerum natus expedita impedit illo tempora debitis ullam nemo qui nesciunt
              temporibus, aliquam, provident, delectus iusto fugiat dicta libero? Iusto magnam vero
              sit veniam corporis repudiandae atque qui soluta unde consequuntur, repellendus
              blanditiis aliquam aut odio dolores?
            </p>
            {/*
           @ts-expect-error: https */}
            <h3 ref={detailedSimulation} id="detailedSimulation">
              Detailed Simulation
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis suscipit dolorem
              modi ut blanditiis provident, earum laborum eos voluptatibus eius, quam praesentium,
              omnis error accusamus consequuntur culpa. Cupiditate labore mollitia nisi veritatis
              aliquid rerum natus expedita impedit illo tempora debitis ullam nemo qui nesciunt
              temporibus, aliquam, provident, delectus iusto fugiat dicta libero? Iusto magnam vero
              sit veniam corporis repudiandae atque qui soluta unde consequuntur, repellendus
              blanditiis aliquam aut odio dolores?
            </p>
            {/*
           @ts-expect-error: https */}
            <h3 ref={topIndices} id="topIndices">
              Top (Alt) Indices
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis suscipit dolorem
              modi ut blanditiis provident, earum laborum eos voluptatibus eius, quam praesentium,
              omnis error accusamus consequuntur culpa. Cupiditate labore mollitia nisi veritatis
              aliquid rerum natus expedita impedit illo tempora debitis ullam nemo qui nesciunt
              temporibus, aliquam, provident, delectus iusto fugiat dicta libero? Iusto magnam vero
              sit veniam corporis repudiandae atque qui soluta unde consequuntur, repellendus
              blanditiis aliquam aut odio dolores?
            </p>
            {/*
           @ts-expect-error: https */}
            <h3 ref={sectoralIndices} id="sectoralIndices">
              Sectoral Indices
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis suscipit dolorem
              modi ut blanditiis provident, earum laborum eos voluptatibus eius, quam praesentium,
              omnis error accusamus consequuntur culpa. Cupiditate labore mollitia nisi veritatis
              aliquid rerum natus expedita impedit illo tempora debitis ullam nemo qui nesciunt
              temporibus, aliquam, provident, delectus iusto fugiat dicta libero? Iusto magnam vero
              sit veniam corporis repudiandae atque qui soluta unde consequuntur, repellendus
              blanditiis aliquam aut odio dolores?
            </p>
            {/*
           @ts-expect-error: https */}
            <h3 ref={TailorIndices} id="TailorIndices">
              Tailor-Made Indices
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis suscipit dolorem
              modi ut blanditiis provident, earum laborum eos voluptatibus eius, quam praesentium,
              omnis error accusamus consequuntur culpa. Cupiditate labore mollitia nisi veritatis
              aliquid rerum natus expedita impedit illo tempora debitis ullam nemo qui nesciunt
              temporibus, aliquam, provident, delectus iusto fugiat dicta libero? Iusto magnam vero
              sit veniam corporis repudiandae atque qui soluta unde consequuntur, repellendus
              blanditiis aliquam aut odio dolores?
            </p>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default HowItWorks;
