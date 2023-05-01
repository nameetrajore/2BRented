import {
  Grid,
  TextField,
  Button,
  Typography,
  IconButton,
  Snackbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { useQuery } from "../hooks/useQuery";
import background from "../resources/undraw_my_answer_re_k4dv.svg";
import Footer from "../components/Footer";

const Support = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [comment, setComment] = useState("");
  const { postQuery } = useQuery();
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    setOpen(true);
    postQuery({
      name,
      email,
      mobileNumber,
      comment,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={3}
        p={20}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.primary[100]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundImage: `url(${background})`,
          backgroundSize: "auto",
          backgroundPosition: "right bottom",
        }}
      >
        <Grid item>
          <Grid container spacing={3}>
            <Grid item md={12}>
              <Typography variant="h4" fontWeight={500}>
                Ask away!
              </Typography>
              <Typography variant="h5">
                We are here to answer all your queries
              </Typography>
            </Grid>
            <Grid item md={7}>
              <TextField
                fullWidth
                label="Enter Your Name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item md={7}>
              <TextField
                fullWidth
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                label="Enter your Email Address"
                value={email}
              />
            </Grid>
            <Grid item md={7}>
              <TextField
                fullWidth
                type="number"
                inputProps={{
                  maxLength: 13,
                  inputMode: "tel",
                  pattern: "[0-9]*",
                  autoComplete: "tel",
                }}
                label="Enter your mobile number"
                onChange={(event) => {
                  setMobileNumber(event.target.value);
                }}
                value={mobileNumber}
              />
            </Grid>
            <Grid item md={7}>
              <TextField
                fullWidth
                label="Enter your comment"
                onChange={(event) => {
                  setComment(event.target.value);
                }}
                multiline
                rows={4}
                value={comment}
              />
            </Grid>
            <Grid item md={7}>
              <Button
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                size="large"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Your query is registered! We will get back to you soon!"
        action={action}
      />
      <Footer />
    </>
  );
};

export default Support;
