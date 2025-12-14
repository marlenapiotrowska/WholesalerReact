import { useState, useEffect } from "react";
import { requirementsApi } from "../../api/requirementsApi";
import { customersApi } from "../../api/customersApi";
import { storagesApi } from "../../api/storagesApi";

function RequirementsPage() {
  const [view, setView] = useState(null);

  // === Edit requirement ===
  const [requirements, setRequirements] = useState([]);
  const [selectedReqId, setSelectedReqId] = useState("");
  const [newQuantity, setNewQuantity] = useState("");

  // === See progress ===
  const [status, setStatus] = useState("");
  const [requirementsByStatus, setRequirementsByStatus] = useState([]);

  // === Enter new requirement ===
  const [customers, setCustomers] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [amount, setAmount] = useState("");

  // Load initial data ONLY when needed
  const loadRequirements = async () => {
    const res = await requirementsApi.getAll();
    setRequirements(res.data);
  };

  const loadCustomers = async () => {
    const res = await customersApi.getAll();
    setCustomers(res.data);
  };

  const loadWarehouses = async () => {
    const res = await storagesApi.getAll();
    setWarehouses(res.data);
  };

  // HANDLERS ================================

  const handleUpdateRequirement = async () => {
    if (!selectedReqId || !newQuantity) return;

    await requirementsApi.editQuantity(selectedReqId, newQuantity);
    alert("Requirement updated.");
    setSelectedReqId("");
    setNewQuantity("");
  };

  const handleLoadByStatus = async () => {
    if (!status) return;

    const res = await requirementsApi.getByStatus(status);
    setRequirementsByStatus(res.data);
    
  };

  const handleCreateRequirement = async () => {
    if (!selectedCustomer || !selectedWarehouse || !amount) return;

    await requirementsApi.add({
      clientId: selectedCustomer,
      storageId: selectedWarehouse,
      quantity: Number(amount),
    });

    alert("Requirement created.");
    setSelectedCustomer("");
    setSelectedWarehouse("");
    setAmount("");

  };

  // VIEW SWITCHER =============================

  const renderSelector = () => (
    <div className="form-group">
      <h1>Requirements</h1>

        <button onClick={() => { setView("edit"); loadRequirements(); }}>
          Edit customer requirement
        </button>

        <button onClick={() => setView("progress")}>
          See progress of requirement
        </button>

      <button onClick={() => { setView("new"); loadCustomers(); loadWarehouses(); }}>
        Enter customer requirement
      </button>

    </div>
  );

  // EDIT VIEW =================================

  const renderEditView = () => (
    <div>
      <h2>Edit customer requirement</h2>

      <div className="form-group">
        <label className="label">
          Select requirement:
          <select
            className="form-input"
            value={selectedReqId}
            onChange={(e) => setSelectedReqId(e.target.value)}
          >
            <option value="">-- choose requirement --</option>
            {requirements.map((req) => (
              <option key={req.id} value={req.id}>
                {req.clientId} – {req.quantity} pcs – {req.status}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="form-group">
        <label className="label">
          New quantity:
          <input
            type="number"
            className="form-input"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
          />
        </label>
      </div>

      <button onClick={handleUpdateRequirement}>Save changes</button>
      <button onClick={() => setView(null)}>Back</button>
    </div>
  );

  // PROGRESS VIEW ===============================

  const renderProgressView = () => (
    <div>
      <h2>See progress</h2>

      <div className="form-group">
        <label className="label">
          Status:
          <select
            className="form-input"
            value={status}
            onChange={(e) => { setStatus(e.target.value); }}
          >
            <option value="">-- choose status --</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
      </div>

      <button onClick={handleLoadByStatus}>
        Load requirements
      </button>

      <button onClick={() => setView(null)}>Back</button>

      {requirementsByStatus.length > 0 && (
        <ul>
          {requirementsByStatus.map((req) => (
            <li key={req.id}>
              {req.clientId} – {req.quantity} pcs – {req.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  // NEW REQUIREMENT VIEW ==========================

  const renderNewView = () => (
    <div className="form-group">
      <h2>Enter new requirement</h2>

      <label className="label">
        Customer:
        <select
          className="form-input"
          value={selectedCustomer}
          onChange={(e) => setSelectedCustomer(e.target.value)}
        >
          <option value="">-- choose customer --</option>
          {customers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} {c.surname}
            </option>
          ))}
        </select>
      </label>

      <label className="label">
        Amount:
        <input
          type="number"
          className="form-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>

      <label className="label">
        Warehouse:
        <select
          className="form-input"
          value={selectedWarehouse}
          onChange={(e) => setSelectedWarehouse(e.target.value)}
        >
          <option value="">-- choose warehouse --</option>
          {warehouses.map((w) => (
            <option key={w.id} value={w.id}>
              {w.name}
            </option>
          ))}
        </select>
      </label>

      <button onClick={handleCreateRequirement}>Create</button>
      <button onClick={() => setView(null)}>Back</button>
    </div>
  );

  // MAIN RENDER ===============================

  return (
    <div>
      {view === null && renderSelector()}
      {view === "edit" && renderEditView()}
      {view === "progress" && renderProgressView()}
      {view === "new" && renderNewView()}
    </div>
  );
}

export default RequirementsPage;
