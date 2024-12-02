const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Complete report",
        taskDescription: "Prepare and submit the monthly sales report.",
        taskDate: "2024-12-05",
        category: "Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team meeting",
        taskDescription: "Attend the project status update meeting.",
        taskDate: "2024-12-03",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Code review",
        taskDescription: "Review code submitted by the development team.",
        taskDate: "2024-12-04",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Client call",
        taskDescription: "Discuss project requirements with the client.",
        taskDate: "2024-12-01",
        category: "Communication",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update website",
        taskDescription: "Implement changes to the company website.",
        taskDate: "2024-12-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Inventory check",
        taskDescription: "Perform a full inventory check of the warehouse.",
        taskDate: "2024-12-07",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Team training",
        taskDescription: "Conduct a training session on workplace safety.",
        taskDate: "2024-12-02",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@admin.com",
    password: "admin",
  },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    console.log(admin, employees)
}