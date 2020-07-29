<template>
	<view class="container">
		<button @click="listItem()">toIndex</button>
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
			listItem: function() {
				uni.request({
					url:this.$baseUrl+"/test/list",
					data:{menu:'Menu1'},
					method:'POST',
					success: (res) => {
						console.log("res:" + res.data);
						this.cont = res.data
					}
				})
			},
			onShow: function() {
				console.log('App Show');
				this.listItem();
			}
		}
	}
</script>

<style>

</style>
