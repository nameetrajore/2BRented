import React, { useState } from "react";
import { Button, Modal, Typography, Box } from "@mui/material";

const ErrorModal = ({ modal, setModal }) => {
  const handleModal = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Existing Booking
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            It looks like you already have a booking during these dates, Please
            select new dates
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }}>
            Okay
          </Button>
        </Box>
      </Modal>{" "}
    </div>
  );
};

export default ErrorModal;
