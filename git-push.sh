#!/bin/bash
# This script is used to push current project files to github
echo Pushing to github master branch...
echo What comment would you like with this update?
read gitnote

git status
git add -A
git commit -a -m "$gitnote"
git push -u origin master

echo -----------------------------

echo Press enter to continue
read testing