<template>
	<div class="login">
		<mt-header title="账户登录">
		  	<router-link to="/" slot="left">
		    	<mt-button icon="back">返回</mt-button>
		  	</router-link>
		  	<router-link to="/register" slot="right">
		  		<mt-button >注册</mt-button>
		  	</router-link>
		</mt-header>
		<!-- 验证码 -->
		<!-- <div class="img_change_img">
            <img v-show="captchaCodeImg" :src="captchaCodeImg">
            <div class="change_img" @click="getCaptchas">
                <p>看不清</p>
                <p>换一张</p>
            </div>
        </div> -->
	</div>
</template>
<script>
	// import {api} from '../global/api'
	export default{
		data(){
			return {
				// captchaCodeImg:''
			}
		},
		mounted:function(){
			// this.getCaptchas();
		},
		methods:{
			// getCaptchas:function(){
			// 	this.$http.get(api.captchas).then((response) => {
			// 		console.log("图片验证码",response);
			// 	},() => {
			// 		console.log("请求失败");
			// 	})
			// }
		}
	}
</script>