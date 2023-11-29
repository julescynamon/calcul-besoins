"use client";

import { useState } from "react";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div>
        <h1 className="text-center mt-40 text-xl font-semibold">
          Bienvenue sur votre Logiciel de Calculs des besoins 😎
        </h1>
        <div className="flex justify-center  mt-20 w-full">
          <p>Veuillez choisir votre magasin :</p>
          <div>
            <button
              id="dropdownUsersButton"
              data-dropdown-toggle="dropdownUsers"
              data-dropdown-placement="bottom"
              className="text-white bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 ml-2"
              type="button"
              onClick={toggleDropdown}
            >
              <span>Magasin</span>
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            {isDropdownOpen && (
              <div
                id="dropdownUsers"
                className="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700  mt-3"
              >
                <ul
                  className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownUsersButton"
                >
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Jese Leos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Robert Gough
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Bonnie Green
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Leslie Livingston
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Michael Gough
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Joseph Mcfall
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Roberta Casas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Neil Sims
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <hr className="m-10" />
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-3 text-left font-medium">
                    Rèf. Fourn.
                  </th>
                  <th className="px-6 py-3 text-left font-medium">Produit</th>
                  <th className="px-6 py-3 text-left font-medium">
                    Déclinaison
                  </th>
                  <th className="px-6 py-3 text-left font-medium">Marque</th>
                  <th className="px-6 py-3 text-left font-medium">
                    Fournisseur
                  </th>
                  <th className="px-6 py-3 text-left font-medium">Stock</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <input
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">essaie</div>
                      <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      essaie
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      published
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    essaie
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
