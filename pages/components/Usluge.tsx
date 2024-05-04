"use client";
import Image from "next/image";
import Card from "./Card";
import InfoCard from "./InfoCard";

export default function Usluge() {
  return (
    <div className="relative">
      <div className="max-w-[1280px]">
        <InfoCard />
      </div>
      <div className="grid max-w-[1280px] px-4 pb-8 mx-auto lg:gap-8 lg:py-16 lg:grid-cols-12 flex-container">
        <div className="lg:col-span-4">
          <Card
            title="Medicinska masaža"
            description="Fokusira se na liječenje specifičnih zdravstvenih stanja, poput kroničnih bolova ili sportskih ozljeda. Poboljšava cirkulaciju i olakšava oporavak"
            src="masaza.png"
            alt="Medicinska Masaza Mostar"
          />
        </div>
        <div className="lg:col-span-4">
          <Card
            title="Sportska masaža"
            description="Dizajnirana za sportaše i aktivne osobe. Pomaže u prevenciji ozljeda, smanjuje mišićnu napetost i poboljšava fleksibilnost."
            src="masaza.png"
            alt="Sportska Masaza Mostar"
          />
        </div>
        <div className="lg:col-span-4">
          <Card
            title="Opuštajuća masaža"
            description="Savršen način za smanjenje stresa i revitalizaciju tijela i uma. Kroz lagane i umirujuće pokrete, ova masaža opušta mišiće, poboljšava raspoloženje i potiče opću dobrobit."
            src="masaza.png"
            alt="Opuštajuća Masaza Mostar"
          />
        </div>
      </div>
    </div>
  );
}
