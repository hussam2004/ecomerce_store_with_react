import { Box, Stack } from "@mui/material";
import { DefaultLayout } from "../components/default-layout";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { NavBar } from "../components/nav-bar";
// import { Margin } from "@mui/icons-material";

export function AuthLayout() {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
        <NavBar />
        <div style={{ marginTop: "calc(40px + 72px)" }}>
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            p={"5%"}
            pt={0}
            pb={0}
          >
            <img src="/auth-image.png" alt="" width="45%" style={{}} />
            <Stack justifyContent={"center"} alignItems={"center"} flex={1}>
              <Outlet />
            </Stack>
          </Stack>
        </div>
        <Footer />
      </Box>
    </>
  );
}

