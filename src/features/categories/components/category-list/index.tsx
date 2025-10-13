import { Stack } from "@mui/material";
import { Category } from "../category";

import { ReactComponent as Icon2 } from "../../../../../public/home-category-icons/2.svg";
import { ReactComponent as Icon3 } from "../../../../../public/home-category-icons/3.svg";
import { ReactComponent as Icon4 } from "../../../../../public/home-category-icons/4.svg";
import { ReactComponent as Icon5 } from "../../../../../public/home-category-icons/5.svg";
import { ReactComponent as Icon6 } from "../../../../../public/home-category-icons/6.svg";
import { ReactComponent as Icon1 } from "../../../../../public/home-category-icons/1.svg";

export function CategoryList() {
  return (
    <Stack direction="row" justifyContent="space-between" pr={18} py={10}>
      <Category icon={Icon1} name="Phones" />
      <Category icon={Icon2} name="Computers" />
      <Category icon={Icon3} name="SmartWatch" />
      <Category icon={Icon4} name="Camera" />
      <Category icon={Icon5} name="HeadPhones" />
      <Category icon={Icon6} name="Gaming" />
    </Stack>
  );
}
