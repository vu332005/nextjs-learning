import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ul>
        <li>
          <Link href="/admin">admin</Link>
        </li>
        <li>
          <a href="/facebook">facebook</a>
        </li>
        <li></li>
      </ul>
    </div>
  );
}
