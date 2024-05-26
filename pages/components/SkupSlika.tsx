import Image from "next/image";
import React from "react";

export default function SkupSlika() {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-1/2 p-2">
        <div
          className="flex flex-col items-end bg-transparent rounded-lg"
          style={{ borderRadius: "16px 16px 0 0" }}
        >
          <Image
            src="/slika4.jpg"
            alt="Masaža Mostar za Muškarce i Žene"
            width={300}
            height={400}
            className="rounded-tl-[50px]"
            objectFit={"cover"}
            style={{ width: "100%" }}
          />
          <div className="w-20 h-20 mt-2 bg-gradient-to-tr from-[#e66465] to-[#9198e5] rounded-bl-[50px]"></div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 p-2">
        <div
          className="flex flex-col items-start bg-transparent rounded-lg"
          style={{ borderRadius: "0 16px 16px 0" }}
        >
          <div className="w-20 h-20 mb-2 bg-gradient-to-bl from-[#e66465] to-[#9198e5] rounded-tr-[50px]"></div>
          <Image
            src="/slika5.jpg"
            alt="Masaža Mostar za Muškarce i Žene"
            width={300}
            height={400}
            className="rounded-br-[50px]"
            objectFit={"cover"}
          />
        </div>
      </div>
    </div>
  );
}
