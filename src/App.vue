<template>
	<Header />
	<Home />
	<Footer :socials="Socials" />
</template>

<script>
import Header from "./views/common/Header"
import Footer from "./views/common/Footer"
import Home from "./views/home/Index"
import Socials from "./assets/socials"

export default {
	name: "App",
	components: {
		Header,
		Footer,
		Home
	},

	data() {
		return {
			Socials
		}
	}
}
</script>

<style lang="scss">
	@import "./assets/scss/style.scss";
</style>
