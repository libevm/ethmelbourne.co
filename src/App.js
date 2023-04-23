import jsonp from "jsonp";
import { useState } from "react";
import logo from "./logo.png";
import {
  Button,
  Modal,
  Box,
  Grid,
  Link,
  Typography,
  TextField,
} from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <div>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Subscribe to Newsletter
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Typography>
            <br />
            <Button
              onClick={(e) => {
                e.preventDefault();
                const url =
                  "https://ethmelbourne.us9.list-manage.com/subscribe/post-json?u=b2e8f929d8b60036db4b12250&amp;id=3dd138967a&amp;f_id=00c43ce1f0";
                jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
                  // do something with response
                  // alert(msg);
                  alert("Subscription successful");
                  setEmail("");
                });
                setModalOpen(false);
              }}
              fullWidth
              variant="contained"
            >
              Subscribe
            </Button>
          </Box>
        </Modal>
      </div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh", textAlign: "center" }}
      >
        <Grid item xs={3}>
          <img src={logo} alt="logo" width={256} height={256} />
          <Typography variant="h4">Ethereum Melbourne</Typography>
          <Typography variant="subtitle1">
            Members of all levels welcomed! Bi-weekly meetups on Wednesdays.
          </Typography>
          <br />
          <Link href="https://www.meetup.com/ethereum-melbourne/">meetup</Link>
          &nbsp;&nbsp;
          <Link href="https://discord.gg/7rjEfhtsxe">discord</Link>
          &nbsp;&nbsp;
          <Link
            onClick={(e) => {
              e.preventDefault();
              setModalOpen(true);
            }}
            href="#"
          >
            newsletter
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
