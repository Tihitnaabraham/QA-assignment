const preventDefault = require("./login");
test("Valid Email Format",()=> {
expect(login("tihitnaabraham@gmail.com")).toBe(true);});

test("Valid Password",()=>{
    expect(signup("titi123")).toBe(true);});

