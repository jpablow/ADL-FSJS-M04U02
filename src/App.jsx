import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Login";
import Container from "react-bootstrap/Container";
import Alerta from "./components/Alert";
import { useState } from "react";
import Barra from "./components/Navbar";

function App() {
  const [resAlerta, setResAlerta] = useState({
    msgAlerta: "",
    variantAlerta: "",
    showAlerta: false,
  });
  return (
    <>
      <Barra />
      <Container className="w-75 mt-3 bg-light border-light border rounded">
        <Formulario setResAlerta={setResAlerta} />
        <Alerta resAlerta={resAlerta} />
      </Container>
    </>
  );
}

export default App;
