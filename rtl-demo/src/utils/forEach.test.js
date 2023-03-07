import { forEach } from './forEach';

const mockCB=jest.fn((value)=>value+42);

test('forEach mock function', () => {
    forEach([10, 11, 12], mockCB);
  
    // The mock function was called twice
    expect(mockCB.mock.calls).toHaveLength(3);
  
    // The first argument of the first call to the function was 0
    expect(mockCB.mock.calls[0][0]).toBe(10);
  
    // The first argument of the second call to the function was 1
    expect(mockCB.mock.calls[1][0]).toBe(11);
  
    // The return value of the first call to the function was 52
    expect(mockCB.mock.results[0].value).toBe(52);
    console.log(mockCB.mock.results)
    // The return value of the first call to the function was 53
    expect(mockCB.mock.results[0].value).toBe(53);
    // The return value of the first call to the function was 54
    expect(mockCB.mock.results[0].value).toBe(54);
  });