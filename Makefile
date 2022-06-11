SHELL := /bin/bash
DATE := $(shell date +%Y%m%d-%H:%M:%S)
HASH := $(shell git rev-parse HEAD)

run: lint
	npm run dev

lint:
	npm run lint

start: build
	npm run start

build:
	npm run build

install:
	npm install --save next

upgrade:
	npm-check-updates -u
	npm install next@latest react@latest react-dom@latest cypress@latest

test:
	npm run cypress:headless
