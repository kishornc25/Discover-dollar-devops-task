MEAN Stack CI/CD Deployment (MongoDB, Express, Angular, Node.js)

This project is a containerized MEAN application deployed on an AWS EC2 Ubuntu server using Docker, Docker Compose, and GitHub Actions CI/CD. It includes a frontend (Angular), backend (Node.js/Express), MongoDB Atlas database, and Nginx reverse proxy.

SECTION 1: Repository Setup

A GitHub repository was created and the complete source code was uploaded.

Repository URL:
https://github.com/kishornc25/Discover-dollar-devops-task

SECTION 2: Containerization and Deployment

Both frontend and backend have standalone Dockerfiles.

Backend Dockerfile:

FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [“node”, “server.js”]

Frontend Dockerfile:

FROM node:18 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY –from=build /app/dist/angular-15-crud /usr/share/nginx/html
EXPOSE 80
CMD [“nginx”, “-g”, “daemon off;”]

SECTION 3: Docker Hub Images
<img width="1912" height="1001" alt="DOCKER HUB" src="https://github.com/user-attachments/assets/c289849d-30c3-420f-8773-9437be8dcc2e" />

GitHub Actions builds and pushes Docker images to Docker Hub:

Backend image: kishornc123/mean-backend
Frontend image: kishornc123/mean-frontend

Docker Hub URL:
https://hub.docker.com/repositories/kishornc123

SECTION 4: Docker Compose (Used on EC2)

version: “3.8”
services:
backend:
container_name: backend_container
image: kishornc123/mean-backend:latest
ports:
- “3000:3000”
restart: always

frontend:
container_name: frontend_container
image: kishornc123/mean-frontend:latest
ports:
- “80:80”
restart: always

SECTION 5: Database Setup (MongoDB Atlas)

MongoDB Atlas was used instead of installing MongoDB on EC2.

Backend server.js connection string:

mongodb+srv://kishornc18_db_user:yO8hczdw9c4idWwl@cluster0.g7bf1ut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

Backend successfully logs:
Connected to MongoDB Atlas
Server is running on port 3000

SECTION 6: CI/CD Pipeline (GitHub Actions)
<img width="1898" height="935" alt="github" src="https://github.com/user-attachments/assets/2f863bf8-36bd-4f9a-8a03-17f95e273d6c" />
Pipeline functionality:
	1.	Builds Docker images for frontend and backend
	2.	Tags images with latest
	3.	Pushes images to Docker Hub
	4.	EC2 pulls new images
	5.	Docker containers restart automatically

This fulfills complete CI/CD pipeline requirements.

SECTION 7: Nginx Reverse Proxy
<img width="1907" height="977" alt="nginx" src="https://github.com/user-attachments/assets/459fd5cf-669b-4b5f-8f3b-ba2c1f8e7f58" />

The Angular frontend is served through Nginx and mapped to port 80 on EC2.
<img width="1917" height="991" alt="EC2 Instance Dashboard" src="https://github.com/user-attachments/assets/93325ff5-788c-4974-81f8-371f6344a332" />

Public application URL:

(http://18.142.136.117) This meets the assignment requirement for port 80 exposure.

SECTION 8: Running Application on EC2 Manually

To update and restart containers:

sudo docker-compose pull
sudo docker-compose up -d
sudo docker ps

Backend endpoint:
http://18.142.136.117:3000/api/tutorials
<img width="1918" height="362" alt="BACKEND ENDPOINT TEST" src="https://github.com/user-attachments/assets/1960169d-5e27-42dd-83e8-edec2335a8fa" />

Frontend UI:
http://18.142.136.117/:8080
<img width="1918" height="1021" alt="BROWSER" src="https://github.com/user-attachments/assets/94e20856-e6ed-4233-b5f0-21720f9e05b4" />

SECTION 9: Deliverables Checklist

Included in this repository:

– Dockerfiles for both frontend and backend
– Docker Compose file
– CI/CD pipeline implementation
– Deployment instructions
– Working UI hosted over port 80
– MongoDB Atlas database connected
– Screenshots and logs inside GitHub Actions
– Docker image build and push process

SECTION 10: Final Notes

The AWS EC2 server is active and available for CI/CD demonstration.
The application updates automatically on every push to the GitHub main branch.
Submitted by:
Kishor NC


