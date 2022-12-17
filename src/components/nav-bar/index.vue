<template>
	<nav class="nav">
		<logo />
		<ul class="nav-list">
			<li v-for="(nav, index) in navData" :key="nav.id">
				<router-link :to="nav.path" @click="navClickFn" @mouseover="navClickFn" @mouseout="navMouseOutFn">
					{{ nav.text }}
				</router-link>
			</li>
			<span class="undeline"></span>
		</ul>
	</nav>
</template>
  
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Logo from './components/logo/index.vue';

let undelineLeft = ref(null);
let undelineWidth = ref(null);
let timer = ref(null);

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

onMounted(() => {
	timer.value = setTimeout(() => {
		getStyles();
	}, 100)
})

onUnmounted(() => {
	clearTimeout(timer.value);
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

	@media only screen and (max-width: 1920px) {
		padding: 3rem;
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
			background-color: red;
			transition: left .3s linear;
		}

		li {
			// margin-left: 2rem;
			padding: 0 2rem;
			font-size: 1.6rem;

			a {
				color: #fff;
				display: block;
			}
		}
	}
}
</style>