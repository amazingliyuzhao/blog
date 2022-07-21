import http from '../utils/request/index';
import { articleMsg } from './article.type';
export * from './article.type';

export default class ArticleApi {
  static async getArticleList() {
    return await http.reqGet<articleMsg>(`/article-list`);
  }

  static async addArticle() {
    return await http.post(`/add-article`);
  }
}
