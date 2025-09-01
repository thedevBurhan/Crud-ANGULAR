import { Router } from "express";
import { getDepartments, createDepartment, updateDepartment, deleteDepartment } from "../controller/departmentController";

const router = Router();

router.get("/", getDepartments);
router.post("/", createDepartment);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);

export default router;
