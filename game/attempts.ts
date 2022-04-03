
export class Attempts {

    private _counter: number = 0

    addAttemptToCounter() {
        this._counter++
    }

    getCount(): number {
        return this._counter
    }
}