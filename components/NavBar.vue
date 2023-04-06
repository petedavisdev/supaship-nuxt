<template>
	<nav class="nav-bar">
		<NuxtLink to="/" class="nav-logo-link">
			<img
				id="logo"
				className="nav-logo"
				src="https://supaship.io/supaship_logo_with_text.svg"
				alt="logo"
			/>
		</NuxtLink>

		<ul className="nav-right-list">
			<li className="nav-message-board-list-item">
				<NuxtLink to="/1" className="nav-message-board-link">
					message board
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
