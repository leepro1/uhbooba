#!/bin/bash

# 변경된 컨테이너 실행
docker compose -f docker-compose.base.yml -f docker-compose.services.yml up -d --build
