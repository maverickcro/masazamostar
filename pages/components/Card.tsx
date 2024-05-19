import Image from "next/image";

export default function Card(props: any) {
  return (
    <div
      className="card-shadow max-w-sm bg-white"
      style={{ height: "100%", overflow: "hidden" }}
    >
      <div className="relative w-full" style={{ height: "250px" }}>
        <Image
          className="rounded-t-lg"
          src={`/${props.src}`}
          alt={props.alt}
          width={350}
          height={350}
          objectFit={"cover"}
          style={{ width: "100%", height: "100%" }}
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
