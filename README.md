# MERN Minikube Deployment

A full-stack CRUD application built with the MERN stack and deployed on Minikube.

## Project Structure

```
mern-minikube-deployment/
├── backend/          # Express REST API
├── frontend/         # React application
└── k8s/              # Kubernetes manifests
    ├── configmap.yaml
    ├── secret.yaml     
    ├── mongo-deployment.yaml
    ├── backend-deployment.yaml
    └── frontend-deployment.yaml
```

## API Endpoints

| Method   | Endpoint              | Description            |
|----------|-----------------------|------------------------|
| GET      | `/api/students`       | Retrieve all students  |
| POST     | `/api/students`       | Create a new student   |
| PUT      | `/api/students/:id`   | Update student by ID   |
| DELETE   | `/api/students/:id`   | Delete student by ID   |

## Setup

### 1. Create the secret file

Create `k8s/secret.yaml` with MongoDB credentials (base64 encoded)

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mongo-secret
type: Opaque
data:
  MONGO_USERNAME: <base64-encoded-username>
  MONGO_PASSWORD: <base64-encoded-password>
```

### 2. Start Minikube

```
minikube start
```

### 3. Apply Kubernetes manifests

```
kubectl apply -f k8s/secret.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/mongo-deployment.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
```

### 4. Start the backend tunnel

Open a **separate terminal** and run the following command. Keep this terminal open while using the app:

```
kubectl port-forward service/backend-service 5000:5000
```

### 5. Open the app

```
minikube service frontend-service --url
```

Open the URL in your browser.

## Cleanup

To remove all resources and stop Minikube:

```
kubectl delete -f k8s/
minikube stop
```

## Docker Hub Images

- `sanuth79/backend:latest`
- `sanuth79/frontend:latest`
