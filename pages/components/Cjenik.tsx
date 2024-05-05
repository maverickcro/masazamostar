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
              *Imam svoj prostor za masažu. U slučaju da želite dolazak na
              adresu to se naplaćuje dodatno.
            </span>
          </div>
        </div>
        <div className="lg:col-span-6">
          <SkupSlika />
        </div>
      </div>
    </>
  );
}
