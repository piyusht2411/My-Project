import React from 'react';
import styles from './index.module.scss';
import { MdArrowOutward, MdArrowRightAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';

type Blog = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
};

type CardPropsType = {
  blog: Blog;
};

const Card = (props: CardPropsType) => {
  const { blog } = props;

  return (
    <div className={styles.card}>
      <div className={styles.imageDiv}>
        <img className={styles.cardImage} src={blog.imageUrl} alt="" />
      </div>
      <div className={styles.content}>
        <Link to={`/blog-and-social/${blog.title}`} className={styles.headingWithArrow}>
          <h3>{blog.title}</h3>
          <MdArrowOutward size={25} />
        </Link>
        <div>
          <p className={styles.description}>{blog.description}</p>
        </div>
      </div>
      <Link to={`/blog-and-social/${blog.title}`} className={styles.readMoreWithArrow}>
        <p style={{ color: '#00D7FB' }}>Read More</p>
        <MdArrowRightAlt size={25} color="#00D7FB" />
      </Link>
    </div>
  );
};

export default Card;
