# Testing

curl http://remote_ip:3000/

curl http://remote_ip:3000/file

curl http://remote_ip:3000/calc

ab -n 1000 -c 100 http://remote_ip:3000/

ab -n 1000 -c 100 http://remote_ip:3000/file

ab -n 1000 -c 100 http://remote_ip:3000/calc



# Installing PM2

sudo npm install pm2@latest -g


# result 
On a 8 core server, which 8Gb RAM

## No clustering
pm2 start index.js --name test

no process:

ab -n 1000 -c 100 http://remote_ip:3000/

Request per second: 129.58


calc:

ab -n 1000 -c 100 http://remote_ip:3000/file

Request per second: 132.40


file: 

ab -n 1000 -c 100 http://remote_ip:3000/calc

Request per second: 6.43


## 4 node cluster
pm2 delete test

pm2 start index.js --name test -i 4


no process:

ab -n 1000 -c 100 http://remote_ip:3000/

Request per second: 141.34


calc:

ab -n 1000 -c 100 http://remote_ip:3000/file

Request per second: 136.03


file: 

ab -n 1000 -c 100 http://remote_ip:3000/calc

Request per second: 25.54


no process:

ab -n 1000 -c 12 http://remote_ip:3000/

Request per second: 54.33


calc:

ab -n 1000 -c 12 http://remote_ip:3000/file

Request per second: 57.29


file: 

ab -n 1000 -c 12 http://remote_ip:3000/calc

Request per second: 24.67

## 6 node cluster
pm2 delete test

pm2 start index.js --name test -i 6

no process:

ab -n 1000 -c 100 http://remote_ip:3000/

Request per second: 159.34


calc:

ab -n 1000 -c 100 http://remote_ip:3000/file

Request per second: 135.81


file: 

ab -n 1000 -c 100 http://remote_ip:3000/calc

Request per second: 38.15


no process:

ab -n 1000 -c 18 http://remote_ip:3000/

Request per second: 91.34


calc:

ab -n 1000 -c 18 http://remote_ip:3000/file

Request per second: 82.94


file: 

ab -n 1000 -c 18 http://remote_ip:3000/calc

Request per second: 36.34


no process:

ab -n 1000 -c 6 http://remote_ip:3000/

Request per second: 28.99


calc:

ab -n 1000 -c 6 http://remote_ip:3000/file

Request per second: 27.59


file: 

ab -n 1000 -c 6 http://remote_ip:3000/calc

Request per second: 15.02
