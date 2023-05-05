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
  }, []);
  return (
    <>
      <NavbarManager />
      <Box p={8}>
        <Grid container spacing={3} display="flex" direction="column-reverse">
          {queries.length !== 0 ? (
            queries.map((query) => {
              return <QueryComponent query={query} key={Math.random()} />;
            })
          ) : (
            <>
              <Typography variant="h4">No queries yet</Typography>
            </>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default ManagerDashboard;
