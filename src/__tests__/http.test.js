import fetchData from '../http';

test('should throw an error when called', () => {
    // Проверяем, что функция выбрасывает ошибку при вызове
    expect(() => fetchData('https://server/user/1')).toThrow('https://server/user/1 не работает, это Mock');
});
