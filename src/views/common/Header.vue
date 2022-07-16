<template>
	<header class="header">
		<div class="container">
			<div class="container-inner d-flex align-items-center">
				<h1 class="logo m-0">
					<a :href="publicUrl">{{ projectTitle }}</a>
				</h1>
				<div class="header-search">
					<div class="header-search-inner">
						<form>
							<input placeholder="Search Item Here" name="query" type="text" class="form-control">
							<button type="submit" aria-label="Search"></button>
						</form>
					</div>
				</div>
				<nav class="navbar header-nav">
					<ul class="nav flex-row">
						<li class="nav-item"><a href="#" class="nav-link">Explore</a></li>
						<li class="nav-item"><a href="#" class="nav-link">My Items</a></li>
						<li class="nav-item"><a href="#" class="nav-link">Following</a></li>
						<li class="nav-item"><a href="#" class="btn btn-pink"><span>Create</span></a></li>
						<li class="nav-item"><a href="#" class="btn btn-pink btn-pink-transparent"><span>Connect</span></a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header"
}
</script>