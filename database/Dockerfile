# ใช้ postgres image เป็น base
FROM postgres:17.0

# ระบุชื่อของฐานข้อมูลที่ต้องการสร้าง
ENV POSTGRES_DB=welovebig

# สร้าง directory สำหรับการ script
RUN mkdir -p /docker-entrypoint-initdb.d

# คัดลอกไฟล์ SQL ที่ใช้สร้างตารางและใส่ข้อมูลไปยัง container
COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432