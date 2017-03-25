var clock
var counter = 60;
var startScreen
var rightAnswersTally = 0;
var wrongAnswersTally = 0;
var unansweredTally = 0;
var startButton = $("#start-button")
var questions = [{question: "What is Bob Dylan's real name?",
					answers: ["George Costanza", "Richard Starkey", "Robert Zimmerman", "Brian Bosworth"],
					rightAnswer: "Robert Zimmerman"},

					{question: "What album is 'Like a Rolling Stone' on?",
					answers: ["Blonde on Blonde", "Highway 61 Revisited", "Planet Waves", "Blood on the Tracks"],
					rightAnswer: "Highway 61 Revisited"},

					 {question: "At what festival was Dylan called a Judas for playing electric?",
					 answers: ["Newport Folk Festival", "Lollapalooza", "Monterray Pop Festival", "Coachella"],
					 rightAnswer: "Newport Folk Festival"},

					{question: "What group got it's start as Dylan's backing band?",
					answers: ["Smashmouth", "Dire Straits", "Black Flag", "The Band"],
					rightAnswer: "The Band" }]

function showQuestions() {
	for ( var i = 0; i < questions.length; i++) {
		$("#content-area").append(questions[i].question + "<br>");

		for (var j = 0; j < questions[i].answers.length; j++) {
			// $(questions[i].answers[j]).attr(radioBtn);
			var radioBtnBase = $('<input type="radio"/>');
			var answer = questions[i].answers[j];
			var radioButton = radioBtnBase.val( answer)
			radioButton.prop("name", "question" + i);
			// radioButton.html(answer);
			
			$("#content-area").append(radioButton);
			$("#content-area").append('<label>' + answer + '</label>');
			$("#content-area").append("<br>");
		}
	}
}
$("#done").click(function() {
	for ( var i = 0; i < questions.length; i++) {
		var groupName = "question" + i;
		var selectedValue = $("input[name=" + groupName + "]:checked").val()
		if (selectedValue === questions[i].rightAnswer) {
			rightAnswersTally = rightAnswersTally + 1;
			$("#correct").html("Don't Think Twice, You Got these Answers Right!:" + " " + rightAnswersTally);
			console.log(rightAnswersTally);
		} else if (selectedValue === undefined) {
			unansweredTally = unansweredTally + 1;
			$("#unanswered").html("You Left These Questions Blowin' in the Wind!:" + " " + unansweredTally);
		} else {
			wrongAnswersTally = wrongAnswersTally + 1;
			$("#incorrect").html("Your Stuck in Mobile with the Wrong Answers Again!:" + " " + wrongAnswersTally);
		}
	}
	$("#results").show();
	$("#content-area").hide();
});


function timer() {
		clock = setInterval(sixtySeconds, 1000);
		function sixtySeconds() {
			
			if (counter === 0) {
				clearInterval(clock);
				console.log("over");
			}
			if (counter > 0) {
				counter--;
			}
			$("#timer-display").html(counter);
		}

};








$(document).ready(function() {
	
	function openingScreen() {
		$("#content-area").html(startButton);
		$("#done").hide();
		$("#results").hide();
		$("#timer-display").hide();

	}
	openingScreen();

	$(startButton).click(function() {
		(startButton).hide();
		$("#done").show();
		$("#timer-display").show();
		
		showQuestions();
		timer();


		


		


	});


	
});

























// $("#start-button").click(function() {
// 	$("#trivia-data").show();
// 	$("#start-button").hide();

	
	
	
// 	};
// });


