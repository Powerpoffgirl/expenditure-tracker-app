import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import uniqid from "uniqid";
import { useSelector, useDispatch } from "react-redux";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Card,
  CardBody,
  Badge,
  Button,
} from "@chakra-ui/react";
import { DELETE_EXPENSE, UPDATE_EXPENSE } from "../../store/action";
import Nav from "../Nav/Nav";
import AddExpense from "../AddExpense/AddExpense";

const filteredStyle = {
  width: "100%",
  height: "150vh",
  backgroundColor: "dodgerblue",
};

const ManageExpense = () => {
  const store = useSelector((state) => state);
  const [filteredExpenses, setFilteredExpenses] = useState(store);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: DELETE_EXPENSE, id: id });
    const newData = store.filter((expenseObj) => {
      if (expenseObj.id !== id) return expenseObj;
    });
    setFilteredExpenses(newData);
  };

  const handleUpdate = (id) => {
    dispatch({ type: UPDATE_EXPENSE, id: id });
    console.log("Open");
  };

  return (
    <div style={filteredStyle}>
      <Nav />
      <Filter
        filteredExpenses={filteredExpenses}
        setFilteredExpenses={setFilteredExpenses}
      />

      <Card size="md" mr={12} ml={12} mb={30}>
        <CardBody>
          <TableContainer>
            <Table variant="striped" colorScheme="twitter">
              <Thead>
                <Tr>
                  <Th>S. No</Th>
                  <Th>Title</Th>
                  <Th>Amount</Th>
                  <Th>Expense Type</Th>
                  <Th>Date</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredExpenses.map((expenseobj, idx) => {
                  return (
                    <Tr key={uniqid()}>
                      <Td>{idx + 1}</Td>
                      <Td>{expenseobj.title}</Td>
                      <Td>INR : {expenseobj.amount}</Td>
                      <Td>
                        <Badge
                          colorScheme={
                            expenseobj.expenseType === "EXPENSE"
                              ? "red"
                              : "green"
                          }
                        >
                          {" "}
                          {expenseobj.expenseType}
                        </Badge>
                      </Td>
                      <Td>{expenseobj.date}</Td>
                      <Td>
                        {" "}
                        <Button
                          leftIcon={<DeleteIcon />}
                          colorScheme="red"
                          onClick={() => {
                            handleDelete(expenseobj.id);
                          }}
                        >
                          Delete
                        </Button>
                      </Td>
                      <Td>
                        {" "}
                        <Button
                          leftIcon={<EditIcon />}
                          colorScheme="twitter"
                          onClick={() => {
                            handleUpdate(expenseobj.id);
                          }}
                        >
                          Update
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </div>
  );
};

export default ManageExpense;
