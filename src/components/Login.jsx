import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const Formulario = () => {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [msgAlerta, setMsgAlerta] = useState("");
  const [variantAlerta, setVariantAlerta] = useState("secondary");
  const [btnOculto, setBtnOculto] = useState(true);
  const [alertaVisible, setAlertaVisible] = useState(false);
  const credenciales = { usuario: "user@credenciales.cl", clave: "admin" };

  useEffect(() => {
    setAlertaVisible(false);
    correo.trim() === "" || clave.trim() === ""
      ? setBtnOculto(true)
      : setBtnOculto(false);
  }, [correo, clave]);

  const validarCredenciales = (correo, clave) => {
    correo.trim() === credenciales.usuario &&
    clave.trim() === credenciales.clave
      ? (setMsgAlerta("Datos correctos, sesión iniciada."),
        setVariantAlerta("success"),
        setAlertaVisible(true))
      : (setMsgAlerta("El usuario o clave son incorrectos, intenta nuevamente"),
        setVariantAlerta("danger"),
        setAlertaVisible(true));
  };

  return (
    <>
      <h1>Login</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          validarCredenciales(correo, clave);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="email"
            name="correo"
            placeholder="Ingresa tu correo electrónico"
            onChange={(e) => setCorreo(e.target.value)}
            value={correo}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Clave</Form.Label>
          <Form.Control
            type="password"
            name="clave"
            placeholder="Ingresa tu clave"
            onChange={(e) => setClave(e.target.value)}
            value={clave}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={btnOculto}>
          Iniciar Sesión
        </Button>
        <Alert variant={variantAlerta} show={alertaVisible}>
          {msgAlerta}
        </Alert>
      </Form>
    </>
  );
};

export default Formulario;
