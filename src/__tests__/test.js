import fetchData from '../http';
import {getLevel} from '../getlevel';

jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});

//тесты для функции getLevel
test('return user status if ok', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 5 });
    const result = getLevel(1);
    expect(result).toBe('Ваш текущий уровень: 5');
  });

test('return error if not ok', () => {
    fetchData.mockReturnValue({ status: 'error' });
    const result = getLevel(1);
    expect(result).toBe('Информация об уровне временно недоступна');
});

test('return error if unknown', () => {
    fetchData.mockReturnValue({ status: 'unknown' });
    const result = getLevel(1);
    expect(result).toBe('Информация об уровне временно недоступна');
});

//тест для функции fetchData (для 100% покрытия тестами)
test('must throw an error when calling', () => {
    expect(() => fetchData('https://server/user/1')).toThrow('Mock this!');
});