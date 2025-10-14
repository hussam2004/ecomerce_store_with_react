// import { FindReplace } from "@mui/icons-material";
import { Stack, Box, Typography } from "@mui/material";

export function DNewArivalSection() {
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} p={18}>
        <Box
          bgcolor={"black"}
          width={"50%"}
          height={"100%"}
          sx={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url("/ps5.png")',
          }}
        >
          {/* <Box
            component={"img"}
            src="/ps5.png"
            width={"100%"}
            height={"100%"}
          /> */}
        </Box>
        <Stack justifyContent={"space-between"} height={"100%"} width={"50%"}>
          <Box
            bgcolor={"black"}
            width={"100%"}
            sx={{
              background: 'rgba(0,0,0,1) url("/woman.png")',
            }}
          >
            {/* <Box
              component={"img"}
              src="/woman.png"
              width={"100%"}
              height={"50%"}
            /> */}
          </Box>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box
              bgcolor={"black"}
              width={"50%"}
              height={"50%"}
              sx={{
                background: 'rgba(0,0,0,1) url("/speakers.png")',
              }}
            >
              {/* <Box component={"img"} src="speakers.png" width={"100%"} /> */}
            </Box>
            <Box
              bgcolor={"black"}
              width={"50%"}
              height={"50%"}
              sx={{
                background: 'rgba(0,0,0,1) url("/perfume.png")',
              }}
            >
              {/* <Box component={"img"} src="/perfume.png" height={"100%"} /> */}
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

// import { Box, Grid, Typography, Button } from "@mui/material";

// const promoItems = [
//   {
//     title: "PlayStation 5",
//     description: "Black and White version of the PS5 coming out on sale.",
//     image: "/images/ps5.png", // replace with actual image path
//   },
//   {
//     title: "Women’s Collections",
//     description: "Featured woman collections that give you another vibe.",
//     image: "/images/women-collection.png",
//   },
//   {
//     title: "Speakers",
//     description: "Amazon wireless speakers",
//     image: "/images/speakers.png",
//   },
//   {
//     title: "Perfume",
//     description: "GUCCI INTENSE OUD EDP",
//     image: "/images/perfume.png",
//   },
// ];

