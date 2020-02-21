#!/bin/bash

# based off https://github.com/afool622/webui
# https://github.com/psychowood/ng-torrent-ui uses grunt

set -e # exit on errors
GZIP_ARG="-qf"
ZIP_ARG="-q"

if [[ $1 == "-v" ]]; then
	set -x # echo all commands - useful for debugging
	GZIP_ARG="-qvf"
	ZIP_ARG="-v"
fi

cp LICENSE ./dist/

cd dist

# Files in root folder
declare -a rootDir=`echo *.html *.css *.js LICENSE`
# Files in localization folder
declare -a dirList="images"

if [ -d ./.tmp ]; then
	rm -fR .tmp
fi

mkdir ./.tmp
cp -p $rootDir .tmp/
cp -r $dirList .tmp/
cd .tmp

for f in $rootDir; do
	gzip $GZIP_ARG $f > ./$f.gz
done

for d in $dirList; do
	cd $d
	for f in `ls ./*`; do
		gzip $GZIP_ARG $f > ./$f.gz
	done
	cd ../
done

zip -r $ZIP_ARG ../webui.zip ./*

cd ../

chmod 0644 ./webui.zip
# cp -fp webui.zip "/Users/$USER/Library/Application Support/BitTorrent/"
cp -fp webui.zip "/mnt/c/Users/$USER/AppData/Roaming/uTorrent"

rm -R ./.tmp ./images
rm webui.zip LICENSE main.js main.css
