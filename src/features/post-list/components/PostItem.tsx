'use client';

import { Card, CardContent, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { usePostsStore } from '../lib/usePostsStore';

type PostItemProps = {
  post: {
    id: number;
    title: string;
    date: string;
    likes: number;
    isLiked: boolean;
  };
}

export function PostItem({ post }: PostItemProps) {
  const likePost = usePostsStore((state) => state.likePost);

  const handleLike = () => {
    likePost(post.id);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography>{post.date}</Typography>
        <Typography>Likes: {post.likes}</Typography>
        <IconButton onClick={handleLike} aria-label="like">
          <FavoriteIcon color={post.isLiked ? 'error' : 'action'} />
        </IconButton>
      </CardContent>
    </Card>
  );
}
