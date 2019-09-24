#!/bin/zsh
rm -rf build
npm run-script build
yes | gcloud app deploy --stop-previous-version