import { Box, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import image1 from "../../images/image1.jfif";
import GoogleIcon from "@mui/icons-material/Google";
import useAuth from "../../hooks/useAuth";
import LoginIcon from "@mui/icons-material/Login";
import Particles from "react-tsparticles";
import Navigation from "../Navigation/Navigation";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const particlesInit = (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {};

  const {
    signInUsingGoogle,
    signUpUsingEmailAndPassword,
    signInEmailAndPassword,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (signUp) {
      signUpUsingEmailAndPassword(
        data.name,
        data.email,
        data.password,
        location,
        history
      );
    } else {
      signInEmailAndPassword(data.email, data.password, location, history);
    }
    reset();
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle(location, history);
  };

  return (
    <>
      <Navigation></Navigation>
      <Box className="bg-slate-900 px-20 py-40 text-white text-center login-signup">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "rgb(15 23 42)",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#2789F8",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 4,
              },
            },
            detectRetina: true,
          }}
        />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className="p-5">
            <img src={image1} width="100%" className="rounded-lg " alt="" />
          </Grid>
          <Grid item xs={12} md={6} className="bg-gray-700 mt-5 rounded-lg">
            {signUp ? (
              <h2 className="text-4xl py-2">Register</h2>
            ) : (
              <h2 className="text-4xl py-2">Login</h2>
            )}
            <h4 className="text-xl">
              Manage your business with our automated inventory management
              system
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              {signUp && (
                <TextField
                  id="standard-basic"
                  label="Your Name"
                  sx={{ width: "50%", m: 1 }}
                  variant="standard"
                  type="text"
                  name="name"
                  {...register("name")}
                />
              )}
              <TextField
                id="standard-basic"
                label="Your Email"
                sx={{ width: "50%", m: 1 }}
                variant="standard"
                type="email"
                name="email"
                {...register("email")}
              />
              <TextField
                id="standard-basic1"
                label="Your Password"
                sx={{ width: "50%", m: 1 }}
                variant="standard"
                type="password"
                name="password"
                {...register("password")}
              />
              <br />
              {signUp ? (
                <button
                  type="submit"
                  className="border-2 rounded px-2 py-2 mr-3 border-blue-300 hover:bg-blue-500"
                >
                  {" "}
                  <LoginIcon /> Sign Up{" "}
                </button>
              ) : (
                <button
                  type="submit"
                  className="border-2 rounded px-2 py-2 mr-3 border-blue-300 hover:bg-blue-500"
                >
                  {" "}
                  <LoginIcon /> Log In{" "}
                </button>
              )}
            </form>
            <button
              onClick={handleGoogleSignIn}
              className="border-2 rounded my-4 px-2 py-2 border-blue-300 hover:bg-blue-500"
            >
              {" "}
              <GoogleIcon /> Log In With Google{" "}
            </button>
            <Box sx={{ m: 2 }}>
              New User{" "}
              <span
                className="text-red-400 cursor-pointer"
                onClick={() => setSignUp(!signUp)}
              >
                {signUp ? "Login" : "Register"}
              </span>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
