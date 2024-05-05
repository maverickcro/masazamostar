import SkupSlika from "./SkupSlika";

export default function Cjenik() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <span className="text-gray-600 font-bold">CJENIK</span>
        <h2 className="text-3xl font-bold my-3 pb-4 bg-gradient-to-r from-[#e66465] to-[#9198e5] bg-[length:60%_6px] bg-no-repeat bg-bottom">
          Koliko To Košta?
        </h2>
      </div>
      <div className="grid max-w-[1280px] px-4 pb-8 mx-auto lg:gap-8 py-8 lg:grid-cols-12 flex-container">
        <div className="lg:col-span-6">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-white uppercase bg-gradient-to-r from-[#e66465] to-[#9198e5] ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Vrsta masaže
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Trajanje
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cijena
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Klasična - Parcijalna
                  </th>
                  <td className="px-6 py-4">40 min</td>
                  <td className="px-6 py-4">40 KM</td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Klasična - Full Body
                  </th>
                  <td className="px-6 py-4">60 min</td>
                  <td className="px-6 py-4">50 KM</td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Sportska
                  </th>
                  <td className="px-6 py-4">60 min</td>
                  <td className="px-6 py-4">60 KM</td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Relax/Opuštajuća
                  </th>
                  <td className="px-6 py-4">60 min</td>
                  <td className="px-6 py-4">40 KM</td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Limfna Drenaža
                  </th>
                  <td className="px-6 py-4">Tretman</td>
                  <td className="px-6 py-4">60 KM</td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Elektropunkcija
                  </th>
                  <td className="px-6 py-4">Tretman</td>
                  <td className="px-6 py-4">30 KM</td>
                </tr>
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    colSpan={2}
                  >
                    *Dolazak na Adresu - Mostar i Okolica
                  </th>
                  <td className="px-6 py-4">20 KM</td>
                </tr>
              </tbody>
            </table>
            <span className="text-sm text-gray-600 italic">
              *Imam svoj prostor za masažu. U slučaju da želite da dođem na
              adresu to se naplaćuje dodatno.
            </span>
            <a
              href="#kontakt"
              className="card-shadow inline-flex items-center justify-center px-5 py-3 mr-3 mt-2 w-[200px] text-base font-medium text-center text-white rounded-lg gradient-pozadina hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Kontakt
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <SkupSlika />
        </div>
      </div>
    </>
  );
}
