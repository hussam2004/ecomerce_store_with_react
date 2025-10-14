import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Stack, Box } from "@mui/material";
import CurrentRoute from "../components/current-route";
import Typography from "@mui/material/Typography";
import { FeaturesSection } from "../../home/components/features-section";
import { ReactComponent as Icon2 } from "../../../../public/about-icons/5.svg";
import { ReactComponent as Icon1 } from "../../../../public/about-icons/1.svg";
import { ReactComponent as Icon3 } from "../../../../public/about-icons/3.svg";
import { ReactComponent as Icon4 } from "../../../../public/about-icons/4.svg";

export default function AboutPage() {
  return (
    <>
      <CurrentRoute text="Home / About" />

      {/* section 1 */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        spacing={{ xs: 4, md: 0 }}
        px={{ xs: 2, sm: 4 }}
      >
        <Stack
          width={{ xs: "100%", md: 700 }}
          justifyContent={"center"}
          pl={{ xs: 0, md: 18 }}
          gap={3}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Typography variant="h4" color="initial" fontWeight={"700"}>
            Our Story
          </Typography>
          <Typography color="initial">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </Typography>
          <Typography color="initial">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </Typography>
        </Stack>
        <Box
          component={"img"}
          src="/about1.png"
          marginLeft={{ xs: 0, md: "auto" }}
          width={{ xs: "100%", md: "50%" }}
          height={{ xs: 250, sm: 350, md: 450 }}
          sx={{
            objectFit: "cover",
            objectPosition: "0px 10px",
            borderRadius: 2,
            display: { xs: "none", md: "block" },
          }}
        />
      </Stack>

      {/* section 2 */}

      <Stack
        direction={{ xs: "column", sm: "row" }}
        px={{ xs: 2, sm: 4, md: 18 }}
        pt={{ xs: 8, md: 15 }}
        pb={5}
        justifyContent={"center"}
        gap={{ xs: 4, sm: 6, md: 8 }}
        flexWrap="wrap"
      >
        <Stack
          px={5}
          py={2}
          justifyContent={"center"}
          alignItems={"center"}
          border={"1px solid rgba(0,0,0,0.3)"}
        >
          <Box
            sx={{
              backgroundImage: 'url("/home-features-icons/1.svg")',
              height: 100,
              width: 100,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Box component={"img"} src="/about-icons/1.svg" /> */}
            <Icon1 />
          </Box>
          <Typography fontSize={25} color="initial">
            10.5k
          </Typography>
          <Typography fontSize={15} color="initial">
            Sallers active our site
          </Typography>
        </Stack>
        <Stack
          px={5}
          py={2}
          justifyContent={"center"}
          alignItems={"center"}
          border={"1px solid rgba(0,0,0,0.3)"}
        >
          <Box
            sx={{
              backgroundImage: 'url("/home-features-icons/1.svg")',
              height: 100,
              width: 100,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Box component={"img"} src="/about-icons/5.svg" />
             */}
            <Icon2 style={{ color: "white", fill: "white" }} />
          </Box>
          <Typography fontSize={25} color="initial">
            33k
          </Typography>
          <Typography fontSize={15} color="initial">
            Mopnthly Produduct Sale
          </Typography>
        </Stack>
        <Stack
          px={5}
          py={2}
          justifyContent={"center"}
          alignItems={"center"}
          border={"1px solid rgba(0,0,0,0.3)"}
        >
          <Box
            sx={{
              backgroundImage: 'url("/home-features-icons/1.svg")',
              height: 100,
              width: 100,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Box component={"img"} src="/about-icons/3.svg" /> */}
            <Icon3></Icon3>
          </Box>
          <Typography fontSize={25} color="initial">
            45.5k
          </Typography>
          <Typography fontSize={15} color="initial">
            Customer active in our site
          </Typography>
        </Stack>
        <Stack
          px={5}
          py={2}
          justifyContent={"center"}
          alignItems={"center"}
          border={"1px solid rgba(0,0,0,0.3)"}
        >
          <Box
            sx={{
              backgroundImage: 'url("/home-features-icons/1.svg")',
              height: 100,
              width: 100,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Box component={"img"} src="/about-icons/4.svg" /> */}
            <Icon4></Icon4>
          </Box>
          <Typography fontSize={25} color="initial">
            25k
          </Typography>
          <Typography fontSize={15} color="initial">
            Anual gross sale in our site
          </Typography>
        </Stack>
      </Stack>

      {/* section 3 */}
      <Stack
        px={{ xs: 2, sm: 4, md: 18 }}
        justifyContent={"center"}
        gap={{ xs: 6, sm: 10, md: 15 }}
        direction={{ xs: "column", sm: "row" }}
        py={{ xs: 6, md: 10 }}
        alignItems="center"
        flexWrap="wrap"
      >
        <Stack gap={1} alignItems="center">
          <Box
            component={"img"}
            src="/about-page-emp/1.png"
            width={{ xs: 200, sm: 250, md: 270 }}
            height={{ xs: 250, sm: 300, md: 330 }}
            sx={{ objectFit: "cover", borderRadius: 2 }}
          />
          <Typography
            color="initial"
            fontSize={{ xs: 20, sm: 22, md: 25 }}
            fontWeight={"600"}
            textAlign="center"
          >
            Tom Cruise
          </Typography>
          <Typography color="initial" textAlign="center">
            Founder & Chairman
          </Typography>
          <Stack direction={"row"} gap={1} justifyContent="center">
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Stack>
        </Stack>
        <Stack gap={1} alignItems="center">
          <Box
            component={"img"}
            src="/about-page-emp/2.png"
            width={{ xs: 200, sm: 250, md: 270 }}
            height={{ xs: 250, sm: 300, md: 330 }}
            sx={{ objectFit: "cover", borderRadius: 2 }}
          />
          <Typography
            color="initial"
            fontSize={{ xs: 20, sm: 22, md: 25 }}
            fontWeight={"600"}
            textAlign="center"
          >
            Emma Watson
          </Typography>
          <Typography color="initial" textAlign="center">
            Managing
          </Typography>
          <Stack direction={"row"} gap={1} justifyContent="center">
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Stack>
        </Stack>
        <Stack gap={1} alignItems="center">
          <Box
            component={"img"}
            src="/about-page-emp/3.png"
            width={{ xs: 200, sm: 250, md: 270 }}
            height={{ xs: 250, sm: 300, md: 330 }}
            sx={{ objectFit: "cover", borderRadius: 2 }}
          />
          <Typography
            color="initial"
            fontSize={{ xs: 20, sm: 22, md: 25 }}
            fontWeight={"600"}
            textAlign="center"
          >
            Will Smith
          </Typography>
          <Typography color="initial" textAlign="center">
            Product Designer
          </Typography>
          <Stack direction={"row"} gap={1} justifyContent="center">
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Stack>
        </Stack>
      </Stack>
      {/* section 4 */}
      <FeaturesSection />
    </>
  );
}
