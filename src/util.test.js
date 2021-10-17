const util = require("./util")
// @ponicode
describe("util.getUserByToken", () => {
    test("0", async () => {
        await util.getUserByToken("~@")
    })

    test("1", async () => {
        await util.getUserByToken("}")
    })

    test("2", async () => {
        await util.getUserByToken("×")
    })

    test("3", async () => {
        await util.getUserByToken("{")
    })

    test("4", async () => {
        await util.getUserByToken(" ")
    })

    test("5", async () => {
        await util.getUserByToken(undefined)
    })
})

// @ponicode
describe("isAuth", () => {
    let inst

    beforeEach(() => {
        inst = new util.Response()
    })

    test("0", () => {
        let callFunction = () => {
            inst.isAuth("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.isAuth(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.isAuth("user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.isAuth("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.isAuth("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.isAuth(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("resolve", () => {
    let inst

    beforeEach(() => {
        inst = new util.Response()
    })

    test("0", async () => {
        await inst.resolve(() => "return callback value")
    })

    test("1", async () => {
        await inst.resolve(undefined)
    })
})
