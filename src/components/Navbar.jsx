import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Barra = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand style={{ whiteSpace: wrap }}>
          <strong>React</strong> - Estado de los Componentes y Eventos
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Barra;
