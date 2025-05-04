# kubectl Command Cheatsheet

## 🔍 Basic Info
```sh
kubectl version                            # Show kubectl & server version
kubectl cluster-info                       # Show cluster info
kubectl config view                        # Show kubeconfig details
kubectl get nodes                          # List all nodes
kubectl get pods                           # List all pods in default namespace
kubectl get services                       # List all services
kubectl get all                            # List all resources in the namespace
```

## 📦 Working with Pods
```sh
kubectl get pods -n <namespace>            # Get pods in a specific namespace
kubectl describe pod <pod-name>            # Detailed info of a pod
kubectl logs <pod-name>                    # View pod logs
kubectl logs -f <pod-name>                 # Stream logs (follow)
kubectl exec -it <pod-name> -- bash        # Exec into pod (bash shell)
kubectl delete pod <pod-name>              # Delete a pod
```

## 🚀 Deployments
```sh
kubectl create deployment <name> --image=<image>         # Create deployment
kubectl get deployments                                  # List deployments
kubectl describe deployment <deployment-name>            # Detailed info
kubectl scale deployment <name> --replicas=3             # Scale deployment
kubectl delete deployment <name>                         # Delete deployment
```

## 🔄 Services
```sh
kubectl expose deployment <name> --type=LoadBalancer --port=80   # Expose deployment
kubectl get svc                                                  # List services
kubectl delete svc <svc-name>                                    # Delete a service
```

## ⚙️ ConfigMaps & Secrets
```sh
kubectl create configmap <name> --from-literal=key=value         # Simple configmap
kubectl get configmap                                            # List configmaps
kubectl create secret generic <name> --from-literal=key=value    # Create secret
kubectl get secrets                                              # List secrets
```

## 📁 Files & Manifests
```sh
kubectl apply -f <file>.yaml           # Apply from file
kubectl delete -f <file>.yaml          # Delete from file
kubectl get -f <file>.yaml             # Get resource from file
kubectl diff -f <file>.yaml            # Show changes before applying
```

## 🧪 Namespaces
```sh
kubectl get namespaces                 # List all namespaces
kubectl create namespace <name>       # Create new namespace
kubectl delete namespace <name>       # Delete namespace
kubectl config set-context --current --namespace=<name>  # Set default namespace
```

## 📊 Monitoring & Debugging
```sh
kubectl top pod                        # Show resource usage of pods
kubectl top node                       # Show resource usage of nodes
kubectl describe node <node-name>     # Show detailed node info
```

## 🧹 Clean Up
```sh
kubectl delete pod --all               # Delete all pods in namespace
kubectl delete all --all               # Delete all resources in namespace
```

---

🧠 **Pro Tip:** Add `-n <namespace>` to almost any command if you're working across multiple namespaces.
