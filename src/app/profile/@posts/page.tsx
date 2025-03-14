export default async function Posts() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <h2>Posts</h2>;
}
