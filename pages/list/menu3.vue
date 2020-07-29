<template>
	<view class="container">
		<button @click="toIndex()">toIndex</button>
		<view>
			<text>{{cont}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cont: "welcome to list"
			}
		},
		methods: {
			toIndex: function() {
				console.log("to index");
				uni.redirectTo({
					url:"/pages/index/index"
				});
			}
		}
	}
</script>

<style>

</style>
