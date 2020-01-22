
#!/usr/bin/env bash
git pull origin master
docker build -t calendar_front_end .
docker stop calendar_front_end && docker rm calendar_front_end
docker run --name calendar_front_end -p 17998:8080 -d calendar_front_end:latest
