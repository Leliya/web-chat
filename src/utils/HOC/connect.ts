import { BlockClass } from '../Block';
import isEqual from '../utility/isEqual';

export function connect(mapStateToProps: (state: Indexed) => Indexed) {
  return function <P extends object>(Component: BlockClass<P>) {
    return class extends Component {
      public static componentName: string =
        Component.componentName || Component.name;
      constructor(props: P) {
        super({ ...props, ...mapStateToProps(window.store.getState()) });
      }

      __onChangeStoreCallback = (prevState: AppState, nextState: AppState) => {
        const prevPropsFromState = mapStateToProps(prevState) as P;
        const nextPropsFromState = mapStateToProps(nextState) as P;

        if (!isEqual(prevPropsFromState, nextPropsFromState)) {
          this.setProps(nextPropsFromState);
        }
      };

      componentDidMount(props: P) {
        window.store.on('changed', this.__onChangeStoreCallback);
      }

      componentWillUnmount() {
        super.componentWillUnmount();
        window.store.off('changed', this.__onChangeStoreCallback);
      }
    };
  };
}
