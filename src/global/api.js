import config from '../../config'

let url={
	ctxPath: "/dist", //node服务dist目录
	//staticPath:config.dev.staticPath,       //开发环境静态资源路径  
    staticPath: process.env.NODE_ENV !== 'development' ?  config.build.staticPath: config.dev.staticPath
}

export const api={
	'home':url.staticPath+'dataJson/home.json',
	'classify':url.staticPath+'dataJson/classify.json'
}