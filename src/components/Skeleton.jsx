import React from "react";
import ContentLoader from "react-content-loader";

function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={305}
      height={335}
      viewBox="0 0 305 335"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="90" y="20" rx="5" ry="5" width="130" height="180" />
      <rect x="0" y="215" rx="5" ry="5" width="120" height="12" />
      <rect x="0" y="240" rx="10" ry="10" width="250" height="21" />
      <rect x="0" y="270" rx="10" ry="10" width="250" height="16" />
    </ContentLoader>
  );
}

export default Skeleton;
