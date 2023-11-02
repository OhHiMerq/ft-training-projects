import { Route, Routes } from "react-router-dom";

import MainNavigation from "./components/interface/MainNavigation";
import HomePage from "./pages/HomePage";
import PetRecords from "./pages/PetRecords";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <div>
      <MainNavigation />
      <main style={{ margin: "auto", maxWidth: "50rem" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pet-records" element={<PetRecords />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
