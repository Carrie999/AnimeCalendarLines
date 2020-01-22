# 从harbor拉取node+nginx的镜像
FROM nginx
MAINTAINER Carrie Pang<https://github.com/Carrie999>
LABEL description="calendar_front_end"

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8080

WORKDIR /app

COPY build  /app/build

CMD ["nginx", "-g", "daemon off;"]
