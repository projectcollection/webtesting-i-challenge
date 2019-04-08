const enhancer = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
    describe('succeed()', () => {
        it('should increment item enhancement', () => {
            expect(enhancer.succeed({
                name: "Poison Arrow",
                durability: 50,
                enhancement: 10
            })).toEqual({
                name: "Poison Arrow",
                durability: 50,
                enhancement: 11
            });
            expect(enhancer.succeed({
                name: "Poison Blade",
                durability: 90,
                enhancement: 19 
            })).toEqual({
                name: "Poison Blade",
                durability: 90,
                enhancement: 20
            });
        })

        it('should stay the same if enhancement is equal to 20', () => {
            expect(enhancer.succeed({
                name: "Poison Arrow",
                durability: 50,
                enhancement: 20
            })).toEqual({
                name: "Poison Arrow",
                durability: 50,
                enhancement: 20
            });
            expect(enhancer.succeed({
                name: "Poison Blade",
                durability: 90,
                enhancement: 20
            })).toEqual({
                name: "Poison Blade",
                durability: 90,
                enhancement: 20
            });
        })
    })

    describe('fail()', () => {
        it('should decrease durability by 5 if enhancement is less than 15', () => {
            expect(enhancer.fail({
                name: "Poison Arrow",
                durability: 50,
                enhancement: 10
            })).toEqual({
                name: "Poison Arrow",
                durability: 45,
                enhancement: 10
            });
            expect(enhancer.fail({
                name: "Poison Blade",
                durability: 95,
                enhancement: 14
            })).toEqual({
                name: "Poison Blade",
                durability: 90,
                enhancement: 14
            });
        })

        it('should decrease durability by 10 if enhancement is equal to or greater than 15', () => {
            expect(enhancer.fail({
                name: "Poison Arrow",
                durability: 50,
                enhancement: 15
            })).toEqual({
                name: "Poison Arrow",
                durability: 40,
                enhancement: 15
            });
            expect(enhancer.fail({
                name: "Poison Blade",
                durability: 95,
                enhancement: 16
            })).toEqual({
                name: "Poison Blade",
                durability: 85,
                enhancement: 16
            });
        })
    })

    describe('repair()', () => {
        it('should restore durability to 100', () => {
            expect(enhancer.repair({
                name: "Poison Blade",
                durability: 85,
                enhancement: 16
            })).toEqual({
                name: "Poison Blade",
                durability: 100,
                enhancement: 16
            })

            expect(enhancer.repair({
                name: "Poison Arrow",
                durability: 5,
                enhancement: 16
            })).toEqual({
                name: "Poison Arrow",
                durability: 100,
                enhancement: 16
            })
        })
    })

    describe('get()', () => {
        it('should should change item name to `[+enhancementVal] itemName` if enhancement is greater than 0', () => {
            expect(enhancer.get({
                name: "Poison Blade",
                durability: 100,
                enhancement: 16
            })).toEqual({
                name: "[+16] Poison Blade",
                durability: 100,
                enhancement: 16
            });

            expect(enhancer.get({
                name: "Poison Arrow",
                durability: 100,
                enhancement: 6
            })).toEqual({
                name: "[+6] Poison Arrow",
                durability: 100,
                enhancement: 6
            });
        });

        it('should return the same item without change if enhancement is equal to 0', () => {
            expect(enhancer.get({
                name: "Poison Blade",
                durability: 100,
                enhancement: 0
            })).toEqual({
                name: "Poison Blade",
                durability: 100,
                enhancement: 0
            });

            expect(enhancer.get({
                name: "Poison Arrow",
                durability: 100,
                enhancement: 0
            })).toEqual({
                name: "Poison Arrow",
                durability: 100,
                enhancement: 0
            });
        });
    })
})