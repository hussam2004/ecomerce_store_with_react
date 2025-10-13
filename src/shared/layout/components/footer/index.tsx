// import { Qr } from "/assets/Qr Code.png";
// import {}
import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
// import { MessageIcon } from "../../../icons/MessageIcon";
// import { ReactComponent as MessageIcon } from "assetsmessage-icon.svg";
import SendIcon from "@mui/icons-material/Send";
// footer

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Footer() {
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        bgcolor="black"
        marginTop={"auto"}
        width={"100%"}
        border={"none"}
        color={"white"}
      >
        <Stack direction={"row"} padding={5} gap={10}>
          <Stack gap={2}>
            <Typography
              color="white"
              variant="h6"
              sx={{ fontWeight: "bolder", paddingBottom: 2 }}
            >
              Exclusive
            </Typography>
            <Typography color="white" variant="body1">
              Subscribe
            </Typography>
            <Typography color="white" variant="body1">
              Get 10% off your first order
            </Typography>
            <TextField
              id="email-input"
              label="enter your email"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SendIcon style={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "white",
                }, // label color
                "&:hover .MuiInputLabel-root": {
                  color: "blue",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                    color: "white", // default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "blue", // on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "blue", // when focused
                  },
                },
              }}
            />
          </Stack>
          <Stack gap={2} width={200}>
            <Typography
              color="white"
              variant="h6"
              sx={{ fontWeight: "bolder", paddingBottom: 2 }}
            >
              Support
            </Typography>
            <Typography color="white" variant="body1">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </Typography>
            <Typography color="white" variant="body2">
              exclusive@gmail.com
            </Typography>
            <Typography color="white" variant="body2">
              +88015-88888-9999
            </Typography>
          </Stack>
          <Stack>
            <Typography
              color="white"
              variant="h6"
              sx={{ fontWeight: "bolder", paddingBottom: 2 }}
            >
              Account
            </Typography>
            <Typography variant="h6" color="white">
              My Account
            </Typography>
            <Typography variant="h6" color="white">
              Login / Register
            </Typography>
            <Typography variant="h6" color="white">
              Cart
            </Typography>
            <Typography variant="h6" color="white">
              Wishlist
            </Typography>
            <Typography variant="h6" color="white">
              Shop
            </Typography>
          </Stack>
          <Stack>
            <Typography
              color="white"
              variant="h6"
              sx={{ fontWeight: "bolder", paddingBottom: 2 }}
            >
              Quick Link
            </Typography>
            <Typography variant="h6" color="white">
              Privacy Policy
            </Typography>
            <Typography variant="h6" color="white">
              Terms Of Use
            </Typography>
            <Typography variant="h6" color="white">
              FAQ
            </Typography>
            <Typography variant="h6" color="white">
              Contact
            </Typography>
          </Stack>
          <Stack>
            <Typography
              color="white"
              variant="h6"
              sx={{ fontWeight: "bolder", paddingBottom: 2 }}
            >
              Download App
            </Typography>
            <Typography variant="caption" color="white">
              Save $3 with App New User Only
            </Typography>
            <Stack direction={"row"} gap={1} marginTop={2}>
              <Stack direction={"row"} gap={1}>
                <Box component="img" src="/Qr Code.png" alt="QR Code" />
                <Stack gap={2}>
                  <Box
                    component="img"
                    src="/google-play.png"
                    alt="google play link"
                  />
                  <Box
                    component="img"
                    src="/download-appstore.png"
                    alt="google play link"
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack direction={"row"} gap={2} marginTop={3}>
              <FacebookIcon style={{ color: "white" }} />
              <TwitterIcon style={{ color: "white" }} />
              <InstagramIcon style={{ color: "white" }} />
              <LinkedInIcon style={{ color: "white" }} />
            </Stack>
          </Stack>
        </Stack>
        <Typography color="white" sx={{ paddingBottom: 2 }}>
          &copy; Copyright Rimel 2022. All right reserved
        </Typography>
      </Stack>
    </>
  );
}
