<template>
	<div class="home">
		<header>
			<div class="title">醉品商城</div>
			<div class="search">
				<mt-search v-model="value"  cancel-text="取消"  placeholder="搜索您想要的产品"></mt-search>
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
			<div style="clear:left;"></div>
		</section>
		<section class="part2">
			<div class="part2-content">
				<div class="part2-img">
					<p>
						<img src="../assets/img/4.png">
					</p>
					<p>
						<img src="../assets/img/5.png">
					</p>
					<div style="clear:left;"></div>
				</div>
			</div>
		</section>
		<section class="part3">
			<h3>8大热销茶叶品类</h3>
			<p>总有你想不到的低价</p>
			<div v-for="item in list" class="list-img">
				<img v-lazy="item">
			</div>
		</section>
		<!-- 人气新品 -->
		<section class="part4">
			<div class="part4-content">
				<div class="newProducts">
					<h3>{{ products.title }}</h3>
					<p class="text">{{ products.note }}</p>
					<div class="product" v-for="(product,index) in products.data" @click="handleSelected(index)">
						<!-- <router-link :to="{ name:dragonDetail,params:{ id:index } }"> -->
							<!-- <div> -->
								<!-- <img src="../assets/img/14.jpg"> -->
								<img :src=product.img>
								<p class="product-p1">{{ product.bigContent }}</p>
								<p class="product-p2">
									<span v-html="product.smallContent"></span>
									<span class="money"><i class="fa fa-jpy" aria-hidden="true"></i>{{ product.price.toFixed(2) }}</span> 
									<!-- 保留两位小数点  -->
								</p>
							<!-- </div> -->
						<!-- </router-link> -->
					</div>
				</div>
			</div>
		</section>
		<NavBar></NavBar>
	</div>
</template>
<script>
	import img1 from '../assets/img/1.jpg'
	import img2 from '../assets/img/2.jpg'
	import img3 from '../assets/img/3.jpg'
	import img6 from '../assets/img/6.jpg'
	import img7 from '../assets/img/7.jpg'
	import img8 from '../assets/img/8.jpg'
	import img9 from '../assets/img/9.jpg'
	import img10 from '../assets/img/10.jpg'
	import img11 from '../assets/img/11.jpg'
	import img12 from '../assets/img/12.jpg'
	import img13 from '../assets/img/13.jpg'
	// import img14 from '../assets/img/14.jpg'
	// import img15 from '../assets/img/15.jpg'
	// import img16 from '../assets/img/16.jpg'
	// import img17 from '../assets/img/17.jpg'
	// import img18 from '../assets/img/18.jpg'
	// import img19 from '../assets/img/19.jpg'
	// 底部导航
	import NavBar from '@/view/navBar'
	import DragonDetail from '@/view/dragonDetail'
	import Login from '@/view/login'

	import {api} from '../global/api'
	export default{
		data(){
			return {
				value:'',
				// 图片轮播
				imgs:[img1,img2,img3],
				// 8大热销茶叶品类
				list:[img6,img7,img8,img9,img10,img11,img12,img13],
				// 人气新品
				// Img:[img14,img15,img16,img17,img18,img19],
				loading:false,
				products:'',
			}
		},
		components:{
			NavBar
		},
		mounted:function(){
			this.getData();
		},
		methods:{
			getData:function(){
				console.log("aaa");
				this.$http.get(api.home).then((response) => {
					this.products=response.data;
				})
			},
			handleSelected:function(index){
				this.$router.push({ path:'/dragonDetail',component:DragonDetail })
			}
		}
	}
	
</script>
<style >
	.home{
		background: #fff;
	}
	/*标题、搜索框、bars*/
	.home header{
		width: 100%;
		height: 3rem;
		background: #ff3600;
		text-align: center;
	}
	.home header .title{
		float: left;
		font-size: 1.2rem;
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
		text-align: center;
		margin-top: 0.5rem;
	}
	.home header .search input{
		font-size: 0.1rem;
	}
	.home .mint-search{
		height: 100%;
	}
	.home .mint-searchbar-inner{
		height: 1rem;
		margin-top: 2px;
	}
	.home .search .mint-searchbar{
		background-color: #ff3600;
		padding-right: 0px;
	}
	.home .search .mint-searchbar-inner .mintui-search{

	}
	.home header .search .mint-searchbar-cancel{
		color: #fff;
		font-size: 0.1rem;
	}
	.home header .icon{
		width: 10%;
		float: right;
		margin-right: 0.5rem;
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

	/*担保信息*/
	.home .part1 .text-content{
		width: 33%;
		height: 100%;
		line-height: 3rem;
		text-align: center;
		float: left;
	}
	.home .part1 .text-content .text{
		font-size: 0.5rem;
		color: #666;
	}
	.home .part1 .text-content .check-icon{
		color: #ff3600;
		font-weight: 200;
		font-size: 0.7rem;
	}

	/*XXXX馆*/
	.home .part2,.home .part4{
		width: 100%;
		background: #f1f1f1;
		margin-bottom: 3rem;
	}
	.home .part2 .part2-content,
	.home .part4 .part4-content{
		padding-top: 3%;
		padding-bottom: 3%;
	}
	.home .part2 .part2-img,
	.home .part4 .part4-content .newProducts{
		width: 100%;
		background: #fff; 
	}
	.home .part2 p{
		width: 45%;
		float: left;
		padding-left: 3%;
		padding-top: 3%;
		padding-bottom: 2.5%;
	}
	.home .part2 p img{
		width: 100%;
		height: 100%;
	}

	/*热销茶叶*/
	.home .part3 h3,
	.home .part4 .part4-content .newProducts h3{
		width: 100%;
		text-align: center;
		color: #10181f;
		font-weight: 300;
		margin-top: 0.8rem;
		font-size: 0.8rem;
	}
	.home .part3 p,
	.home .part4 .part4-content .newProducts .text{
		color: #999;
		font-size: 0.5rem;
		width: 100%;
		text-align: center;
		padding-bottom: 3%;
		line-height: 1rem;
	}
	.home .part3 .list-img{
		width: 92%;
		margin-left: 4%;
	}
	.home .part3 div:last-child{
		margin-bottom:3%;
	}
	.home .part3 img{
		width: 100%;
		height: 100%;
	}

	/*人气新品*/
	.home .part4 .part4-content .newProducts h3{
		margin-top: 0;
		padding-top: 0.8rem;
	}
	.home .part4 .product{
		width: 92%;
		margin-left: 4%;
		border-bottom: 1px solid #f1f1f1;
	}
	.home .part4 .product img{
		width: 100%;
		height: 100%;
		margin-top: 3%;
	}
	.home .part4 .product img:first-child{
		margin-top: 0px;
	}
	.home .part4 .newProducts .product p{
		font-size: 0.7rem;
		color: #10181f;
	}
	.home .part4 .newProducts .product .product-p1{
		padding-top: 3%;
	}
	.home .part4 .newProducts .product .product-p2{
		padding-bottom: 3%;
	}
	.home .part4 .newProducts .product p span{
		color: #555;
		font-size: 0.5rem;
	}
	.home .part4 .newProducts .product p .money{
		color: #ff3600;
		float: right;
	}
</style>