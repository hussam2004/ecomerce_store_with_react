import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
export default function NotFoundPage() {
  return (
    <>
      <Stack alignItems={"center"} justifyContent={"center"} width={"100vw"}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          height={"calc(100vh - 125px)"}
          width={"90vw"}
          gap={5}
        >
          <Typography
            color="initial"
            alignSelf={"flex-start"}
            sx={{ marginBottom: "auto", mt: 5 }}
          >
            Home / 404 Error
          </Typography>
          <Typography variant="h1" color="initial" mt={5}>
            404 Not Found
          </Typography>
          <Typography variant="h6" color="initial">
            Your visited page not found. You may go home page.
          </Typography>
          <Button
            variant="contained"
            sx={{ bgcolor: "#DB4444", width: 250, height: 50, mb: "10%" }}
          >
            Back to home page
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
