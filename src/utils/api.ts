enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const queryStringify = (data: Record<string, any>): string =>
  '?' +
  Object.entries(data)
    .map(([key, value]) => `${key}=${value.toString()}`)
    .join('&');

type Options = {
  method: METHODS;
  data?: Record<string, any>;
  headers?: Record<string, string>;
  timeout?: number;
};
type RequestFn = (url: string, options?: Options) => Promise<XMLHttpRequest>;

export class HTTPTransport {
  get: RequestFn = (url, options) => {
    let query;
    if (options?.data) {
      query = `${url}${queryStringify(options.data)}`;
    } else {
      query = url;
    }
    return this.request(query, { ...options, method: METHODS.GET });
  };
  post: RequestFn = (url, options) => {
    console.log(url);
    return this.request(url, { ...options, method: METHODS.POST });
  };
  put: RequestFn = (url, options) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };
  delete: RequestFn = (url, options) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
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
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
