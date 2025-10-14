import { useNavigate } from "react-router-dom";
import { useState, useEffect, type ChangeEvent } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  InputAdornment,
  TextField,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import SearchService from "../../service";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useQuery } from "@tanstack/react-query";

// 🔁 Debounce Hook
function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

// 🔎 Product type
type Product = {
  id: string | number;
  title: string;
  price: number;
  images: string[];
};

export function SearchDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 400);
  const navigate = useNavigate();

  // 🔑 Open dialog on "/" key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "/") {
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 🔍 React Query for search
  const { data, isLoading, error } = useQuery<Product[], Error>({
    queryKey: ["products", debouncedQuery],
    queryFn: () => SearchService.getByTitle(debouncedQuery),
    enabled: !!debouncedQuery,
  });

  const handleClose = () => setOpen(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Search for products</DialogTitle>
      <DialogContent>
        <DialogContentText>Type to search</DialogContentText>
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          fullWidth
          value={query}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchSharpIcon />
              </InputAdornment>
            ),
          }}
        />
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {(error as Error).message}</p>}
        {data && (
          <Stack>
            {data.map((item) => (
              <Button
                key={item.id}
                sx={{ width: "100%", p: 0 }}
                onClick={() => navigate(`/products/${item.id}`)}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  p={1}
                  width="100%"
                  border="1px solid rgba(0,0,0,0.5)"
                  sx={{
                    "&:hover": {
                      bgcolor: "rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.images[0]}
                    width={50}
                    height={50}
                  />
                  <Typography px={2}>{item.title}</Typography>
                  <Typography ml="auto">{item.price}</Typography>
                </Stack>
              </Button>
            ))}
          </Stack>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
