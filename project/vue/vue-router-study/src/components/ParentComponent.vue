<template>
  <div class="parent-component">
	  <array-com></array-com>
  </div>
</template>

<script>
import ArrayCom from './ArrayCom'
export default {
	name: 'ParentComponent',
	props: {
	},
	components: {
		ArrayCom
	}
}

</script>
<style lang='stylus' scoped>
</style>