import Card from "./Card";

export default function Kontakt() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-4">
        <span className="text-gray-600 font-bold">KONTAKT</span>
        <h2 className="text-3xl font-bold my-3 pb-4 bg-gradient-to-r from-[#e66465] to-[#9198e5] bg-[length:60%_6px] bg-no-repeat bg-bottom">
          Rezervirajte Masažu Danas
        </h2>
        <span className="text-gray-600 font-bold m-4">
          Javite mi se direktno pozivom na broj, Whatsapp-om ili preko kontakt
          forme.
        </span>
      </div>
      <div className="max-w-[960px] w-full px-4 pb-8 py-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <ul className="mb-6">
            <li className="flex items-start justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-gradient-to-bl from-[#e66465] to-[#9198e5] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 7v5l3 3"></path>
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Radno Vrijeme
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Ponedjeljak - Nedjelja: Po dogovoru
                </p>
              </div>
            </li>
            <li>
              <a
                href="tel:+38763117536"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-start"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded bg-gradient-to-bl from-[#e66465] to-[#9198e5] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Klikni za instant poziv
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    +387 63 117 536
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/38763117536"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-start"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded bg-gradient-to-bl from-[#e66465] to-[#9198e5] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 0C5.383 0 0 5.383 0 12c0 2.124.554 4.15 1.604 5.953L0 24l6.186-1.58C8.027 22.449 10.011 23 12 23c6.618 0 12-5.383 12-12S18.618 0 12 0zm0 21.7c-1.847 0-3.676-.497-5.279-1.442l-.376-.226-3.682.939.948-3.596-.245-.378C2.751 15.317 2.2 13.682 2.2 12 2.2 6.515 6.516 2.2 12 2.2c5.484 0 9.8 4.315 9.8 9.8 0 5.484-4.316 9.8-9.8 9.8zm5.324-7.926l-1.565-.451c-.205-.06-.441-.112-.694.126-.241.227-.908.888-1.113 1.066-.204.178-.379.198-.626.067-.25-.133-1.058-.39-2.015-1.24-.743-.66-1.24-1.474-1.387-1.724-.146-.25-.015-.384.11-.51.115-.115.256-.3.384-.451.128-.153.17-.267.256-.445.086-.178.043-.333-.022-.451-.065-.118-.693-1.681-.95-2.285-.252-.602-.509-.519-.695-.528-.177-.01-.383-.011-.585-.011-.2 0-.52.075-.791.369-.272.295-1.041 1.016-1.041 2.475 0 1.459 1.065 2.865 1.215 3.065.15.2 2.084 3.18 5.045 4.46.705.304 1.254.486 1.683.62.707.225 1.352.194 1.861.118.568-.085 1.747-.715 1.993-1.405.246-.692.246-1.283.172-1.405-.073-.123-.274-.198-.572-.327z" />
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Klikni za instant Whatsapp poruku
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    +387 63 117 536
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center "
          id="form"
        >
          <h2 className="mb-4 text-2xl font-bold dark:text-white">
            Kontakt Forma
          </h2>
          <form id="contactForm" className="w-full">
            <div className="mb-6">
              <div className="mx-0 mb-1 sm:mb-4">
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="name"
                    className="pb-1 text-xs uppercase tracking-wider"
                  ></label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="given-name"
                    placeholder="Vaše Ime"
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    name="name"
                    disabled
                  />
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="email"
                    className="pb-1 text-xs uppercase tracking-wider"
                  ></label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Vaša Email Adresa"
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    name="email"
                    disabled
                  />
                </div>
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="textarea"
                  className="pb-1 text-xs uppercase tracking-wider"
                ></label>
                <textarea
                  id="textarea"
                  name="textarea"
                  placeholder="Koju masažu želite i u kojem terminu Vam odgovara?"
                  rows={5}
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  disabled
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-gradient-to-bl from-[#e66465] to-[#9198e5] text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                disabled
              >
                Pošalji Upit (Uskoro Dostupno)
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
