<template>
	<div class="home">
		<header>
			<div class="title">醉品商城</div>
			<div class="search">
				<mt-search v-model="value" cancel-text="取消" placeholder="搜索">
  					<!-- <mt-cell v-for="item in result" :title="item.title" :value="item.value"></mt-cell> -->
				</mt-search>
			</div>
			<div class="icon">
				<i class="fa fa-bars" aria-hidden="true"></i>
			</div>
		</header>
		<section class="swipe">
			<mt-swipe :auto="4000">
				<mt-swipe-item v-for="img in imgs">
					<img v-lazy="img">
				</mt-swipe-item>
				<!-- <mt-swipe-item>2</mt-swipe-item>
				<mt-swipe-item>3</mt-swipe-item> -->
			</mt-swipe>
		</section>
		<section class="part1">
			<div class="text-content">
				<i class="fa fa-check-circle-o check-icon" aria-hidden="true"></i>
				<span class="text">全场商品90天保价</span>
			</div>
			<div  class="text-content">
				<i class="fa fa-check-circle-o check-icon" aria-hidden="true"></i>
				<span class="text">30天无忧退换货</span>
			</div>
			<div  class="text-content">
				<i class="fa fa-check-circle-o check-icon" aria-hidden="true"></i>
				<span class="text">满59元免运费</span>
			</div>
			<!-- <div  class="text-content">
				<i class="fa fa-check-circle-o check-icon" aria-hidden="true"></i>
				<span class="text">2000城市货到付款</span>
			</div> -->
		</section>
		<section class="part2">
			<span>
				<img src="../assets/img/4.png">
			</span>
			<span>
				<img src="../assets/img/5.png">
			</span>
		</section>
	</div>
</template>
<script>
	import img1 from '../assets/img/1.jpg'
	import img2 from '../assets/img/2.jpg'
	import img3 from '../assets/img/3.jpg'
	export default{
		data(){
			return {
				value:'',
				imgs:[img1,img2,img3]
			}
		},
		methods:{
			
		}
	}
	
</script>
<style >

	/*标题、搜索框、bars*/
	.home header{
		width: 100%;
		height: 3rem;
		background: #ff3600;
		text-align: center;
	}
	.home header .title{
		float: left;
		font-size: 1.5rem;
		color: #fff;
		text-align: center;
		line-height: 3rem;
		margin-left: 0.3rem;
		font-family: "华文行楷";
		width: 30%;
	}
	.home header .search{
		float: left;
		width: 50%;
	}
	.home header .search input{
		font-size: 0.1rem;
	}
	.home .mint-search{
		height: 100%;
	}
	.home .mint-searchbar-inner{
		height: 20px;
		margin-top: 2px;
	}
	.home .search .mint-searchbar{
		background-color: #ff3600;
		padding-right: 0px;
	}
	.home header .search .mint-searchbar-cancel{
		color: #fff;
		font-size: 0.1rem;
	}
	.home header .icon{
		width: 10%;
		float: right;
		margin-right: 10px;
		line-height: 3rem;
		text-align: center;
		font-size: 1rem;
		color: #fff;
	}

	/*轮播图*/
	.home .swipe{
		width: 100%;
		height: 11.2rem;
	}
	.home .swipe img{
		width: 100%;
		height: 100%;
	}
	.home .part1 .text-content{
		width: 33%;
		line-height: 3rem;
		text-align: center;
		float: left;
	}
	.home .part1 .text-content .text{
		font-size: 10px;
		color: #666;
	}
	.home .part1 .text-content .check-icon{
		color: #ff3600;
		font-weight: 200;
	}



	@media screen and (min-width: 768px) {
		.home header .title{
			font-size:2rem; 
		}
		.home header .search input{
			font-size: 1rem;
		}
		.home header .search .mint-searchbar-cancel{
			font-size: 1rem;
		}
    	.home .swipe{
			width: 100%;
			height: 19.5rem;
		}
		.home .part1 .text-content .text{
			font-size: 1rem;
		}
	}
</style>