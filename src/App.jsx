import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Login";
import Container from "react-bootstrap/Container";
import Alerta from "./components/Alert";

function App() {
  return (
    <Container>
      <Formulario />
      {/* <Alerta /> */}
    </Container>
  );
}

export default App;
