import React from "react"; // Añade esta importación
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Unauthorized: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="text-center p-4" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <Card.Title as="h1" className="mb-3">
            Acceso no autorizado
          </Card.Title>
          <Card.Text className="mb-4">
            No tienes permisos para acceder a esta página.
          </Card.Text>
          <Link to="/">
            <Button variant="primary">Volver al inicio</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
