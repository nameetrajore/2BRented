import * as React from "react";
import { CircularProgress } from "@mui/material";
import Table from "@mui/material/Table";
import { useEffect } from "react";
import { Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { NavbarManager } from "../components/NavbarManager";
import { Button } from "@mui/material";
import { useOwners } from "../hooks/useOwners";

const ManageOwners = () => {
  const { getOwners, deleteOwner, isLoading } = useOwners();
  const [owners, setOwners] = React.useState([]);

  const handleDelete = (id) => {
    deleteOwner(id);
    setOwners((prevState) => prevState.filter((owner) => owner._id !== id));
  };

  useEffect(() => {
    getOwners(setOwners);
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
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {owners.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.ownerName}
                    </TableCell>
                    <TableCell>{row.ownerEmail}</TableCell>
                    <TableCell>{row.ownerPhoneNumber}</TableCell>
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

export default ManageOwners;
