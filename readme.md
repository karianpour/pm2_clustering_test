# Testing

```bash
curl http://remote_ip:3000/

curl http://remote_ip:3000/file

curl http://remote_ip:3000/calc


# NO PROCESS:
ab -n 1000 -c 100 http://remote_ip:3000/

# CALC:
ab -n 1000 -c 100 http://remote_ip:3000/file

# FILE:
ab -n 1000 -c 100 http://remote_ip:3000/calc
```

# Installing PM2

```bash
sudo npm install pm2@latest -g
```

# result

**_On a 8 core server, which 8Gb RAM_**

## No clustering

```bash
pm2 start index.js --name test

# LOAD TEST COMMAND:
ab -n 1000 -c 100 <url>

# NO PROCESS:
Request per second: 129.58

# CALC:
Request per second: 132.40

# FILE:
Request per second: 6.43

pm2 delete test
```

## 4 node cluster

```bash
pm2 start index.js --name test -i 4

# LOAD TEST COMMAND:
ab -n 1000 -c 100 <url>

# NO PROCESS:
Request per second: 141.34

# CALC:
Request per second: 136.03

# FILE:
Request per second: 25.54

# ---

# LOAD TEST COMMAND:
ab -n 1000 -c 12 <url>

# NO PROCESS:
Request per second: 54.33

# CALC:
Request per second: 57.29

# FILE:
Request per second: 24.67

pm2 delete test
```

## 6 node cluster

```bash
pm2 start index.js --name test -i 6

# LOAD TEST COMMAND:
ab -n 1000 -c 100 <url>

# NO PROCESS:
Request per second: 159.34

# CALC:
Request per second: 135.81

# FILE:
Request per second: 38.15

# ---

# LOAD TEST COMMAND:
ab -n 1000 -c 18 <url>

# NO PROCESS:
Request per second: 91.34

# CALC:
Request per second: 82.94

# FILE:
Request per second: 36.34

# ---

# LOAD TEST COMMAND:
ab -n 1000 -c 6 http://remote_ip:3000/

# NO PROCESS:
Request per second: 28.99

# CALC:
Request per second: 27.59

# FILE:
Request per second: 15.02
```
