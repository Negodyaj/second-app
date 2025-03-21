'use client';

import { useEffect } from 'react';
import { usePostsStore } from '../lib/usePostsStore';
import { PostItem } from './PostItem';

export function PostList() {
  const { posts, fetchPosts } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
