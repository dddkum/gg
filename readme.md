Документация к проекту
======================

## 1. Стандарт коммитов в репозитории

- `fix` `fx:'text'` - исправление ошибок функционала;
- `features` `ft:'text'` - добавление функционала;
- `styles` `stls:'text'` - работа со стилями;
- `test` `tst:'text'` - добавление/работа с тестами;
- `undo/revert` `und:'text'` - откат коммитов;
- `docs` `dcs:'text'` - работа с документацией проекта;
- `performance` `prf:'text'` - улучшение производительности;
- `refactor` `rfcr:'text'` - улучшение кода без исправления ошибок и добавления функционала;
- `CI` `ci:'text'` - настройка инструментов автоматизации и работа со скриптами;

#### Примеры коммитов

- Исправление опечатки в файле:
  ```
  fx: Исправлена опечатка в функции `name`
  ```

- Добавление новой функции `name` в файл `name`:
  ```
  ft: Добавлена функция `name` для вычисления среднего значения
  ```

- Изменение стилей в файле `name`:
  ```
  stls: Изменены цвета кнопок и фона
  ```

- Добавление тестов для функции `name` в файле `name`:
  ```
  tst: Добавлены тесты для функции `name`
  ```

- Откат последнего коммита:
  ```
  und: Откат последнего коммита
  ```

- Обновление документации в файле `readme.md`:
  ```
  dcs: Обновлена документация по использованию проекта
  ```

- Улучшение производительности функции `name`:
  ```
  prf: Улучшена производительность функции `name`
  ```

- Улучшение кода без изменения функционала в файле `name`:
  ```
  rfcr: Улучшение структуры кода в функции `name`
  ```

- Настройка инструментов автоматизации и скриптов:
  ```
  ci: Настройка интеграции с `name` и добавление скрипта для автоматического тестирования
  ```