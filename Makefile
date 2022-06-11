SHELL := /bin/bash
DATE := $(shell date +%Y%m%d-%H:%M:%S)
HASH := $(shell git rev-parse HEAD)

run: lint
	PATH=${PATH}:${HOME}/.nodebrew/current/bin; npm run dev

lint:
	PATH=${PATH}:${HOME}/.nodebrew/current/bin; npm run lint

start: build
	PATH=${PATH}:${HOME}/.nodebrew/current/bin; npm run start

build:
	npm run build

install:
	npm install --save next

upgrade:
	npm-check-updates -u
	npm install next@latest react@latest react-dom@latest cypress@latest

test:
	npm run cypress:headless
