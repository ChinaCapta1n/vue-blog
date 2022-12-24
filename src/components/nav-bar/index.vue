<template>
	<nav class="nav" :class="topScroll === true ? 'show-or-hide' : '', backgroundFff === true ? 'backgroundFFF' : ''">
		<logo />
		<ul class="nav-list" :class="navListShow === true ? 'show' : ''">
			<li v-for="(nav, index) in navData" :key="nav.id" @click.prevent="handleHamburgerFn">
				<router-link :class="backgroundFff === true ? 'toGrey' : ''" :to="nav.path" @click="navClickFn"
					@mouseover="navClickFn" @mouseout="navMouseOutFn">
					<van-icon :name="nav.icon" />
					{{ nav.text }}
				</router-link>
			</li>
			<span class="undeline"></span>
		</ul>
		<div :class="threeLine === true ? 'active' : ''" class="hamburger" @click.prevent="handleHamburgerFn">
			<span class="line line-1"></span>
			<span class="line line-2"></span>
			<span class="line line-3"></span>
		</div>
	</nav>
</template>
  
<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import useFlags from '../../stores/module/flags.js';
import Logo from './components/logo/index.vue';
import { API_nav } from '../../api';

// nav data
const navData = ref(null);

// underline
// const underLine = ref(null);
const undelineLeft = ref(null);
const undelineWidth = ref(null);
const timer = ref(null);

// scroll bar
const scrollTop = ref('');
const store = useFlags();
const { topScroll } = storeToRefs(store);
const pageHeight = ref(0);
const backgroundFff = ref(false);

// hamburger
const threeLine = ref(false);

// nav-list
const navListShow = ref(false);

// hamburger function
const handleHamburgerFn = () => {
	if (threeLine.value === true) {
		threeLine.value = false;
		navListShow.value = false;
	} else {
		threeLine.value = true;
		navListShow.value = true;
	}
}

const getStyles = () => {
	const activeRouter = document.querySelector('.router-link-active');
	const underLine = document.querySelector('.undeline');
	if (activeRouter && true) {

		underLine.style.width = getComputedStyle(activeRouter, null)["width"];
		underLine.style.left = activeRouter.offsetLeft + "px";
		// undelineWidth.value = getComputedStyle(activeRouter, null)["width"];
		// undelineLeft.value = activeRouter.offsetLeft + "px";
	}

}

const navClickFn = e => {

	const underLine = document.querySelector('.undeline');
	underLine.style.width = getComputedStyle(e.currentTarget, null)["width"];
	underLine.style.left = e?.currentTarget?.offsetLeft + "px";

	// undelineLeft.value = e?.currentTarget?.offsetLeft + "px";
	// undelineWidth.value = getComputedStyle(e.currentTarget, null)["width"];
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
			store.setTopScroll(true);
		} else {
			store.setTopScroll(false);
		}
	}

	if (newValue > pageHeight.value) {
		backgroundFff.value = true;
	} else {
		backgroundFff.value = false;
	}
})


onMounted(() => {
	// nav data
	API_nav().then(res => {
		navData.value = res;

		// underline
		timer.value = setTimeout(() => {
			getStyles();
		}, 800)
	})
	// scroll bar
	pageHeight.value = window.innerHeight;
	window.addEventListener("scroll", handleScrollFn);
})

onUnmounted(() => {
	clearTimeout(timer.value);
	window.removeEventListener("scroll", handleScrollFn);
})

</script>
  
<style lang="less" scoped>
.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 6rem;
	z-index: 100;


	position: fixed;
	width: 100vw;

	transition: all .5s;

	@media screen and (max-width: 640px) {
		padding: 2rem 3rem;
	}

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
			// width: v-bind(undelineWidth);
			bottom: -.5rem;
			// left: v-bind(undelineLeft);
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

	@media screen and (max-width: 768px) {
		.nav-list {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 0;
			overflow: hidden;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			transition: all .3s;
			background-color: #fff;

			&.show {
				height: 100vh;

				li {
					transition: all .3s;
				}

				li:hover {
					transform: translateX(1rem);
				}
			}

			li {
				margin-bottom: 3rem;

				a {
					color: #000;
				}
			}
		}
	}

	.hamburger {
		width: 2.5rem;
		height: 1.5rem;
		z-index: 2;
		cursor: pointer;
		display: none;

		.line {
			width: 100%;
			height: 1px;
			background-color: #000;
			display: block;
			transition: all .5s;
			margin-bottom: 0.6rem;
		}

		@media screen and (max-width: 768px) {
			display: block;
		}

		&.active {
			.line-2 {
				transform: translate(1rem);
				opacity: 0;
			}

			.line-1 {
				transform-origin: left bottom;
				transform: rotate(45deg);
				margin-bottom: 1rem;
			}

			.line-3 {
				transform-origin: left top;
				transform: rotate(-45deg);
				margin-bottom: 1rem;
			}
		}
	}
}
</style>