#!/bin/bash
if [ $(git branch | grep '*' | awk '{ print $2 }') == 'main' ]
then
	echo "Currently in correct branch!"
else
	echo "Changing to 'main'"
	git checkout 'main'
fi

git pull
git reset --hard

docker build -t owltech-vite .
docker stop Owltech-Vite-App
docker rm Owltech-Vite-App
docker run -d -p 5173:5173 --name Owltech-Vite-App owltech-vite
