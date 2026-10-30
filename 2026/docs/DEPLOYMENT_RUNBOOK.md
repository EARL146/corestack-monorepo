# Production Deployment & Rollback Runbook

### Pre-Deployment Verification
1. Run syntax validation and unit tests: `npm test` or `pytest`.
2. Inspect migration scripts in `database/`.
3. Check cluster container health: `docker-compose ps`.

### Deployment Procedure
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Rollback Strategy
If error budget exceeds 0.05% within 15 minutes of deployment:
```bash
docker-compose rollback
git checkout HEAD~1
```
