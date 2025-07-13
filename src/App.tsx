import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { AlertsProvider } from "@/contexts/AlertsContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { ThemeProvider } from "next-themes";

import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import AccessPage from "./pages/AccessPage";
import ProfilePage from "./pages/ProfilePage";
import AccessWizardPage from "./pages/AccessWizardPage";
import AuthPage from "./pages/AuthPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import TasksPage from "./pages/TasksPage";
import AlertsPage from "./pages/AlertsPage";
import VehicleFormPage from "./pages/VehicleFormPage";
import BottomNavigation from "./components/BottomNavigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light">
      <AuthProvider>
        <AlertsProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <div className="min-h-screen pb-16">
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route 
                    path="/" 
                    element={
                      <ProtectedRoute>
                        <HomePage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/map" 
                    element={
                      <ProtectedRoute>
                        <MapPage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/access" 
                    element={
                      <ProtectedRoute>
                        <AccessPage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/profile" 
                    element={
                      <ProtectedRoute>
                        <ProfilePage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/tasks" 
                    element={
                      <ProtectedRoute>
                        <TasksPage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/alerts" 
                    element={
                      <ProtectedRoute>
                        <AlertsPage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/add-vehicle" 
                    element={
                      <ProtectedRoute>
                        <VehicleFormPage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/access-wizard" 
                    element={
                      <ProtectedRoute>
                        <AccessWizardPage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/auth-page" 
                    element={
                      <ProtectedRoute>
                        <AuthPage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <BottomNavigation />
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </AlertsProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
