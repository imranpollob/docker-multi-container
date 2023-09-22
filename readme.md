# Docker Multi Container
This project is using three different containers.
- Backend: uses NodeJS, exposes todos api
- Fontend: uses ReactJS, displays the todos
- Database: uses MySQL, to store the todos

Backend, Frontend have their own Dockerfile. I'm not using a seperate Dockerfile for the database. Docker compose is used to manage all containers.

Useful docker commands:

```
# list containers (running only)
docker ps

# list all containers
docker ps -a

# start a container
docker start containerID1 containerID2

# stop a container
docker stop containerID1 containerID2

# kill a container (force stop)
docker kill containerID1 containerID2

# remove a container
docker rm containerID1 containerID2

# remove all exited container
docker container prune

# pull an image
docker pull hello-world

# running an image
# pulls the image first if it's not available locally
# creates a container and runs immediately
docker run busybox

# Passing commands to container
docker run busybox echo "hi!"

# list of images
docker images

# remove an image
docker rmi imageID

# go to containers interective shell
docker run -it busybox

# remove container after exit
docker run --rm -it busybox
```