// export function NewAribalSection() {
//   return (
//     <Box px={4} py={6}>
//       <Grid container spacing={4}>
//         {promoItems.map((item, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <Box
//               sx={{
//                 backgroundColor: "#f5f5f5",
//                 borderRadius: 2,
//                 overflow: "hidden",
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 p: 3,
//               }}
//             >
//               <Box
//                 component="img"
//                 src={item.image}
//                 alt={item.title}
//                 sx={{
//                   width: "100%",
//                   height: 200,
//                   objectFit: "cover",
//                   borderRadius: 2,
//                   mb: 2,
//                 }}
//               />
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 {item.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary" mb={2}>
//                 {item.description}
//               </Typography>
//               <Button variant="contained" sx={{ alignSelf: "start" }}>
//                 Shop Now
//               </Button>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

export function NewArivalSection() {
  return (
    <>
      <Box width={"100%"} px={{ xs: 2, sm: 4, md: 18 }} pt={8}>
        <Stack direction={{ xs: "column", lg: "row" }} gap={2}>
          <Box
            width={{ xs: "100%", lg: "50%" }}
            height={{ xs: 400, sm: 500, lg: 600 }}
            bgcolor={"black"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            borderRadius={1}
          >
            <Box 
              component={"img"} 
              src="/ps5.png" 
              sx={{
                width: { xs: "80%", sm: "70%", lg: "auto" },
                height: { xs: "80%", sm: "70%", lg: "auto" },
                objectFit: "contain"
              }}
            />
            <Stack
              left={0}
              width={{ xs: "90%", sm: 400 }}
              p={{ xs: 2, sm: 3 }}
              gap={{ xs: 1, sm: 2 }}
              bottom={0}
              position={"absolute"}
            >
              <Typography 
                fontSize={{ xs: 20, sm: 24, md: 30 }} 
                fontWeight={"700"} 
                color="white"
              >
                PlayStation 5
              </Typography>
              <Typography 
                color="white"
                fontSize={{ xs: 12, sm: 14, md: 16 }}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Black and White version of the PS5 coming out on sale.
              </Typography>
              <Typography
                color="white"
                fontSize={{ xs: 12, sm: 14, md: 16 }}
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Shop Now
              </Typography>
            </Stack>
          </Box>
          <Stack width={{ xs: "100%", lg: "50%" }} height={"100%"} gap={1}>
            <Box width={"100%"} height={{ xs: 250, sm: 350, lg: 290 }} position={"relative"} borderRadius={1} overflow="hidden">
              <Box
                component={"img"}
                src="/woman.png"
                width={"100%"}
                height={"100%"}
                bgcolor={"black"}
                sx={{
                  objectFit: "contain",
                  objectPosition: "right",
                }}
              />
              <Stack
                left={0}
                width={400}
                p={3}
                gap={2}
                bottom={0}
                position={"absolute"}
              >
                <Typography fontSize={30} fontWeight={"700"} color="white">
                  Women’s Collections
                </Typography>
                <Typography color="white">
                  Featured woman collections that give you another vibe.
                </Typography>
                <Typography
                  color="white"
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Shop Now
                </Typography>
              </Stack>
            </Box>
            <Stack width={"100%"} height={{ xs: 400, sm: 300, lg: 290 }} direction={{ xs: "column", sm: "row" }} gap={2}>
              <Box
                width={{ xs: "100%", sm: "50%" }}
                height={{ xs: 150, sm: "100%" }}
                bgcolor={"black"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
                borderRadius={1}
              >
                <Box
                  component={"img"}
                  src="/speakers.png"
                  sx={{
                    width: { xs: "60%", sm: "auto" },
                    height: { xs: "60%", sm: "auto" },
                    objectFit: "contain"
                  }}
                />
                <Stack
                  left={0}
                  width={{ xs: "90%", sm: 200 }}
                  p={{ xs: 1, sm: 2 }}
                  gap={0}
                  bottom={0}
                  position={"absolute"}
                >
                  <Typography 
                    fontSize={{ xs: 14, sm: 18, md: 24 }} 
                    fontWeight={"700"} 
                    color="white"
                  >
                    Speakers
                  </Typography>
                  <Typography 
                    color="white"
                    fontSize={{ xs: 10, sm: 12, md: 14 }}
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    Amazon wireless speakers
                  </Typography>
                  <Typography
                    color="white"
                    fontSize={{ xs: 10, sm: 12, md: 14 }}
                    sx={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Shop Now
                  </Typography>
                </Stack>
              </Box>
              <Box
                width={{ xs: "100%", sm: "50%" }}
                height={{ xs: 150, sm: "100%" }}
                bgcolor={"black"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
                borderRadius={1}
              >
                <Box
                  component={"img"}
                  src="/perfume.png"
                  sx={{
                    width: { xs: "60%", sm: "auto" },
                    height: { xs: "60%", sm: "auto" },
                    objectFit: "contain"
                  }}
                />
                <Stack
                  left={0}
                  width={{ xs: "90%", sm: 200 }}
                  p={{ xs: 1, sm: 2 }}
                  gap={0}
                  bottom={0}
                  position={"absolute"}
                >
                  <Typography 
                    fontSize={{ xs: 14, sm: 18, md: 24 }} 
                    fontWeight={"700"} 
                    color="white"
                  >
                    Perfume
                  </Typography>
                  <Typography 
                    color="white"
                    fontSize={{ xs: 10, sm: 12, md: 14 }}
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    GUCCI INTENSE OUD EDP
                  </Typography>
                  <Typography
                    color="white"
                    fontSize={{ xs: 10, sm: 12, md: 14 }}
                    sx={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Shop Now
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
