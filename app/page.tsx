"use client"

import Link from "next/link";
export default function Home() {
  return (
    <div>
      this is hompage go to login page
      <Link href="/login"> login</Link>
    </div>
  );
}
