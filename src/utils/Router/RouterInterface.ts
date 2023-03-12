export interface RouterInterface {
  routes: Record<string, () => void>;

  start(): void;

  use(path: string, callback: () => void): RouterInterface;

  go(path: string): void;

  back(): void;

  forward(): void;
}
