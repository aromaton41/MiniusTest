const minus = require('./minus')

// 1 - 2 เท่ากับ -1
test('1 - 2 เท่ากับ -1', ()=> {
    expect(minus(1,2)).toBe(-1);
  });

// 20 - 1 เท่ากับ 19
test('20 - 1 เท่ากับ 19' ,() =>{
    expect(minus(20,1)).toBe(19);
});

// 2 - 5 เท่ากับ -3 
test('2 - 5 เท่ากับ -3 ' ,() => {
    expect(minus(2,5)).toBe(-3);
});

// -1 - 1 เท่ากับ -2
test('-1 - 1 เท่ากับ -2 ' , () => {
    expect(minus(-1,1)).toBe(-2);
});

// -2 - -5 เท่ากับ 3
test('-2 - -5 เท่ากับ 3' , () =>{
    expect(minus(-2,-5)).toBe(3);
});