import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
export default function NotFoundPage() {
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        px={{ xs: 2, sm: 4 }}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          height={"calc(100vh - 125px)"}
          width={"100%"}
          maxWidth={1000}
          gap={{ xs: 3, sm: 5 }}
          textAlign="center"
        >
          <Typography
            color="initial"
            alignSelf={{ xs: "center", sm: "flex-start" }}
            sx={{ marginBottom: "auto", mt: 5 }}
            fontSize={{ xs: 14, sm: 16 }}
          >
            Home / 404 Error
          </Typography>
          <Typography
            color="initial"
            mt={{ xs: 0, sm: 2, md: 5 }}
            sx={{
              fontSize: { xs: "4rem", sm: "6rem" },
              fontWeight: 600,
            }}
          >
            404 Not Found
          </Typography>
          <Typography
            color="initial"
            sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}
          >
            Your visited page not found. You may go home page.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#DB4444",
              width: { xs: "100%", sm: 250 },
              height: { xs: 40, sm: 50, md: 60 },
              mb: "10%",
              textTransform: "none",
            }}
          >
            Back to home page
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
