const errorHandler = (err, req, res, next) => {
    console.error(err); // แสดง error ใน console
    res.status(err.status || 500).json({
      error: {
        message: err.message || 'Internal Server Error',
        details: err.details || null,
      },
    });
  };
  
  module.exports = errorHandler;
  