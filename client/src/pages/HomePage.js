import React from "react";
import SearchComponent from "../components/customerHomePage/searchComponent";
import { Navigate, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
// import CategoryCard from "../components/CategoryCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <SearchComponent />
    </>
  );
};
