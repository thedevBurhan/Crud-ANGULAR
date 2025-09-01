import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Employee } from "../entity/Employee";

const employeeRepo = AppDataSource.getRepository(Employee);

export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await employeeRepo.find({
      relations: ["department"],
    });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: "Error fetching employees", error: err });
  }
};

export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const employee = await employeeRepo.findOne({
      where: { id: parseInt(req.params.id) },
      relations: ["department"],
    });
    if (!employee) return res.status(404).json({ message: "Employee not found" });
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: "Error fetching employee", error: err });
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, departmentId } = req.body;
    const newEmployee = employeeRepo.create({ name, email, phone, departmentId });
    const saved = await employeeRepo.save(newEmployee);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Error creating employee", error: err });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await employeeRepo.findOneBy({ id: parseInt(req.params.id) });
    if (!employee) return res.status(404).json({ message: "Employee not found" });

    employeeRepo.merge(employee, req.body);
    const updated = await employeeRepo.save(employee);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating employee", error: err });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const result = await employeeRepo.delete(req.params.id);
    if (result.affected === 0) return res.status(404).json({ message: "Employee not found" });
    res.json({ message: "Employee deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting employee", error: err });
  }
};
