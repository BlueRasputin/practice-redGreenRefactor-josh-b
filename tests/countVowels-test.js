const countVowels = require('../countVowels.js');


describe("vowelTest", function() {

    test("testing values which would break the function",
function () {
    expect (countVowels(null).toBe(-1));
}
)
    test("testing values which should pass",
    function() {
        expect (countVowels("Garden").toBe(2));
    }
    )
});


