import EventBus from './EventBus';
import { nanoid } from 'nanoid';
import Handlebars from 'handlebars';
import isEqual from './utility/isEqual';
import merge from './utility/merge';
import cloneDeep from './utility/cloneDeep';

type Events = Values<typeof Block.EVENTS>;

export interface BlockClass<P extends object> extends Function {
  new (props: P): Block<P>;
  componentName: string;
}

export default class Block<P extends object> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_CWU: 'flow:component-will-unmount',
    FLOW_RENDER: 'flow:render',
  } as const;

  static getComponentName: string = this.constructor.name;

  public id: string = nanoid(6);

  protected _element: Nullable<HTMLElement> = null;
  protected props: Readonly<P>;
  protected children: { [id: string]: Block<P> } = {};

  eventBus: () => EventBus<Events>;

  /**
   * @deprecated
   */
  protected state: Record<string, any> = {};
  refs: { [key: string]: Block<P> } = {};

  public constructor(props: P) {
    const eventBus = new EventBus<Events>();

    this.getStateFromProps(props);

    this.props = props;

    this.state = {};
    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT, this.props);
  }

  _checkInDom() {
    const elementInDOM = document.contains(this._element);

    if (elementInDOM) {
      setTimeout(() => this._checkInDom(), 1000);
      return;
    }

    this.eventBus().emit(Block.EVENTS.FLOW_CWU, this.props);
  }

  _registerEvents(eventBus: EventBus<Events>) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CWU, this._componentWillUnmount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    this._element = this._createDocumentElement('div');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected getStateFromProps(props: P): void {
    this.state = {};
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props);
  }

  _componentDidMount(props: P) {
    this._checkInDom();
    this.componentDidMount(props);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  componentDidMount(props: P) {}

  _componentWillUnmount() {
    this.eventBus().destroy();
    this.componentWillUnmount();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  componentWillUnmount() {}

  _componentDidUpdate(oldProps: P, newProps: P) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(oldProps?: P, newProps?: P): boolean {
    return true;
  }

  setProps = (nextPartialProps: Partial<P>) => {
    if (!nextPartialProps) {
      return;
    }

    const prevProps = cloneDeep(this.props);
    const nextProps = merge(this.props, nextPartialProps) as P;
    this.eventBus().emit(Block.EVENTS.FLOW_CDU, prevProps, nextProps);
  };

  setState = (nextState: any) => {
    if (!nextState || isEqual(this.state, nextState)) {
      return;
    }
    return merge(this.state, nextState);
  };

  get element() {
    return this._element;
  }

  _render() {
    const templateString = this.render();
    const fragment = this.compile(templateString, { ...this.props });

    this._removeEvents();
    const newElement = fragment.firstElementChild!;

    this._element!.replaceWith(newElement);

    this._element = newElement as HTMLElement;
    this._addEvents();
  }

  protected render(): string {
    return '';
  }

  getContent(): HTMLElement {
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      setTimeout(() => {
        if (
          this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
        ) {
          this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        }
      }, 100);
    }

    return this.element!;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _makePropsProxy(props: any) {}

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  _removeEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener);
    });
  }

  _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.addEventListener(event, listener);
    });
  }

  compile(templateString: string, context: any): DocumentFragment {
    const fragment = this._createDocumentElement(
      'template'
    ) as HTMLTemplateElement;

    const template = Handlebars.compile(templateString);
    const htmlString = template({
      ...context,
      children: this.children,
      refs: this.refs,
    });

    fragment.innerHTML = htmlString;
    Object.entries(this.children).forEach(([id, component]) => {
      const stub = fragment.content.querySelector(`[data-id="${id}"]`);

      if (!stub) {
        return;
      }

      const stubChilds = stub.childNodes.length ? stub.childNodes : [];
      const content = component.getContent();

      stub.replaceWith(content);
      const layoutContent = content.querySelector('[data-layout="1"]');

      if (layoutContent && stubChilds.length) {
        layoutContent.append(...stubChilds);
      }
    });
    return fragment.content;
  }

  toggleDisplayElement() {
    return;
  }

  show(display: string) {
    this.getContent().style.display = display;
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}
