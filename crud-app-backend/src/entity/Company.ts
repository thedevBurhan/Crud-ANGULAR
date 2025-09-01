import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Department } from "./Department";

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @OneToMany(() => Department, (department) => department.company)
  departments!: Department[];

}
