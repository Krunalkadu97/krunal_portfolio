"use client";

import React from "react";
import { stcakItems, toolsItem } from "@/components/helper/constants";

export const Stack = () => {
  return (
    <section
      id="stack"
      className="relative py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="
              inline-flex
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              bg-purple-500/10
              text-purple-400
              border
              border-purple-500/20
            "
          >
            TECHNICAL STACK
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-bold
              text-white
            "
          >
            Technologies I Work With
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-gray-400
              text-lg
            "
          >
            Building scalable mobile and web applications with
            modern technologies and best engineering practices.
          </p>
        </div>

        {/* Stack */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {stcakItems.map((item) => (
            <div
  key={item.id}
  className="
    group
    flex
    flex-col
    items-center
    text-center
    rounded-3xl
    border
    border-white/10
    bg-gradient-to-b
    from-white/10
    to-white/[0.03]
    backdrop-blur-md
    p-6
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-purple-500/40
    hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
  "
>
              <div
                className="
                  w-20
                  h-20
                  mx-auto
                  rounded-2xl
                  bg-black/20
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  mb-5
                "
              >
                {React.createElement(item.icon, {
                  className: "w-10 h-10",
                  style: { color: item.color },
                })}
              </div>

              <h3 className="text-white font-semibold text-lg">
                {item.name}
              </h3>

              <div
                className="
                  w-16
                  h-1
                  rounded-full
                  bg-purple-500
                  mx-auto
                  mt-5
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                "
              />
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mt-24">
          <div className="text-center mb-14">
            <span
              className="
                inline-flex
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                bg-purple-500/10
                text-purple-400
                border
                border-purple-500/20
              "
            >
              TOOLS & WORKFLOW
            </span>

            <h3
              className="
                mt-6
                text-4xl
                md:text-5xl
                font-bold
                text-white
              "
            >
              Tools I Use Daily
            </h3>

            <p
              className="
                mt-4
                text-gray-400
                text-lg
              "
            >
              Development, testing, collaboration and delivery.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {toolsItem.map((item) => (
              <div
                key={item.id}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  flex
                  flex-col
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  hover:border-purple-500/40
                  hover:bg-white/[0.05]
                "
              >
                {React.createElement(item.icon, {
                  className: "w-12 h-12 mb-4",
                  style: { color: item.color },
                })}

                <p className="text-gray-300 font-medium">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};