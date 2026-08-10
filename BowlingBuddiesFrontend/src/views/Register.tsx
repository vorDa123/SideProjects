import HeaderMob from "../components/layouts/Header.tsx";
import { NavLink } from "react-router";
function Register() {
  return (
    <>
      <div className="grid grid-cols-1 lg:h-dvh lg:grid-cols-2">
        <HeaderMob />
        <div className="hidden lg:block lg:bg-[url(/src/assets/bowlingpins.jpg)] lg:bg-center lg:bg-cover lg:w-full lg:rounded-tr-m30 lg:rounded-br-m30"></div>
        <main className="w-full md:w-[85%] max-w-4xl mx-auto px-6 lg:mt-10 xxl:w-[75%]">
          <h1 className="text-mh1 font-semibold my-15 lg:text-th2">Register</h1>
          <form className="relative">
            <label htmlFor="email" className="text-mh4">
              E-mail:
            </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              className="h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2"
            ></input>
            <br />
            <label htmlFor="password" className="text-mh4 inline-block mt-6">
              Password:
            </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2"
            ></input>
            <br />
            <label
              htmlFor="confirmPassword"
              className="text-mh4 inline-block mt-6"
            >
              Confirm password:
            </label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="h-11.25 border border-darkerBlue-100 rounded-m7 w-full px-2"
            ></input>
            <br />
            <button className="text-mh2 font-medium bg-orange-100 py-2 px-8 rounded-m25 text-center mt-6 absolute right-0">
              <NavLink to="/">Register</NavLink>
            </button>
          </form>
          <div className="flex flex-row mt-25 justify-center items-center gap-2">
            <div className="w-12.5 h-0.5 bg-darkerBlue-30 rounded-full"></div>
            <span>Or</span>
            <div className="w-12.5 h-0.5 bg-darkerBlue-30 rounded-full"></div>
          </div>
          <button className="text-mh4 w-full font-medium border-[1.5px] border-orange-100 py-2 px-8 rounded-m25 text-center text-orange-100 mt-8 relative left-1/2 transform -translate-x-1/2 lg:w-3/4">
            Continue with Google
          </button>
          <p className="my-9 text-mh4">
            Already have an account?{" "}
            <NavLink to="/login" className="text-orange-100">
              Log in here
            </NavLink>
          </p>
        </main>
      </div>
    </>
  );
}

export default Register;
