-- First insert some companies
INSERT INTO company (name, description)
VALUES 
  ('TechCorp', 'Technology solutions provider'),
  ('HealthPlus', 'Healthcare and wellness services');

-- Now insert departments for those companies
INSERT INTO department (name, description, companyId)
VALUES
  ('Engineering', 'Handles all product development and engineering tasks', 1),
  ('Human Resources', 'Manages employee relations and hiring', 1),
  ('Finance', 'Oversees budgeting and company accounts', 1),
  ('Research & Development', 'Focus on innovation and new product development', 1),
  ('Medical Services', 'Provides core healthcare services', 2),
  ('Pharmacy', 'Manages medicines and inventory', 2),
  ('Administration', 'Oversees hospital administration and staff management', 2);


select * from department where id in (1, 2, 4) and name = "sdd";