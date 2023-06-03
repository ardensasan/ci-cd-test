import { add } from "./math";

describe('test', () => {
    it('should add two number correctly', () => {
        expect(add(1, 1)).toBe(2)
    })
})