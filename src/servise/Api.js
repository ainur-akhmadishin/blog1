export default class Api {
  BASEURL = 'https://conduit.productionready.io/api/';

  finalUrl = (endUrl, param = '') => `${this.BASEURL}${endUrl}?${param}`;

  async request(url, method = 'GET', value = null) {
    const res = await fetch(url, this.getOptions(method, value));
    return res;
  }


  getOptions = (method, value) => {
    if (method === 'POST') {
      return {
        method,
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ value }),
      };
    }
    return {
      method,
    };
  };

async getArticles (page = 1){
	
	const offset = (page-1)*20
	const endUrl = this.finalUrl('articles',`offset=${offset}`);
	const res = await this.request(endUrl);
	const json = await res.json();
	return json
	
}

async getArticle(slug = ''){
	const endUrl = this.finalUrl(`articles/${slug}`);
	const res = await this.request(endUrl);
	const json = await res.json();
	return json;
	
}


}
