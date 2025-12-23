import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLonin/SocialLogin";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signinUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSigin = (data) => {
    console.log(data);
    signinUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center font-bold text-3xl my-4">
          Login your accounat
        </h2>
        <div className="card-body">
          <form onSubmit={handleSubmit(handleSigin)}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">email required</p>
              )}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/,
                })}
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is requiread</p>
              )}

              {errors.password?.type === "minLength" && (
                <p className="text-red-500">password minimaum 6 carecter</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must include uppercase, lowercase, number & symbol
                </p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p>
              New Zap-shift user{" "}
              <Link
                state={location?.state}
                to={"/register"}
                className=" text-blue-500 underline"
              >
                Register
              </Link>{" "}
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
