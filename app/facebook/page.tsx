"use client";
import { useRouter } from "next/navigation";

const facebook = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <div>facebook</div>
      <button onClick={() => handleClick()}>back home</button>
    </>
  );
};

export default facebook;
