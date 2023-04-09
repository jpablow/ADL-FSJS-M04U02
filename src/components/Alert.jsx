import Alert from "react-bootstrap/Alert";

const Alerta = ({ resAlerta }) => {
  return (
    <Alert
      className="mt-3 text-center"
      variant={resAlerta.variantAlerta}
      show={resAlerta.alertaVisible}
    >
      {resAlerta.msgAlerta}
    </Alert>
  );
};

export default Alerta;
