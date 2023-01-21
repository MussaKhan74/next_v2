"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  return (
    <div>
      <h1>Contact</h1>
      <Link href='/'>home</Link>
      <button onClick={() => router.push("/")}>HOME</button>
    </div>
  );
}
