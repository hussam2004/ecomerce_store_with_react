import { Stack, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
export function CheckoutCartItem({ imgUrl, name, price }) {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pr={15}
      >
        <Stack direction={"row"} alignItems={"center"} gap={3}>
          <Box component={"img"} src={imgUrl} width={70} height={70} />
          <Typography fontSize={20} color="initial">
            {name}
          </Typography>
        </Stack>
        <Typography fontSize={20} color="initial">
          ${price}.00
        </Typography>
      </Stack>
    </>
  );
}
