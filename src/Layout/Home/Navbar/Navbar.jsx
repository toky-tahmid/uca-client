import { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 font-primary dark:bg-black duration-300">
        <div className="w-full px-1 md:px-7 mx-auto flex flex-wrap items-center justify-between">

          <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <img
            className="h-36 w-40"
            src="https://i.ibb.co/mFgnVSJ/UCA-SUPPORT-1.png"
            alt="UCA Support"
          />
            <button
              className="text-black dark:text-white duration-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <details>
                <summary></summary>
              </details>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="w-full flex justify-center items-center mt-5 lg:mt-0 mb-2 lg:mb-0">
              <div>
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-3 xl:gap-5">
                <a
                  href="/#"
                  className="nav-item px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-black dark:text-white duration-300 hover:opacity-75"
                >
                  Home
                </a>
                  <a
                    href="#blogs"
                    className="nav-item px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-black dark:text-white duration-300 hover:opacity-75"
                  >
                    Blogs
                  </a>
                  <a
                    href="#/country"
                    className="nav-item px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-black dark:text-white duration-300 hover:opacity-75"
                  >
                    Countries
                  </a>
                  <a
                    href="#testimonials"
                    className="nav-item px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-black dark:text-white duration-300 hover:opacity-75"
                  >
                    Testimonials
                  </a>

                  <a
                    href="#contact"
                    className="nav-item px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-black dark:text-white duration-300 hover:opacity-75"
                  >
                    Contact
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
