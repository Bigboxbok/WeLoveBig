// index.js
const express = require('express');

require('dotenv').config();

const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware เพื่อให้สามารถอ่าน JSON body
app.use(express.json());

// Enable CORS
app.use(cors());

// ใช้ routes
app.use('/api', bookRoutes);

// ใช้ middleware สำหรับจัดการ error
app.use(errorHandler);

// start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
