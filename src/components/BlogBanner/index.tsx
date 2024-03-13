import React from 'react';
import styles from './index.module.scss';
import calendarSvg from '../../assets/svg/calendar.svg';

type BlogBannerProps = {
  blogImage: string | undefined;
  blogDate: string | undefined;
  blogTime: string | undefined;
};

const BlogBanner = (props: BlogBannerProps) => {
  const { blogImage, blogDate, blogTime } = props;
  return (
    <div className={`${styles.blogBanner}`}>
      <div style={{ position: 'relative' }}>
        <img
          src={
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/119d4c168402497.6439944deecce.jpg' ||
            blogImage
          }
          alt=""
          className={styles.blogBannerImage}
        />
        <div className={styles.overlay}>
          <h1 className={styles.text} style={{ fontWeight: '300' }}>
            &quot;Not your keys, noy your coins&quot; - What is self-custody?
          </h1>
          <div className={styles.calendarAndDate}>
            <img src={calendarSvg} className={calendarSvg} alt="" />
            <p className={styles.text} style={{ fontWeight: '300' }}>
              {blogDate} {blogTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
