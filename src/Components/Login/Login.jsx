import { use, useState } from "react";
import { Link, useLocation } from "react-router";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        setLoading(false);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        setLoading(false);
        toast(error.message);
      });
  }
  function handleGoogle() {
    googleSignIn()
      .then((result) => {
        console.log(result);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast(error.message);
      });
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-center font-[700] text-[25px] mt-15 text-[#3A3C51]">
        Login
      </h1>
      <div className="card bg-[#D8E9E7] max-w-[300px] lg:max-w-[450px] lg:px-6 lg:py-5  shrink-0 flex justify-center rounded-none mx-auto mt-10 mb-10">
        <div className="card-body pt-6">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label text-[15px] font-[500]">Email</label>
            <input
              name="email"
              type="email"
              className="input border-none w-full rounded-none focus:placeholder-transparent focus:outline-none"
              placeholder="Email"
            />
            <label className="label text-[15px] font-[500]">Password</label>
            <input
              name="password"
              type="password"
              className="input border-none w-full rounded-none focus:placeholder-transparent focus:outline-none"
              placeholder="Password"
            />
            <button className="btn bg-[#3A3C51] text-white mt-4 rounded-none">
              {loading ? (
                <span className="loading loading-dots loading-lg"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <button
            onClick={handleGoogle}
            className="btn bg-white text-black border-[#e5e5e5] rounded-none"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p className="text-center mt-2 text-[15px] font-[500]">
            New to this site? Please{" "}
            <Link className="underline text-[#3A3C51]" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
