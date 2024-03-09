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

docker compose down
docker compose up -d --build
docker system prune -f
