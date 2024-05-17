import React from "react";
import { AiFillLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import moment from "moment";

const Post = ({ post }) => {
  return (
    <>
      <div class="relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md mx-auto">
        <a href="#">
          <img
            class="h-60 w-full object-cover rounded-t-lg"
            src={post.selectedFile}
            alt="product image"
          />
        </a>

        <span class="absolute top-0 py-6 left-0 w-28 text-center text-3xl text-white">
          {post.creator}
        </span>
        <span class="absolute top-0 py-20 left-0 w-28 text-center text-1xl text-white">
          {moment(post.createdAt).fromNow()}
        </span>
        <span class="absolute top-0 py-5 right-0 w-50 text-center text-4xl text-white">
          <BiDotsHorizontalRounded />
        </span>

        <div class="mt-4 px-5 pb-5">
          <a href="#">
            <h6 class="text-xl font-semibold tracking-tight text-slate-900">
              {post.title}
            </h6>
          </a>
          <div class="mt-2.5 mb-5 flex items-center">
            <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              # {post.tags}
            </span>
          </div>
          <div class="flex items-center justify-between">
            <p>
              <a
                href="#"
                class="flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <span class="text-sm font-bold text-white-900">
                  <AiFillLike />
                </span>
                Like
              </a>
            </p>
            <a
              href="#"
              class="flex items-center rounded-md bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Delete
              <span class="text-sm font-bold text-white-900">
                <MdDelete />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
