import React from 'react';
import styles from './index.module.scss';
import { FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { PiRedditLogoFill } from 'react-icons/pi';
import TrendingBlogs from '../TrendingBlogs';

import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

type BlogDetailsProps = {
  title?: string;
  description?: string;
};

const BlogDetails = (props: BlogDetailsProps) => {
  return (
    <div className={`${styles.blogDetails} container`}>
      <div className={styles.contentWithSlider}>
        <div className={styles.content}>
          <h3>Share:</h3>
          <div className={styles.icons}>
            <div className={styles.singleIcon}>
              <FaFacebookF size={20} />
            </div>
            <div className={styles.singleIcon}>
              <FaTwitter size={20} />
            </div>
            <div className={styles.singleIcon}>
              <FaLinkedinIn size={20} />
            </div>
            <div className={styles.singleIcon}>
              <PiRedditLogoFill size={20} />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit similique nemo harum
            doloribus cupiditate odio qui unde molestias modi? Ducimus totam doloribus at similique,
            dolor doloremque minima voluptatibus eius quis. Tenetur officiis cupiditate perferendis
            facere nihil porro illo inventore facilis vitae dicta harum alias laborum voluptatum
            labore quae blanditiis eos, ut nostrum iste aperiam excepturi nobis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit similique nemo harum
            doloribus cupiditate odio qui unde molestias modi? Ducimus totam doloribus at similique,
            dolor doloremque minima voluptatibus eius quis. Tenetur officiis cupiditate perferendis
            facere nihil porro illo inventore facilis vitae dicta harum alias laborum voluptatum
            labore quae blanditiis eos, ut nostrum iste aperiam excepturi nobis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit similique nemo harum
            doloribus cupiditate odio qui unde molestias modi? Ducimus totam doloribus at similique,
            dolor doloremque minima voluptatibus eius quis. Tenetur officiis cupiditate perferendis
            facere nihil porro illo inventore facilis vitae dicta harum alias laborum voluptatum
            labore quae blanditiis eos, ut nostrum iste aperiam excepturi nobis!
          </p>
        </div>
        <div className={styles.slider}>
          <div className={styles.topPartialBorder}></div>
          <div className={styles.leftRight}>
            <div className={styles.left}>
              <div>
                <MdOutlineArrowBackIos size={30} color="#00D7FB" />
              </div>
              <p className={styles.title}>Christmas Giveaway - Prizes of $1111 in LEX</p>
            </div>
            <div className={styles.right}>
              <p className={styles.title}>Christmas Giveaway - Prizes of $1111 in LEX</p>
              <div>
                <MdOutlineArrowForwardIos size={30} color="#00D7FB" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.relatedArticles}>
        <h3>Trending News</h3>
        <TrendingBlogs />
        <TrendingBlogs />
        <TrendingBlogs />
        <TrendingBlogs />
        <TrendingBlogs />
      </div>
    </div>
  );
};

export default BlogDetails;
