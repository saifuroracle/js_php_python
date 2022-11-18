Vue.component('btn',{
	template: `
		<v-btn @click="increase">{{ result }}</v-btn>
	`,
	data: function(){
		return {
			result: this.x
		}
	},
	props: ['x'],
	methods: {
		increase: function(){
			alert('Adding name');
			console.log("========called=======")
			this.result++
		}
	}

})

