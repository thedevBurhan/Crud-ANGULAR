import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Department } from "../entity/Department";

const departmentRepo = AppDataSource.getRepository(Department);

export const getDepartments = async (req: Request, res: Response) => {
console.log( await departmentRepo.query("Select * from department"));

  const departments = await departmentRepo.find({
    relations: ["company"]
  });
  res.json(departments);
};

export const createDepartment = async (req: Request, res: Response) => {
  const dept = departmentRepo.create(req.body);
  const result = await departmentRepo.save(dept);
  res.json(result);
};

export const updateDepartment = async (req: Request, res: Response) => {
  const dept = await departmentRepo.findOneBy({ id: parseInt(req.params.id) });
  if (!dept) return res.status(404).json({ msg: "Not found" });
  departmentRepo.merge(dept, req.body);
  const result = await departmentRepo.save(dept);
  res.json(result);
};

export const deleteDepartment = async (req: Request, res: Response) => {
  await departmentRepo.delete(req.params.id);
  res.json({ msg: "Deleted" });
};
