import React from "react";
import styles from "./Welcome.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

export default function WelcomeMessage() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your Day!</p>
  );
}
