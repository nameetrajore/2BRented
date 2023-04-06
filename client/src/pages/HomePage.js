import React from "react";
import SearchComponent from "../components/customerHomePage/searchComponent";
import { Navigate, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Box } from "@mui/material";

export const SearchPage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "30vh",
          width: "100vw",
          backgroundColor: "#33b3a6",
        }}
      />
      <SearchComponent />
    </>
  );
};
