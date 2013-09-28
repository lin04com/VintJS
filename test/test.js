/**
 * User: Vincent Ting
 * Date: 13-9-28
 * Time: 下午12:42
 */

(function () {

    describe("测试重置对象方法", function () {
        var later, origin = later = {name: 'Vincent', setName: function () {
        }};
        VintJS.restObj(origin);
        it("contains spec with an expectation", function () {
            expect(later.setName).toBeUndefined();
            expect(later.name).toBeUndefined();
        });
    });

}).call(window);