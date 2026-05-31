"use client";

import React from "react";

type ButtonProps = {
  title: string;
  isActive: boolean;
  onClick: (val: string) => void;
};

export const ProjectTags = ({ title, isActive, onClick }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick(title)}
      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 outline-none select-none ${
        isActive
          ? "bg-purple-500 text-white shadow-lg shadow-purple-500/20 border border-purple-400/20"
          : "text-slate-400 hover:text-slate-200 border border-transparent"
      }`}
    >
      {title}
    </button>
  );
};