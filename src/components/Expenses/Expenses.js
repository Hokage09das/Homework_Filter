import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("All");

  const changeSelectedYearHandler = (e) => {
    setSelectedYear(e.target.value);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selectedYear={selectedYear}
        changeSelectedYear={changeSelectedYearHandler}
      />
      <ExpensesList
        expenses={expenses}
        filteredExpenses={filteredExpenses}
        selectedYear={selectedYear}
      />
    </Card>
  );
}

export default Expenses;
