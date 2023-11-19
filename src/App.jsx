import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import PersonalInfo from "./pages/PersonalInfo";
import Plan from "./pages/Plan";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Example from "./pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<PersonalInfo />} />
              <Route
                path="plan"
                element={<ProtectedRoute element={<Plan />} />}
              />
              <Route path="/plan/example" element={<Example />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
