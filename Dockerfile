# base image
FROM node:10.6.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@1.1.1 -g
RUN yarn add antd 
RUN npm install react-flexview

#install a server (Recommended by create-react-app)
# RUN npm install -g serve
# Run serve when the image is run.
# CMD serve -s build
# Let Docker know about the port that serve runs on.
# EXPOSE 5000

# start app
CMD ["yarn", "start"]
