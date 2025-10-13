// import { Height } from "@mui/icons-material";
// import { Height } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function CurrentRoute({ text }) {
  return (
    <>
      <Stack
        pl={18}
        justifyContent={"center"}
        sx={{ height: 100, width: "100%" }}
      >
        <Typography color="initial">{text}</Typography>
      </Stack>
    </>
  );
}
