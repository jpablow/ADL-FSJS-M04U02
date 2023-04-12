import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({ setResAlerta }) => {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [btnOculto, setBtnOculto] = useState(true);
  const credenciales = { usuario: "user@credenciales.cl", clave: "admin" };

  useEffect(() => {
    setResAlerta({ showAlerta: false });
    correo.trim() === "" || clave.trim() === ""
      ? setBtnOculto(true)
      : setBtnOculto(false);
  }, [correo, clave]);

  const handleChange = (e) => {
    e.target.name === "correo"
      ? setCorreo(e.target.value)
      : e.target.name === "clave"
      ? setClave(e.target.value)
      : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    correo.trim() === credenciales.usuario && clave === credenciales.clave
      ? setResAlerta({
          msgAlerta: "Datos correctos, sesión iniciada.",
          variantAlerta: "success",
          showAlerta: true,
        })
      : setResAlerta({
          msgAlerta: "El usuario o clave son incorrectos, intenta nuevamente.",
          variantAlerta: "danger",
          showAlerta: true,
        });
  };

  return (
    <>
      <h1 className="mt-2">Login</h1>
      <Form onSubmit={(e) => handleSubmit(e, correo, clave)} className="my-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="email"
            name="correo"
            placeholder="Ingresa tu correo electrónico"
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
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
