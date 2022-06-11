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
	PATH=${PATH}:${HOME}/.nodebrew/current/bin; npm run build

install:
	PATH=${PATH}:${HOME}/.nodebrew/current/bin; npm install --save next

upgrade:
	PATH=${PATH}:${HOME}/.nodebrew/current/bin; npm install next@latest react@latest react-dom@latest cypress@latest

update:
	PATH=${PATH}:${HOME}/.nodebrew/current/bin; npm-check-updates -u; npm install

test:
	PATH=${PATH}:${HOME}/.nodebrew/current/bin; npm run cypress:headless
