"use client";
import { useEffect, useState } from "react";
const AccordionItem = ({
  title,
  children,
  first,
}: {
  title: string;
  children: any;
  first: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    first == true && setIsOpen(true);
  }, [first]);
  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300"
        onClick={toggleAccordion}
      >
        {title}
        <span className="h-6 w-6 flex items-center justify-center ">
          <svg className="w-4 h-4" viewBox="0 0 20 20">
            <defs>
              <linearGradient
                id="icon-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" style={{ stopColor: "#cc525d" }} />
                <stop offset="100%" style={{ stopColor: "#6e78ce" }} />
              </linearGradient>
            </defs>
            {isOpen ? (
              // Minus icon
              <path fill="url(#icon-gradient)" d="M19 13H5v-2h14v2z" />
            ) : (
              // Plus icon
              <path
                fill="url(#icon-gradient)"
                d="M19 13H13V19h-2V13H5v-2h6V5h2v6h6v2z"
              />
            )}
          </svg>
        </span>
      </div>
      {isOpen && <div className="p-3 bg-white">{children}</div>}
    </div>
  );
};

export default function FAQ() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <span className="text-gray-600 font-bold">FAQ</span>
        <h2 className="text-3xl font-bold my-3 pb-4 bg-gradient-to-r from-[#e66465] to-[#9198e5] bg-[length:60%_6px] bg-no-repeat bg-bottom">
          Često Postavljena Pitanja
        </h2>
      </div>
      <div className="max-w-[1280px] w-[80%] px-4 pb-8 mx-auto py-8 flex-container">
        <div className="w-[80%] bg-transparent mx-auto p-6">
          <div className="bg-transparent mx-auto p-6">
            <AccordionItem
              title="Koja je razlika klasične i relaksirajuće masaže?"
              first={true}
            >
              <p className="text-gray-600 mb-3">
                Dok je relaksirajuća masaža najznačajnija masaža za otklanjanje
                stresa, klasična masaža će Vam poboljšati cirkulaciju, ublažiti
                bolove u mišićima i poboljšati tjelesnu funkciju. Intenzitet joj
                je negdje između relaksirajuće i sportske masaže. Svakako mi se
                javite za besplatnu konzultaciju.
              </p>
            </AccordionItem>
            <AccordionItem
              title="Trebam li se skinuti za masažu?"
              first={false}
            >
              <p className="text-gray-600 mb-3">
                Preporučuje se da se tijekom tretmana ograničite na nošenje
                donjeg rublja. Na taj način osigurava se neometan pristup svim
                relevantnim mišićima i tkivima bez ometanja odjećom. Također,
                molimo Vas da ne brinete o depilaciji — vaša udobnost i
                opuštenost su moj prioritet. Važno je napomenuti da za masažu
                dolazite bez šminke te preporučujemo tuširanje neposredno prije
                dolaska kako bi tretman bio što ugodniji.
              </p>
            </AccordionItem>
            <AccordionItem title="Može li me masaža ozlijediti?" first={false}>
              <p className="text-gray-600 mb-3">
                Sportska masaža ponekad može izazvati privremenu upalu mišića
                kao normalan odgovor tijela na intenzivnu terapiju, posebno kod
                osoba koje nisu nedavno bile fizički aktivne. Ovaj tip masaže
                koristi duboke tehnike pritiska kako bi poboljšao fleksibilnost
                i oporavak, a svaka nelagoda obično nestane nakon nekoliko dana.
                Vaša udobnost i sigurnost su mi glavni prioritet, stoga vas
                molim da tijekom masaže slobodno izrazite bilo kakve brige ili
                preferencije.
              </p>
            </AccordionItem>
            <AccordionItem
              title="Koliko puta mjesečno otići na masažu da djeluje?"
              first={false}
            >
              <p className="text-gray-600 mb-3">
                Općenito, za održavanje opće dobrobiti i smanjenje stresa
                preporučuje se jedna masaža mjesečno. Ako pak imate specifične
                tegobe kao što su kronična bol, sportske ozljede ili intenzivan
                stres, možda će biti korisno povećati frekvenciju na jednom
                tjedno ili svake dvije sedmice. U svakom slučaju, javite mi se
                za konzultacije.
              </p>
            </AccordionItem>
          </div>
        </div>
      </div>
    </>
  );
}
