# ---------- DEV ----------
FROM node:20-alpine AS dev
WORKDIR /app

COPY package*.json ./
RUN npm install

CMD ["npm", "run", "start:dev"]


# ---------- DEV DEPENDENCIES ----------
FROM node:20-alpine AS dev-deps
WORKDIR /app

COPY package*.json ./
RUN npm ci


# ---------- BUILDER ----------
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .

RUN npm run build


# ---------- PROD DEPENDENCIES ----------
FROM node:20-alpine AS prod-deps
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev


# ---------- PRODUCTION ----------
FROM node:20-alpine AS prod
WORKDIR /app

ENV NODE_ENV=production

COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]