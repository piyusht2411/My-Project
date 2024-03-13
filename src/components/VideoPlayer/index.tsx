import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { FaPlay, FaPause } from 'react-icons/fa6';
import style from './index.module.scss';
// import ProgressBar from './ProgressBar';
import ArrowIcon from '../../assets/svg/VideoPlayer/arrow.svg';
import Blank from '../../assets/svg/VideoPlayer/rectangle.svg';
import Rectangle from '../../assets/svg/VideoPlayer/blank.svg';
import Lex from '../../assets/svg/VideoPlayer/lex-video.svg';

const VIDEO_LEN = 90;
const Logos = [
  {
    id: 0,
    time: 12,
    label: '0:12',
    logo: Lex
  },
  {
    id: 1,
    time: 25,
    label: '0:25',
    logo: Rectangle
  },
  {
    id: 2,
    time: 35,
    label: '0:35',
    logo: Rectangle
  },
  { id: 3, time: 45, label: '0:45', logo: Rectangle },
  {
    id: 4,
    time: 65,
    label: '1:05',
    logo: Rectangle
  },
  {
    id: 5,
    time: 90,
    label: '1:30',
    logo: Lex
  }
];

interface VideoPlayerProps {
  videoURL: string;
}

const VideoPlayer = ({ videoURL }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);
  const [progressInSec, setProgressInSec] = useState(0);
  const [show, setShow] = useState(true);
  const myRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    myRef.current?.scrollTo({
      left: 150,
      behavior: 'smooth'
    });
  });

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const handleOnPlay = () => {
    setIsPlaying(true);
  };

  const handleOnPause = () => {
    setIsPlaying(false);
  };
  const handleProgress = (progress: { played: number; playedSeconds: number }): void => {
    setProgressInSec(progress.playedSeconds);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTo = parseFloat(e.target.value);
    if (playerRef.current) {
      playerRef.current.seekTo(seekTo, 'seconds');
    }
  };

  useEffect(() => {}, [progressInSec]);

  return (
    <div>
      <div
        className={style.VideoSection}
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          if (isPlaying) setShow(false);
        }}
        //
      >
        <div style={{ position: 'relative' }}>
          <div className={style.player}>
            <ReactPlayer
              ref={playerRef}
              url={videoURL}
              playing={isPlaying}
              controls={false}
              onPlay={handleOnPlay}
              onPause={handleOnPause}
              onProgress={handleProgress}
              width="100%"
              height="100%"
            />
          </div>

          <div className={style.playPause}>
            <button onClick={handlePlayPause} className={!show ? style.hidden : ' '}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        </div>
        <div className={style.progressbar}>
          <input
            type="range"
            min={0}
            max={VIDEO_LEN}
            step={1}
            value={progressInSec}
            onChange={handleSeek}
            className={style.rangeSlider}
          />
          {Logos.map((ele) => (
            <p
              key={ele.id}
              className={style.time}
              style={{ left: `${(100 / VIDEO_LEN) * ele.time}%` }}
              //
            >
              <span>|</span>
              <span>{ele.label}</span>
            </p>
          ))}
        </div>
      </div>
      <div className={style.progressModals}>
        {Logos.map((ele, index) => (
          <>
            <img
              src={Math.round(progressInSec) >= ele.time ? ele.logo : Blank}
              alt="logo"
              width={70}
              height={70}
              loading="lazy"
              key={`${ele.id}_1`}
            />

            <img
              src={ArrowIcon}
              alt="logo"
              loading="lazy"
              className={index + 1 === Logos.length ? style.hideArrow : ' '}
              key={`${ele.id}_2`}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
