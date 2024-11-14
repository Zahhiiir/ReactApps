export default function Fruits() {
  const fruits = ["mango", "orenge", "papaya", "avacordo"];
  return (
    <div>
      {fruits.map((fruit) => (
        <h1>{fruit}</h1>
      ))}
    </div>
  );
}
