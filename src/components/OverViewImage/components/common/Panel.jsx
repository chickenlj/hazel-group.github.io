import { twMerge } from "tailwind-merge";
import React from "react";
import { useContext } from "preact/hooks";
import { AppContext } from "../../context";

export const Panel = ({
  className = "",
  width = "100%",
  height = "90%",
  children,
  title,
  titleStyle = {},
  panelSkewDir = 1, //面板倾斜方向
}) => {
  const appContext = useContext(AppContext);
  return (
    <div
      className="h-full"
      style={{
        width,
      }}
    >
      <div className={`relative w-full`}>
        <div
          class={twMerge(
            "shadow-lg rounded-xl absolute top-0 w-full h-full",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
            transform: `perspective(2000px) rotateX(30deg) skewX(${
              panelSkewDir > 0 ? "6" : "-6"
            }deg)`,
            background: appContext.colors.panelColor,
            boxShadow:
              "0px 6px 1px 0px rgb(73 101 120 / 20%), 3px 10px 13px 2px rgb(0 0 0 / 0.1)",
          }}
        >
          {/* <div class="h-full w-full flex items-center justify-evenly relative">
            {children}
          </div> */}
        </div>
        <div class="h-full w-full flex items-center justify-evenly relative p-4">
          {children}
        </div>
      </div>
      <div
        class={twMerge("text-md mt-1 text-[#1F36AD]")}
        style={{ textShadow: "1px 1px 2px #8C99DD", ...titleStyle }}
      >
        {title}
      </div>
    </div>
  );
};
