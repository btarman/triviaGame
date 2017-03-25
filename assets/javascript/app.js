// var startButton = ("#start-button");


// $(startButton).click(function {
	
// })
window.onload = function() {
	$("#start-button").on("click", timer.start);
	if (timer === 0) {
		$("#timer-display").html(timer.reset)
	}
};

var intervalId;

var timer = {
	time: 60,

	reset: function() {
		timer.time = 60;
		$("#timer-display").html("1:00");

	},

	start: function() {
		intervalId = setInterval(timer.count, 1000 )
		console.log(intervalId);
	},

	count: function() {
		timer.time--;

		var converted = timer.timeConverter(timer.time);

		$("#timer-display").html(converted);
	},

	timeConverter: function(t) {
		var minutes = Math.floor(t / 60);
		var seconds = t - ( minutes * 60);

		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		if (minutes === 0) {
			minutes = "00";
		}

		return minutes + ":" + seconds;
	}
}
setTimeout( timeUp, 1000 * 60);

function timeUp() {
	console.log("game over");
}

