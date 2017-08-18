<template>
	<div class="classify">
		<mt-header fixed title="全部产品分类">
		    <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
		</mt-header>
		<div class="search">
			<mt-search v-model="value"  cancel-text="取消"  placeholder="搜索您想要的产品"></mt-search>
		</div>
		<section class="tea" v-for="list in lists">
			<h3>{{ list.title }}</h3>
			<div>
				<ul>
					<li v-for="item in list.items">
						<p><img :src="item.img"></p>
						<p class="text">{{ item.text }}</p>
					</li>
					<div style="clear:both;"></div>
				</ul>
			</div>
		</section>
	</div>
</template>
<script>
	import {api} from '../global/api'
	export default{
		data(){
			return {
				value:'',
				lists:''
			}
		},
		mounted:function(){
			this.getData();
		},
		methods:{
			goBack:function(){
				this.$router.go(-1);
			},
			getData:function(){
				this.$http.get(api.classify).then((response) => {
					this.lists=response.data.data;
				})
			}
		}
	}
</script>
<style>
	.classify{
		background: #f4f4f4;
	}
	/*头部	*/
	.classify .mint-header{
		background-color:#1b1b20;
		color: #fff;
		font-size: 1rem;
		z-index: 100;
	}
	/*返回按钮*/
	.classify button,.classify button label{
		cursor:pointer;
	}
	/*搜索*/
	.classify .search{
		width: 80%;
		position: relative;
		top:50px;
		left: 10%;
		z-index: 1;
	}
	.classify .search .mint-search{
		width: 100%;
		height: 100%;
	}
	.classify .search .mint-search .mint-searchbar{
		background: #ededed;
	}
	.classify .search .mint-searchbar-cancel{
		font-size: 0.8rem;
	}
	/*茶品*/
	.classify .tea{
		position: relative;
		top:60px;
	}
	.classify .tea h3{
		width: 100%;
		font-weight: 500;
		line-height: 40px;
		color: #10181f;
		text-align: center;
		line-height: 60px;
	}
	.classify .tea ul{
		width: 100%;
		text-align: center;
		background: #fff;
	}
	.classify .tea ul li{
		float: left;
		width: 32.95%;
		list-style: none;
		border:1px solid #e0e0e0;
	}
	.classify .tea ul li:nth-child(3n-2){
		border-left: 0;
	}
	.classify .tea ul li:nth-child(3n){
		border-right: 0;
	}
	.classify .tea ul li:nth-child(3n-2){
		border-left: 0;
	}
	.classify .tea ul li p{
		width: 100%;
		text-align: center;
	}
	.classify .tea ul li .text{
		margin-bottom: 10%;
	}


	@media screen and (min-width: 768px) {
		.classify .mint-header{
			height: 50px;
			font-size: 1.5rem;
		}
		.classify .search{
			top:60px;
		}
	}
</style>