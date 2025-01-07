import request from '@/utils/request.js'

export const articleCategoryListService=()=>{
    return request.get('/category')
}