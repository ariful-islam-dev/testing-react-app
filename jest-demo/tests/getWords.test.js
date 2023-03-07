const {getWords}=require('../src/getWords')

test('Should throw an error if it is not string', ()=>{
    expect(()=>getWords(100)).toThrow();
    expect(()=>getWords(true)).toThrow();
    expect(()=>getWords(false)).toThrow();
    expect(()=>getWords(['word'])).toThrow();
    expect(()=>getWords({name: 'words'})).toThrow();
})

test('Should return the same string if the argument is a word', ()=>{
    expect(getWords('Ariful')).toBe('Ariful')
    expect(getWords('VSCode')).toBe('VSCode')
    expect(getWords('Javascript')).toBe('Javascript')
    expect(getWords('Jest')).toBe('Jest')
})

test('should return the array of string ', ()=>{
    const words1 = getWords('Ariful Islam');
    expect(words1).toHaveLength(2)
    expect(words1).toContain('Islam');

    const words2 = getWords('Test Driven Development');
    expect(words2).toHaveLength(3);
    expect(words2).toContain('Test');
})