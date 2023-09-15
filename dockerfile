# Sử dụng image cơ sở chứa Node.js
FROM node:14-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép tệp package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc của ứng dụng
RUN npm install

# Sao chép toàn bộ mã nguồn của ứng dụng vào thư mục làm việc
COPY . .

# Biên dịch ứng dụng (thay thế bằng lệnh build của bạn)
RUN npm run build

# Expose cổng mà ứng dụng chạy trên (thường là cổng 3000)
EXPOSE 3000

# Khởi động ứng dụng khi container được chạy
CMD ["npm", "start"]
