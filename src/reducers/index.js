/**
 * reduce数据存储设计原则
 * 第一级：模块，以大功能模块为标准（例如mall,cart,order）,一个模块为一个文件，并通过index导入
 * 第二级：页面，例如商城首页(mall/index)，商城分类（mall/category）,商城详情(mall/productDetail)
 * 第三级：资源，一个页面由多个资源组成，例如商城首页，由banner,推荐商品等组成。例如banner存储位置为：mall/index/banner
 */

import { combineReducers } from 'redux'
import mall from './mall'

export default combineReducers({
  mall
})