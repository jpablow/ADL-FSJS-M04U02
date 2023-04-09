import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";

const Formulario = () => {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [msgAlerta, setMsgAlerta] = useState("");
  const [variantAlerta, setVariantAlerta] = useState("light");

  const validarCredenciales = (correo, clave) => {
    correo === "user@credenciales.cl" && clave === "admin"
      ? (setMsgAlerta("Datos correctos, sesión iniciada."),
        setVariantAlerta("success"))
      : (setMsgAlerta("Datos incorrectos, intenta nuevamente"),
        setVariantAlerta("danger"));
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
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
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
        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
        <Alert variant={variantAlerta}>{msgAlerta}</Alert>
        <p>{correo}</p>
        <p>{clave}</p>
      </Form>
    </>
  );
};

// const validarCredenciales = (correo, clave) => {
//   const [msgAlerta, setMsgAlerta] = useState("");

//   correo === "user@credenciales.cl" && clave === "admin"
//     ? setMsgAlerta("Datos correctos, sesión iniciada.")
//     : setMsgAlerta("Datos incorrectos, intenta nuevamente");
// };

export default Formulario;
