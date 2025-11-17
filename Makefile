PROJECT_NAME=cafeteria-backend
SERVICE=backend
COMPOSE=docker compose

.PHONY: build up down restart logs shell test lint clean

build:
	$(COMPOSE) build $(SERVICE)

up:
	$(COMPOSE) up -d $(SERVICE)

down:
	$(COMPOSE) down

restart: down up

logs:
	$(COMPOSE) logs -f $(SERVICE)

shell:
	$(COMPOSE) exec $(SERVICE) sh

test:
	$(COMPOSE) run --rm $(SERVICE) npm test

lint:
	$(COMPOSE) run --rm $(SERVICE) npm run lint

clean:
	$(COMPOSE) down -v --remove-orphans
