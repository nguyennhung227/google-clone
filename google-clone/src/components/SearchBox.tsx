"use client";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter, useSearchParams } from "next/navigation";
import { RxCross2 } from "react-icons/rx";

export function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  const handleInputChange = (e: React.FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    setTerm(target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
      >
        <input
          type="text"
          className="w-full focus:outline-none"
          onChange={handleInputChange}
          value={term}
        />
        <RxCross2
          className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
          onClick={() => setTerm("")}
        />
        <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-4" />
        <AiOutlineSearch
          className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
          onClick={handleFormSubmit}
        />
      </form>
    </>
  );
}
