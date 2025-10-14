import { Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./config"; // adjust path if needed

type ContactFormInputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormInputs) => {
    console.log("📨 Contact form submitted:", data);
    // You can send this data to your service or show a toast
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack 
        width="100%" 
        pr={{ xs: 2, sm: 4, md: 20 }} 
        pt={5} 
        pl={{ xs: 2, sm: 4, md: 5 }} 
        gap={3} 
        height="100%"
      >
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          justifyContent="space-around" 
          gap={2}
        >
          <TextField
            label="Your Name *"
            variant="outlined"
            sx={{ width: { xs: "100%", md: "30%" } }}
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Your Email *"
            variant="outlined"
            sx={{ width: { xs: "100%", md: "30%" } }}
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Your Phone *"
            variant="outlined"
            sx={{ width: { xs: "100%", md: "30%" } }}
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        </Stack>

        <TextField
          label="Your Message"
          sx={{ px: { xs: 0, sm: 1 }, width: "100%" }}
          multiline
          minRows={6}
          {...register("message")}
          error={!!errors.message}
          helperText={errors.message?.message}
        />

        <Button
          type="submit"
          sx={{
            textTransform: "none",
            mb: "auto",
            bgcolor: "#DB4444",
            width: { xs: "100%", sm: 200 },
            height: 50,
            ml: { xs: 0, sm: "auto" },
          }}
          variant="contained"
        >
          Send Message
        </Button>
      </Stack>
    </form>
  );
}
