# CI Test demo

[![Build status](https://ci.appveyor.com/api/projects/status/sid0xlmssjl36jqq?svg=true)](https://ci.appveyor.com/project/Natasha01013/ajs-hw4-task3-mock)


# Домашнее задание к лекции «Unit-тестирование»   
## Задача 3. Mocking (задача со звёздочкой)

#### Легенда

Вы написали функцию, которая взаимодействует с функцией `fetchData` (достаточно тяжёлой, т.к. взаимодействует с удалённым веб-сервером). Вы хотите протестировать свою функцию (в том числе на то, как она обрабатывает ошибки) и, чтобы «отвязаться» от этой тяжёлой зависимости, решили использовать механизм «mocking'а».

#### Описание   
```
// Демо-реализация функции fetchData (модуль http):   
export default function fetchData(url) {   
  throw new Error('Mock this!');   
}
```

```
// Ваша функция:   
import fetchData from './http';

export function getLevel(userId) {   
  const response = fetchData(`https://server/user/${userId}`);   
    // TODO: логика обработки   
  if (response.status === 'ok') {   
     return `Ваш текущий уровень: ${response.level}`;    
  }   
  return `Информация об уровне временно недоступна`;   
}   
```

Сделайте моки для функции `fetchData` и напишите тесты таким образом, чтобы обеспечить 100% покрытие тестами функции `getLevel` по строкам.

**Обратите внимание:** тесты вам надо писать для функции `getLevel`