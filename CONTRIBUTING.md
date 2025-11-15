# Вклад в Zeelo

Спасибо, что хотите помочь! Ниже короткий гайд, чтобы мы друг другу ничего не ломали.

## Требования к окружению
- Node: `nvm use` (версия из `.nvmrc`)
- Менеджер пакетов: Yarn v3+
- Установка: `yarn install --immutable`

## Git-flow
- `main` — стабильная продакшн-ветка.
- `develop` — интеграционная ветка.
- Фичи — только через ветки `feature/<кратко-о-чем>`, багфиксы — `fix/<кратко>`.
- Коммиты по Conventional Commits:
  - `feat: …`, `fix: …`, `chore: …`, `refactor: …`, `docs: …`, `style: …`
- PR всегда в `develop`, минимум 1 ревьюер.

## Локальный запуск
```bash
nvm use
yarn install --immutable
yarn dev         # фронтенд
# yarn build     # проверка сборки
