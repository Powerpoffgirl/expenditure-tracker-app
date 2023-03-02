import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Button, Text, Flex } from "@chakra-ui/react";
import { PATHS } from "../../path";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card mb={50}>
        <CardBody>
          <Flex justifyContent="space-between" alingItems="center">
            <Text color="dodgerblue" fontWeight="800" fontSize="2em">
              Money Movement Tracker
            </Text>
            <Button
              colorScheme="twitter"
              onClick={() => {
                navigate(PATHS.ADD_EXPENSE);
              }}
            >
              ADD EXPENSE
            </Button>
            <Button
              colorScheme="yellow"
              onClick={() => {
                navigate(PATHS.MANAGE_EXPENSE);
              }}
            >
              Reset Filter
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                window.localStorage.clear();
                navigate(PATHS.LOGIN);
              }}
            >
              Logout
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </div>
  );
};

export default Nav;
