FROM node:stretch

WORKDIR /home/node/app

COPY  src/ package.json package-lock.json tsconfig.json ./

RUN npm install --only=production

RUN npm run build

EXPOSE 3000

CMD ["npm","start"]