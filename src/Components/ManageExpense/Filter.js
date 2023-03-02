import React, { useState } from "react";
import { Card, Text, CardBody, Select, Input, Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Filter = ({ filteredExpenses, setFilteredExpenses }) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const store = useSelector((state) => state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "month") setMonth(value);
    else if (name === "year") setYear(value);
    else if (name === "type") setType(value);
  };

  const handleFilters = () => {
    const newData = store.filter((expenseObj) => {
      console.log(expenseObj.date);
      console.log(expenseObj.date.slice(0, 4));
      if (expenseObj.expenseType === type.toUpperCase()) return expenseObj;
      else if (expenseObj.date.slice(5, 7) === month) return expenseObj;
      else if (expenseObj.date.slice(0, 4) === year) return expenseObj;
    });
    setFilteredExpenses(newData);
  };
  return (
    <Card size="md" mr={12} ml={12} mb={30}>
      <CardBody>
        <Flex justifyContent="space-around">
          <Flex flexDirection="column" mr={2} ml={2}>
            <>
              <Text mb="8px">Month</Text>
              <Input
                value={month}
                name="month"
                onChange={handleChange}
                size="md"
              />
            </>
          </Flex>
          <Flex flexDirection="column" mr={2} ml={2}>
            <>
              <Text mb="8px">Year</Text>
              <Input
                value={year}
                name="year"
                onChange={handleChange}
                size="md"
              />
            </>
          </Flex>
          <Flex flexDirection="column" mr={2} ml={2}>
            <Text mb="8px">Expense Type</Text>
            <Select name="type" value={type} onChange={handleChange}>
              <option value="EXPENSE">Expense</option>
              <option value="INCOME">Income</option>
            </Select>
          </Flex>
          <Button mt={4} ml={40} colorScheme="twitter" onClick={handleFilters}>
            Search
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Filter;
