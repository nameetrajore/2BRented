import * as React from "react";
import { CircularProgress } from "@mui/material";
import Table from "@mui/material/Table";
import { useEffect } from "react";
import { Box, Rating } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { NavbarManager } from "../components/NavbarManager";
import { Button } from "@mui/material";
import { useBikes } from "../hooks/useBikes";

const ManageBikes = () => {
  const { getBikes, deleteBike, isLoading } = useBikes();
  const [bikes, setBikes] = React.useState([]);
  const handleDelete = (id) => {
    deleteBike(id);
    setBikes((prevState) => prevState.filter((bike) => bike._id !== id));
  };

  useEffect(() => {
    getBikes(setBikes);
  }, []);
  return (
    <>
      <NavbarManager />
      {isLoading ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            margin: "-50px 0px 0px -50px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            m: 15,
          }}
        >
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Bikes</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Registration Number</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bikes.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {`${row.brand} ${row.model} ${row.year.substring(0, 4)}`}
                    </TableCell>
                    <TableCell>{`${row.location.city}, ${row.location.state} - ${row.location.pincode}, `}</TableCell>
                    <TableCell>{row.registrationNumber}</TableCell>
                    <TableCell>
                      <Rating value={row.rating} readOnly />
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        color="error"
                        onClick={() => {
                          handleDelete(row._id);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </>
  );
};

export default ManageBikes;
