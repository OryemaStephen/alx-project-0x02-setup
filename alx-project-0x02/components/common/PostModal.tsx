import { PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onAddCard, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCard({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="rounded-md p-6 bg-[#E9E9E9] min-w-sm mx-auto my-4">
        <h2 className="text-xl font-bold mb-4">Add a Content</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <input
              type="text"
              name="content"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter content"
              className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex justify-between gap-4 items-center">
            <button
              type="button"
              onClick={() => onClose()}
              className="bg-gray-400 text-black px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
