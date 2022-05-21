FROM node:alpine3.14
MAINTAINER Mahmoud Rabie <mrabee63@gmail.com>
RUN mkdir /home/app
COPY . /home/app
EXPOSE 3000
CMD node /home/app/app.js