import Card from "./Card";

export default function Usluge() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <span className="text-gray-600 font-bold">USLUGE</span>
        <h2 className="text-3xl font-bold my-3 pb-4 bg-gradient-to-r from-[#e66465] to-[#9198e5] bg-[length:60%_6px] bg-no-repeat bg-bottom">
          Koje Masaže Nudim?
        </h2>
      </div>
      <div className="grid max-w-[1280px] px-4 pb-8 mx-auto lg:gap-8 py-8 lg:grid-cols-12 flex-container flex-row">
        <div className="lg:col-3">
          <Card
            title="Klasična masaža"
            description="Cilj joj je opuštanje mišića i poboljšanje cirkulacije krvi kroz niz glađenja, gnječenja i tapkanja. Efikasno smanjuje stres i unaprjeđuje opće psihofizičko stanje."
            src="slika5.jpg"
            alt="Klasična Masaza Mostar"
          />
        </div>
        <div className="lg:col-3">
          <Card
            title="Medicinska masaža"
            description="Fokusira se na liječenje specifičnih zdravstvenih stanja, poput kroničnih bolova ili sportskih ozljeda. Poboljšava cirkulaciju i olakšava oporavak."
            src="slika1.jpg"
            alt="Medicinska Masaza Mostar"
          />
        </div>
        <div className="lg:col-3">
          <Card
            title="Sportska masaža"
            description="Dizajnirana za sportaše i aktivne osobe. Pomaže u prevenciji ozljeda, smanjuje mišićnu napetost i poboljšava fleksibilnost."
            src="slika3.jpg"
            alt="Sportska Masaza Mostar"
          />
        </div>
        <div className="lg:col-3">
          <Card
            title="Opuštajuća masaža"
            description="Savršen način za smanjenje stresa i revitalizaciju tijela i uma. Kroz lagane i umirujuće pokrete, ova masaža opušta mišiće, poboljšava raspoloženje i potiče opću dobrobit."
            src="slika2.jpg"
            alt="Opuštajuća Masaza Mostar"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-gray-600 italic">
          Ako niste sigurni koju masažu trebate, slobodno mi se javite. Rado ću
          Vam preporučiti pravu nakon kratkih konzultacija.
        </span>
      </div>
    </>
  );
}
