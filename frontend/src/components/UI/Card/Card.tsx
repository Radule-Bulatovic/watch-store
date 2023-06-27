import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

export const Card = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className={`border-2 border-black rounded-lg bg-neutral-800 text-white  ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};
