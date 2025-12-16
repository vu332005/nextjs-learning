"use client";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

const facebook = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <div>facebook</div>
      <Button onClick={() => handleClick()}>back home</Button>
    </>
  );
};

export default facebook;
