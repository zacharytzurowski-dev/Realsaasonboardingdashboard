
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { ProfileProvider } from "./contexts/ProfileContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </AuthProvider>
);
  