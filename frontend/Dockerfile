FROM node:6
RUN groupadd -r app && useradd -m -r -g app app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY npm-shrinkwrap.json /usr/src/app/
RUN npm install
ADD . /usr/src/app
RUN chown -R app:app /usr/src/app/
USER app
EXPOSE 3000
CMD npm start
