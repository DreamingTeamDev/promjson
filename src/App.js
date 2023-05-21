// import { Link } from "react-router-dom";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      {/* <Link
        to="./data/products.json"
        style={{
          width: "80%",
          border: "1px solid black",
          borderRadius: 10,
          backgroundColor: "green",
          color: "white",
          padding: 10,
          textDecoration: "none",
        }}
      >
        JSON-смотреть
      </Link> */}
      <ProductList />
    </div>
  );
}

export default App;
