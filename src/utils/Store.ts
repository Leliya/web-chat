import EventBus from './EventBus';
import cloneDeep from './utility/cloneDeep';

import set from './utility/set';

export type Dispatch<State> = (
  nextStateOrAction: Partial<State> | Action<State>,
  payload?: unknown
) => void;

export type Action<State> = (
  dispatch: Dispatch<State>,
  state: State,
  payload: unknown
) => void;

class Store<State extends Indexed> extends EventBus {
  private state: State = {} as State;

  constructor(defaultState: State) {
    super();

    this.state = defaultState;
    this.set(defaultState, '');
  }

  public getState() {
    return this.state;
  }

  public set(nextState: Partial<State>, path: string) {
    const prevState = cloneDeep(this.state);
    set(this.state, path, nextState);

    this.emit('changed', prevState, this.state);
  }

  dispatch(nextStateOrAction: Partial<State> | Action<State>, payload?: unknown) {
    if (typeof nextStateOrAction === 'function') {
      nextStateOrAction(this.dispatch.bind(this), this.state, payload);
    } else {
      this.set({ ...nextStateOrAction }, '');
    }
  }
}

export default Store;
