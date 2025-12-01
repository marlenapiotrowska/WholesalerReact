import { useState, useEffect } from "react";
import { userApi } from "../../api/userApi";
import { worktaskApi } from "../../api/worktaskApi";

export default function AssignTaskPage() {

    const [employees, setEmployees] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState("");
    const [selectedEmployee, setSelectedEmployee] = useState("");

    const [loading, setLoading] = useState(false);
    const [assignLoading, setAssignLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

     const loadData = async () => {
        try {
        setLoading(true);
        setError(null);

        const [tasksRes, employeesRes] = await Promise.all([
            worktaskApi.getNotAssigned(),
            userApi.getEmployees()
        ]);

        setTasks(tasksRes.data);
        setEmployees(employeesRes.data);
        } catch (err) {
        setError("Failed to load tasks or employees");
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const assignTask = async () => {
        if (!selectedTask || !selectedEmployee) return;

        try {
        setAssignLoading(true);
        setError(null);

        await worktaskApi.assignTask(selectedTask, selectedEmployee);

        setSuccessMessage("Task was successfully assigned!");
        setSelectedTask("");
        setSelectedEmployee("");

        loadData();
        } catch (err) {
        setError("Failed to assign task");
        } finally {
        setAssignLoading(false);
        }
    };

    return (
        <div>
        <h1>Assign Tasks</h1>

        {loading && <p>Loading data...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        {!loading && (
            <div>
            <div className="form-group">
                <label>Select unassigned task:</label>
                <select
                className="form-input"
                value={selectedTask}
                onChange={(e) => setSelectedTask(e.target.value)}
                >
                <option value="">-- Choose task --</option>
                {tasks.map((t) => (
                    <option key={t.id} value={t.id}>
                    {t.row}
                    </option>
                ))}
                </select>
            </div>

            <div className="form-group">
                <label>Select employee:</label>
                <select
                className="form-input"
                value={selectedEmployee}
                onChange={(e) => setSelectedEmployee(e.target.value)}
                >
                <option value="">-- Choose employee --</option>
                {employees.map((emp) => (
                    <option key={emp.id} value={emp.id}>
                    {emp.name} {emp.surname}
                    </option>
                ))}
                </select>
            </div>

            <button
                disabled={!selectedTask || !selectedEmployee || assignLoading}
                onClick={assignTask}
            >
                {assignLoading ? "Assigning..." : "Assign task"}
            </button>
            </div>
        )}
        </div>
    );
}