#!/bin/bash
cat ./docker_hub_pwd.txt | docker login --username lakshyajit165 --password-stdin
docker build -t k8s_demo_server1 ./server1
docker tag k8s_demo_server1 lakshyajit165/k8s_demo_server1
docker push lakshyajit165/k8s_demo_server1

docker build -t k8s_demo_server2 ./server2
docker tag k8s_demo_server2 lakshyajit165/k8s_demo_server2
docker push lakshyajit165/k8s_demo_server2