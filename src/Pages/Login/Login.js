import React from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (gError || error) {
    signInError = <p className="text-red-500"><small>{error?.message || gError?.message}</small></p>
  }

  if(loading || gLoading){
    return <Loading></Loading>
  }

  if(gUser || user ){
    navigate(from, {replace: true});
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    toast('Successfully logged in')
  };

  return (
    <div className="flex justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl font-semibold text-center">LOGIN</h2>

          <form onSubmit={handleSubmit(onSubmit)}>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              class="input input-bordered w-full max-w-xs"
              {...register("email", {
                
                required: {
                    value: true,
                    message: "Email is Required"

                },                
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email'
                    
                  }
               })}
            />
            <label class="label">
            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email?.message}</span>}
            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email?.message}</span>}
            </label>
          </div>


          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              class="input input-bordered w-full max-w-xs"
              {...register("password", {
                
                required: {
                    value: true,
                    message: "Password is Required"

                },                
                    minLength: {
                      value: 6,
                      message: 'Must be 6 character or longer'
                  }
               })}
            />
            <label class="label">
            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password?.message}</span>}
            {errors.password?.type === 'minlength' && <span class="label-text-alt text-red-500">{errors.password?.message}</span>}
            </label>
          </div>

          {signInError}
          <input  className="btn btn-primary w-full max-w-xs text-white" type="submit" value="Login"/>
          </form>
          <p><small>Are you new? <Link className="text-secondary" to="/signup">Create new account</Link></small></p>
          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            
            class="btn btn-outline btn-primary"
          >
            Continue with google
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
