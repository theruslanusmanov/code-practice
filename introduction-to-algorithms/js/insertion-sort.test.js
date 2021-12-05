const { insertionSort } = require('./insertion-sort');

describe('#insertionSort', function () {
    it('should sort', () => {
        expect(insertionSort([1, 3, 2])).toStrictEqual([1, 2, 3]);
    })
});