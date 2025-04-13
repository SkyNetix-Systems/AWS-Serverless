
# 📘 kubectl Command Cheat Sheet

## 🔍 Cluster Info

```bash
kubectl version                          # Show kubectl version
kubectl cluster-info                     # Show cluster info
kubectl config view                      # View kubeconfig settings
kubectl get nodes                        # List all nodes in the cluster
kubectl describe node <node-name>       # Show details of a node
```

## 🚀 Deployments & Pods

```bash
kubectl get pods                         # List all pods
kubectl get deployments                  # List all deployments
kubectl describe pod <pod-name>         # Describe a specific pod
kubectl logs <pod-name>                 # Get logs from a pod
kubectl exec -it <pod-name> -- bash     # Execute a command in a pod
kubectl delete pod <pod-name>           # Delete a specific pod
kubectl get rs                          # Get ReplicaSets
kubectl get all                         # Get all resources
```

## 📦 Create & Apply Resources

```bash
kubectl apply -f <file>.yaml             # Apply a configuration from a file
kubectl create deployment <name> --image=nginx     # Create a deployment
kubectl expose deployment <name> --type=LoadBalancer --port=80  # Expose as a service
kubectl run <name> --image=nginx         # Run a pod with a specific image
kubectl create -f <file>.yaml            # Create resource from a file
```

## 🔄 Update & Scaling

```bash
kubectl set image deployment/<deployment-name> <container-name>=<new-image>  # Update image
kubectl scale deployment <name> --replicas=3    # Scale a deployment
kubectl rollout status deployment/<name>        # Status of a rollout
kubectl rollout undo deployment/<name>          # Undo the last rollout
```

## 📄 Get & Describe Resources

```bash
kubectl get all                          # Get all resources in namespace
kubectl get services                     # List all services
kubectl get events                       # List recent events
kubectl get ingress                      # List ingress resources
kubectl describe service <svc-name>     # Describe a service
kubectl describe deployment <name>      # Describe a deployment
```

## 🛠️ Namespaces

```bash
kubectl get namespaces                   # List all namespaces
kubectl get pods --all-namespaces        # List pods in all namespaces
kubectl config set-context --current --namespace=<name>  # Set default namespace
```

## 🔐 Secrets & ConfigMaps

```bash
kubectl get secrets                      # List secrets
kubectl describe secret <secret-name>   # Describe a secret
kubectl get configmaps                  # List configmaps
kubectl describe configmap <name>       # Describe a configmap
```

## 💾 Storage

```bash
kubectl get pv                           # List Persistent Volumes
kubectl get pvc                          # List Persistent Volume Claims
kubectl describe pvc <name>             # Describe a PVC
```

## ⏱ Jobs & CronJobs

```bash
kubectl get jobs                         # List Jobs
kubectl get cronjobs                     # List CronJobs
kubectl describe job <name>             # Describe a Job
kubectl describe cronjob <name>         # Describe a CronJob
```

## 🚪 Access & Port Forwarding

```bash
kubectl port-forward svc/<svc-name> 8080:80    # Forward port to a service
kubectl port-forward pod/<pod-name> 8080:80    # Forward port to a pod
kubectl expose pod <pod-name> --port=8080 --target-port=80 --name=<svc-name>  # Expose pod as a service
```

## 🔍 Debugging & Troubleshooting

```bash
kubectl describe <resource> <name>      # Describe any resource
kubectl logs <pod-name> --previous      # Get logs from a previous instance
kubectl get events --sort-by=.metadata.creationTimestamp  # Get sorted events
```

## 🧹 Cleanup

```bash
kubectl delete pod <name>               # Delete a pod
kubectl delete service <name>           # Delete a service
kubectl delete deployment <name>        # Delete a deployment
kubectl delete -f <file>.yaml           # Delete resources defined in a file
```
