# eksctl Command Cheatsheet

## 🏗️ Cluster Management

```sh
eksctl create cluster --name my-cluster --region us-west-2             # Create a basic cluster
eksctl delete cluster --name my-cluster --region us-west-2             # Delete a cluster
eksctl get cluster --region us-west-2                                  # List clusters in a region
eksctl upgrade cluster --name my-cluster --region us-west-2            # Upgrade control plane
```

## ⚙️ Node Groups

```sh
eksctl create nodegroup --cluster my-cluster --name ng-1 --region us-west-2
eksctl delete nodegroup --cluster my-cluster --name ng-1 --region us-west-2
eksctl get nodegroup --cluster my-cluster --region us-west-2
```

## 📦 Add-ons

```sh
eksctl utils update-kube-proxy --cluster my-cluster --approve
eksctl utils update-coredns --cluster my-cluster --approve
eksctl utils update-aws-node --cluster my-cluster --approve
```

## 🛡️ IAM & RBAC

```sh
eksctl create iamidentitymapping --cluster my-cluster --arn arn:aws:iam::123456789012:role/my-role --username my-user
eksctl delete iamidentitymapping --cluster my-cluster --arn arn:aws:iam::123456789012:role/my-role
eksctl get iamidentitymapping --cluster my-cluster
```

## 📁 Config File Usage

```sh
eksctl create cluster -f cluster-config.yaml      # Create cluster from YAML
eksctl delete cluster -f cluster-config.yaml      # Delete cluster from YAML
```

## 🧪 Helpful Utilities

```sh
eksctl version                                     # Show eksctl version
eksctl help                                        # Show help
```

## 🧠 Pro Tips

- Always use `--region` to avoid default region confusion
- Use `--approve` to skip interactive approval for upgrades
- You can manage Fargate profiles too with `eksctl create fargateprofile`
