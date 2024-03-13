import React, { useState } from 'react';
import mail from '../../assets/svg/mail.svg';
import mailHover from '../../assets/svg/mailHover.svg';
import style from './index.module.scss';
import Kit from '../../assets/svg/kit.svg';
import mainLogo from '../../assets/svg/MainLogo.svg';
import wave from '../../assets/svg/wave.svg';

// icons
import {
  FaTwitter,
  FaDiscord,
  FaTelegramPlane,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaFacebookF,
  FaWhatsapp
} from 'react-icons/fa';
import { FaMedium, FaInstagram } from 'react-icons/fa6';
import { PiRedditLogoFill } from 'react-icons/pi';
import { TbBrandGithubFilled } from 'react-icons/tb';

const SOCIALS = [
  <FaTwitter key={1} />,
  <FaDiscord key={2} />,
  <FaTelegramPlane key={3} />,
  <FaMedium key={4} />,
  <FaYoutube key={5} />,
  <PiRedditLogoFill key={6} />,
  <FaLinkedinIn key={7} />,
  <FaTiktok key={8} />,
  <FaInstagram key={9} />,
  <FaFacebookF key={10} />,
  <FaWhatsapp key={11} />,
  <TbBrandGithubFilled key={12} />
];

const Footer = () => {
  const [showHover, setShowHover] = useState(false);
  return (
    <div>
      <div className={style.MainLogoSection}>
        <img className={style.Wave} src={wave} loading="lazy" alt="wave" />
        <img className={style.mainLogo} src={mainLogo} loading="lazy" alt="logo" />
      </div>
      <div className="container">
        <div className={style.footer}>
          <div className={style.footerMiddleSection}>
            <div className={style.footerText}>
              <h2>Invest effortlessly. Mitigate risk</h2>
            </div>
            <div className={style.footerButton}>
              <button className={style.footerButtonFirst}>Invest Now</button>
              <button className={style.footerButtonSecond}>Learn More</button>
            </div>
          </div>
          {/* <hr className={style.dottedLine} /> */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.06rem'
            }}
            //
          >
            <div style={{ width: '8%', border: '0.9px dashed #4171B9', opacity: 0.4 }}></div>
            <div style={{ width: '8%', border: '0.9px dashed #4171B9', opacity: 0.5 }}></div>
            <div style={{ width: '8%', border: '0.9px dashed #4171B9', opacity: 0.6 }}></div>
            <div style={{ width: '8%', border: '0.9px dashed #4171B9', opacity: 0.7 }}></div>
            <div style={{ width: '8%', border: '0.9px dashed #4171B9', opacity: 0.8 }}></div>
            <div style={{ width: '8%', border: '0.9px dashed #4171B9', opacity: 0.8 }}></div>
            <div style={{ width: '8%', border: '0.9px dashed #4171B9', opacity: 0.7 }}></div>
            <div style={{ width: '8%', border: '0.9px dashed #4171B9', opacity: 0.6 }}></div>
            <div style={{ width: '8%', border: '0.9px dashed #4171B9', opacity: 0.5 }}></div>
            <div style={{ width: '8%', border: '0.9px dashed #4171B9', opacity: 0.4 }}></div>
          </div>
          <div className={style.mailConatinerMobile}>
            <img
              className={style.logoMail}
              src={showHover ? mailHover : mail}
              loading="lazy"
              onMouseEnter={() => {
                setShowHover(true);
              }}
              onMouseLeave={() => {
                setShowHover(false);
              }}
              alt="mail"
            />
            <p className={style.mailPara}>contact@imperium-lex.com</p>
          </div>

          <div className={style.footerConatiner}>
            <div className={style.leftSection}>
              <div className={style.mailConatiner}>
                <img
                  className={style.logoMail}
                  src={showHover ? mailHover : mail}
                  loading="lazy"
                  onMouseEnter={() => {
                    setShowHover(true);
                  }}
                  onMouseLeave={() => {
                    setShowHover(false);
                  }}
                  alt="mail"
                />
                <p className={style.mailPara}>contact@imperium-lex.com</p>
              </div>
              <div className={style.gridContainer}>
                {SOCIALS.map((ele, ind) => (
                  <div key={ind} className={style.logos}>
                    {ele}
                  </div>
                ))}
              </div>
            </div>
            <div className={style.footerHeadingSection}>
              <h4 className={style.footerHeading}>HOME</h4>
              <p>About us</p>
              <p>Imperium</p>
              <p>Presentation</p>
              <p>Roadmap</p>
              <p>Team</p>
            </div>
            <div className={style.footerHeadingSection}>
              <h4 className={style.footerHeading}>LEX</h4>
              <p>Token</p>
              <p>Tokenomics</p>
              <p>Litepaper</p>
              <p>Whitepaper</p>
            </div>
            <div className={style.footerHeadingSection}>
              <h4 className={style.footerHeading}>MVP SIMULATOR</h4>
              <p>General Presentation</p>
              <p>Investment Simulation</p>
              <p>Detailed Simulator</p>
            </div>
            <div className={style.footerHeadingSection}>
              <h4 className={style.footerHeading}>HOW IT WORKS</h4>
              <p>How it Works</p>
              <p>Video Explainers</p>
              <div className={style.kitSection}>
                <img src={Kit} />
                <p>Press kit</p>
              </div>
            </div>
          </div>
          <div className={style.footerBottomSection}>
            <div>
              <p className={style.copyRight}>&#169; 2023 IMPERIUM. All rights reserved</p>
            </div>
            <div className={style.policySection}>
              <p>AML DISCLAIMER RISK</p>
              <p>DISCLAIMER COMPLAINT</p>
              <p>HANDLING PROCEDURE</p>
              <p>TERMS AND CONDITION</p>
              <p>COOKIE POLICY</p>
              <p>PRIVACY POLICY</p>
            </div>
          </div>
          <p className={style.copyRightBottom}>&#169; 2023 IMPERIUM. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
