import { NextResponse } from 'next/server';

export async function PATCH(request: Request, { params }: { params: { postId: number } }) {
  const { postId } = params;

  // Simulate a successful like action
  const updatedPost = {
    id: postId,
    title: 'Sample Post',
    date: '2023-10-01',
    likes: 42, // Increment this value in a real backend
    isLiked: true,
  };

  return NextResponse.json(updatedPost);
}
