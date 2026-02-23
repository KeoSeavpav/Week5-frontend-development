import { DATA } from "./data";

function Card({ item }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "15px",
      margin: "10px",
      width: "200px",
      borderRadius: "10px"
    }}>
      <img src={item.image} alt={item.name} width="100%" />
      <h2>{item.name}</h2>
      <p>Hobby: {item.hobby}</p>
      <p>Country: {item.country}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>My Creative Cards</h1>

      {DATA.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </>
  );
}

export default App;
