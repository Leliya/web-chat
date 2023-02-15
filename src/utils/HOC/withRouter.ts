//import { BlockClass, CoreRouter } from 'core';

import { BlockClass } from '../Block';
import { RouterInterface } from '../Router/RouterInterface';

type WithRouterProps = { router: RouterInterface };

export function withRouter<P extends WithRouterProps>(
  WrappedBlock: BlockClass<P>
) {
  return class extends WrappedBlock {
    public static componentName: string =
      WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, router: window.router });
    }
  } as unknown as BlockClass<Omit<P, 'router'>>;
}
