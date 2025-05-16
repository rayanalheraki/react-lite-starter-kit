import React, { useState } from "react";

const TaskManager = () => {
  // State for tasks and input field
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React Lite Startkit", completed: false },
    { id: 2, text: "Build a simple app", completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // 'all' filter
  });

  // Calculate statistics
  const stats = {
    total: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
    active: tasks.filter((task) => !task.completed).length,
  };

  // Basic styling using inline styles
  const styles = {
    container: {
      maxWidth: "500px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    header: {
      textAlign: "center",
      color: "#333",
      marginBottom: "20px",
    },
    inputContainer: {
      display: "flex",
      marginBottom: "20px",
    },
    input: {
      flex: "1",
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ddd",
      borderRadius: "4px 0 0 4px",
    },
    addButton: {
      padding: "10px 15px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "0 4px 4px 0",
      cursor: "pointer",
    },
    taskItem: {
      display: "flex",
      alignItems: "center",
      padding: "10px",
      borderBottom: "1px solid #eee",
      backgroundColor: "white",
      marginBottom: "5px",
      borderRadius: "4px",
    },
    taskText: (completed) => ({
      flex: "1",
      textDecoration: completed ? "line-through" : "none",
      color: completed ? "#999" : "#333",
    }),
    taskButton: {
      marginLeft: "5px",
      padding: "5px 10px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    deleteButton: {
      backgroundColor: "#f44336",
      color: "white",
    },
    filterContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      margin: "20px 0",
    },
    filterButton: (active) => ({
      padding: "5px 10px",
      backgroundColor: active ? "#4CAF50" : "#f1f1f1",
      color: active ? "white" : "#333",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    }),
    stats: {
      textAlign: "center",
      marginTop: "20px",
      padding: "10px",
      backgroundColor: "white",
      borderRadius: "4px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Task Manager</h1>

      {/* Form to add new tasks */}
      <form onSubmit={addTask} style={styles.inputContainer}>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task..."
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>
          Add
        </button>
      </form>

      {/* Filter buttons */}
      <div style={styles.filterContainer}>
        <button
          onClick={() => setFilter("all")}
          style={styles.filterButton(filter === "all")}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          style={styles.filterButton(filter === "active")}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          style={styles.filterButton(filter === "completed")}
        >
          Completed
        </button>
      </div>

      {/* Task list */}
      <div>
        {filteredTasks.length === 0 ? (
          <p style={{ textAlign: "center" }}>No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <div key={task.id} style={styles.taskItem}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span style={styles.taskText(task.completed)}>{task.text}</span>
              <button
                onClick={() => deleteTask(task.id)}
                style={{ ...styles.taskButton, ...styles.deleteButton }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Statistics */}
      <div style={styles.stats}>
        <p>
          Total: {stats.total} | Active: {stats.active} | Completed:{" "}
          {stats.completed}
        </p>
      </div>
    </div>
  );
};

export default TaskManager;
