describe('get keys function', function () {
    var obj1 = [1, 2, 3],
        obj2 = {a: 1, b: 2};
    it("Array test", function () {
        expect(VintJS.getKeys(obj1)).toEqual(['0', '1', '2']);
    });
    it("Object test", function () {
        expect(VintJS.getKeys(obj2)).toEqual(['a', 'b']);
    })
});