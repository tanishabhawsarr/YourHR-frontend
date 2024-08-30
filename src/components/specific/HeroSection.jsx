import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center px-4">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium text-sm">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Search, Apply
          <br />
          Get Your<span className="text-[#6a38c2]"> Dream Job</span>
        </h1>
        <p className="text-sm sm:text-base">
          "Discover your next career move with YouHR — where talent meets
          opportunity."
        </p>
      </div>
      <div className="flex w-full max-w-lg shadow-lg border-gray-200 pl-3 pr-2 rounded-full items-center gap-2 mx-auto">
        <input
          type="text"
          placeholder="Find your Dream Jobs"
          className="outline-none border-none w-full text-sm px-4 py-2"
        />
        <Button className="rounded-full bg-[#6a38c2] hover:bg-black px-4 py-2">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
