import React from "react";
import "./style.css";
function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

export default ListItem;