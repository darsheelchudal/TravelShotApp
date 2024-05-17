import React from "react";
import Post from "../Posts/Post/Post";

const Form = () => {
  const handleSubmit = () => {};
  return (
    <>
      <div class="sm:w-[38rem] mx-auto my-2 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
        <div class="bg-green-500 px-10 py-10 text-center text-white">
          <p class="font-serif text-2xl font-semibold tracking-wider">
            Create your memory by adding a post
          </p>
        </div>

        <div class="space-y-4 px-8 py-10">
          <label class="block" for="name">
            <input
              class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Creator"
              onChange={(e) => e.target.value()}
            />
          </label>
          <label class="block" for="name">
            <input
              class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Title"
              onChange={(e) => e.target.value()}

            />
          </label>
          <label class="block" for="name">
            <textarea
              class="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Message"
              onChange={(e) => e.target.value()}

            ></textarea>
          </label>
          <label class="block" for="name">
            <input
              class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Tags"
              onChange={(e) => e.target.value()}

            />
          </label>
          <button class="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">
            Submit
          </button>
          <button class="mx-10 mt-4 rounded-full bg-red-800 px-10 py-2 font-semibold text-white">
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
