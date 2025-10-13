import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const navigate = useNavigate();
  // 🔑 Open dialog on "/" key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "/") {
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 🔍 React Query for search
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", debouncedQuery],
    queryFn: () => SearchService.getByTitle(debouncedQuery),
    enabled: !!debouncedQuery, // Only run when there's a query
    onSuccess: (data) => {
      console.log("✅ Search results:", data);
    },
    onError: (err) => {
      console.error("❌ Search error:", err.message);
    },
  });

  const handleClose = () => setOpen(false);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Search for products</DialogTitle>
        <DialogContent height={300}>
          <DialogContentText>tsxt</DialogContentText>
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchSharpIcon />
                </InputAdornment>
              ),
            }}
          />
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data && (
            <Stack>
              {data.map((item) => (
                <>
                  <Button
                    sx={{
                      width: "100%",
                      p: 0,
                    }}
                    onClick={() => {
                      navigate(`/products/${item.id}`);
                    }}
                  >
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      p={1}
                      width={"100%"}
                      border={"1px solid rgba(0,0,0,0.5)"}
                      sx={{
                        "&:hover": {
                          bgcolor: "rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Box
                        component={"img"}
                        src={item.images[0]}
                        width={50}
                        height={50}
                      />

                      <Typography color="initial" px={2}>
                        {item.title}
                      </Typography>

                      <Typography ml={"auto"} color="initial">
                        {item.price}
                      </Typography>
                    </Stack>
                  </Button>
                </>
              ))}
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
