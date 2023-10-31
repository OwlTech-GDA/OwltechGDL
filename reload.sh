#!/bin/bash
if ( git branch --list == 'dev-docker'); then
	echo "aslmpositivo"
else
	echo "aslm"
	git switch 'dev-docker'
	git branch --list
fi

git pull
npm run dev
