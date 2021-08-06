import React from "react";

import "./sidebar.scss";

export const Sidebar: React.FC = (props) => {
  return <div className="sidebar">{props.children}</div>;
};
