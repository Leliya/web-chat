enum METHODS {
  GET='GET',
  POST='POST',
  PUT='PUT',
  DELETE='DELETE',
};

function queryStringify(data: Record<string, any>): string {
  const arr: string[] = Object.keys(data);
  let str = '';
  arr.forEach((item) => {
    str = str.concat('&', `${item}=${data[item].toString()}`);
    return str;
  });
  const str2 = '?' + str.slice(1);
  return str2;
}
type Options = {
  method?: string;
  data?: Record<string, any>;
  headers?: Record<string, string>;
  timeout?: number;
};
type Method = (url: string, options?: Options) => Promise<XMLHttpRequest>;

export class HTTPTransport {
  get: Method = (url: string, options = {}) => {
    let query;
    if (options.data) {
      query = `${url}${queryStringify(options.data)}`;
    } else {
      query = url;
    }
    return this.request(query, { ...options, method: METHODS.GET });
  };
  post = (url: string, options = {}) => {
    console.log(url);
    return this.request(url, { ...options, method: METHODS.POST });
  };
  put = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };
  delete = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (url: string, options: Options): Promise<XMLHttpRequest> => {
    console.log(url);
    //console.log(options)
    const { method, data, headers, timeout } = options;
    console.log(options);
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      if (!method) {
        xhr.open('GET', url);
      } else {
        xhr.open(method, url);
      }
      if (headers) {
        console.log(headers);
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
