import request from '@/utils/request.js'

//获取文章分类
export const articleCategoryListService=()=>{
    return request.get('/category')
}

//添加文章分类
export const articleAddCategoryService=(categoryData)=>{
    return request.post('/category',categoryData)
}

//更新文章分类
export const articleUpdateCategoryService=(categoryData)=>{
    return request.put('/category',categoryData)
}

//删除文章分类
export const articleDeleteCategoryService=(id)=>{
    return request.delete('/category?id='+id)
}