import React, { useEffect, useState } from 'react';
import BlogBanner from '../components/BlogBanner';
import BlogDetails from '../components/BlogDetails';
import NewsLetter from '../components/NewsLetter';

type Blog = {
  _id: string;
  date: string;
  time: string;
  title: string;
  description: string;
  imageUrl: string;
};

const BlogPage = () => {
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    setBlog({
      _id: '1',
      date: '15/12/2022',
      time: '15:32',
      title: 'Christmas Giveaway - Prizes of $1111 in LEX',
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
      imageUrl: 'https://cms.imperium-lex.com/wp-content/uploads/2022/12/general.jpg'
    });
  }, []);

  return (
    <>
      <BlogBanner blogImage={blog?.imageUrl} blogDate={blog?.date} blogTime={blog?.time} />
      <BlogDetails />
      <NewsLetter />
    </>
  );
};

export default BlogPage;
