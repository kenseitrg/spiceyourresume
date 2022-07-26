<script>
	import HeroMain from '../components/fpage/HeroMain.svelte';
	import HeroSecondary from '../components/fpage/HeroSecondary.svelte';
	import AboutUs from '../components/fpage/AboutUs.svelte';
	import Products from '../components/fpage/Products.svelte';
	import Features from '../components/fpage/Features.svelte';
</script>

<HeroMain />
<div class="b-example-divider" />
<HeroSecondary />
<div class="b-example-divider" />
<Products />
<div class="b-example-divider" />
<Features />
<div class="b-example-divider" />
<AboutUs />

<style>
	.b-example-divider {
		height: 3rem;
		background-color: rgba(0, 0, 0, 0.1);
		border: solid rgba(0, 0, 0, 0.15);
		border-top-width: medium;
		border-right-width: medium;
		border-bottom-width: medium;
		border-left-width: medium;
		border-width: 1px 0;
		box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1), inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
	}
</style>
