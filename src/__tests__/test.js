import fetchData from '../http';
import {getLevel} from '../getlevel';

jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});
test('should call getLevel', () => {
    fetchData.mockReturnValue('https://server/user/${userId}');
    getLevel(1);
    expect(fetchData).toBeCalledWith('https://server/user/1')
})