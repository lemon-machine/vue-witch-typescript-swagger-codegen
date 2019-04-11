declare var Vue
declare var  Vuetify
declare var VueRouter
/**
 * 全局变量Vue， 从浏览器script引入
 * 让代码识别出vue文件是module， 解决提示问题
 */

declare module "*.vue"{
    export default Vue;
}