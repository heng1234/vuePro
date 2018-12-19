<style lang="scss" scoped>
.keyboard {
	width: 688px;
	margin: 0;
	padding: 0;
	list-style: none;
	user-select: none;

	li {
		float: left;
		margin: 0 5px 5px 0;
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background: #fff;
		border: 1px solid #e5e5e5;
		border-radius: 5px;

		&:hover {
			position: relative;
			border-color: gray;
			cursor: pointer;
		}
		&:active {
			top: 1px;
			left: 1px;
		}
	}

	.tab, .delete {
		width: 70px;
	}
	.capslock {
		width: 80px;
	}
	.enter {
		width: 77px;
	}
	.shift {
		width: 102px;
	}
	.space {
		clear: left;
		width: 681px;
	}
	.shifted {
		position: relative;
		top: 1px;
		left: 1px;
		border-color: #e5e5e5;
		cursor: pointer;
	}
	.capsed {
		position: relative;
		top: 1px;
		left: 1px;
		border-color: #e5e5e5;
		cursor: pointer;
	}
}
</style>
<template>
	<ul class="keyboard">
		<li v-for="key in keyList" track-by="$index" v-focus :class="{delete: key === 'Delete', tab: key === 'Tab', capslock: key === 'Caps', enter: key === 'Enter', shift: key === 'Shift', space: key === 'Space', shifted: (key === 'Shift') && hasShifted, capsed: (key === 'Caps') && hasCapsed }" v-text="key" @click="clickKey(key)"></li>
	</ul>
</template>
<script>
	export default {
        props: {
            keyboardText: {
                type: String,
                default: ''
            },
		},
		data() {
			return {
				keyList: [],
				normalKeyList: [],
				shiftedKeyList: [],
				capsedKeyList: [],
				hasShifted: false,
				hasCapsed: false,
                keyvalue:''
			}
		},

		methods: {
			clickKey(key) {

				switch(key) {
					case "Delete":
						let kbt = this.keyboardText;

						this.keyvalue = kbt.length ? kbt.substring(0, kbt.length - 1) : kbt;
						break;

					case "Tab":
						this.keyvalue += "\t";
						break;

					case "Enter":
						this.keyvalue += "\n";
						break;

					case "Space":
						this.keyvalue += " ";
						break;

					case "Caps":
						this.hasCapsed = !this.hasCapsed;
						this.keyList = this.hasCapsed ? this.capsedKeyList : this.normalKeyList;
						break;

					case "Shift":
						this.hasShifted = !this.hasShifted;
						this.keyList = this.hasShifted ? this.shiftedKeyList : this.normalKeyList;
						break;

					default:
						this.keyvalue += key.toString();
						break;

				}

                this.$emit("key",this.keyvalue);
			}
		},
		mounted() {
			let normalKeyList = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete',
						'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
						'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
						'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 
						'Space'], 

				shiftedKeyList = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Delete',
						'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
						'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
						'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', 
						'Space'],

				capsedKeyList = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete',
						'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
						'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
						'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 
						'Space'];

			this.keyList = this.normalKeyList = normalKeyList;
			this.shiftedKeyList = shiftedKeyList;
			this.capsedKeyList = capsedKeyList;
		}
	}
</script>