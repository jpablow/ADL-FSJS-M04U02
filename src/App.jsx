import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Login";
import Container from "react-bootstrap/Container";
import Alerta from "./components/Alert";
import { useState } from "react";

function App() {
  const [resAlerta, setResAlerta] = useState({
    msgAlerta: "",
    variantAlerta: "",
    alertaVisible: false,
  });
  return (
    <Container>
      <Formulario setResAlerta={setResAlerta} />
      <Alerta resAlerta={resAlerta} />
    </Container>
  );
}

export default App;
