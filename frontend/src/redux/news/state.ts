

export interface IWriter {
    name:string
}

export interface INews{
    headline :string,
    news_content:string,
    writer :IWriter,
    image: string,
    pub_date: string
}

export interface INewsState{
    news: INews[]
}