import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coders | Home</title>
        <meta name="keywords" content="coders" />
      </Head>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        doloribus quos nisi quia. Voluptate repellat saepe quas amet eos, maxime
        quaerat, voluptates suscipit sint dolorum aspernatur cumque earum
        adipisci tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed
        animi tempora quibusdam ex mollitia eveniet iste enim itaque, commodi
        cumque necessitatibus quia dignissimos voluptas odit ipsum. Quasi,
        tempore officia!
      </p>
      <Link href="/coders/">
        <span className="btn">See All Coders</span>
      </Link>

      <style jsx>
        {`
          .btn {
            display: block;
            width: 150px;
            padding: 6px 0;
            margin: 20px auto;
            background: #ffbf49;
            border-radius: 4px;
            color: black;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
