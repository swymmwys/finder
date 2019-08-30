import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Start page</NavLink>
          </li>
          <li>
            <NavLink to="finder">Finder</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
