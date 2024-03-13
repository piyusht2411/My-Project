import React from 'react';
import styles from './index.module.scss';

const TrendingBlogs = () => {
  return (
    <div className={styles.trendingBlogs}>
      <div className={styles.blogLogo}>
        <img
          src="https://cms.imperium-lex.com/wp-content/uploads/2022/12/general.jpg"
          className={styles.blogImage}
          alt=""
        />
      </div>
      <div className={styles.blogContent}>
        <h4>Christmas Giveaway - Prizes of $1111 in LEX</h4>
        <p>01/02/2024 15:32</p>
      </div>
    </div>
  );
};

export default TrendingBlogs;
