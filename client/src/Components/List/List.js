import React from "react";

function List({ children }) {
  return (
    <div>
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export default List