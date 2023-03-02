enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const queryStringify = (data: Indexed): string =>
  '?' +
  Object.entries(data)
    .map(([key, value]) => `${key}=${value.toString()}`)
    .join('&');

type Options = {
  method?: METHODS;
  data?: Indexed;
  headers?: Record<string, string>;
  timeout?: number;
};
type RequestFn = (url: string, options?: Options) => Promise<XMLHttpRequest>;

export class HTTPTransport {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  get: RequestFn = (url, options) => {
    let query;
    if (options?.data) {
      query = `${this.url}${url}${queryStringify(options.data)}`;
    } else {
      query = `${this.url}${url}`;
    }
    return this.request(query, { ...options, method: METHODS.GET });
  };
  post: RequestFn = (url, options) => {
    return this.request(`${this.url}${url}`, {
      ...options,
      method: METHODS.POST,
    });
  };
  put: RequestFn = (url, options) => {
    return this.request(`${this.url}${url}`, {
      ...options,
      method: METHODS.PUT,
    });
  };
  delete: RequestFn = (url, options) => {
    return this.request(`${this.url}${url}`, {
      ...options,
      method: METHODS.DELETE,
    });
  };

  request = (url: string, options: Options): Promise<XMLHttpRequest> => {
    const { method, data, headers, timeout } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      if (!method) {
        xhr.open('GET', url);
      } else {
        xhr.open(method, url);
      }
      xhr.withCredentials = true;
      xhr.responseType = 'json';
      if (headers) {
        Object.entries(headers).map(([key, value]) =>
          xhr.setRequestHeader(key, value)
        );
      }
      if (timeout) {
        xhr.timeout = timeout;
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
