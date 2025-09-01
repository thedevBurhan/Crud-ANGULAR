import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Employee } from "./Employee";
import { Company } from "./Company";

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @OneToMany(() => Employee, (employee) => employee.department)
  employees!: Employee[];

  @ManyToOne(() => Company, (company) => company.departments)
  @JoinColumn({ name: "companyId" })  
  company!: Company;

  @Column()
  companyId!: number; 

}
