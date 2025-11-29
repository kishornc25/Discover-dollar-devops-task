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

Pipeline functionality:
	1.	Builds Docker images for frontend and backend
	2.	Tags images with latest
	3.	Pushes images to Docker Hub
	4.	EC2 pulls new images
	5.	Docker containers restart automatically

This fulfills complete CI/CD pipeline requirements.

SECTION 7: Nginx Reverse Proxy

The Angular frontend is served through Nginx and mapped to port 80 on EC2.

Public application URL:
http://18.142.136.117/

This meets the assignment requirement for port 80 exposure.

SECTION 8: Running Application on EC2 Manually

To update and restart containers:

sudo docker-compose pull
sudo docker-compose up -d
sudo docker ps

Backend endpoint:
http://18.142.136.117:3000/api/tutorials

Frontend UI:
http://18.142.136.117/

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
