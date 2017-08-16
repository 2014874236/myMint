<template>
	<div class="navBar">
		<mt-tabbar v-model="selected" fixed="fixed">
		  	<mt-tab-item id="home">
		  		<p><i class="fa fa-home" aria-hidden="true"></i></p>
		   		<p>首页</p>
		 	 </mt-tab-item>
		  	<mt-tab-item id="classify">
		  		<p><i class="fa fa-th-large" aria-hidden="true"></i></p>
		    	<p>分类</p>
		  	</mt-tab-item>
		  	<mt-tab-item id="cart">
		  		<p><i class="fa fa-shopping-cart" aria-hidden="true"></i></p>
		    	<p>购物车</p>
		  	</mt-tab-item>
		  	<mt-tab-item id="user">
		  		<p><i class="fa fa-user-o" aria-hidden="true"></i></p>
		    	<p>我的</p>
		  	</mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				selected:'home',
				fixed:true
			}
		}
	} 
</script>
<style>
	.navBar p{
		font-size: 0.5rem;
		color: #555;
	}
	.navBar .mint-tabbar > .mint-tab-item.is-selected{
		background-color: #fafafa;
	}
	
	.navBar a.is-selected p{
		color: #ff3600;
	}
	.navBar div p{
		margin-top:5%;
	}
	.navBar div i{
		font-size: 1rem;
	}
</style>