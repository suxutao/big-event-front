import request from '@/utils/request.js'

//获取文章分类列表
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

//获取文章列表
export const articleListService=(params)=>{
    return request.get('/article',{params:params})
}

//添加文章
export const articleAddService=(articleData)=>{
    return request.post('/article',articleData)
}

//更新文章分类
export const articleUpdateService=(articleData)=>{
    return request.put('/article',articleData)
}

//删除文章
export const articleDeleteService=(id)=>{
    return request.delete('/article?id='+id)
}