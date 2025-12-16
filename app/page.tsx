"use client";
import Tables from "./components/app.table";
import { useEffect } from "react";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log(">> check data", data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);
  // khi ta viết như này -> mỗi lần mouting lại page này -> nó sẽ lại gọi data lại 1 lần
  // -> ta sẽ sử dụng swr để nếu data không mới -> nó sẽ lấy luôn từ cache chứ gửi req mới nữa

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Tables />
    </div>
  );
}
