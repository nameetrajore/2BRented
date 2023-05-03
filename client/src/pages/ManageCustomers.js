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
import { useOwners } from "../hooks/useOwners";
import { useCustomers } from "../hooks/useCustomers";

const ManageCustomers = () => {
  const { getCustomers, deleteCustomer, isLoading } = useCustomers();
  const [customers, setCustomers] = React.useState([]);
  const handleDelete = (id) => {
    deleteCustomer(id);
    setCustomers((prevState) =>
      prevState.filter((customer) => customer._id !== id)
    );
  };

  useEffect(() => {
    getCustomers(setCustomers);
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
                  <TableCell>Owners </TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.customerName}
                    </TableCell>
                    <TableCell>{row.customerEmail}</TableCell>
                    <TableCell>{row.customerPhoneNumber}</TableCell>
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

export default ManageCustomers;
