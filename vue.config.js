module.exports={
  devServer:{
    //配置反向代理
    proxy:{
      //当地址中有api的时候就会触发代理机制
      '/api':{
        target:'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true // 是否跨域
      }
    }
  }
}