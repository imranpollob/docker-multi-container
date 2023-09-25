FROM node:18

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

# RUN npm run seed

VOLUME [ "/backend/node_modules" ]

CMD [ "npm", "run", "dev" ]
