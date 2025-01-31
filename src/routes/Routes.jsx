import {  Routes, Route } from "react-router";
import App from "../App";
import Main from "../layouts/Main";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Main/> } />
    </Routes>
  );
};

export default AppRoutes;
