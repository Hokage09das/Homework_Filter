import React from "react";
import styles from "./ExpenseFilter.module.css";

const ExpenseFilter = ({ selectedYear, changeSelectedYear }) => {
  return (
    <div className={styles.expenses_filter}>
      <div className={styles.expense_filter_control}>
        <label>Filter by year</label>
        <select
          value={selectedYear}
          onChange={changeSelectedYear}
        >
          <option value='All'>Select All</option>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
