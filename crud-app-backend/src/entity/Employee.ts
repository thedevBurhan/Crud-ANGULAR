// src/entity/Employee.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Department } from "../entity/Department";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  designation!: string;

  @ManyToOne(() => Department, (department) => department.employees)
  @JoinColumn({ name: "departmentId" })
  department!: Department;

  @Column()
  departmentId!: number;
}
