# Main Kubernetes Objects

Here are the most commonly used ones, and what they’re all about:

---

### 1. **Pod**

The smallest and simplest unit in Kubernetes. It wraps one or more containers (usually one) and shares storage, network, etc.

> _"Run this container with these settings."_

---

### 2. **Deployment**

Used to manage Pods. It handles rollout, scaling, and updates for your app.

> _"Make sure 3 copies of my app are always running and update them safely when I release a new version."_

---

### 3. **ReplicaSet**

Controls how many copies of a Pod should be running. Usually created and managed by a Deployment.

> _"I want 5 replicas of this Pod."_

---

### 4. **Service**

Gives you stable networking for your Pods. Pods come and go, but a Service stays and knows how to route traffic.

> _"Expose this group of Pods on a fixed IP or DNS name."_

---

### 5. **ConfigMap**

Stores configuration data (like environment variables or config files) that your Pods can use.

> _"Inject this non-secret config into my containers."_

---

### 6. **Secret**

Same as ConfigMap, but for sensitive data—like passwords, API tokens, SSH keys.

> _"Store this database password securely and give it to my Pod."_

---

### 7. **PersistentVolume (PV)**

Represents a piece of storage in the cluster—like a disk.

---

### 8. **PersistentVolumeClaim (PVC)**

A request for storage by a Pod. PVCs get bound to available PVs.

---

### 9. **Namespace**

Lets you create virtual clusters in the same physical cluster. Great for organizing environments like dev/stage/prod.

---

### 10. **Job / CronJob**

- **Job**: Run a task once (like a batch job) until it completes.
- **CronJob**: Run Jobs on a schedule (like cron in Linux).

---

### ✨ Bonus Objects

- **Ingress**: Manages external access to your services (like routing HTTP traffic).
- **DaemonSet**: Ensures a Pod runs on every node (or some subset).
- **StatefulSet**: Like Deployment, but for stateful applications (e.g., databases) that need stable network IDs or storage.
