export default class ApiService {
  constructor(url) {
    this.baseURL = url;
  }

  query(route, params) {
    return fetch(`${this.baseURL}${route}?${params}`);
  }
}
