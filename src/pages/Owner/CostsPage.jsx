import { useState } from "react";
import { reportApi } from "../../api/reportApi";

function CostsPage() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [costs, setCosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const from = new Date(fromDate).getTime();
      const to = new Date(toDate).getTime();

      const res = await reportApi.getCosts(from, to);

      setCosts(res.data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Costs report</h1>

      <div className="form-group">
        <label>
          From:
        </label>
          <input
            type="date"
            className="form-input"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
      </div>

      <div className="form-group">
        <label>
          To:
        </label>
          <input
            type="date"
            className="form-input"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
      </div>

        <button
          onClick={fetchCosts}
          className="button"
          disabled={!fromDate || !toDate || loading}
        >
          {loading ? "Loading..." : "Get costs"}
        </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {costs !== null && (
        <h2>
          Costs: <strong>{costs}</strong> $
        </h2>
      )}
    </div>
  );
}

export default CostsPage;