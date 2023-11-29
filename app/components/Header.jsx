import Image from "next/image";
import Logo from "../../public/logo-1670000205.jpg.png";

export default function Header() {
  return (
    <>
      {/* <!-- navbar goes here --> */}
      <nav className="bg-white dark:bg-gray-800 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex justify-between">
            <div className="flex space-x-9 flex-around">
              {/* <!-- logo --> */}
              <div>
                <a
                  href="/"
                  className="flex items-center py-5 px-2 text-white text-2xl"
                >
                  <Image
                    src={Logo}
                    width={100}
                    height={100}
                    alt="logo"
                    className="mr-10"
                  />
                  <span className="font-bold">
                    Calculs des besoins Vap Concept
                  </span>
                </a>
              </div>

              {/* <!-- primary nav --> */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="/"
                  className="block py-2 px-4 text-sm font-sans text-white hover:text-amber-300"
                >
                  Accueil
                </a>
                <a
                  href="/surstock"
                  className="block py-2 px-4 text-sm text-white hover:text-amber-300"
                >
                  Surstock
                </a>
                <a
                  href="/panier-jpr"
                  className="block py-2 px-4 text-sm text-white hover:text-amber-300"
                >
                  Panier JPR
                </a>
                <a
                  href="/panier-autre-fournisseur"
                  className="block py-2 px-4 text-sm text-white hover:text-amber-300"
                >
                  Panier Autre Fournisseur
                </a>
                {/* <a
                  href="/envoie-panier-jpr"
                  className="block py-2 px-4 text-sm text-white hover:text-amber-300"
                >
                  Envoie panier JPR
                </a> */}
              </div>
            </div>

            {/* <!-- mobile button goes here --> */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div className="mobile-menu hidden md:hidden">
          <a href="#" className="block py-2 px-4 text-sm text-white">
            Accueil
          </a>
          <a href="#" className="block py-2 px-4 text-sm text-white">
            Surstock
          </a>
          <a href="#" className="block py-2 px-4 text-sm text-white">
            Panier JPR
          </a>
          <a href="#" className="block py-2 px-4 text-sm text-white">
            Panier Autre Fournisseur
          </a>
          {/* <a href="#" className="block py-2 px-4 text-sm text-white">
            Envoie panier JPR
          </a> */}
        </div>
      </nav>
    </>
  );
}
