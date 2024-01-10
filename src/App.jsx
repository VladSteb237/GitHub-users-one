import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";
import PrivateRoute from "./pages/PrivateRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import AuthWrapper from "./pages/AuthWrapper";

function App() {
  return (
    <React.Fragment>
      <AuthWrapper>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AuthWrapper>
    </React.Fragment>
  );
}

export default App;
