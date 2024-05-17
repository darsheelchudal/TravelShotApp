import React, { useState } from "react";
import Post from "../Posts/Post/Post";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPosts } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPosts(postData));
  };
  const clear = () => {};
  return (
    <>
      <div class="sm:w-[38rem] mx-auto my-2 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
        <div class="bg-green-500 px-10 py-10 text-center text-white">
          <p class="font-serif text-2xl font-semibold tracking-wider">
            Create your memory by adding a post
          </p>
        </div>

        <div class="space-y-4 px-8 py-10">
          <form onSubmit={handleSubmit}>
            <label class="block" for="Creator">
              <input
                class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                type="text"
                placeholder="Creator"
                value={postData.creator}
                onChange={(e) =>
                  setPostData({ ...postData, creator: e.target.value })
                }
              />
            </label>
            <label class="block" for="Title">
              <input
                class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                type="text"
                placeholder="Title"
                value={postData.title}
                onChange={(e) =>
                  setPostData({ ...setPostData, title: e.target.value })
                }
              />
            </label>
            <label class="block" for="Message">
              <textarea
                class="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                type="text"
                placeholder="Message"
                value={postData.message}
                onChange={(e) =>
                  setPostData({ ...setPostData, message: e.target.value })
                }
              ></textarea>
            </label>
            <label class="block" for="Tags">
              <input
                class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                type="text"
                placeholder="Tags"
                value={postData.tags}
                onChange={(e) =>
                  setPostData({ ...setPostData, tags: e.target.value })
                }
              />
            </label>

            <div className="fileInput m-4">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
                Upload file
              </label>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </div>

            <button class="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">
              Submit
            </button>
            <button class="mx-10 mt-4 rounded-full bg-red-800 px-10 py-2 font-semibold text-white">
              Clear
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
