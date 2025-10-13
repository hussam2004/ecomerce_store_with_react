// ============================================
// 1. Custom Hooks: useDebounce.ts
// ============================================
import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// ============================================
// 2. Custom Hooks: useKeyboardShortcut.ts
// ============================================
import { useEffect } from "react";

export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  modifiers: { ctrl?: boolean; shift?: boolean; alt?: boolean } = {}
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const ctrlMatch = modifiers.ctrl
        ? e.ctrlKey || e.metaKey
        : !e.ctrlKey && !e.metaKey;
      const shiftMatch = modifiers.shift ? e.shiftKey : !e.shiftKey;
      const altMatch = modifiers.alt ? e.altKey : !e.altKey;

      if (
        e.key === key &&
        ctrlMatch &&
        shiftMatch &&
        altMatch &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)
      ) {
        e.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [key, callback, modifiers]);
}

// ============================================
// 3. Types: search.types.ts
// ============================================
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
}

// ============================================
// 4. Service: searchService.ts
// ============================================
const API_BASE_URL = "https://api.escuelajs.co/api/v1";

export const searchProducts = async (query: string): Promise<Product[]> => {
  if (!query.trim()) return [];

  try {
    const response = await fetch(
      `${API_BASE_URL}/products/?title=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error("Search failed");
    }

    const products: Product[] = await response.json();
    return products.slice(0, 5); // Limit to 5 results for modal
  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }
};

// ============================================
// 5. Custom Hook: useSearch.ts
// ============================================
import { useState, useCallback } from "react";

export function useSearch() {
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const products = await searchProducts(query);
      setResults(products);
    } catch (err) {
      setError("Failed to search products");
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearResults = useCallback(() => {
    setResults([]);
    setError(null);
  }, []);

  return {
    results,
    isLoading,
    error,
    search,
    clearResults,
  };
}

// ============================================
// 6. Component: SearchModal.tsx (MUI Version)
// ============================================
import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Box,
  CircularProgress,
  Chip,
  Alert,
  Divider,
} from "@mui/material";
import {
  Search as SearchIcon,
  Clear as ClearIcon,
  KeyboardArrowUp,
  KeyboardArrowDown,
  KeyboardReturn,
  Close as CloseIcon,
} from "@mui/icons-material";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { results, isLoading, error, search, clearResults } = useSearch();
  const debouncedQuery = useDebounce(query, 300);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Search when debounced query changes
  useEffect(() => {
    search(debouncedQuery);
  }, [debouncedQuery, search]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelectProduct(results[selectedIndex]);
        }
        break;
      case "Escape":
        handleClose();
        break;
    }
  };

  const handleSelectProduct = (product: Product) => {
    navigate(`/products/${product.id}`);
    handleClose();
  };

  const handleClose = () => {
    setQuery("");
    clearResults();
    setSelectedIndex(0);
    onClose();
  };

  const handleClear = () => {
    setQuery("");
    clearResults();
    inputRef.current?.focus();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          maxHeight: "80vh",
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        {/* Search Input */}
        <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
          <TextField
            inputRef={inputRef}
            fullWidth
            variant="standard"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {query && (
                    <IconButton
                      size="small"
                      onClick={handleClear}
                      aria-label="Clear search"
                    >
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  )}
                  <Chip
                    label="ESC"
                    size="small"
                    sx={{ ml: 1, display: { xs: "none", sm: "flex" } }}
                  />
                </InputAdornment>
              ),
              disableUnderline: true,
              sx: { fontSize: "1.1rem" },
            }}
          />
        </Box>

        {/* Results */}
        <Box sx={{ minHeight: 200, maxHeight: 400, overflow: "auto" }}>
          {isLoading && (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              py={8}
            >
              <CircularProgress />
            </Box>
          )}

          {error && (
            <Box p={3}>
              <Alert severity="error">{error}</Alert>
            </Box>
          )}

          {!isLoading && !error && query && results.length === 0 && (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              py={8}
              px={3}
            >
              <SearchIcon
                sx={{ fontSize: 48, color: "text.secondary", mb: 2 }}
              />
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No products found
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Try different keywords
              </Typography>
            </Box>
          )}

          {!isLoading && results.length > 0 && (
            <List sx={{ py: 1 }}>
              {results.map((product, index) => (
                <ListItem key={product.id} disablePadding>
                  <ListItemButton
                    selected={index === selectedIndex}
                    onClick={() => handleSelectProduct(product)}
                    sx={{
                      py: 1.5,
                      "&.Mui-selected": {
                        backgroundColor: "primary.light",
                        "&:hover": {
                          backgroundColor: "primary.light",
                        },
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        src={product.images[0]}
                        alt={product.title}
                        variant="rounded"
                        sx={{ width: 56, height: 56 }}
                        imgProps={{
                          onError: (e: any) => {
                            e.target.src = "https://via.placeholder.com/150";
                          },
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body1" noWrap>
                          {product.title}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          noWrap
                        >
                          {product.category.name}
                        </Typography>
                      }
                      sx={{ mx: 2 }}
                    />
                    <Typography variant="h6" fontWeight="bold">
                      ${product.price}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))}

              {results.length === 5 && (
                <>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/products?search=${query}`);
                        handleClose();
                      }}
                      sx={{ justifyContent: "center", py: 1.5 }}
                    >
                      <Typography color="primary" fontWeight="medium">
                        View all results →
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </>
              )}
            </List>
          )}
        </Box>

        {/* Footer hint */}
        {!query && (
          <Box
            sx={{
              p: 2,
              borderTop: 1,
              borderColor: "divider",
              bgcolor: "grey.50",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Chip icon={<KeyboardArrowUp />} label="" size="small" />
              <Chip icon={<KeyboardArrowDown />} label="" size="small" />
              <Typography variant="caption" color="text.secondary">
                to navigate
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Chip icon={<KeyboardReturn />} label="" size="small" />
              <Typography variant="caption" color="text.secondary">
                to select
              </Typography>
            </Box>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ============================================
// 7. Component: SearchButton.tsx (MUI Version)
// ============================================
import { Button, Chip } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

export function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      startIcon={<SearchIcon />}
      variant="outlined"
      color="inherit"
      sx={{
        borderRadius: 2,
        textTransform: "none",
        px: 2,
        py: 1,
        gap: 1,
      }}
    >
      <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
        Search
      </Box>
      <Chip
        label="/"
        size="small"
        sx={{
          height: 20,
          fontSize: "0.75rem",
          display: { xs: "none", md: "flex" },
        }}
      />
    </Button>
  );
}

// ============================================
// 8. Usage in App/Layout Component (MUI Version)
// ============================================
import { useState } from "react";
import { AppBar, Toolbar, Container, Typography, Box } from "@mui/material";

export function AppLayout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Register keyboard shortcut
  useKeyboardShortcut("/", () => {
    setIsSearchOpen(true);
  });

  return (
    <Box>
      {/* Header */}
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" component="h1" fontWeight="bold">
              My Store
            </Typography>

            <Box display="flex" alignItems="center" gap={2}>
              <SearchButton onClick={() => setIsSearchOpen(true)} />

              {/* Other header items: cart, user menu, etc. */}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Main content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Your routes/content here */}
      </Container>
    </Box>
  );
}
