import { Post } from '@/entities/index';
import { create } from 'zustand';

type PostsState = {
  posts: Post[];
  likePost: (postId: number) => Promise<void>;
  fetchPosts: () => Promise<void>;
}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  fetchPosts: async () => {
    // Simulate fetching posts from an API
    const response = await fetch('/api/posts');
    const posts = await response.json();
    set({ posts });
  },
  likePost: async (postId) => {
    // Optimistically update the UI
    set((state) => ({
      posts: state.posts.map((post) => (post.id === postId ? { ...post, isLiked: true, likes: post.likes + 1 } : post)),
    }));

    // Send the API request to like the post
    const response = await fetch(`/api/posts/${postId}/like`, {
      method: 'PATCH',
    });
    if (!response.ok) {
      // Revert the UI if the API call fails
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === postId ? { ...post, isLiked: false, likes: post.likes - 1 } : post,
        ),
      }));
      throw new Error('Failed to like post');
    }

    // Update the state with the response from the API
    const updatedPost = await response.json();
    set((state) => ({
      posts: state.posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)),
    }));
  },
}));
