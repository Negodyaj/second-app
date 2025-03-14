import React, { ReactNode, Suspense } from 'react'

const DashboardLayout = ({
  children,
  personal,
  friends,
  posts,
}: {
  children: ReactNode;
  personal: ReactNode;
  friends: ReactNode;
  posts: ReactNode;
}) => {
  return (
    <>
      {children}
      <Suspense fallback={<h2>Loading personal</h2>}>{personal}</Suspense>
      <Suspense fallback={<h2>Loading friends</h2>}>{friends}</Suspense>
      <Suspense fallback={<h2>Loading posts</h2>}>{posts}</Suspense>
    </>
  );
};


export default DashboardLayout