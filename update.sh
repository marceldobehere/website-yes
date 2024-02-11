git pull
rm -rf ./res/*
mkdir -p res
cp -r ./out/* ./res
cp -r ./extra/. ./res
echo "Done!"

#sudo docker compose build
#sudo docker compose up