import React from "react";

const product = [
  {
    id: 1,
    name: "mobile",
    prise: 1200,
  },
  {
    id: 2,
    name: "laptop",
    prise: 5000,
  },
  {
    id: 3,
    name: "mic",
    prise: 5000,
  },
];

function ProductList() {
  return (
    <main>
      {product.map((prod) => (
        <p key={Math.random()}>
          {prod.id} {prod.name} ${prod.prise}
        </p>
      ))}
    </main>
  );
}

export default ProductList;
