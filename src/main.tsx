import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import BackgroundDots from "./components/BackgroundDots.tsx";
import Navbar from "./components/Navbar.tsx";
import { AppSidebar } from "./components/AppSidebar.tsx";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import { Toaster } from "./components/ui/toaster.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <Router>
        <AppSidebar />
        <Navbar />
        <BackgroundDots />
        <div className="flex flex-col items-center min-h-screen w-full">
          <div className="flex-grow flex flex-col items-center justify-center mt-10 sm:mt-10 w-full">
            <App />
          </div>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </SidebarProvider>
  </StrictMode>
);
