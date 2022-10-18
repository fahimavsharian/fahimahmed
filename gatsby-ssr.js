import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Satoshi-Regular.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Poppins-Regular.ttf"
      as="font"
      type="font/tff"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ]);
};
