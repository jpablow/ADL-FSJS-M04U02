import Alert from "react-bootstrap/Alert";

const Alerta = ({ resAlerta }) => {
  return (
    <Alert
      className="text-center"
      variant={resAlerta.variantAlerta}
      show={resAlerta.showAlerta}
    >
      {resAlerta.msgAlerta}
    </Alert>
  );
};

export default Alerta;
