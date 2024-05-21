import React from "react";

const Container = ({
  children,
  className,
  tag: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}) => {
  // width: 100%;
  //   margin-right: auto;
  //   margin-left: auto;
  //   padding-right: 2rem;
  //   padding-left: 2rem;
  //   margin: auto;
  //   text-align: center;
  //   justify-content: center;
  //   display: flex;
  return (
    <Tag
      className={`container mx-auto px-8 text-center flex justify-center ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Container;
