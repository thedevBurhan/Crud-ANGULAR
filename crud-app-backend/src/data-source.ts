import "reflect-metadata";
import { DataSource } from "typeorm";
import { Department } from "./entity/Department";
import { Employee } from "./entity/Employee";
import { Company } from "./entity/Company";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",   // change to your pg username
  password: "postgres",   // change to your pg password
  database: "postgres",  // change to your pg database name
  synchronize: true,
  logging: false,
  entities: [Department, Employee, Company],
  migrations: [],
  subscribers: [],
});
