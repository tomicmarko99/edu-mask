import React from "react";
import { LinkList } from "../helpers/LinkList";

const Links = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[url('https://i.ibb.co/w4hJz90/background1.png')] bg-center bg-no-repeat bg-cover px-5 py-[100px] flex justify-center">
      <div className="max-w-[1280px] w-full flex flex-col gap-5">
        <h1 className="text-xl text-[#333333]">
          Explore popular websites and softwares
        </h1>
        <div className="overflow-y-auto shadow-xl rounded p-5 flex flex-wrap gap-5">
          {LinkList.map((links) => {
            return (
              <a
                target="_blank"
                key={links.title}
                href={links.href}
                className="p-3 bg-[#333333] rounded text-[#fafafa]"
              >
                {links.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Links;
