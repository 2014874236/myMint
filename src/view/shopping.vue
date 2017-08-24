<template>
	<div class="shopping">
		<mt-header title="购物车">
		    <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
		</mt-header>
		<div class="emptyShopping">
			<p>你的购物车没有任何商品</p>
		</div>
		<NavBar></NavBar>
	</div>
</template>
<script>
	// 底部导航
	import NavBar from '@/view/navBar'
	import Login from '@/view/login'
	export default{
		data(){
			return{

			}
		},
		components:{
			NavBar
		},
		computed:{
			loginStatus(){
				return this.$store.state.loginStatus;
			}
			
		},
		mounted:function(){
			// 未登录状态重定向到登录页面
			if(!this.loginStatus){
				this.$router.push({path:'/login',component:Login})
			}
			console.log('tai',this.loginStatus) 
			console.log(0)
		},
		methods:{
			goBack:function(){
				this.$router.go(-1);
			},
		}
	}
</script>
<style>
	/*头部*/
	.shopping .mint-header{
		background-color:#1b1b20;
		color: #fff;
		font-size: 0.8rem;
		z-index: 100;
		height: 2rem;
		line-height: 2.5rem;
	}
	/*返回按钮*/
	.shopping button,.shopping button label{
		cursor:pointer;
		height: 1.7rem;
	}
	.shopping .mintui{
		font-size: 0.8rem;
	}
	.shopping .emptyShopping p{
		color: #999;
		font-size: 0.7rem;
		width: 100%;
		text-align: center;
	}
</style>