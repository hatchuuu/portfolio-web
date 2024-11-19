import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import BackgroundDots from "./components/BackgroundDots.tsx";
import Navbar from "./components/Navbar.tsx";
import { AppSidebar } from "./components/AppSidebar.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <Router basename="/portfolio-web">
        <AppSidebar />
        <Navbar />
        <BackgroundDots />
        <div className="flex flex-col items-center min-h-screen w-full -z-2 justify-center sm:mt-10 mt-10">
          <App />
          <Footer />
        </div>
      </Router>
    </SidebarProvider>
  </StrictMode>
);
