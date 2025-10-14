import { Box, Stack } from "@mui/material";

export function ProductCardBadge({ text, offerAmount }: { text: string; offerAmount: number }) {
  if (text == "new offer") {
    return (
      <>
        <Stack direction={"row"}>
          <Box p={1}>
            <Box
              sx={{
                bgcolor: "#00ff66",
                width: 50,
                height: 30,
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              New
            </Box>
          </Box>
          <Box p={1} pl={0}>
            <Box
              sx={{
                bgcolor: "#DB4444",
                width: 50,
                height: 30,
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              -{offerAmount}%
            </Box>
          </Box>
        </Stack>
      </>
    );
  }

  if (text == "new") {
    return (
      <>
        <Box p={1}>
          <Box
            sx={{
              bgcolor: "#00ff66",
              width: 50,
              height: 30,
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            New
          </Box>
        </Box>
      </>
    );
  }
  if (text == "offer") {
    return (
      <>
        <Box p={1}>
          <Box
            sx={{
              bgcolor: "#DB4444",
              width: 50,
              height: 30,
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            -{offerAmount}%
          </Box>
        </Box>
      </>
    );
  }
}
