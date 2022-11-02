export const selectArticle = (article) =>
{
    //return and action
    return{
        type: 'ARTICLE_SELECTED',
        payload: article
    }

}