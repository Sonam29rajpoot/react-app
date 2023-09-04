import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // const totalItem = useSelector((state) => state.cart.total_item);
  // const allState = useSelector((state) => state);

  // console.log(allState, "totalItem");
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(cartTotalItem());
  // }, []);

  const cart = useSelector((state) => state.cart.cart);
  const totalQuantity = cart.reduce(
    (initialVal, product) => initialVal + product.quantity,
    0
  );

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="/login"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="/reg"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  {/* {/* <a href="#"  */}
                  <p className="-m-2 flex items-center p-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png?20230723002237"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      INDIA
                    </span>
                    <span className="sr-only">, change currency</span>
                  </p>
                  {/* </a> */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            <button
              type="button"
              className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              {/* <a href="#"> */}
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSeenCMOJii-F0MiUzKVOwBfB5HtrHEdJNAKKu7xoqxFHdl1PNwCsSCAQTqk4nZlp-RU&usqp=CAU"
                alt=""
              />
              {/* </a> */}
            </div>
            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="/login"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Sign in
                </a>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <a
                  href="/reg"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Create account
                </a>
              </div>

              <div className="hidden lg:ml-8 lg:flex">
                {/* <a
                  href="#" */}
                <p className="flex items-center text-gray-700 hover:text-gray-800">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png?20230723002237"
                    alt=""
                    className="block h-auto w-5 flex-shrink-0"
                  />
                  <span className="ml-3 block text-sm font-medium">INDIA</span>
                  <span className="sr-only">, change currency</span>
                </p>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <a
                  href="/AddToCart"
                  className="group -m-2 flex items-center p-2"
                >
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {/* {totalItem} */}
                    {totalQuantity}
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
