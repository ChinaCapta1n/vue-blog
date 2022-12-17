<template>
	<nav class="nav" :class="topScroll === true ? 'show-or-hide' : '', backgroundFff === true ? 'backgroundFFF' : ''">
		<logo />
		<ul class="nav-list">
			<li v-for="(nav, index) in navData" :key="nav.id">
				<router-link :class="backgroundFff === true ? 'toGrey' : ''" :to="nav.path" @click="navClickFn"
					@mouseover="navClickFn" @mouseout="navMouseOutFn">
					{{ nav.text }}
				</router-link>
			</li>
			<span class="undeline"></span>
		</ul>
	</nav>
</template>
  
<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import Logo from './components/logo/index.vue';

// underline
let undelineLeft = ref(null);
let undelineWidth = ref(null);
let timer = ref(null);

// scroll bar
let scrollTop = ref('');
let topScroll = ref(false);
let pageHeight = ref(0);
let backgroundFff = ref(false);

const getStyles = () => {
	undelineWidth.value = getComputedStyle(document.querySelector('.router-link-active'), null)["width"];
	undelineLeft.value = document.querySelector('.router-link-active').offsetLeft + "px";
}

const navClickFn = e => {
	undelineLeft.value = e?.currentTarget?.offsetLeft + "px";
	undelineWidth.value = getComputedStyle(e.currentTarget, null)["width"];
}

const navMouseOutFn = () => {
	getStyles();
}

// scroll bar
const handleScrollFn = () => {
	pageHeight.value = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}

watch(scrollTop, (newValue, oldValue) => {

	if (newValue > 0) {
		if (newValue > oldValue) {
			topScroll.value = true;
		} else {
			topScroll.value = false;
		}
	}

	if (newValue > pageHeight.value) {
		backgroundFff.value = true;
	} else {
		backgroundFff.value = false;
	}
})


onMounted(() => {
	// scroll bar
	pageHeight.value = window.innerHeight;
	window.addEventListener("scroll", handleScrollFn);

	// underline
	timer.value = setTimeout(() => {
		getStyles();
	}, 100)
})

onUnmounted(() => {
	clearTimeout(timer.value);
	window.removeEventListener("scroll", handleScrollFn);
})



const navData = [
	{
		"id": 0,
		"text": "主页",
		"path": "/home"
	},
	{
		"id": 1,
		"text": "关于",
		"path": "/about"
	},
	{
		"id": 2,
		"text": "归档",
		"path": "/files"
	},
	{
		"id": 3,
		"text": "留言板",
		"path": "/message"
	}
]
</script>
  
<style lang="less" scoped>
.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 6rem;
	z-index: 100;


	position: fixed;
	width: 100%;

	transition: all .5s;

	// @media only screen and (max-width: 1920px) {
	// 	padding: 3rem;
	// }

	&.backgroundFFF {
		background: hsla(0, 0%, 100%, .8);
	}

	&.show-or-hide {
		transform: translateY(-100%);
		background-color: transparent;
	}

	.nav-list {
		display: flex;
		position: relative;

		.undeline {
			position: absolute;
			display: block;
			width: v-bind(undelineWidth);
			bottom: -.5rem;
			left: v-bind(undelineLeft);
			height: 1px;
			background-image: repeating-linear-gradient(45deg,
					#3c5245 0%,
					#772e5b 1%,
					#380e10 1%,
					#7bed9f 3%);

			transition: left .3s linear;
			background-position: -2% 0;
			background-size: 150%;
			animation: slider 5s linear infinite;
		}

		@keyframes slider {
			100% {
				background-position: -100% 0;
			}
		}

		li {
			padding: 0 2rem;
			font-size: 1.6rem;

			a {
				color: #fff;
				display: block;

				&.toGrey {
					color: rgb(153, 153, 153)
				}
			}
		}
	}
}
</style>