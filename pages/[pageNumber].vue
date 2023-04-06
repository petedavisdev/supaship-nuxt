<template>
	<div className="message-board-container">
		<NuxtLink to="/1">
			<h1 className="message-board-header-link">Message Board</h1>
		</NuxtLink>

		<h2>All Posts; Page: {{ $route.params.pageNumber }}</h2>
	</div>
</template>
