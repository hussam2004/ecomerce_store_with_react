// import { Height } from "@mui/icons-material";
// import { Height } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function CurrentRoute({ text }: { text: string }) {
  return (
    <>
      <Stack
        justifyContent={"center"}
        sx={{ height: 100, width: "100%", pl: { xs: 2, sm: 4, md: 18 } }}
      >
        <Typography color="initial">{text}</Typography>
      </Stack>
    </>
  );
}
