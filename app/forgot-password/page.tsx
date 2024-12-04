"use client";
import { TbBooks } from "react-icons/tb";
import { Container, Typography, Button, TextField, Select, MenuItem } from "@mui/material";
import { ImGoogle3 } from "react-icons/im";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotFormData, forgotSchema } from "@/features/auth/password";
import { useRouter } from "next/navigation";

export default function SignUp1() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<ForgotFormData>({
    resolver: zodResolver(forgotSchema),
    mode: "onSubmit",
  });

  const [isLoading, setIsLoading] = useState(false);

  const toggleVisibility = (type: "password" | "confirmPassword") => {
    if (type === "password") setShowPassword((prev) => !prev);
    if (type === "confirmPassword") setShowConfirmPassword((prev) => !prev);
  };

  const onSubmit = async (data: ForgotFormData) => {
    setIsLoading(true);
    setTimeout(() => {
      alert("Reset Password successful!");
      router.push("/login");
      setIsLoading(false);
    }, 2000);
  };

  // Watch fields for button styling
  const allFieldsFilled = watch("password") && watch("confirmPassword");

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
            <Typography variant="subtitle1">Reset Password</Typography>
          </header>

          <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
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

              <li>
                <div className="divFlex">
                  <TextField
                    {...register("confirmPassword")}
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    fullWidth
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                    className="passStyle"
                  />
                  <div className="eyeIcon" onClick={() => toggleVisibility("confirmPassword")}>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
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
              {isLoading ? "Reseting..." : "Reset Password"}
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
              Already have an account?{" "}
              <a href="/login" className="linkClick1">
                <span className="sign">Sign in</span>
              </a>
            </Typography>
          </form>
        </section>
      </section>
    </Container>
  );
}
