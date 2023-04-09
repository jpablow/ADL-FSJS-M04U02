import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";

const Formulario = ({ setResAlerta }) => {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [btnOculto, setBtnOculto] = useState(true);
  const credenciales = { usuario: "user@credenciales.cl", clave: "admin" };

  useEffect(() => {
    setResAlerta({ alertaVisible: false });
    correo.trim() === "" || clave.trim() === ""
      ? setBtnOculto(true)
      : setBtnOculto(false);
  }, [correo, clave]);

  const validarCredenciales = (correo, clave) => {
    correo.trim() === credenciales.usuario &&
    clave.trim() === credenciales.clave
      ? setResAlerta({
          msgAlerta: "Datos correctos, sesión iniciada.",
          variantAlerta: "success",
          alertaVisible: true,
        })
      : setResAlerta({
          msgAlerta: "El usuario o clave son incorrectos, intenta nuevamente.",
          variantAlerta: "danger",
          alertaVisible: true,
        });
  };

  return (
    <>
      <h1 className="mt-5">Login</h1>
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
            autoComplete="off"
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
      </Form>
    </>
  );
};

export default Formulario;
