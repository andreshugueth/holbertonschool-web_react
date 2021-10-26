mkdir $2
cp $1/package.json $2/package.json
cp $1/tsconfig.json $2/tsconfig.json
cp $1/webpack.config.js $2/webpack.config.js
echo "Files Created from $1 to $2"
