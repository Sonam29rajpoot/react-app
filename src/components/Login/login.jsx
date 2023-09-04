import { useState, useEffect } from "react";
import { loginUser } from "../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const authState = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLoginInputChange = (e) => {
    const nameData = e.target.name;
    const valueData = e.target.value;
    console.log("object", nameData, valueData);
    setLoginInput((preval) => {
      return {
        ...preval,
        [nameData]: valueData,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = loginInput;

    if (email && password) {
      dispatch(loginUser(loginInput));
    }
    setLoginInput({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (authState.isLoggedIn) {
      navigate("/product");
    } else {
      navigate("/login");
    }
  }, [authState.isLoggedIn, navigate]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSeenCMOJii-F0MiUzKVOwBfB5HtrHEdJNAKKu7xoqxFHdl1PNwCsSCAQTqk4nZlp-RU&usqp=CAU"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>
        </div>
        {authState.msg && (
          <p className="mt-2 text-center text-sm text-green-500">
            {authState.msg}
          </p>
        )}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form className="space-y-6" action="#" method="POST"> */}
          <form className="space-y-6">
            {authState.user && (
              <p className="mt-2 text-center text-green-500 font-black">
                Login Successfully!
              </p>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={loginInput.email}
                  //   autoComplete="email"
                  required
                  onChange={onLoginInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  {/* <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a> */}
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={loginInput.password}
                  //   autoComplete="current-password"
                  required
                  onChange={onLoginInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              {authState.error && (
                <p className="mt-2 text-center text-sm text-red-500 font-black">
                  {authState.error}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                onClick={onSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <Link
              to="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Don't have an account ? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
