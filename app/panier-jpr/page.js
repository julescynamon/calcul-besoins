import React from "react";

export default function panierjpr() {
  return (
    <>
      <div className="m-40 text-center">
        <div>
          <h1 className="text-center text-xl font-semibold mb-10">
            Panier JPR
          </h1>
          <p>
            Voiçi la page du panier de JPR, sur cette page vous pouvez voir les
            besoins produits et modifier les quantités si besoin. Une fois vos
            besoin définis pour enregistrer votre panier, il vous suffit de
            cliquer sur le bouton &quot;Enregistrer le panier&quot;. Vous pouvez
            utiliser la barre de recherche pour trouver un produit en
            particulier.
          </p>
        </div>
        <div className="mt-10">
          <div className="mt-3 w-1/4 mr-auto ml-auto">
            <div className="px-2 flex items-center border-1 bg-white border shadow-md rounded-full">
              <input
                className="rounded-l-sm w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
                id="search"
                type="text"
                placeholder="Search"
              />
              <div className="p-2">
                <button className="bg-yellow-500 text-white rounded-full p-2 hover:bg-yellow-200 focus:outline-none w-12 h-12 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-20">
              <button className="bg-yellow-500 hover:bg-yellow-200  text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Enregistrer le panier 😎</span>
              </button>
            </div>
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
                  <th className="px-6 py-3 text-left font-medium">SurStock</th>
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
