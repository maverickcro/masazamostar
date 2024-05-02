import Image from "next/image";

export default function Card(props: any) {
  return (
    <div
      className="max-w-sm bg-white border border-black rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700"
      style={{ height: "100%", overflow: "hidden" }}
    >
      <div className="relative w-full" style={{ height: "350px" }}>
        <Image
          className="rounded-t-lg"
          src={`/${props.src}`}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      </div>
    </div>
  );
}
