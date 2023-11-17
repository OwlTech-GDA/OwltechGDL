#!/bin/bash
if [ $(git branch | grep '*' | awk '{ print $2 }') == 'dev-docker' ]
then
	echo "Currently in correct branch!"
else
	echo "Changing to 'dev-docker'"
	git checkout 'dev-docker'
fi

git pull
git reset --hard

docker build -t owltech-vite .
docker run -d -p 5173:5173 --name Owltech-Vite-App owltech-vite
