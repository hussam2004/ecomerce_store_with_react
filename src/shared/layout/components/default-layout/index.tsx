import { Box } from "@mui/material";
import { Footer } from "../footer";
import { NavBar } from "../nav-bar";
import { Outlet } from "react-router-dom";
import { SearchDialog } from "../../../../features/search/components/search-dialog";
import ScrollToTop from "../../../components/top-scroll";
// import { Children } from "react";

export function DefaultLayout() {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
        <NavBar />
        <ScrollToTop />
        <SearchDialog></SearchDialog>
        <Box sx={{ 
          marginTop: { xs: "calc(80px + 60px)", sm: "calc(40px + 72px)" },
          px: { xs: 1, sm: 2 },
          flex: 1
        }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
