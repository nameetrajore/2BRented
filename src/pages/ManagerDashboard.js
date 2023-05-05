import * as React from "react";
import { NavbarManager } from "../components/NavbarManager";
import QueryComponent from "../components/QueryComponent";
import { useEffect, useState } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { useQueries } from "../hooks/useQueries";
const ManagerDashboard = () => {
  const [queries, setQueries] = useState([]);
  const { getQueries } = useQueries();
  useEffect(() => {
    getQueries(setQueries);
    console.log(queries);
  }, []);
  return (
    <>
      <NavbarManager />
      <Box>
        {/* <Grid container spacing={3} display="flex" direction="column-reverse"> */}
        {/*   {queries ? ( */}
        {/*     queries.map((query) => { */}
        {/*       return <QueryComponent query={query} key={Math.random()} />; */}
        {/*     }) */}
        {/*   ) : ( */}
        {/*     <></> */}
        {/*   )} */}
        {/* </Grid> */}
      </Box>
    </>
  );
};

export default ManagerDashboard;
