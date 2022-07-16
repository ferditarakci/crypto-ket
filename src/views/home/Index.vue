<template>
	<main>
		<Banner />
		<TopSeller />
		<HotBids />
	</main>
</template>

<script>
import Banner from "./Banner"
import TopSeller from "./TopSeller"
import HotBids from "./HotBids"

export default {
	name: "Home",

	components: {
		Banner,
		TopSeller,
		HotBids
	}
}
</script>
