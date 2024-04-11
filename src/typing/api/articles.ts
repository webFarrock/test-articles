export interface IArticle {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IArticleResponse extends IArticle {}

export interface IArticlesResponse extends Array<IArticle> {}
