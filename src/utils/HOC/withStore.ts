import { BlockClass } from '../Block';
import Store from '../Store';
import isEqual from '../utility/isEqual';

type WithStateProps = { store: Store<AppState> };

export function withStore<P extends WithStateProps>(
  WrappedBlock: BlockClass<P>
) {
  return class extends WrappedBlock {
    public static componentName =
      WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, store: window.store });
    }

    __onChangeStoreCallback = () => {
      if (!isEqual(this.props.store, window.store)) {
        this.setProps({ ...this.props, store: window.store });
      }
      return;
    };

    componentDidMount(props: P) {
      window.store.on('changed', this.__onChangeStoreCallback);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      window.store.off('changed', this.__onChangeStoreCallback);
    }
  };
}
