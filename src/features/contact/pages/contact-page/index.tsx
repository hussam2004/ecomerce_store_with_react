import { Box, Stack } from "@mui/material";
import CurrentRoute from "../../../about/components/current-route";
import { ContactCard } from "../../components/contact-card";
import { ContactForm } from "../../components/contact-form";

export function ContactPage() {
  return (
    <>
      <CurrentRoute text={"Home / Contact"} />
      <Stack
        direction={{ xs: "column", lg: "row" }}
        pb={10}
        px={{ xs: 2, sm: 4, lg: 0 }}
        gap={{ xs: 4, lg: 0 }}
        alignItems={{ xs: "center", lg: "flex-start" }}
      >
        <Box
          sx={{
            pl: { xs: 0, lg: 20 },
            width: { xs: "100%", lg: "40%" },
          }}
        >
          <ContactCard />
        </Box>
        <ContactForm></ContactForm>
      </Stack>
    </>
  );
}
