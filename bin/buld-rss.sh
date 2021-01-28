#!/bin/bash

if [ -d "$PWD/.next/server" ]
then
  node "$PWD/.next/server/scripts/build-rss.js"
else
  node "$PWD/.next/serverless/scripts/build-rss.js"
fi
