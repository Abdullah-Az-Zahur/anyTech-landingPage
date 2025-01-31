import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter} from "react-router";
import AppRoutes from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
