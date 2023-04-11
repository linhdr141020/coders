import React from "react";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((coder) => {
    return {
      params: { id: coder.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await response.json();

  return {
    props: { coder: data },
  };
};

export default function Detail({ coder }) {
  return (
    <div>
      <h1>{coder.name}</h1>
      <p>Email: {coder.email}</p>
      <p>Website: {coder.website}</p>
      <p>
        Address: {coder.address.street}, {coder.address.city}
      </p>
      <p>Company: {coder.company.name}</p>
    </div>
  );
}
