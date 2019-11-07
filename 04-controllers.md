### There are multiple types of Controllers in Kubernetes

# Replication Controller

## Follow below commnads and observe how pods are getting created 
    kubectl create -f appzeke-rc.yaml
    kubectl get pods
    kubectl delete pod appzeke-53thy
    kubectl get pods
    kubectl get rc
 
 ### Observe RC
    kubectl describe rc appzeke
  
 ### Modify a pod's label 
     kubectl get pods --show-labels
     kubectl label pod <podname> app=foo --overwrite

### observe the pods with label column [new pod being created]
    kubectl get pods -L app
  
### Scale out
    kubectl scale rc appzeke --replicas=10

### Delete without deleting pods 
    kubectl delete rc appzeke --cascade=false
   
  # Replica set
   
 ### Replica Set creation 
    kubectl create -f appzeke-replicaset.yaml

    kubectl get rs 
    kubectl describe rs
 
# Daemon set
 
 ### This daemon set is designed to run on all the disks that has ssd disk (disk=ssd )
      kubectl create -f gpu-monitor-daemonset.yaml
      kubectl get ds
      kubectl get po
      kubectl get node
      kubectl label node <nodename> gpu=true
 
 ### check it now 
     kubectl get po
  
# job
      kubectl get jobs
      kubectl get po

### After the two minutes have passed, see the status "completed"
     kubectl get po -a
     kubectl logs <jobpodname>

### Sequential completion and parallelism

    kubectl create -f multi-completion-batch-job.yaml
    kubectl create -f multi-completion-parallel-batch-job.yaml
### You can even change a Job’s parallelism property while the Job is running
    kubectl scale job multi-completion-batch-job --replicas 3
