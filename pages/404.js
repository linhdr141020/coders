import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <div className="not-found">
        <h1>Opppppppppp...</h1>
        <h2>That page cannot be found :</h2>
        <p>
          Going back to the <Link href="/">HomePage</Link> is 3 seconds...
        </p>
      </div>
    </div>
  );
}
