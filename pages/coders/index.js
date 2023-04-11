import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Coder.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { coders: data },
  };
};

export default function AllCoders({ coders }) {
  return (
    <>
      <Head>
        <title>Coders | All Coders</title>
        <meta name="keywords" content="coders" />
      </Head>
      <div>
        <h1>All Coders</h1>
        {coders.map((coder) => (
          <Link href={"/coders/" + coder.id} key={coder.id}>
            <span className={styles.single}>
              <h3>{coder.name}</h3>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
