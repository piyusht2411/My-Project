// import React, { useState } from 'react';
import Card from '../card';
import styles from './index.module.scss';

const BLOGS: Blog[] = [
  {
    _id: '1',
    title: 'Christmas Giveaway - Prizes of $1111 in LEX',
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
    imageUrl: 'https://cms.imperium-lex.com/wp-content/uploads/2022/12/general.jpg'
  },
  {
    _id: '2',
    title: 'Christmas Giveaway',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    imageUrl: 'https://cms.imperium-lex.com/wp-content/uploads/2022/12/general.jpg'
  },
  {
    _id: '3',
    title: 'Christmas Giveaway for students',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    imageUrl: 'https://cms.imperium-lex.com/wp-content/uploads/2022/12/general.jpg'
  },
  {
    _id: '4',
    title: 'Christmas Giveaway',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    imageUrl: 'https://cms.imperium-lex.com/wp-content/uploads/2022/12/general.jpg'
  },
  {
    _id: '5',
    title: 'Christmas Giveaway for students',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    imageUrl: 'https://cms.imperium-lex.com/wp-content/uploads/2022/12/general.jpg'
  }
];

type Blog = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
};

const AllBlogs = () => {
  return (
    <div className="container">
      <div className={`${styles.allBlogs}`}>
        {BLOGS.map((blog: Blog) => (
          <div key={blog._id}>
            <Card blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
