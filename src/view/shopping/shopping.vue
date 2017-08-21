<template>
	<div class="shopping">
		<mt-header title="购物车">
		    <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
		</mt-header>
		<div class="emptyShopping">
			<p>你的购物车没有任何商品</p>
		</div>
	</div>
</template>
<script>
	import store from './../store'
	export default{
		data(){
			return{

			}
		},
		mounted:function(){
			//wei denglu chongdingx login
			if(!store.state.loginStatus){
				this.$route.push()
			}
			console.log('tai',store.state.loginStatus) 
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
		font-size: 1rem;
		z-index: 100;
	}
	/*返回按钮*/
	.shopping button,.shopping button label{
		cursor:pointer;
	}
	.shopping .emptyShopping p{
		color: #999;
		font-size: 1rem;
		width: 100%;
		text-align: center;
	}
	@media screen and (min-width: 768px) {
		/*头部*/
		.shopping .mint-header{
			font-size: 1.5rem;
			height: 50px;
		}
	}
</style>