import React, { useEffect } from "react";

const Page = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title} | React Sample App`;
    window.scrollTo(0, 0);
  }, [title]);

  return <div>{children}</div>;
};

export default Page;
