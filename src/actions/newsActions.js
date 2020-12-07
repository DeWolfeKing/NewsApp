export const getNews = () => ({
    type : 'GET_NEWS'

})
export const setNews = (news) => ({
    type : 'SET_NEWS',
    payload : {
        articles : news.articles,
        totalResults : news.totalResults

    }

})
export const getLoadNews = () => ({
    type : 'LOAD_NEWS'

})
export const setLoadNews = (news) => ({
    type : 'SET_LOAD_NEWS',
    payload : {
        articles : news.articles
    }
})


