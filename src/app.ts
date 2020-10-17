export interface Base {
    execute(): Result;
}

export type SuccessResult = {
    status: 'Success',
    body: any,
}

export type FailureResult = {
    status: 'Failure',
    error: any,
}

export type Result = SuccessResult | FailureResult;

export default class HelloWorld implements Base {

    getRandomBoolean() {
        return (Math.floor(Math.random() * Math.floor(2))) === 1
    }

    execute(): Result {
        if (this.getRandomBoolean()) {
            return {
                status: 'Success',
                body: null,
            }
        }

        return {
            status: 'Failure',
            error: null,
        }
    }
} 