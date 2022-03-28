
export class Attempts {

    private _counter: number = 0
    private _isCanInsert: boolean = true

    attemptsCounter(): Boolean {
        if (this._counter < 6) {
            this._counter++
            this._isCanInsert = true
        } else {
            this._isCanInsert = false
        }
        return this._isCanInsert
    }
}