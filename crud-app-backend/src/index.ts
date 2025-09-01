import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import departmentRoutes from "./routes/departmentRoutes";
import employeeRoutes from "./routes/employeeRoutes";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/departments", departmentRoutes);
app.use("/api/employees", employeeRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch(error => console.error("Data Source initialization failed:", error));
