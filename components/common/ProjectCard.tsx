"use client"

import React from "react";

type PCard = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imgUrl: any;
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    description: any;
};
export const ProjectCard = ({ imgUrl, title, description }: PCard) => {
  return (
    <div>
      <div
        className="h-52 md:h-65 rounded-t-xl relative group bg-contain"
        style={{ background: `url(${imgUrl.src})`, backgroundSize: "cover" }}
      >
        <div className="overlay flex items-center justify-center gap-5 absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {description.Deployed.map((item: { link: string; logo: React.ElementType; color: string }, index: string) => (
            <a
              key={index}
              href={item.link}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
            >
              {React.createElement(item.logo, {
                className:
                  "w-10 h-10 cursor-pointer text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                style: { color: item.color },
              })}
            </a>
          ))}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description.Description}</p>
      </div>
    </div>
  );
};