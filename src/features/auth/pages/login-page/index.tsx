import { useAuth } from "../../store";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./config"; // adjust path if needed

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { isAuthenticated, login: authlogin } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: LoginFormInputs) => authService.login(data),
    onSuccess: () => {
      authlogin();
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      navigate("/");
    },
  });

  const onSubmit = (data: LoginFormInputs) => {
    mutation.mutate(data);
  };

  return (
    <Stack gap={2} width={400}>
      <Typography variant="h4">Log in to Exclusive</Typography>
      <Typography variant="body2" pb={2}>
        Enter your details below
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={3}>
          <TextField
            id="email"
            label="Email or Phone Number"
            variant="standard"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={5}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#DB4444",
              width: 150,
              height: 50,
              fontWeight: "700",
            }}
            type="submit"
          >
            Log In
          </Button>
          <Typography color="#DB4444">Forget Password?</Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
