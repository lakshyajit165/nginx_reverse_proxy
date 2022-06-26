#!/bin/bash
cat ./docker_hub_pwd.txt | docker login --username lakshyajit165 --password-stdin

# for platform specific building of docker containers on M1 processors
docker build --platform linux/amd64 -t k8s_demo_server1 ./server1
docker tag k8s_demo_server1 lakshyajit165/k8s_demo_server1
docker push lakshyajit165/k8s_demo_server1

docker build --platform linux/amd64 -t k8s_demo_server2 ./server2
docker tag k8s_demo_server2 lakshyajit165/k8s_demo_server2
docker push lakshyajit165/k8s_demo_server2

docker build --platform linux/amd64 -t k8s_demo_client ./client
docker tag k8s_demo_client lakshyajit165/k8s_demo_client
docker push lakshyajit165/k8s_demo_client