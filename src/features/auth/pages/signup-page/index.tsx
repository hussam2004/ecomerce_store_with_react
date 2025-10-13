import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import authService from "../../services/authService";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./config"; // adjust path if needed

type SignupFormInputs = {
  name: string;
  email: string;
  password: string;
};

export default function SignupPage() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: yupResolver(signupSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: SignupFormInputs) => authService.signup(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSubmit = (data: SignupFormInputs) => {
    mutation.mutate(data);
  };

  return (
    <Stack gap={2} width={400}>
      <Typography variant="h4">Create an account</Typography>
      <Typography variant="body2" pb={1}>
        Enter your details below
      </Typography>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        gap={2}
        width="100%"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="name"
          label="Name"
          variant="standard"
          fullWidth
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          id="email"
          label="Email or Phone Number"
          variant="standard"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          fullWidth
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          variant="contained"
          sx={{
            bgcolor: "#DB4444",
            width: "100%",
            height: 50,
            fontWeight: "700",
            textTransform: "none",
          }}
          type="submit"
        >
          Create Account
        </Button>
      </Box>

      <Button
        variant="outlined"
        color="default"
        sx={{ fontSize: 10, padding: 1, textTransform: "none" }}
      >
        <Stack direction="row">
          <Box component="img" src="/Google-icon.svg" pr={1} />
          <Typography>Sign up with Google</Typography>
        </Stack>
      </Button>
      <Stack direction="row" justifyContent="space-evenly">
        <Typography sx={{ opacity: 0.3 }}>Already have account?</Typography>
        <Typography sx={{ opacity: 0.3 }}>Log in</Typography>
      </Stack>
    </Stack>
  );
}
