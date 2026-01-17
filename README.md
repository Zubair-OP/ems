Employee Management System (EMS)
A robust and scalable Employee Management System built using React.js and Functional Components. This application is designed to streamline the process of assigning tasks, tracking progress, and managing workflows between administrators and employees.

🚀 Key Features
Role-Based Access: Separate dashboards for Admin and Employees.
Task Management: Create, assign, and track tasks with real-time status updates (New, Active, Completed, Failed).
Authentication: Secure login system to differentiate between user roles.
Data Persistence: Integrated with Local Storage to ensure data remains available after page refreshes.
Responsive UI: Fully responsive design built with Tailwind CSS.

🛠️ Tech Stack
Frontend: React.js (Functional Components & Hooks)
Styling: Tailwind CSS
State Management: Context API
Storage: Browser Local Storage

💡 React Concepts Implemented
This project demonstrates the effective use of modern React patterns and hooks:

1. useState (State Management)
Used extensively to handle dynamic data within components, such as capturing user input from forms, managing task lists, and updating task statuses dynamically.

2. useEffect (Lifecycle Management)
Utilized for handling side effects, specifically:

Synchronizing application state with Local Storage on component mount.
Managing authentication checks and data initialization.
3. useContext (Global State)
The Context API is used to avoid prop-drilling.

AuthContext: Manages global authentication states and provides the current user’s data to all components.
TaskContext: Shares the master employee and task data across the entire application hierarchy.

4. Conditional Rendering
Dynamic UI rendering based on the user's role:

The system checks the loggedInUser role to decide whether to render the AdminDashboard or the EmployeeDashboard.
Conditional logic is also used within task cards to show specific actions (e.g., "Accept Task" vs "Mark as Completed").

5. Local Storage Integration
Since this is a frontend-heavy application, Local Storage acts as a persistent database. It ensures that any tasks created or updated by the Admin or Employee are saved and retrieved correctly even after a browser restart.

⚙️ Installation & Setup
Clone the repository:

Bash

git clone https://github.com/Zubair-OP/ems.git
Navigate to the project directory:

Bash

cd ems
Install dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
Author: M Zubair
