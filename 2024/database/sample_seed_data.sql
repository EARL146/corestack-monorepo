-- Seed Dataset for Initial Setup and Verification
INSERT INTO roles (role_id, name, description) VALUES
(1, 'superadmin', 'Full system control and audit privileges'),
(2, 'engineer', 'Developer access and staging pipeline control'),
(3, 'support', 'Customer assistance and read-only record access')
ON CONFLICT (role_id) DO NOTHING;

INSERT INTO users (username, email, password_hash, role_id) VALUES
('earl_admin', 'earlypajo@gmail.com', '$2b$12$eXampLeHaShFoRProDuctioN2024VeRiFiCaTioN', 1),
('test_auditor', 'auditor@example.com', '$2b$12$tEstHAsHSeCuReAuDiT2024RePorT', 2)
ON CONFLICT (email) DO NOTHING;
