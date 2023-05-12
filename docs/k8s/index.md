Basic

```shell
apiVersion: v1
kind: Pod
metadata:
  name: posts
spec:
  containers:
    - name: posts
      image: stephengrider/posts:0.0.1
``` 

```shell
kubectl get pods
kubectl exec -it [pod_name] [cmd]
kubectl logs [pod_name]
kubectl delete pod [pod_name]
kubectl apply - [config file name]
kubectl describe pod [pod_name]
```

```shell
kubectl get deployments
kubectl describe deployment [depl name]
kubectl apply -f [config file name]
kubectl delete deployment [depl_name]
```

