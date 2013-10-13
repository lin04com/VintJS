describe('rest object function', function () {
    var later, origin = later = {name: 'Vincent', setName: function () {
    }};
    VintJS.restObj(origin);
    it("Both should be undefined", function () {
        expect(later.setName).toBeUndefined();
        expect(later.name).toBeUndefined();
    });
});