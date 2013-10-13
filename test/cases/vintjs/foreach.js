describe('foreach function', function () {
    var arr = [1, 2, 3],
        obj = {a: 1, b: 1, c: 1},
        _this = Array,
        arr_result_item = [],
        arr_result_index = [],
        obj_result_index = [],
        obj_result_item = [];
    VintJS.forEach(arr, function (item, index) {
        arr_result_index.push(index);
        arr_result_item.push(item);
        var __this = this;
        it("Context should be window", function () {
            expect(__this).toBe(window);
        });
    });
    it('Array test', function () {
        expect(arr_result_index).toEqual([0, 1, 2]);
        expect(arr_result_item).toEqual([1, 2, 3]);
    });
    VintJS.forEach(obj, function (item, index) {
        obj_result_index.push(index);
        obj_result_item.push(item);
        var __this = this;
        it("Context should be Array", function () {
            expect(__this).toBe(_this);
        });
    }, _this);
    it('Object test', function () {
        expect(obj_result_index).toEqual(['a', 'b', 'c']);
        expect(obj_result_item).toEqual([1, 1, 1]);
    });
});