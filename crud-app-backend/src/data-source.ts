import "reflect-metadata";
import { DataSource } from "typeorm";
import { Department } from "./entity/Department";
import { Employee } from "./entity/Employee";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",   // change to your pg username
  password: "post@123",   // change to your pg password
  database: "companydb",  // change to your pg database name
  synchronize: true,
  logging: false,
  entities: [Department, Employee],
  migrations: [],
  subscribers: [],
});
