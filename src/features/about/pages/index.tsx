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
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"cneter"}
      >
        <Stack width={700} justifyContent={"center"} pl={18} gap={3}>
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
          marginLeft={"auto"}
          width={"50%"}
          height={450}
          sx={{ objectFit: "cover", objectPosition: "0px 10px" }}
        />
      </Stack>

      {/* section 2 */}

      <Stack
        direction={"row"}
        px={18}
        pt={15}
        pb={5}
        justifyContent={"center"}
        gap={10}
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
        px={18}
        justifyContent={"center"}
        gap={15}
        direction={"row"}
        py={10}
      >
        <Stack gap={1}>
          <Box
            component={"img"}
            src="/about-page-emp/1.png"
            width={270}
            height={330}
          />
          <Typography color="initial" fontSize={25} fontWeight={"600"}>
            Tom Cruise
          </Typography>
          <Typography color="initial">Founder & Chairman</Typography>
          <Stack direction={"row"} gap={1}>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Stack>
        </Stack>
        <Stack gap={1}>
          <Box
            component={"img"}
            src="/about-page-emp/2.png"
            width={270}
            height={330}
          />
          <Typography color="initial" fontSize={25} fontWeight={"600"}>
            Emma Watson
          </Typography>
          <Typography color="initial">Managing</Typography>
          <Stack direction={"row"} gap={1}>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Stack>
        </Stack>
        <Stack gap={1}>
          <Box
            component={"img"}
            src="/about-page-emp/3.png"
            width={270}
            height={330}
          />
          <Typography color="initial" fontSize={25} fontWeight={"600"}>
            Will Smith
          </Typography>
          <Typography color="initial">Product Designer</Typography>
          <Stack direction={"row"} gap={1}>
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
