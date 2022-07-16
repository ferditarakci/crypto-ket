<template>
	<section class="section hot-bids">
		<div class="container">
			<h2 class="section-title">Hot Bids</h2>
			<div class="row">
				<div v-for="item in hotBids" :key="item.id" class="col-3 item">
					<div>
						<figure>
							<img :src="item.image" :alt="item.name" width="88" height="88">
						</figure>
						<h3 class="name">{{ item.name }}</h3>
						<div class="d-flex align-items-center justify-content-between">
							<div class="price">
								<span>{{ item.price }}</span> ETH
							</div>
							<div @click="like(item)" class="like d-flex align-items-center">
								<div :class="{'liked' : item.is_like}" class="heart"></div>
								<div>{{ item.like }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="my-5 text-center">
				<div @click="loadMore()" v-if="hideLoadBtn" class="btn btn-pink btn-pink-transparent load-more">
					<span>Load More</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Hot Bids",

	created() {
		this.fetchHotBids()
	},

	data() {
		return {
			hotBids: [],
			page: 1,
			limit: 4,
			hideLoadBtn: true
		}
	},

	methods: {
		fetchHotBids() {
			fetch('/dummy/hot-bids.json')
			.then(response => response.json())
			.then(response => {

				if (response.length != this.hotBids.length) {

					let data = response.slice((this.page - 1) * this.limit, this.page * this.limit)

					this.hotBids = [...this.hotBids, ...data]

				}

				if (response.length == this.hotBids.length) this.hideLoadBtn = false
			})
			.catch(error => console.error(error))
		},

		like(item) {
			item.is_like = !item.is_like
			item.is_like ? item.like++ : item.like--
		},

		loadMore() {
			this.page++
			this.fetchHotBids()
		}
	}
}
</script>