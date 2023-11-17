#!/bin/bash
if ( $(git branch | grep '*' | awk '{ print $2 }') == 'dev-docker'); then
	echo "Already in branch!"
else
	echo "Changing to 'dev-docker'"
	git checkout 'dev-docker'
fi

git pull
git reset --hard

return 0

docker build -t Owltech-Vite .
docker run -d -p 5173:5173 --name Owltech-Vite-App Owltech-Vite
