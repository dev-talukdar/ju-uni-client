import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/protectedRoute/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute>
      <MainLayout></MainLayout>
    </ProtectedRoute>
  );
}

export default App;
