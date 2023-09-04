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

  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [errorInput, setErrorInput] = useState(false);
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const nameData = event.target.name;
    const valueData = event.target.value;

    if (nameData === "phone") {
      const isValidPhone = /^\d{10}$/.test(valueData);
      setIsPhoneValid(isValidPhone);
    }
    if (nameData === "email") {
      const isValidEmail = /\S+@\S+\.\S+/.test(valueData);
      setIsEmailValid(isValidEmail);
    }
    if (nameData === "password") {
      const isValidPassword =
        /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d]).{6,}$/.test(valueData);
      setIsPasswordValid(isValidPassword);
    }
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

    if (
      formInput.name === "" ||
      formInput.phone === "" ||
      formInput.email === "" ||
      formInput.password === ""
    ) {
      setErrorInput(true);
    } else {
      setErrorInput(false);
      dispatch(registerUser(formInput));
      alert("Registered successfully!");
      setFormInput({
        name: "",
        phone: "",
        email: "",
        password: "",
      });
    }
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
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registration
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form className="space-y-6" action="#" method="POST"> */}
          <form className="space-y-6">
            {errorInput && (
              <p className="text-red-500 font-black">
                Please fill in all the fields.
              </p>
            )}
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
              {!isPhoneValid && (
                <p className="text-red-500 font-bold">
                  Phone number must contain exactly 10 digits.
                </p>
              )}

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
              {!isEmailValid && (
                <p className="text-red-500 font-bold">
                  Please enter a valid email address.
                </p>
              )}
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
              {!isPasswordValid && (
                <p className="text-red-500 font-semibold">
                  Password must contain at least 6 characters, including numeric
                  digits, alphabetic characters, and symbols.
                </p>
              )}

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
                disabled={!isPhoneValid || !isEmailValid || !isPasswordValid}
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
