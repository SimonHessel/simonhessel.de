git pull
git checkout gh-pages 
git pull
rm -rf .nojekyll
git add .
git commit -a -m "remove"
git push origin gh-pages
touch .nojekyll
git add .
git commit -a -m "add"
git push origin gh-pages
git checkout master