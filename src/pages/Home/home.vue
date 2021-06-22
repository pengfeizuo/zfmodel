<template>
	<div class="big">
		<div class="container">
			<!-- 轮播图-->
			<div class="active1 mb-20 module-bgc">
				<div class="swiper">
					<div class="block">
						<el-carousel style="overflow:hidden !important;" trigger="click" height="321px" class="carousel-width">
							<el-carousel-item v-for="item in imgListRotation.slice(0,5)" :key="item.id" @click.native="PicToBanner(item)">
								<div class="lbwenzi">{{item.title}}</div>
								<div class="background-color" :style="{backgroundImage:'url(' + baseUrl+item.url+ ')', 
        backgroundRepeat:'no-repeat',backgroundSize: 'cover',backgroundPosition:'center'}"></div>

							</el-carousel-item>
						</el-carousel>
					</div>
				</div>
				<Login></Login>
			</div>
			<div class="banner mb-20 picFocus">
				<img :src="baseUrl+picFocus" alt :style="{'object-fit': 'cover'}" />
			</div>
			<div class="ylkt clearfix mb-20 module-bgc">
				<div class="ylkt1 module-bgc">
					<div class="ylkt1Tit">
						<span>部门信息</span>
						<div class="LinkTo-qflt" @click="Goylkt">更多</div>
					</div>
					<div class="ylkt1Img-pic-box">
						<img class="ylkt1Img" :src="baseUrl+picFocus2" alt @click="GoDetail1" :id="0" :style="{'object-fit': 'cover'}" />
					</div>
					<ul class="ylkt1List">
						<li v-for="item in ClassroomListylkt.slice(0,3)" :key="item.id">
							<span @click="GoDetailylkt(item)" class="Link-detail" :id="item.id">{{item.title}}</span>
						</li>
					</ul>
				</div>
				<div class="ylkt1 module-bgc">
					<div class="ylkt1Tit">
						<span>通知公告</span>
						<div class="LinkTo-qflt" @click="Gotszs">更多</div>
					</div>
					<div class="ylkt1Img-pic-box">
						<img class="ylkt1Img" :src="baseUrl+picFocus3" alt @click="GoDetail2" :id="0" :style="{'object-fit': 'cover'}" />
					</div>
					<ul class="ylkt1List">
						<li v-for="item in ClassroomListtszs.slice(0,3)" :key="item.id">
							<span @click="GoDetailylkt(item)" class="Link-detail" :id="item.id">{{item.title}}</span>
						</li>
					</ul>
				</div>
				<div class="ylkt1 module-bgc">
					<div class="ylkt1Tit">

						<span>公开制度</span>
						<div class="LinkTo-qflt" @click="Gosjjy">更多</div>
					</div>
					<div class="ylkt1Img-pic-box">
						<img class="ylkt1Img" :src="baseUrl+picFocus4" alt @click="GoDetail2" :id="0" :style="{'object-fit': 'cover'}" />
					</div>
					<ul class="ylkt1List">
						<li v-for="item in Classroomsjjy.slice(0,3)" :key="item.id">
							<span @click="GoDetailsjjy(item)" class="Link-detail" :id="item.id">{{item.title}}</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="banner mb-20">
				<div class="block banner mb-20 picFocus">
					<el-carousel trigger="click" height="120px" style="overflow:hidden !important;" arrow="never">
						<el-carousel-item v-for="item in bannerPeop2" :key="item.id">
							<img :src="baseUrl+item.picUrl" alt :key="item.id" :id="item.id" :style="{'object-fit': 'cover'}" />
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>

			<div class="fxfk mb-20 mt-20">
				<div class="fxfk1 module-bgc">
					<div class="fxfk1Tit">
						<span class="fxfktitle">申请公开</span>
						<span class="LinkTo-qflt" @click="GoRisk">更多</span>
					</div>
					<ul class="ylkt1List ylkt1List2 pt-10 pb-10">
						<li v-for="item in listfxfk.slice(0,4)" :key="item.id">
							<span @click="GoDetailfxfk(item)" class="float-left Link-detail" :id="item.id">{{item.title}}</span>
							<span class="float-right list-time">{{item.publishTime}}</span>
						</li>
					</ul>
				</div>

				<div class="fxfk1 module-bgc">
					<div class="fxfk1Tit">
						<span class="fxfktitle">机构职能</span>
						<span class="LinkTo-qflt" @click="GoPartyDiscipline">更多</span>
					</div>
					<ul class="ylkt1List ylkt1List2 pt-10 pb-10">
						<li v-for="item in listxts.slice(0,4)" :key="item.id">
							<span @click="GoDetaildjfg(item)" class="float-left Link-detail" :id="item.id">{{item.title}}</span>
							<span class="float-right list-time">{{item.publishTime}}</span>
						</li>
					</ul>
				</div>
				<div class="fxfk1 module-bgc">
					<div class="fxfk1Tit">
						<span class="fxfktitle">政府文件</span>
						<span class="LinkTo-qflt" @click="GoMakeInspectionTou">更多</span>
					</div>
					<ul class="ylkt1List ylkt1List2 pt-10 pb-10">
						<li v-for="item in listxcxs.slice(0,4)" :key="item.id">
							<span @click="GoDetailjtdt(item)" class="float-left Link-detail" :id="item.id">{{item.title}}</span>
							<span class="float-right list-time">{{item.publishTime}}</span>
						</li>
					</ul>
				</div>
				<div class="fxfk1 module-bgc">
					<div class="fxfk1Tit">
						<span class="fxfktitle">工作报告</span>
						<span class="LinkTo-qflt" @click="GoInvestigate">更多</span>
					</div>
					<ul class="ylkt1List ylkt1List2 pt-10 pb-10">
						<li v-for="item in listscdc.slice(0,4)" :key="item.id">
							<span @click="GoDetailscdc(item)" class="float-left Link-detail" :id="item.id">{{item.title}}</span>
							<span class="float-right list-time">{{item.publishTime}}</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="banner mb-20 picFocus">
				<img :src="baseUrl+reportpic" alt :style="{'object-fit': 'cover'}" />
			</div>


			<div class="three-pic mb-20">
				<a href="" target="_blank">
					<img src="@/assets/image/12.jpg" alt />
				</a>
				<a href="" target="_blank">
					<img src="@/assets/image/13.jpg" alt />
				</a>
				<a href="" target="_blank">
					<img src="@/assets/image/14.jpg" alt class="Last-pic" />
				</a>
			</div>
		</div>

		<div class="yqlj-bottom">
			<div class="yqlj">
				<div class="yqlj-title">友情链接</div>
				<Swiper :list="FriendPic" :width="180" :height="52" newstyle=2></Swiper>
			</div>
		</div>
		<Rqcode></Rqcode>
		<!--开屏动画-->
		<Open-screen v-if="showCover"></Open-screen>
	</div>
