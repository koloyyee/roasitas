import gql from 'graphql-tag';

export const NEWS_QUERY = gql `
    query NewsQuery($search:String){
        allNews(search: $search){
            edges{
                node{
                    slug
                    headline
                    newsContent
                    image
                    writer{
                        username
                    }
                    pubDate
                }
            }
        }
    }
`

export const NEWS_CREATE_MUTATION = gql `
    mutation NewsCreateMutation($input: NewsInputType!){
        newsCreate(input :$input){
            news{
                slug
            }
        }
    }
`

export const NEWS_DELETE_MUTATION = gql `
    mutation NewsDeleteMutation($id: ID!){
        newsDelete(id :$id){
                ok
        }
    }
`
