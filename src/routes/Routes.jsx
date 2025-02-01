import { Routes, Route } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
