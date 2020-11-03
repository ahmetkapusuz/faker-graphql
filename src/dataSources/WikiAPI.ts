// import { WikiAPIContext } from "../common/types";
// import { WIKI_API_URL } from "../config";
// import { RESTDataSource } from "apollo-datasource-rest";
// import { GetArticleResponse } from "../common/types";

// class WikiAPI extends RESTDataSource<WikiAPIContext> {
//   constructor() {
//     super();
//     this.baseURL = WIKI_API_URL;
//   }

//   async getArticle(pageName: string): Promise<GetArticleResponse> {
//     return this.get(`${WIKI_API_URL}&page=${pageName}`);
//   }
// }

// export default WikiAPI;
