"use client";
import { TbBooks } from "react-icons/tb";
import { Container, Typography, Button, TextField, Select, MenuItem } from "@mui/material";
import { ImGoogle3 } from "react-icons/im";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "@/features/auth/login";
import { useRouter } from "next/navigation";

export default function SignUp1() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const [isLoading, setIsLoading] = useState(false);

  const toggleVisibility = (type: "password" | "confirmPassword") => {
    if (type === "password") setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setTimeout(() => {
      alert("Sign-in successful!");
      router.push("/view");
      setIsLoading(false);
    }, 2000);
  };

  // Watch fields for button styling
  const allFieldsFilled = watch("email") && watch("password");

  return (
    <Container className="SignUpPage1 loginPage">
      <section className="forPage">
        <section className="signUp1">
          <TbBooks className="tbBook" />
          <Typography variant="h5">BOOKVAULT HUB</Typography>
        </section>

        <section className="signUp2 login">
          <header className="headerSignUp">
            <Typography variant="h4">Welcome to BookVault Hub</Typography>
            <Typography variant="subtitle1">Good to have you back!</Typography>
          </header>

          <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
              <li>
                <TextField
                  {...register("email")}
                  label="Email Address"
                  placeholder="Enter Email Address"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </li>

              <li>
                <div className="divFlex">
                  <TextField
                    {...register("password")}
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    className="passStyle"
                  />
                  <div className="eyeIcon" onClick={() => toggleVisibility("password")}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </li>

            </ul>

            <Button
              type="submit"
              variant="contained"
              className={allFieldsFilled && isValid ? "btn-enabled" : "btn-disabled"}
              fullWidth
              disabled={!allFieldsFilled || !isValid || isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>

            <div className="or">
              <p className="line"></p>
              <Typography variant="body2">OR</Typography>
              <p className="line"></p>
            </div>

            <Button type="button" variant="outlined" startIcon={<ImGoogle3 />} fullWidth>
              Sign in with Google
            </Button>

            <Typography sx={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
            Dont have an account?{" "}
              <a href="/sign-up" className="linkClick1">
                <span className="sign">Sign Up</span>
              </a>
            </Typography>

            <Typography>
              <a href="/forgot-password" className="sign">
              Forgot Password
              </a>
            </Typography>
          </form>
        </section>
      </section>
    </Container>
  );
}
