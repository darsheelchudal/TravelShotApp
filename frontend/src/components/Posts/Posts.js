import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {posts.map((post) => (
          <div className="" key={post._id}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
