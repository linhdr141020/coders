import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">Coder Wiki</Link>
      </div>

      <div>
        <Link href="/about">About</Link>

        <Link href="/coders">All Coders</Link>
      </div>
    </nav>
  );
}
