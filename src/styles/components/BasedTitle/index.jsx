import React from "react";

export const BasedTitle = ({ children, className, tag }) => {
  return (
    <>
      {tag === "Title1" && <h1 className={className}>{children}</h1>}
      {tag === "Title2" && <h2 className={className}>{children}</h2>}
      {tag === "Title3" && <h3 className={className}>{children}</h3>}
    </>
  );
};
