/**
 * reduce数据存储设计原则
 * 第一级：模块，以大功能模块为标准（例如mall,cart,order）,一个模块为一个文件，并通过index导入
 * 第二级：资源，一个模块由多个资源组成，例如商城首页，由banner,推荐商品等组成。例如banner存储位置为：mall/banner
 */

import { combineReducers } from 'redux'
import mall from './mall'
import cart from './cart'
import user from './user'
import ui from './ui'
import community from './community'

export default combineReducers({
  mall,
  cart,
  user,
  ui,
  community
})