import { memo } from "react";
import { twMerge } from "tailwind-merge";

/** Memoized Shape Component  */
const Shape = ({ name, onBoxClick, clicked }) => {
  return (
    <div
      onClick={onBoxClick}
      className={twMerge(
        "aspect-square w-[clamp(6rem,19vw,10rem)] flex cursor-pointer justify-center items-center bg-slate-400 border border-slate-500 transition-all duration-300",
        clicked && "bg-slate-900 text-white"
      )}
    >
      Box {name}
    </div>
  );
};

export default memo(Shape);
