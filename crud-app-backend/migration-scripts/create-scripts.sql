-- Company Table
CREATE TABLE company (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);

-- Department Table
CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  companyId INT NOT NULL,
  CONSTRAINT fk_company FOREIGN KEY(companyId) REFERENCES company(id)
);

-- Employee Table
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone VARCHAR NOT NULL,
    designation VARCHAR NOT NULL,
    departmentId INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (departmentId)
        REFERENCES department (id)
        ON DELETE CASCADE
);