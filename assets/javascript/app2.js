var clock
var counter = 60;
var startScreen
var rightAnswersTally = 0;
var wrongAnswersTally = 0;
var unansweredTally = 0;
var startButton = $("#start-button")
var questions = [{question: "<p>What is Bob Dylan's real name?</p>",
					answers: ["George Costanza", "Richard Starkey", "Robert Zimmerman", "Brian Bosworth"],
					rightAnswer: "Robert Zimmerman"},

					{question: "<p>What album is 'Like a Rolling Stone' on?</p>",
					answers: ["Blonde on Blonde", "Highway 61 Revisited", "Planet Waves", "Blood on the Tracks"],
					rightAnswer: "Highway 61 Revisited"},

					 {question: "<p>At what festival was Dylan called a Judas for playing electric?</p>",
					 answers: ["Newport Folk Festival", "Lollapalooza", "Monterray Pop Festival", "Coachella"],
					 rightAnswer: "Newport Folk Festival"},

					{question: "<p>What group got it's start as Dylan's backing band?</p>",
					answers: ["Smashmouth", "Dire Straits", "Black Flag", "The Band"],
					rightAnswer: "The Band" },
					
					{question: "<p>What state is Dylan originally from?</p>",
					answers: ["Michigan", "Minnesota", "Texas", "California"],
					rightAnswer: "Minnesota"},

					{question: "<p>A mid-1980s hip-hop tune, 'Street Rock', featured Bob Dylan; which artist recorded the song?</p>",
					answers: ["Grandmaster Flash and the Furious Five", "Kurtis Blow", "Run-DMC", "KRS-One"],
					rightAnswer: "Kurtis Blow"},

					{question: "<p>Dylan once proposed to which iconic soul singer?</p>",
					answers: ["Aretha Franklin", "Luther Vandross", "Mavis Staples", "Tina Turner"],
					rightAnswer: "Mavis Staples"},

					{question: "<p>Which Dylan song inspired the name of the radical leftist group, The Weather Underground?</p>",
					answers: ["Gates of Eden", "Outlaw Blues", "It's alright Ma(I'm only bleeding)", "Subterranean Homesick Blues"],
					rightAnswer: "Subterranean Homesick Blues"}]

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
function showResults() {
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

}

$("#done").click(function() {
	showResults();
	clearInterval(clock);
	$("#timer-display").hide();
	$("#done").hide()
	$("#dylan-pic").show()


});


function timer() {
		clock = setInterval(sixtySeconds, 1000);
		function sixtySeconds() {
			
			if (counter === 0) {
				clearInterval(clock);
				showResults();
				$("#timer-display").hide();
				$("#done").hide();
				$("#dylan-pic").show()

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
		$("#dylan-pic").hide()

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


























