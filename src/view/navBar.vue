<template>
	<div class="navBar">
		<mt-tabbar v-model="selected" class="nav" fixed="fixed">
		  	<mt-tab-item id="home">
		  		<router-link to="/home">
			  		<p><i class="fa fa-home" aria-hidden="true"></i></p>
			   		<p>首页</p>
			   	</router-link>
		 	 </mt-tab-item>
		  	<mt-tab-item id="classify">
		  		<router-link to="/classify">
			  		<p><i class="fa fa-th-large" aria-hidden="true"></i></p>
			    	<p>分类</p>
		    	</router-link>
		  	</mt-tab-item>
		  	<mt-tab-item id="cart">
		  		<router-link to="/shopping">
			  		<p><i class="fa fa-shopping-cart" aria-hidden="true"></i></p>
			    	<p>购物车</p>
			    </router-link>
		  	</mt-tab-item>
		  	<mt-tab-item id="user">
		  		<router-link to="/personal">
			  		<p><i class="fa fa-user-o" aria-hidden="true"></i></p>
			    	<p>我的</p>
			    </router-link>
		  	</mt-tab-item>
		</mt-tabbar>
		<router-view></router-view>
	</div>
</template>
<script>
	import store from '../store'
	export default{
		data(){
			return{
				selected:'',
				fixed:true
			}
		}
	} 
</script>
<style>
	.navBar .nav p{
		font-size: 0.5rem;
		color: #555;
		margin-top:5%;
	}
	.navBar .mint-tabbar > .mint-tab-item.is-selected{
		background-color: #fafafa;
	}
	.navBar .nav i{
		font-size: 1rem;
	}
	.navBar a{
		text-decoration: none;
	}
	.navBar a.router-link-active p{
		color: #ff3600;
	}
</style>