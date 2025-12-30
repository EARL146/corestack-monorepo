-- Stored Procedures for Transactional Order Fulfillment
CREATE OR REPLACE FUNCTION place_order_transaction(
    p_user_id UUID,
    p_product_id BIGINT,
    p_quantity INT,
    p_unit_price DECIMAL
) RETURNS UUID AS $$
DECLARE
    v_order_id UUID;
    v_stock INT;
BEGIN
    SELECT stock_quantity INTO v_stock FROM products WHERE product_id = p_product_id FOR UPDATE;
    IF v_stock < p_quantity THEN
        RAISE EXCEPTION 'Insufficient stock for product ID %', p_product_id;
    END IF;

    UPDATE products SET stock_quantity = stock_quantity - p_quantity WHERE product_id = p_product_id;
    
    INSERT INTO orders (user_id, total_amount, order_status)
    VALUES (p_user_id, p_quantity * p_unit_price, 'CONFIRMED')
    RETURNING order_id INTO v_order_id;

    INSERT INTO order_items (order_id, product_id, unit_price, quantity)
    VALUES (v_order_id, p_product_id, p_unit_price, p_quantity);

    RETURN v_order_id;
END;
$$ LANGUAGE plpgsql;
