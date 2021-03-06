$(function() {
	function updateReplayButton() {
		var width = window.innerWidth * 0.05;

		$("#replayButton")
			.empty().css({
			"z-index": "3",
			"background-image": "url('images/smallButton.png')",
			"position": "absolute",
			"bottom": "50px",
			"left": window.innerWidth / 2,
			"width": width,
			"height": width,
		}) // adds CSS
		.append("<img width='" + width + "' height='" + width + "' src='images/replayIcon.png'/>");
	}

	$("#replayButton")
		.button({})
		.click(function() {
		gameDirector.setScreen(DirectorScreens.game);
		sceneCtrl.generateScene();
	});

	$(window).on('resize', function() {
		updateReplayButton();
	});

	updateReplayButton();
});

