function insertionSort(a) {
    for (let j = 2; j < a.length; j++) {
        const key = a[j];
        let i = j - 1;
        while (i > 0 && a[i] > key) {
            a[i + 1] = a[i];
            i = i - 1;
        }
        a[i + 1] = key;
    }
    return a;
}

module.exports = { insertionSort };