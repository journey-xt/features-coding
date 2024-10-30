import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootHtml = document.getElementById("root");

if (rootHtml) {
  // 渲染你的 React 组件
  const root = createRoot(rootHtml);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
