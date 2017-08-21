<template>
	<div class="dragonDetail">
		<mt-header title="顶峰 开化龙顶 2017明前茶 绿茶  50g 黄罐单罐">
		    <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
		</mt-header>
	</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
		methods:{
			goBack:function(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style>
	/*头部*/
	.dragonDetail .mint-header{
		background-color:#1b1b20;
		color: #fff;
		font-size: 1rem;
		z-index: 100;
	}
	/*返回按钮*/
	.dragonDetail button,.dragonDetail button label{
		cursor:pointer;
		height: 1.7rem;
	}
</style>