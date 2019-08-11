#!/bin/sh

# need to pass host ip to container
export REACT_NATIVE_PACKAGER_HOSTNAME=$(hostname -I | cut -d' ' -f1)

sudo docker build -t expo-cli ./docker
sudo docker run \
    -v=$PWD:/app \
    -e REACT_NATIVE_PACKAGER_HOSTNAME=$REACT_NATIVE_PACKAGER_HOSTNAME \
    -p 19000:19000 \
    -p 19001:19001 \
    -p 19002:19002 \
    -it expo-cli \
    sh