</template>

<script>
	import Login from "./Login/Login.vue";
	import Swiper from "@/components/Swiper";
	import Rqcode from "./Rqcode";
	import OpenScreen from "@/components/OpenScreen"
	export default {
		components: {
			Login,
			Swiper,
			Rqcode,
			OpenScreen
		},
		data() {
			return {
				//控制开屏动画
				showCover: false,
				isSecond: localStorage.getItem("isSecond"),
				PICsPACE: localStorage.getItem("picSpace"),

				ClassroomListylkt: [{
						id: 1,
						title: '广东产业升级在路上 智慧型经济体显雏形'
					},
					{
						id: 2,
						title: '珠三角拿什么迎接转型拐点？'
					},
					{
						id: 3,
						title: '信息化改造助“老鸟”凤凰涅槃'
					},
				],
				ClassroomListtszs: [{
						id: 4,
						title: '保税区创新管理带到区域升级'
					},
					{
						id: 5,
						title: '粤东西北经济增速快于珠三角'
					},
					{
						id: 6,
						title: '珠三角转型升级对广东意味着什么'
					},
				],
				Classroomsjjy: [{
						id: 7,
						title: '机构改革为广东注入内生新动力'
					},
					{
						id: 8,
						title: '中线行-湖北郧县生态移民促脱贫致富'
					},
					{
						id: 9,
						title: '[新北]5·18四大活动 浙大兰州交大川大全入驻'
					},
				],

				listfxfk: [{
						id: 11,
						title: '8年来，1000多个项目落户常州',
						publishTime: '2020-9-9'
					},
					{
						id: 22,
						title: '"天天5·18"网站筹备中 今年展洽会有96场活动',
						publishTime: '2020-9-9'
					},
					{
						id: 33,
						title: '单纯民间商事案 何必上升到政治？',
						publishTime: '2020-9-9'
					},
					{
						id: 44,
						title: '山东省公安量化277种处罚标准 挡住“说情风”',
						publishTime: '2020-9-9'
					},
					{
						id: 55,
						title: '江西省开全国先河 援助单亲家庭未成年子女',
						publishTime: '2020-9-9'
					}
				],

				listxts: [{
						id: 66,
						title: '吉林构建长效机制啃民生领域“硬骨头”',
						publishTime: '2020-9-9'
					},
					{
						id: 77,
						title: '山西“四级”筹资800余万元保护宋金古建大悲院',
						publishTime: '2020-9-9'
					},
					{
						id: 88,
						title: '河北“重霾城市”邢台削减七大主导产业落后产能',
						publishTime: '2020-9-9'
					},
					{
						id: 99,
						title: '天津私人购买新能源车可获免费牌照和政府补贴',
						publishTime: '2020-9-9'
					},
					{
						id: 111,
						title: '内蒙古提前两年半实现城乡居民养老保险并轨',
						publishTime: '2020-9-9'
					}
				],

				listxcxs: [{
						id: 222,
						title: '新疆：文化交流与融合 生生不息的丝路之魂',
						publishTime: '2020-9-9'
					},
					{
						id: 333,
						title: '新疆已建成92万多户安居富民房 农牧民喜迁新居',
						publishTime: '2020-9-9'
					},
					{
						id: 444,
						title: '2014年西藏力争落实少数民族发展资金4.5亿元',
						publishTime: '2020-9-9'
					},
					{
						id: 555,
						title: '西藏启动藏医药申遗工作 已正式上报文化部',
						publishTime: '2020-9-9'
					},
					{
						id: 666,
						title: '陕西纪委:原保留的35个议事协调机构缩减为10个',
						publishTime: '2020-9-9'
					}
				],

				listscdc: [{
						id: 777,
						title: '山东今后5年将培训600万名劳动者 打破地域限制',
						publishTime: '2020-9-9'
					},
					{
						id: 888,
						title: '山东将划永久基本农田 城市“摊饼式”扩张受限',
						publishTime: '2020-9-9'
					},
					{
						id: 999,
						title: '福建专项整治重污染企业 未批先建企业将被停产',
						publishTime: '2020-9-9'
					},
					{
						id: 1111,
						title: '安徽：城镇园林绿化提升行动启动',
						publishTime: '2020-9-9'
					},
					{
						id: 2222,
						title: '浙江食品安全严打行动将启动 七类食品重点打击',
						publishTime: '2020-9-9'
					}
				],
				// 轮播投请求参数
				propmsRotation: {
					pageNum: "1",
					pageSize: "10",
				},
				imgListRotation: [{
						id: 3333,
						title: '简讯2020[34]',
						url: '/nodelimg/2/3.jpg'
					},
					{
						id: 4444,
						title: '在纪念中国人民志愿军抗美援朝出国作战70周年大会上的讲话',
						url: '/nodelimg/2/4.jpg'
					},
				],

				//清风论坛图片获取
				picFocus: "/nodelimg/2/5.jpg",
				paramspicFocus: {
					picCode: "FORUM_PIC",
				},
				picFocus2: "/nodelimg/2/6.jpg",
				paramspicFocus2: {
					picCode: "YL_CLASS",
				},
				picFocus3: "/nodelimg/2/7.jpg",
				paramspicFocus3: {
					picCode: "LEARN_OTHER",
				},
				picFocus4: "/nodelimg/2/8.jpg",
				paramspicFocus4: {
					picCode: "ARM_YOUSELF",
				},
				//banner图第二张人廉
				bannerPeop2: [{
						id: 5555,
						title: 'fawe',
						picUrl: '/nodelimg/2/9.jpg'
					},
					{
						id: 6666,
						title: 'faqqwqwwe',
						picUrl: '/nodelimg/2/10.jpg'
					}
				],
				paramsbannerPeop2: {
					picCode: "BANNER1",
				},

				reportpic: "/nodelimg/2/11.jpg",
				//三张图的轮播
				threeparams: {
					picCode: "BANNER2",
				},
				threePic: [],
				//友情链接
				FriendPic: [{
						url: 'fawe',
						picUrl: '/nodelimg/2/1.jpg'
					}, {
						url: 'fawe',
						picUrl: '/nodelimg/2/2.jpg'
					}, {
						url: 'fawe',
						picUrl: '/nodelimg/2/3.jpg'
					}, {
						url: 'fawe',
						picUrl: '/nodelimg/2/4.jpg'
					}, {
						url: 'fawe',
						picUrl: '/nodelimg/2/5.jpg'
					}, {
						url: 'fawe',
						picUrl: '/nodelimg/2/6.jpg'
					},
					{
						url: 'faqqwqwwe',
						picUrl: '/nodelimg/2/7.jpg'
					}
				],

				relation: 0,

				listjt: [],
			};
		},
		computed: {
			baseUrl() {
				return "https://www.hyxdsoft.com/";
			},
		},
		created() {},

		methods: {
			//控制开屏动画次数
			showSecond() {
				if (!this.isSecond) {
					this.showCover = true;
					localStorage.setItem("isSecond", "true");
				}
			},

			Goylkt() {
				this.$router.push("/forum/forumClassroom");
			},
			Gotszs() {
				this.$router.push("/forum/forumOutside");
			},
			Gosjjy() {
				this.$router.push("/forum/forumWarning");
			},
			GoRisk() {
				this.$router.push("/Risk/SiXiang");
			},
			GoPartyDiscipline() {
				this.$router.push("/PartyDiscipline/FenLei");
			},
			GoMakeInspectionTou() {
				this.$router.push("/MakeInspectionTour/JiTuan");
			},
			GoInvestigate() {
				this.$router.push("/Investigate/DangJi");
			},
			
			GoDetail1(e) {
				var itemID = e.currentTarget.id;
				// console.log(this.obj[itemID])
				this.$router.push(this.obj1[itemID].RouteingPath);
			},
			GoDetail2(e) {
				var itemID = e.currentTarget.id;
				// console.log(this.obj[itemID])
				this.$router.push(this.obj2[itemID].RouteingPath);
			},
			GoDetail3(e) {
				var itemID = e.currentTarget.id;
				// console.log(this.obj[itemID])
				this.$router.push(this.obj3[itemID].RouteingPath);
			},

			GoDetail21(e) {
				var itemID = e.currentTarget.id;
				// console.log(this.obj[itemID])
				this.$router.push(this.obj21[itemID].RouteingPath);
			},
			GoDetail22(e) {
				var itemID = e.currentTarget.id;
				this.$router.push(this.obj22[itemID].RouteingPath);
			},
			GoDetail23(e) {
				var itemID = e.currentTarget.id;
				this.$router.push(this.obj23[itemID].RouteingPath);
			},
			GoDetail24(e) {
				var itemID = e.currentTarget.id;
				this.$router.push(this.obj24[itemID].RouteingPath);
			},
			GoDetail() {
				//备用
				this.$router.push("/Detail");
			},
			//轮播图跳转
			PicToBanner(item) {
				// console.log(item, 22222);
				this.$router.push({
					name: "DetailBanner",
					query: {
						id: item.id,
					},
				});
			},

			GoDetailylkt(item) {
				let ID = {
					id: item.id,
				};
				this.$router.push({
					name: "DetailStudy",
					params: {
						id: item.id,
					},
				});
			},
			//示警教育点击事件
			GoDetailsjjy(item) {
				let ID = {
					id: item.id,
				};
				this.$router.push({
					name: "DetailEducation",
					params: {
						id: item.id,
					},
				});
			},

			GoDetailylkt(item) {
				let ID = {
					id: item.id,
				};
				this.$router.push({
					name: "DetailText",
					params: {
						id: item.id,
					},
				});
			},

			GoDetailfxfk(item) {
				let ID = {
					id: item.id,
				};
				// console.log(ID, 22222);
				this.$router.push({
					name: "SX",
					query: {
						id: item.id,
					},
				});
			},

			GoDetaildjfg(item) {
				let ID = {
					id: item.id,
				};
				// console.log(ID, 22222);
				this.$router.push({
					name: "XtsDetail",
					query: {
						id: item.id,
					},
				});
			},

			GoDetailscdc(item) {
				// console.log(item);
				this.$router.push({
					name: "Detail1",
					query: {
						id: item.id,
					},
				});
			},

			GoDetailjtdt(item) {
				// console.log(item);
				this.$router.push({
					name: "Jt1",
					query: {
						id: item.id,
					},
				});
			},
		},
	};
