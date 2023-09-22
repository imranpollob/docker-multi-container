# NodeJs Backend
Exposes a todo api on port 8080/todos.

Docker commands:

Building the container
```
docker build -t todo-backend .
# -t: tag a name
```
Running the container
```
docker run --rm -d -p 8080:8080 todo-backend
# --rm: remove the container after exit
# -d: detach means run container in the background
# -p: Publish a container's port(s) to the host
```
