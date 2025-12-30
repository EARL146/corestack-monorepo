/**
 * Mock Payment Gateway Adapter (Stripe / GCash / Maya API Specs)
 */
class PaymentGatewayMock {
    static async chargeCreditCard({ token, amount, currency = 'PHP' }) {
        if (!token) throw new Error('Payment token required');
        if (amount <= 0) throw new Error('Invalid transaction amount');

        return {
            transactionId: `TXN_${Date.now()}_${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
            amount: amount,
            currency: currency,
            status: 'AUTHORIZED',
            settledAt: new Date().toISOString()
        };
    }
}

module.exports = PaymentGatewayMock;