</script>

<style lang="less" scoped>
	.container {
		width: 1200px;
		margin: 0 auto;
		background: rgba(242, 242, 242, 1);
		margin-top: 10px;
	}

	.big {
		background: rgba(242, 242, 242, 1);
	}

	.module-bgc {
		background-color: white;
	}

	.active1 {
		display: flex;
		padding: 20px;
	}

	img {
		width: 794px;
		height: 321px;
	}

	.banner {
		width: 1200px;
		margin: 0 auto;
	}

	.banner img {
		width: 100%;
		height: 120px;
	}

	.mb-20 {
		margin-bottom: 20px;
	}

	/*轮播图*/
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}

	.carousel-width {
		width: 794px;
	}

	.carousel-width img {
		cursor: pointer;
	}

	/deep/.el-carousel__indicator--horizontal {
		background-color: red;
		width: 12px;
		height: 12px;
		background: rgba(255, 255, 255, 0);
	}

	/deep/.el-carousel__button {
		width: 12px;
		height: 12px;
		background: rgba(255, 255, 255, 1);
		border-radius: 50%;
	}

	/deep/.el-carousel__indicators {
		margin-left: 296px;
	}

	.lbwenzi {
		position: absolute;
		bottom: 0px;
		width: 782px;
		height: 48px;
		font-size: 18px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 48px;
		background-color: rgba(0, 0, 0, 0.7);
		padding-left: 12px;
	}

	/deep/.is-active {
		border-bottom: 0px;
	}

	.ylkt {
		/*padding: 20px 0;*/
		display: flex;
		justify-content: space-between;
		background: rgba(242, 242, 242, 1);
	}

	.ylkt1 {
		width: 388px;
		padding-bottom: 14px;
	}

	.ylkt1Tit {
		color: #dd2126;
		font-size: 18px;
		margin-bottom: 10px;
		margin-left: 20px;
		margin-right: 20px;
		padding-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		line-height: 47px;
		border-bottom: 1px solid #dddddd;
	}

	.ylkt1Tit span {
		border-bottom: 2px solid #dd2126;
		line-height: 47px;
	}

	.ylkt1Tit a {
		/*float: right;*/
		color: #989898;
		text-decoration: none;
		font-size: 14px;
	}

	.ylkt1Img {
		width: 348px;
		height: 180px;
		margin-top: 10px;
		height: 180px;
		padding-left: 20px;
		margin-bottom: 8px;
		cursor: pointer;
	}

	.ylkt1List {
		margin-top: 9px;
	}

	.ylkt1List li .Link-detail {
		color: #333;
		font-size: 16px;
		text-decoration: none;
		line-height: 32px;
		cursor: pointer;
		display: block;
		width: 348px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.ylkt1List li {
		padding-bottom: 6px;
		padding-left: 20px;
	}

	.ylkt1List li span:first-child:hover {
		color: red;
	}

	.LinkTo-qflt {
		font-size: 14px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		cursor: pointer;
	}

	.LinkTo-qflt:hover {
		color: red;
	}

	.fxfk {
		overflow: hidden;
		margin-bottom: 20px;
	}

	.fxfk1 {
		width: 595px;
		margin-bottom: 10px;
		box-sizing: border-box;
		float: left;
		padding-right: 20px;
		padding-top: 17px;
	}

	.fxfk1:nth-child(2n + 1) {
		margin-right: 10px;
	}

	.fxfk1Tit {
		background: url(../../assets/image/titlebg.png) left center no-repeat;
		background-size: 130px 41px;
		background-position: 0px 0px;
		height: 41px;
		line-height: 41px;
		color: #fff;
		font-size: 20px;
		margin-left: 20px;
		border-bottom: 1px solid #dddddd;
	}

	.fxfk1Tit span:last-child {
		float: right;
		color: #999;
		font-size: 14px;
		line-height: 41px;
		display: block;
		text-decoration: none;
		cursor: pointer;
	}

	.fxfk1Tit span:last-child:hover {
		color: red;
	}

	.ylkt1List2 {
		height: 150px;
	}

	.ylkt1List2 li {
		overflow: hidden;
	}

	.ylkt1List2 li a {
		display: block;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.pl-20 {
		padding-left: 20px;
	}

	.pr-20 {
		padding-right: 20px;
	}

	.pt-10 {
		padding-top: 10px;
	}

	.pb-10 {
		padding-bottom: 10px;
	}

	.mt-20 {
		margin-top: 20px;
	}

	.float-left {
		float: left;
	}

	.float-right {
		float: right;
	}

	.float-right.list-time {
		font-size: 16px;
		line-height: 22px;
		color: rgba(153, 153, 153, 1);
	}

	.fxfktitle {
		padding-left: 20px;
	}


	.three-pic {
		display: flex;
		justify-content: center;
		background-color: white;
		padding: 20px;
	}

	.three-pic a {
		display: block;
	}

	.three-pic>a>img {
		width: 372px;
		height: 90px;
		margin-right: 22px !important;
	}

	.three-pic .Last-pic {
		margin-right: 0px !important;
	}

	/*友情链接*/
	.yqlj-bottom {
		width: 100%;
		background-color: white;
		height: 199px;
	}

	.yqlj {
		width: 1200px;
		margin: 0 auto;
	}

	.yqlj ul li a img {
		width: 180px;
		height: 52px;
	}

	.yqlj-title {
		font-size: 18px;
		color: rgba(51, 51, 51, 1);
		line-height: 90px;
		font-weight: 600;
	}

	.yqlj ul {
		display: flex;
		justify-content: space-between;
		padding-bottom: 20px;
	}


	.picFocus {
		width: 1200px;
		height: 120px;
	}

	.ylkt1Img-pic-box {
		width: 348px;
		height: 180px;
		overflow: hidden;
	}

	.background-color {
		width: 795px;
		height: 320px;
		cursor: pointer;
	}
</style>
