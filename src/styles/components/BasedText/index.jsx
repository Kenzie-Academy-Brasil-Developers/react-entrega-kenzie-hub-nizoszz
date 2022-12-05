import React from "react";

export const BasedText = ({ children, className, tag }) => {
  return (
    <>
      {tag === "Headline" && <span className={className}>{children}</span>}
      {tag === "HeadlineBold" && <span className={className}>{children}</span>}
      {tag === "HeadlineItalic" && (
        <span className={className}>{children}</span>
      )}
    </>
  );
};
