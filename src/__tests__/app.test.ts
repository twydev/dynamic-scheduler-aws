import HelloWorld, { Result, SuccessResult } from "../app"

describe('Smoke Test', () => {
    const app = new HelloWorld();

    const isSuccessful = (result: Result): result is SuccessResult => {
        return (result as SuccessResult).body !== undefined;
    }

    it('should return success or failure result', () => {
        const result = app.execute();
        if (isSuccessful(result)) {
            expect(result.status).toEqual('Success');
        } else {
            expect(result.status).toEqual('Failure');
        }
    })
})