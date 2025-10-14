import { Stack, Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { getAssetPath } from "../../../../utils/assets";

export function ContactCard() {
  return (
    <>
      <Stack 
        gap={4} 
        p={{ xs: 3, sm: 5 }} 
        width={"100%"} 
        pr={0}
        sx={{
          border: { xs: "1px solid #eee", lg: "none" },
          borderRadius: { xs: 2, lg: 0 },
          boxShadow: { xs: 1, lg: "none" }
        }}
      >
        <Stack gap={3}>
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <Box
              bgcolor={"#DB4444"}
              width={40}
              height={40}
              p={1}
              borderRadius={"50%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box component={"img"} src={getAssetPath("contact-assets/phone-icon.svg")} />
            </Box>
            <Typography fontSize={16} fontWeight={"700"} color="initial">
              Call To Us
            </Typography>
          </Stack>
          <Typography fontSize={10} color="initial">
            We are available 24/7, 7 days a week.
          </Typography>
          <Typography fontSize={10} color="initial">
            Phone: +8801611112222
          </Typography>
        </Stack>
        <Divider></Divider>
        <Stack gap={3}>
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <Box
              bgcolor={"#DB4444"}
              width={40}
              height={40}
              p={1}
              borderRadius={"50%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box component={"img"} src={getAssetPath("contact-assets/phone-icon.svg")} />
            </Box>
            <Typography fontSize={16} fontWeight={"700"} color="initial">
              Write To US
            </Typography>
          </Stack>
          <Typography fontSize={10} color="initial">
            Fill out our form and we will contact you within 24 hours.
          </Typography>
          <Typography fontSize={10} color="initial">
            Emails: customer@exclusive.com
          </Typography>
          <Typography fontSize={10} color="initial">
            Emails: support@exclusive.com
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}