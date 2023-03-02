import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Text,
  CardHeader,
  CardBody,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";

import { client } from "../../client";
import { PATHS } from "../../path";
import { centeredStyle } from "../../App";
import { AxiosError } from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const body = { email, password };
    client
      .post("/login", body)
      .then((resp) => {
        console.log(resp);
        window.localStorage.setItem("token", resp.data.token);
        navigate(PATHS.MANAGE_EXPENSE);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={centeredStyle}>
      <Card variant="elevated" size="lg" maxW="md" width="100%">
        <CardHeader>
          <Heading size="md">Login</Heading>
        </CardHeader>

        <CardBody>
          <>
            <Text mb="8px">Email</Text>
            <Input
              value={email}
              name="email"
              onChange={handleChange}
              size="md"
            />
          </>
          <>
            <Text mb="8px">Password</Text>
            <Input
              value={password}
              name="password"
              onChange={handleChange}
              size="md"
            />
          </>
          <Button mt={4} ml={40} colorScheme="twitter" onClick={handleLogin}>
            Log In
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
