
  import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";
import { AuthCallbackPage } from "./pages/AuthCallbackPage.tsx";
import { DashboardPage } from "./pages/DashboardPage.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/callback" element={<AuthCallbackPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
  