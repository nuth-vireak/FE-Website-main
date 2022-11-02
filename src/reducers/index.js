import {combineReducers} from 'redux'
const articlesReducer = () =>
{
    return [
        {title:"Project-1",date:"Friday 12, 2, 2019"},
        {title:"Project-2",date:"Sunday 1, 8, 2020"},
        {title:"Project-3",date:"Monday 4, 7, 2019"},
    ]
}
const selectArticleReducer = (selectedArticle = null,action) =>
{
    if(action.type === 'ARTICLE_SELECTED') return action.payload

    return selectedArticle
}
export default combineReducers(
    {
        article:articlesReducer,
        selectArticle: selectArticleReducer,
    })