import React, { useState } from 'react'

import Thumbnail1 from '../assets/blog1.jpg';
import Thumbnail2 from '../assets/blog2.jpg';
import Thumbnail3 from '../assets/blog3.jpg';
import Thumbnail4 from '../assets/blog4.jpg';
import PostItem from './PostItem';

const DUMMY_POSTS = [
  {
    id: '1',
    thumbnail: Thumbnail1,
    category: 'education',
    title: 'Education in India',
    desc: 'Education is important not only for our career growth it also helps for our overall growth',
    authorID: 3
  },
  {
    id: '2',
    thumbnail: Thumbnail2,
    category: 'science',
    title: 'This is the title of the blog Education',
    desc: 'Education is important not only for our career growth it also helps for our overall growth',
    authorID: 1
  },
  {
    id: '3',
    thumbnail: Thumbnail3,
    category: 'military',
    title: 'This is the title of the blog Education',
    desc: 'Education is important not only for our career growth it also helps for our overall growth',
    authorID: 2
  },
  {
    id: '4',
    thumbnail: Thumbnail4,
    category: 'education',
    title: 'This is the title of the blog Education',
    desc: 'Education is important not only for our career growth it also helps for our overall growth',
    authorID: 3
  },

]
const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
      <div className="posts__container">
        {
          posts.map(({id, thumbnail, category, title, desc, authorID}) =>
          <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title}
          desc = {desc} authorID={authorID}/>)
        }
      </div>
    </section>
  )
}

export default Posts