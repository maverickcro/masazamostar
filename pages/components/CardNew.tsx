import Image from "next/image";

export default function CardNew(props: any) {
  return (
    <div className="rounded overflow-hidden bg-white shadow-lg flex flex-col card-shadow w-full h-full">
      <div className="relative w-full h-56">
        <Image
          className="rounded-t-lg"
          src={`/${props.src}`}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-2 md:px-4 py-2 mb-auto">
        <h3 className="text-2xl font-bold inline-block mb-2">{props.title}</h3>
        <p className="text-gray-500 text-base">{props.description}</p>
      </div>
      <div className="px-6 py-3 flex items-end justify-between gradient-pozadina">
        <span className="py-1 text-sm font-bold text-white mr-1 flex flex-row items-end">
          {props.intensity}
        </span>
      </div>
    </div>
  );
}
