import Card from "./Card";

export default function Kontakt() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-4">
        <span className="text-gray-600 font-bold">KONTAKT</span>
        <h2 className="text-3xl font-bold my-3 pb-4 bg-gradient-to-r from-[#e66465] to-[#9198e5] bg-[length:60%_6px] bg-no-repeat bg-bottom">
          Javite Se
        </h2>
      </div>
      <div className="grid max-w-[1280px] px-4 pb-8 mx-auto lg:gap-8 py-8 lg:grid-cols-12 flex-container flex-row">
        <div className="lg:col-span-6">+387 63 117 536</div>
        <div className="lg:col-span-6">Više Informacija Uskoro!</div>
      </div>
    </>
  );
}
