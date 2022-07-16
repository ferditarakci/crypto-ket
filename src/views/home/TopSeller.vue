<template>
	<section class="section top-sellers">
		<div class="container">
			<h2 class="section-title">Top Sellers</h2>
			<div class="swiper-container">
				<swiper
					:modules="modules"
					:slides-per-view="5"
					:space-between="20"
					:navigation="{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}"
					@swiper="onSwiper"
					@slideChange="onSlideChange"
				>
					<swiper-slide v-for="item in topSellers" :key="item.id">
						<div>
							<figure>
								<img :src="item.image" :alt="item.name" width="88" height="88">
							</figure>
							<h3 class="name">{{ item.name }}</h3>
							<div class="price"><span>{{ item.price }}</span> ETH</div>
						</div>
					</swiper-slide>
				</swiper>
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div>
		</div>
	</section>
</template>

<script>
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue"
import "swiper/swiper-bundle.css"

export default {
	name: "Top Seller",

	components: {
		Swiper,
		SwiperSlide,
	},

	setup() {
		const onSwiper = (swiper) => {
			// console.log(swiper)
		}

		const onSlideChange = () => {
			console.log("slide change")
		}

		return {
			onSwiper,
			onSlideChange,
			modules: [Navigation],
		}
	},

	created() {
		this.fetchTopSellers()
	},

	data() {
		return {
			topSellers: [],
		}
	},

	methods: {
		fetchTopSellers() {
			fetch('/dummy/top-sellers.json')
			.then(response => response.json())
			.then(response => this.topSellers = response)
			.catch(error => console.error(error))
		}
	}
}
</script>