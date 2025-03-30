// src/pages/Login.tsx
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      await login({ username, password });
      navigate("/");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido");
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>

        {error && (
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            {error}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Ingrese su usuario"
              required
              disabled={loading}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Ingrese su contraseña"
              required
              disabled={loading}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Ingresar"}
          </Button>
        </Form>

        <div className="mt-3 text-center">
          <small className="text-muted">Usuario demo: admin / admin123</small>
        </div>
      </div>
    </div>
  );
};
