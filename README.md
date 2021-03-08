# Verbose Bassoon

***No inspiration for a name so Github generated one for me, thanks!***

---

## Goal

* dockerize a React app

---

## Run

Development

```bash
# build
docker build -f Dockerfile.dev -t axtck/verbose-bassoon:tag . # normal
docker-compose -f docker-compose.dev.yml up -d --build # using compose

# run 
docker run -d -p 3001:3000 --name somename axtck/verbose-bassoon:tag # normal
docker-compose -f docker-compose.dev.yml up # using compose
```

Production 

```bash 
# build
docker build -f Dockerfile.prod -t axtck/verbose-bassoon:tag .
docker-compose -f docker-compose.prod.yml up -d --build

# run
docker run -d -p 1337:80 --name somename axtck/verbose-bassoon:tag
docker-compose -f docker-compose.prod.yml up
```
