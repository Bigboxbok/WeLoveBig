# ใช้ Node.js เป็น base image
FROM node:16

# ตั้งค่า working directory
WORKDIR /usr/src/app

# คัดลอก package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดทั้งหมด
COPY . .

# เปิดพอร์ตที่แอปพลิเคชันจะทำงาน
EXPOSE 3000

# รันแอปพลิเคชันเมื่อ container เริ่มต้น
CMD ["node", "index.js"]
