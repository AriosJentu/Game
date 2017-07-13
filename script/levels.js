
var global_level = { value: 0, max: 0}

global_level.increase = function(){
	this.value++
	if(this.value == levels.length){
		this.value = 0
	}
	if(this.value > this.max){
		this.max = this.value
	}
}

global_level.get = function(){
	return this.value
}

global_level.get_max = function(){
	return this.max
}

global_level.set = function(value){
	this.value = value
}

var levels = [
	{	
		figures: [
			[2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 0],
			[1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 2],
			[1, 0, 2, 3, 1, 2, 0, 0, 0, 0, 1, 1],
			[0, 3, 2, 2, 3, 1, 2, 1, 1, 2, 1, 0],
			[2, 1, 0, 1, 0, 0, 1, 1, 2, 2, 1, 0],
			[2, 3, 4, 1, 3, 1, 2, 4, 1, 0, 1, 0],
			[1, 0, 1, 1, 2, 0, 3, 1, 1, 0, 1, 0],
			[2, 1, 2, 0, 1, 0, 1, 2, 2, 0, 1, 3],
			[0, 3, 0, 0, 2, 1, 2, 1, 2, 0, 1, 0],
			[0, 1, 0, 0, 0, 0, 1, 1, 3, 0, 1, 0],
			[0, 3, 0, 0, 0, 0, 1, 0, 0, 3, 2, 0],
			[0, 2, 1, 3, 1, 1, 2, 0, 0, 2, 0, 0]
		],
		start: 	 [5, 2],
		end: 	 [5, 7]
	},

	{
		figures: [
			[0, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0],
			[0, 4, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2],
			[0, 1, 0, 0, 0, 1, 1, 1, 2, 1, 2, 1],
			[0, 1, 0, 0, 2, 3, 1, 2, 0, 0, 1, 1],
			[0, 2, 1, 1, 2, 1, 0, 1, 2, 1, 2, 1],
			[0, 0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2],
			[0, 2, 0, 1, 0, 1, 2, 1, 2, 1, 0, 0],
			[0, 0, 1, 2, 1, 4, 2, 1, 1, 2, 0, 0],
			[0, 0, 1, 0, 0, 1, 0, 2, 1, 2, 0, 0],
			[2, 1, 2, 2, 1, 2, 0, 1, 0, 1, 0, 0],
			[1, 0, 0, 2, 1, 1, 1, 2, 2, 2, 0, 0],
			[2, 1, 1, 1, 2, 0, 0, 0, 1, 0, 0, 0]
		],
		start: 	 [1, 1],
		end: 	 [7, 5]
	},

	{
		figures: [
			[0, 0, 0, 0, 3, 0, 0, 2, 1, 2, 0, 0],
			[2, 1, 2, 1, 2, 0, 0, 1, 0, 1, 0, 0],
			[1, 2, 4, 2, 0, 2, 1, 2, 0, 1, 0, 0],
			[1, 1, 1, 1, 1, 1, 2, 1, 0, 1, 0, 0],
			[1, 2, 1, 3, 1, 2, 1, 2, 2, 2, 0, 0],
			[1, 0, 0, 1, 2, 3, 1, 0, 1, 1, 0, 0],
			[1, 2, 1, 2, 0, 1, 2, 1, 2, 1, 0, 0],
			[1, 1, 0, 0, 2, 3, 1, 2, 0, 2, 1, 2],
			[1, 2, 1, 1, 2, 4, 2, 1, 1, 1, 1, 2],
			[1, 0, 0, 0, 1, 1, 0, 2, 3, 1, 2, 0],
			[1, 0, 0, 0, 2, 2, 0, 1, 1, 0, 1, 0],
			[2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 0]
		],
		start: 	 [2, 2],
		end: 	 [8, 5]
	},

	{
		figures: [
			[0, 0, 2, 1, 1, 3, 2, 0, 0, 0, 0, 0],
			[0, 4, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
			[0, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0],
			[2, 3, 3, 3, 2, 2, 3, 2, 0, 0, 0, 0],
			[1, 2, 3, 2, 0, 2, 2, 1, 0, 0, 0, 0],
			[2, 1, 2, 2, 1, 3, 3, 2, 2, 1, 1, 2],
			[0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
			[0, 0, 0, 2, 1, 2, 2, 1, 3, 1, 1, 2],
			[2, 1, 1, 2, 0, 0, 0, 0, 1, 0, 0, 0],
			[1, 0, 2, 2, 2, 1, 1, 1, 2, 0, 0, 0],
			[2, 1, 3, 4, 1, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0]
		],
		start: 	 [1, 1],
		end: 	 [10, 3]
	},

	{
		figures: [
			[0, 0, 2, 1, 1, 2, 3, 1, 1, 2, 0, 0],
			[2, 3, 1, 3, 1, 4, 2, 2, 0, 2, 0, 2],
			[2, 1, 2, 2, 2, 1, 2, 3, 1, 2, 0, 1],
			[1, 1, 2, 3, 2, 2, 3, 2, 1, 3, 1, 2],
			[1, 0, 1, 1, 0, 1, 1, 0, 2, 1, 2, 0],
			[2, 1, 2, 1, 2, 3, 3, 1, 3, 1, 3, 2],
			[2, 2, 1, 2, 2, 4, 3, 1, 3, 1, 2, 1],
			[1, 1, 0, 2, 3, 2, 2, 1, 2, 2, 1, 2],
			[1, 2, 1, 3, 2, 0, 1, 3, 1, 1, 2, 0],
			[1, 2, 1, 2, 0, 2, 1, 1, 1, 2, 1, 0],
			[1, 2, 1, 1, 1, 2, 0, 0, 2, 1, 2, 0],
			[3, 2, 1, 2, 2, 1, 1, 1, 2, 0, 0, 0]
		],
		start: 	 [1, 5],
		end: 	 [6, 5]
	},

	{
		figures: [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 2, 1, 2, 2, 0, 0, 0, 0, 0, 2, 2],
			[0, 1, 0, 3, 3, 1, 1, 2, 1, 2, 2, 1],
			[2, 4, 1, 2, 1, 0, 2, 2, 0, 1, 0, 1],
			[1, 1, 2, 1, 2, 0, 1, 2, 1, 3, 1, 2],
			[1, 1, 3, 1, 1, 0, 1, 1, 2, 1, 2, 1],
			[2, 2, 2, 1, 2, 2, 2, 1, 1, 0, 1, 1],
			[2, 2, 2, 1, 0, 1, 0, 0, 2, 1, 3, 2],
			[1, 0, 1, 2, 1, 2, 4, 3, 1, 1, 2, 0],
			[2, 1, 3, 1, 2, 1, 2, 1, 1, 0, 0, 0],
			[0, 0, 1, 2, 2, 2, 1, 2, 0, 0, 0, 0],
			[0, 0, 2, 1, 1, 2, 0, 0, 0, 0, 0, 0]
			
		],
		start: 	 [3, 1],
		end: 	 [8, 6]
	},

	{
		figures: [
			[2, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0],
			[1, 4, 0, 3, 0, 3, 1, 2, 1, 1, 1, 2],
			[2, 2, 3, 1, 1, 2, 2, 1, 2, 2, 3, 0],
			[0, 1, 1, 0, 2, 2, 3, 1, 2, 1, 0, 0],
			[0, 0, 2, 1, 2, 1, 2, 2, 2, 2, 0, 0],
			[0, 0, 1, 1, 1, 1, 1, 4, 2, 1, 0, 0],
			[2, 2, 1, 2, 2, 3, 2, 0, 1, 3, 1, 2],
			[0, 1, 1, 0, 1, 2, 1, 1, 1, 2, 1, 2],
			[0, 2, 1, 1, 2, 0, 0, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 2],
			[0, 0, 0, 0, 2, 1, 1, 2, 0, 0, 2, 2],
			[0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 2, 0]
			
		],
		start: 	 [1, 1],
		end: 	 [5, 7]
	}

]