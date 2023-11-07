import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  
    try {
      const user = await signIn(email, password);
      console.log(user);
      form.reset();
      toast.success('User Logged In Successfully');
      navigate(location?.state? location.state : '/');
    } catch (error) {
      console.error(error.message);
    }
  };
 
  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex">
      <div className="min-h-screen bg-base-200 p-4 md:p-0 flex-1">
        <div className=" flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left mt-[20px] mb-[20px]">
            Please
            <span style={{ color: "red", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[" Login Now", " Sign In"]}
                loop={5}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <div className="w-full md:max-w-sm">
            <div className="card shadow-lg bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-4 md:mt-6">
                  <button className="btn btn-primary w-full md:w-auto">
                    Login
                  </button>
                </div>
                <p className="text-xs md:text-sm font-light text-gray-500 dark:text-gray-400 text-center md:text-left mt-4">
                  Do not have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    <button className="btn btn-active btn-link">Sign Up</button>
                  </Link>
                </p>
                <div className="text-center md:text-left mt-4">
                  <p className="text-xs md:text-sm font-light text-gray-500 dark:text-gray-400">
                    Continue With
                    <button
                      onClick={() => handleSocialLogin(googleLogin)}
                      className="btn btn-primary btn-sm ml-2 md:ml-4"
                    >
                      Google
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* add humans */}
      {/* <section className="flex-1">
        <div>
          <img
            className="w-[100%] h-[70vh]"
            src="https://i.ibb.co/3pgXq8F/registration.png"
            alt=""
          />
        </div>
      </section> */}
    </div>
  );
};

export default Login;
