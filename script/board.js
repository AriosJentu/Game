var Board = {}
Board.width = 8
Board.height = 8
Board.array = []

var random = function (min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}

Board.generate = function(width = Board.width, height = Board.height) {
	
	let seed = seeds[current_seed]

	Board.width = width
	Board.height = height

	for (let y = 0; y < height + 2; y++) {
		$("#game_board").append('<tr id="'+(y-1)+'">')
	}

	let corner_rotate = 0
	let line_rotate = 0

	for (let x = 0; x < width + 2; x++) {

		$("tr").each(function(index, element){
			let obj_class = "cell"
			let obj_id = $(this).attr("id")
			if(obj_id == -1 || obj_id == Board.height || x < 1 || x > width){
				obj_class = "border"
			}
			$(this).append('<td id ="'+(x-1)+'"'+' class = "'+obj_class+'"/>')
		})
	}

	let corners = []
	corners[0] = 0
	corners[1] = width + 1
	corners[2] = 2 * height + 2 * width + 3
	corners[3] = 2 * height + width + 2

	$(".border").each(function(index){
		let id_this = $(this).attr("id")
		if(corners.indexOf(index) != -1){
			$(this).attr("class", "border_corner")
			$(this).css("transform", "rotate(" + 90 * corners.indexOf(index) + "deg)")
		} else if(id_this > -1 && id_this < width){
			let angle = index < width + 1 ? 90 : 270
			$(this).css("transform", "rotate(" + angle + "deg)")
		} else if(id_this == width){
			$(this).css("transform", "rotate(180deg)")
		} 
	})

	Board.array = []

	let figures = [Figures.line, Figures.corner, Figures.cross, Figures.node]
	let ways = [[-1, 0], [0, 1], [1, 0], [0, -1]]

	for (let x = 0; x < width; x++) {
		Board.array[x] = []
		for (let y = 0; y < height; y++) {
			let figure = figures[random(0, figures.length - 1)]
			Board.array[x][y] = new Figure(figure)
			Board.array[x][y].rotation_id = random(0, figure.rotates)
		}
	}

	let i = seed.start[0] - 1
	let j = seed.start[1]

	for (let k = 0; k < seed.figures.length; k++) {
		i += ways[seed.ways[k]*1][0]
		j += ways[seed.ways[k]*1][1]
		let figure = figures[seed.figures[k]]
		Board.array[i][j] = new Figure(figure)
		Board.array[i][j].rotation_id = random(0, figure.rotates)
	}

}

Board.draw = function() {
	for (let x = 0; x < Board.width; x++) {
		for(let y = 0; y < Board.height; y++) {
			let image = 'url("img/' + Board.array[x][y].image + '")'
			let corner = "rotate(" + Board.array[x][y].rotation_id*90 + "deg)"
			let cell = $(".cell:eq(" + (Board.width * x + y) + ")")
			cell.css("background-image", image)
			cell.css("transform", corner)
		}
	}
}

Board.onclick = function(x = 0, y = 0) {
	Board.array[x][y].rotate()
}

Board.is_solved = function() {
	let i = seeds[current_seed].start[0]
	let j = seeds[current_seed].start[1]
	let ways = [[-1, 0], [0, 1], [1, 0], [0, -1]]
	let is_end = false
	let figure = Board.array[i][j]
	let bridge = figure.rotate(figure.rotation_id)
	let from = bridge.indexOf(1)
	figure.set_activity(true)

	while (!is_end) {
		let is_valid = false
		figure = Board.array[i][j]
		bridge = figure.rotate(figure.rotation_id)

		for (let k = 0; k < ways.length; k++) {
			let index_x = i + ways[k][0]
			let index_y = j + ways[k][1]

			if (index_x < 0 || index_y < 0 ) {
				continue 
			}

			if (index_x > Board.height - 1 || index_y > Board.width - 1) {
				continue
			}

			let next_figure = Board.array[index_x][index_y]
			let next_bridge = next_figure.rotate(next_figure.rotation_id)

			if (bridge[k] > 0 && bridge[k] == bridge[from] && (k != from || figure.type == Figures.node) && next_bridge[(k+2) % next_bridge.length] > 0) {
				i += ways[k][0]
				j += ways[k][1]
				figure = Board.array[i][j]
				from = (k + 2) % ways.length
				let type_figure = "bot"

				if (figure.is_active) {
					type_figure = "bth"
				} else if (
					from == (1 + figure.rotation_id) % 4 || 
					from == (3 + figure.rotation_id) % 4
				) {
					type_figure = "top"
				}

				figure.set_activity(true, type_figure)
				bridge = figure.rotate(figure.rotation_id)

				if (i == seeds[current_seed].end[0] && j == seeds[current_seed].end[1]) {
					is_end = true
				}

				is_valid = true
				break
			}
		}
		if (!is_valid){
			return false
		}
	}

	return true
}
