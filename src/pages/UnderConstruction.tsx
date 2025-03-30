// src/pages/UnderContruction.tsx

import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const UnderConstruction = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Card className="text-center p-4" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <Card.Title as="h1" className="mb-3">
            Página en Construcción
          </Card.Title>
          <Card.Text className="mb-4">
            Estamos trabajando para ofrecerte esta funcionalidad muy pronto.
          </Card.Text>
          <LinkContainer to="/">
            <Button variant="primary">Volver al inicio</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UnderConstruction;
