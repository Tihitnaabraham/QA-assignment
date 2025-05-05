const signup = require("./signup");
test("Valid Email Format",()=> {
expect(signup("tihitnaabraham@gmail.com")).toBe(true);});

test("Valid Password",()=>{
    expect(signup("titi123")).toBe(true);});
