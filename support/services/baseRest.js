import http from "k6/http";

export class restService {
  constructor(base_uri) {
    (this.base_uri = base_uri), this.response;
  }
  getResponse() {
    return this.response;
  }

  buildOptions(headers = {}, params = {}) {
    return {
      headers: Object.assign(
        {
          "Content-Type": "application/json",
        },
        headers
      ),
    };
  }

  post(endpoint, body, headers = {}, params = {}) {
    let uri = this.base_uri + endpoint;
    const options = this.buildOptions(headers, params);
    return http.post(uri, JSON.stringify(body), options);
  }

  get(endpoint) {
    let uri = this.base_uri + endpoint;
    return http.get(uri);
  }
}
