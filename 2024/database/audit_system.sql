-- Audit Logging Triggers & Change Tracking
CREATE OR REPLACE FUNCTION log_user_changes()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO audit_logs (user_id, action, entity_name, entity_id, changes)
    VALUES (
        NEW.user_id,
        TG_OP,
        'users',
        NEW.user_id::text,
        json_build_object('old', to_jsonb(OLD), 'new', to_jsonb(NEW))
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_user_audit ON users;
CREATE TRIGGER trigger_user_audit
AFTER UPDATE OR DELETE ON users
FOR EACH ROW EXECUTE FUNCTION log_user_changes();
