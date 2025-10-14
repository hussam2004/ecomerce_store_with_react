import "./App.css";
import "./responsive.css";
import { AppRouterProvider } from "./routes/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { SearchDialog } from "./features/search/components/search-dialog";
import { AuthProvider } from "./features/auth/store";
// import ScrollToTop from "./shared/components/top-scroll";
// import { ProductCard } from "./features/products/components/product-card";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <AuthProvider>
        <ToastContainer
          position="bottom-right" // Position toasts in the bottom right corner
          autoClose={2500} // Close toasts after 2.5 seconds
          theme="colored" // Use colorful themes (success=green, error=red)
        />
        <QueryClientProvider client={queryClient}>
          <AppRouterProvider />
          {/* <ScrollToTop /> */}
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

// export function App() {
//   const mockProducts = [
//     {
//       id: 1,
//       title: "Default Card (Full Info)",
//       price: 100.0,
//       images: ["https://placehold.co/270x250/66BB6A/ffffff?text=Default"],
//       rating: 4.5,
//       reviews: 75,
//     },
//     {
//       id: 2,
//       title: "Discount Card (-35%)",
//       price: 150.0,
//       images: ["https://placehold.co/270x250/EF5350/ffffff?text=Offer"],
//       rating: 3.9,
//       reviews: 42,
//     },
//     {
//       id: 3,
//       title: "New Product",
//       price: 80.0,
//       images: ["https://placehold.co/270x250/29B6F6/ffffff?text=New+Item"],
//       rating: 5,
//       reviews: 12,
//     },
//     {
//       id: 4,
//       title: "Out of Stock",
//       price: 125.0,
//       images: ["https://placehold.co/270x250/BDBDBD/ffffff?text=Sold+Out"],
//       rating: 4.1,
//       reviews: 99,
//     },
//     {
//       id: 5,
//       title: "Wishlist Card",
//       price: 200.0,
//       images: ["https://placehold.co/250x250/FFCA28/333333?text=Wishlist"],
//       rating: 4.8,
//       reviews: 15,
//     },
//     {
//       id: 6,
//       title: "Offer Card (No Quick View)",
//       price: 50.0,
//       images: ["https://placehold.co/250x250/AB47BC/ffffff?text=Minimal"],
//       rating: 3.0,
//       reviews: 30,
//     },
//   ];
//   return (
//     <Box sx={{ p: 4, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
//       <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: "bold" }}>
//         Product Card Variants Test Bed
//       </Typography>

//       <Stack
//         direction={{ xs: "column", sm: "row" }}
//         flexWrap="wrap"
//         gap={4}
//         justifyContent="center"
//       >
//         {/* 1. Default Card - Standard Display */}
//         <Box>
//           <Typography variant="h6" align="center" sx={{ mb: 1 }}>
//             1. Default (No Tags)
//           </Typography>
//           <ProductCard product={mockProducts[0]} />
//         </Box>

//         {/* 2. Offer Card - With Discount Tag and Strikethrough Price */}
//         <Box>
//           <Typography variant="h6" align="center" sx={{ mb: 1 }}>
//             2. Offer (-35% Discount)
//           </Typography>
//           <ProductCard
//             product={mockProducts[1]}
//             discountPercentage={35}
//             variant="offer"
//           />
//         </Box>

//         {/* 3. New Product Card - Green 'NEW' Tag */}
//         <Box>
//           <Typography variant="h6" align="center" sx={{ mb: 1 }}>
//             3. New Product (Green Tag)
//           </Typography>
//           <ProductCard product={mockProducts[2]} isNew={true} />
//         </Box>

//         {/* 4. Out of Stock Card - Grey Tag, Disabled Add to Cart */}
//         <Box>
//           <Typography variant="h6" align="center" sx={{ mb: 1 }}>
//             4. Out of Stock (Grey Bar)
//           </Typography>
//           <ProductCard product={mockProducts[3]} isAvailable={false} />
//         </Box>

//         {/* 5. Wishlist Card - Trash Icon for Removal */}
//         <Box>
//           <Typography variant="h6" align="center" sx={{ mb: 1 }}>
//             5. Wishlist (Trash Icon)
//           </Typography>
//           <ProductCard
//             product={mockProducts[4]}
//             variant="wishlist"
//             onRemoveFromWishlist={() =>
//               console.log(`REMOVED item ${mockProducts[4].id} from wishlist!`)
//             }
//           />
//         </Box>

//         {/* 6. Minimal Offer Card - Discount + No Quick View Eye */}
//         <Box>
//           <Typography variant="h6" align="center" sx={{ mb: 1 }}>
//             6. Minimal Offer (-10%, No Eye)
//           </Typography>
//           <ProductCard
//             product={mockProducts[5]}
//             discountPercentage={10}
//             variant="offer"
//             showQuickView={false}
//           />
//         </Box>
//       </Stack>
//       <Box
//         sx={{
//           mt: 6,
//           p: 3,
//           border: "1px solid #ccc",
//           borderRadius: 2,
//           bgcolor: "white",
//         }}
//       >
//         <Typography variant="body1">
//           **Testing Instructions:**
//           <ul>
//             <li>
//               Hover over the image area of cards 1, 2, 3, 5, and 6 to see the
//               **"Add To Cart"** bar appear.
//             </li>
//             <li>
//               Card 4 (**Out of Stock**) should have the grey **"Out of Stock"**
//               bar permanently visible.
//             </li>
//             <li>
//               Card 2 (**Discount Card**) and Card 6 should show a
//               **strikethrough price** and the calculated discounted price.
//             </li>
//             <li>Card 3 should have the **Green 'NEW' tag**.</li>
//             <li>
//               Card 5 (**Wishlist**) should show a **Trash Icon** instead of the
//               Heart Icon.
//             </li>
//           </ul>
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
export default App;
