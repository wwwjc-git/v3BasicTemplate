/**
 * 引用环境变量配置的变量
 */
 module.exports = {
    // 标题
    Title: 'baseTemplate',
    /**
     * Api 根目录
     */
    ApiRoot: process.env.VUE_APP_API_ROOT,
  
    /**
     * 资源服务根目录（图片，视频等)
     */
    ResRoot: process.env.VUE_APP_API_ROOT,
  
    /**
     * 文件上传的接口路径
     */
    UploadUrl: `${process.env.VUE_APP_API_ROOT}/file`
  }
  