#!/usr/bin/env bash

ORG="elementalui"
NAME=$(echo 'console.log(require("./package.json").name)' | node)
REPO="$NAME-dist"
VERSION=$(echo 'console.log(require("./package.json").version)' | node)

echo ORG=$ORG
echo NAME=$NAME
echo REPO=$REPO
echo VERSION=$VERSION

pushd .
rm -rf /tmp/$ORG/$REPO
mkdir -p /tmp/$ORG/$REPO
git clone git@github.com:$ORG/$REPO.git /tmp/$ORG/$REPO
npm run build
cp -f ./dist/* /tmp/$ORG/$REPO
cp -f ./bower.json /tmp/$ORG/$REPO
cd /tmp/$ORG/$REPO
git add .
git commit -m "Release $VERSION"
bower version $VERSION
git push && git push --tags
popd
