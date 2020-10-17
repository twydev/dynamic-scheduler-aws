import Scheduler from "../dynamicScheduler"

describe('Smoke Test', () => {
    it('should initialize successfully', () => {
        const scheduler = new Scheduler();
        expect(scheduler.showConfigs()).toBeTruthy();
    })
})