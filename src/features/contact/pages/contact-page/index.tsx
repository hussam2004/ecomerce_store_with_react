import { Box, Stack } from "@mui/material";
import CurrentRoute from "../../../about/components/current-route";
import { ContactCard } from "../../components/contact-card";
import { ContactForm } from "../../components/contact-form";

export function ContactPage() {
  return (
    <>
      <CurrentRoute text={"Home / Contact"} />
      <Stack direction={"row"} pb={10}>
        <Box pl={20} width={"40%"}>
          <ContactCard />
        </Box>
        <ContactForm></ContactForm>
      </Stack>
    </>
  );
}
