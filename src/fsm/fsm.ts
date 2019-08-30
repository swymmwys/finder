export class FSM {
  private _state: any;
  private _states: {[key: string]: any};

  constructor({initialState, states}: {initialState: any, states: {[key: string]: any}}) {
    this._state = initialState;
    this._states = states;
  }

  performAction(action: any, ...payload: any[]): void {
    const stateActions = this._states[this._state];
    if (stateActions && stateActions[action]) {
      stateActions[action](this, ...payload);
    }
  }

  get state() {
    return this._state;
  }
  set state(state) {
    if (this._states[state]) {
      this._state = state;
    }
    else {
      throw new Error('There is no configuration for state ' + state);
    }
  }
}