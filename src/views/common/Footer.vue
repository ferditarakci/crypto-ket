<template>
	<footer class="footer">
		<div class="top-bar py-5">
			<div class="container">
				<div class="row">
					<div class="col-6">
						<h6 class="logo mb-4">
							<a :href="publicUrl">{{ projectTitle }}</a>
						</h6>
						<form class="newsletter">
							<label for="footer-email">Get the lastes Updates</label>
							<div class="input-wrapper">
								<input placeholder="Your Email" name="email" type="email" id="footer-email" class="form-control">
								<button type="submit" class="btn btn-pink"><span>Email Me!</span></button>
							</div>
						</form>
					</div>
					<nav class="col-3">
						<h6>CryptoKet</h6>
						<ul class="nav flex-column">
							<li><a href="#" class="nav-link">Explore</a></li>
							<li><a href="#" class="nav-link">How it Works</a></li>
							<li><a href="#" class="nav-link">Contact Us</a></li>
						</ul>
					</nav>
					<nav class="col-3">
						<h6>Support</h6>
						<ul class="nav flex-column">
							<li><a href="#" class="nav-link">Help center</a></li>
							<li><a href="#" class="nav-link">Terms of service</a></li>
							<li><a href="#" class="nav-link">Legal</a></li>
							<li><a href="#" class="nav-link">Privacy policy</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
		<div class="bottom-bar py-4">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-6">
						CrpytoKet, Inc. All Rights Reserved
					</div>
					<div class="col-6 text-end">
						<div class="socials">
							<a v-for="item in socials" :key="item.title" :href="item.link" target="_blank" class="ms-3">
								<img :src="item.icon" :alt="item.title">
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	props: ["socials"]
}
</script>