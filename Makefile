SHELL := /bin/bash

run: lint
	npm run dev

lint:
	npm run lint

start: build
	npm run start

build:
	npm run build

install:
	npm install
