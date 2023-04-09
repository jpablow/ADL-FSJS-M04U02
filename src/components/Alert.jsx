import Alert from "react-bootstrap/Alert";

const Alerta = () => {
  return (
    <Alert variant={variantAlerta} show={alertaVisible}>
      {msgAlerta}
    </Alert>
  );
};

export default Alerta;
