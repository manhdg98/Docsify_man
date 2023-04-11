### Dockerfile basic

RECOMMEND: https://www.youtube.com/watch?v=9zUHg7xjIqQ

```shell
FROM node:16
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 3000
CMD [ "node", "index.js" ]
```

### Build image:
```shell
docker build -t node-app-image .
```

### Build container 
```shell
docker run -p 4000:3000 -d --name node-app node-app-image
```
-p: PORT, mapping cổng 4000 ở ngoài vào cổng 3000 trong container  
node-app: Name container    
node-app-image: Name image  
Trong câu lệnh này, -d là một tùy chọn (option) được sử dụng với lệnh docker run. Nó có nghĩa là "detach" (tách rời), có nghĩa là chạy container trong chế độ nền, không liên kết với terminal hiện tại của người dùng. Khi container được chạy với tùy chọn này, terminal sẽ không hiển thị logs và thông tin của container đang chạy, và người dùng có thể sử dụng terminal để thực hiện các công việc khác mà không bị gián đoạn bởi quá trình container đang chạy.

### Del all image and container

To delete all containers including its volumes use,
```shell
docker rm -vf $(docker ps -aq)
```

To delete all the images,
```shell
docker rmi -f $(docker images -aq)
```

### Docker inspect
```shell
docker inspect docker-node-app-1
```

### Mount forder của webapp vào container:
```shell
docker run -p 4000:3000 -v pathfolderonlocation:pathfolderoncontainer -d --name node-app node-app-image
```

v: volumn

### Access vào môi trường của docker
```shell
docker exec -it node-app bash
```

Show log
```log
docker logs node-app -f
```
-f: follow logs

Docker volumn anonymous
```shell
docker run -p 4000:3000 -v $(pwd):/app -v /app/node_modules -d --name node-app node-app-image
```
-v /app/node_modules: Hey đừng có động vào node_modules trong container

Docker volumn read only
```shell
docker run -p 4000:3000 -v $(pwd):/app:ro -v /app/node_modules -d --name node-app node-app-image
```
-v $(pwd):/app:ro: Container chỉ đọc không được thêm sửa xoá file
--env-file ./.env: .env file

### Docker volume
1. Docker volume  
Docker volume là một tính năng trong Docker cho phép lưu trữ dữ liệu ở ngoài container, giúp cho việc quản lý dữ liệu trở nên dễ dàng và có tính linh hoạt hơn.

Mục đích của việc sử dụng Docker volume là để lưu trữ dữ liệu của ứng dụng, như cơ sở dữ liệu, file log, hoặc bất kỳ tệp nào mà ứng dụng của bạn sử dụng. Nó giúp bạn giữ cho dữ liệu của bạn an toàn và tránh bị mất trong trường hợp container bị xóa hoặc cập nhật.

Các volume trong Docker được tạo ra bằng cách liên kết một thư mục trong container với một thư mục trên host. Khi container được tạo ra và chạy, dữ liệu trong volume sẽ được truy cập thông qua thư mục trên host.

Một cách dễ hiểu nhất để nói về Docker volume có thể là nó giống như một thùng chứa để lưu trữ các tài nguyên của container. Như vậy, các tài nguyên này sẽ không bị mất khi container bị xóa hoặc cập nhật, và có thể được chia sẻ và sử dụng bởi nhiều container khác nhau trên cùng một host.

2. Host  
Thư mục trên host (host directory) là thư mục trên hệ thống máy tính (physical machine) mà Docker đang chạy. Đây là thư mục mà bạn có thể truy cập bằng cách sử dụng các lệnh và các công cụ quản lý file của hệ điều hành, và nó được sử dụng để lưu trữ các file và dữ liệu được sử dụng bởi Docker container.

Khi bạn tạo ra một volume trong Docker, bạn sẽ liên kết một thư mục trong container với một thư mục trên host. Vì vậy, các dữ liệu được lưu trữ trong volume này sẽ được lưu trữ và quản lý trong thư mục trên host. Điều này cho phép bạn dễ dàng truy cập và quản lý dữ liệu của bạn bên ngoài container, và đảm bảo rằng dữ liệu của bạn sẽ không bị mất khi container bị xóa hoặc cập nhật.

### Docker compose
Docker Compose là một công cụ được sử dụng để quản lý và triển khai các ứng dụng được đóng gói trong các container Docker.

```yaml
version: '3'
services:
  node-app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./:/app
      - /app/node_modules
    environment:
      - PORT=3000
```

```shell
docker compose up -d
```
Lệnh này sẽ tạo và khởi chạy các container dựa trên cấu hình được định nghĩa trong file docker-compose.yml  
-d được sử dụng để chạy các container ở chế độ nền, tức là các container sẽ chạy ở background và không chiếm quá nhiều tài nguyên của hệ thống.

```shell
docker compose down -v
```
Lệnh này sẽ dừng và xóa các container và mạng mà được khởi chạy bởi Docker Compose.  
-v được sử dụng để xóa các volumes liên quan đến các container. Việc xóa volumes có thể giúp giải phóng tài nguyên đĩa cứng của máy tính.

### Docker compose multiple env:  

![Docker compose multiple env](./img/env.PNG)  

Dockerfile
```shell
FROM node:16
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development"]; \
      then npm install; \
      else npm install --only=production; \
    fi
COPY . ./
ENV PORT 2000
EXPOSE $PORT
CMD [ "node", "index" ]
```

Base env:
```shell
version: '3'
services:
  node-app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
```

Dev env:
```shell
version: '3'
services:
  node-app:
    build:
      context: .
      args:
        NODE_ENV: development
    ports:
      - "3000:3000"
    volumes:
      - ./:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev
```

Run development env
```shell
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

### Dockerignore   
Giống như .gitignore, nó không copy những folder hay file không cần thiết vào Virtual Machine, cụ thể là Docker Container






