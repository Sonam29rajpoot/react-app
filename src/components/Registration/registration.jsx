import { useState } from "react";
import { registerUser } from "../../actions/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Registration() {
  const [formInput, setFormInput] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const nameData = event.target.name;
    const valueData = event.target.value;
    console.log("object", nameData, valueData);
    setFormInput((preInput) => {
      return {
        ...preInput,
        [nameData]: valueData,
      };
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("SubmitHandler");
    dispatch(registerUser(formInput));
    alert("Registered successfully!");
    console.log("object", formInput);
  };

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
            Registration
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form className="space-y-6" action="#" method="POST"> */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter Your Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  value={formInput.name}
                  type="text"
                  required
                  onChange={onInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter Your Contact
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  value={formInput.phone}
                  required
                  onChange={onInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
                  value={formInput.email}
                  type="email"
                  required
                  onChange={onInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={formInput.password}
                  type="password"
                  required
                  onChange={onInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={onSubmitHandler}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <Link
              to="login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              already have an account ? Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
