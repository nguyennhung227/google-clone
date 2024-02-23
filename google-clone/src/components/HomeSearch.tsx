"use client";
import { Router } from "next/router";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
export function HomeSearch() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    setInput(target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const handleRandomSearch = async () => {
    setLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    router.push(`/search/web?searchTerm=${response}`);
    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={handleInputChange}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          onClick={handleFormSubmit}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
        >
          Google search
        </button>
        <button
          disabled={loading}
          onClick={handleRandomSearch}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
        >
          {loading ? "loading..." : "I am Feeling Lucky"}
        </button>
      </div>
    </>
  );
}
