import fetchData from '../http';
import {getLevel} from '../getlevel';

jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});
test('should call getLevel', () => {
    fetchData.mockReturnValue(Error());
    getLevel(1);
    expect(fetchData).toBeCalledWith('https://server/user/1')
})