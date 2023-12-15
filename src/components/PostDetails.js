// components/PostDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserDisplay from './UserDisplay';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    if (!isNaN(postId)) {
      fetchPostDetails();
    }
  }, [postId]);

  if (Object.keys(post).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Post Details</h2>
      <UserDisplay user={post} />
    </div>
  );
};

export default PostDetails;
