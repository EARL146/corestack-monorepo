function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    console.error(`[ERROR] ${err.message}`, { stack: err.stack, path: req.path });
    res.status(statusCode).json({
        type: 'https://api.domain.com/errors/' + statusCode,
        title: err.name || 'InternalServerError',
        status: statusCode,
        detail: err.message || 'An unexpected error occurred.',
        timestamp: new Date().toISOString()
    });
}

module.exports = errorHandler;
