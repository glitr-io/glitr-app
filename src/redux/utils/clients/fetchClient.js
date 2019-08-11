class FetchClient {
    constructor() {
        const methods = ['get', 'post', 'put', 'delete'];
        methods.forEach((method) => {
            this[method] = (url, data, headers) =>
                fetch(url, { // eslint-disable-line
                    method: method.toUpperCase(),
                    // mode: 'no-cors',
                    body: typeof data === 'string'
                        ? data
                        : JSON.stringify(data),
                    headers: new Headers({ // eslint-disable-line
                        'Content-Type': 'application/json',
                        // 'Access-Control-Allow-Origin': '*',
                        ...headers
                    })
                }).then(response => response.json());
        });
    }
}

const client = new FetchClient();

export default client;
