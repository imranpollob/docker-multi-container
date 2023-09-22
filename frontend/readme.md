# ReactJS frontend
Show a list of todos on port 3000

Docker commands:

Building the container
```
docker build -t todo-frontend .
# -t: tag a name
```
Running the container
```
docker run --rm -d -p 3000:3000 todo-frontend
# --rm: remove the container after exit
# -d: detach means run container in the background
# -p: Publish a container's port(s) to the host
```
