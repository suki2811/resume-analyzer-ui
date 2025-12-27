import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return showDashboard ? (
    <Dashboard />
  ) : (
    <Landing onStart={() => setShowDashboard(true)} />
  );
}
