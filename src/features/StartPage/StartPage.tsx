import React from "react";
import { Link } from "react-router-dom";

export const StartPage = () => {
  return (
    <>
      <h1>Start page</h1>
      <Link to="finder">Finder</Link>
    </>
  );
};
