<template>
	<div class='clouds'>
		<div class="layer layer1">
			<div>
				<i/>
				<i/>
				<i/>
			</div>
		</div>
		<div class="layer layer2">
			<div>
				<i/>
				<i/>
				<i/>
			</div>
		</div>
		<div class="layer layer3">
			<div>
				<i/>
				<i/>
				<i/>
			</div>
		</div>
	</div>
</template>

<script lang='ts'>
interface CloudItem {
	url: string;
	x: number;
	y: number;
}

export default {
	name: 'Clouds',
	props: {
		curr: {
			type: Number,
			required: true
		},
		max: {
			type: Number,
			required: true
		}
	},
	setup() {

	}
};
</script>

<style lang='scss' scoped>
	.clouds {
		position: relative;
		height: 300px;
	}

	.layer {
		position: absolute;
		width: 100%;
		height: 100%;

		& > div {
			position: relative;
			height: 100%;
			width: 100%;
		}
	}

	i {
		position: absolute;
		display: inline-block;
		background-color: aqua;
		width: 10px;
		height: 10px;
	}

	.layer1 {
		i:nth-of-type(1) {
			left: 10%;
			top: 50%;
		}

		i:nth-of-type(2) {
			left: 40%;
			top: 20%;
		}

		i:nth-of-type(3) {
			left: 70%;
			top: 70%;
		}
	}

	.layer2 {
		i:nth-of-type(1) {
			left: 25%;
			top: 60%;
		}

		i:nth-of-type(2) {
			left: 50%;
			top: 39%;
		}

		i:nth-of-type(3) {
			left: 20%;
			top: 79%;
		}
	}

	.layer3 {
		i:nth-of-type(1) {
			left: 13%;
			top: 80%;
		}

		i:nth-of-type(2) {
			left: 50%;
			top: 20%;
		}

		i:nth-of-type(3) {
			left: 60%;
			top: 10%;
		}
	}
</style>
