import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLonin/SocialLogin";
import axios from "axios";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { registerUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = async (data) => {
    try {
      // 1️⃣ Image file
      const profileImg = data.photo[0];

      // 2️⃣ FormData fix
      const formData = new FormData();
      formData.append("image", profileImg);

      // 3️⃣ Upload to imgbb
      const imgApiUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_imgApiKey
      }`;

      const imgRes = await axios.post(imgApiUrl, formData);
      const photoURL = imgRes.data.data.url;
      console.log("Image uploaded:", photoURL);

      // 4️⃣ Register user
      const userRes = await registerUser(data.email, data.password);
      console.log("User created:", userRes.user);

      // 5️⃣ Update profile
      const userProfile = {
        displayName: data.name,
        photoURL: photoURL,
      };

      await updateUserProfile(userProfile);
      console.log("Profile updated!");

      navigate(location?.state || "/");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center font-bold text-3xl my-4">
          Create a New account
        </h2>
        <div className="card-body">
          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input"
                placeholder="Name"
              />
              {/* Photo */}
              <label className="label">Photo</label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input"
                placeholder="photo"
              />
              {/* email */}
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
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <p>
              New Zap-shift user{" "}
              <Link
                state={location?.state}
                to={"/login"}
                className=" text-blue-500 underline"
              >
                Login
              </Link>{" "}
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
