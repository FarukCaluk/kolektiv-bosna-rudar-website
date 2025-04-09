import Image from "next/image";
import React from "react";
import Loader from "../../public/loading.gif";
export default function Loading() {
  return (
    <div className="h-full w-full">
      <Image alt="loading..." src={Loader} height={500} width={500} />
    </div>
  );
}
