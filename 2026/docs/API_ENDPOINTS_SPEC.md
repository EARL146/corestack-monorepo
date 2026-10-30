# REST API Endpoints Specification
**Version:** 2026.1  
**Base URL:** `https://api.corestack.com/v1`

## Endpoints Summary

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `GET` | `/health` | Cluster health and uptime probe | No |
| `POST` | `/auth/login` | Issues access and refresh tokens | No |
| `GET` | `/products` | Filterable catalog with pagination | No |
| `POST` | `/orders/checkout` | Places transactional purchase | Yes (Bearer) |
| `GET` | `/users/profile` | Authenticated user profile | Yes (Bearer) |
| `POST` | `/inventory/sync` | Warehouse stock reconciliation | Yes (Admin) |
