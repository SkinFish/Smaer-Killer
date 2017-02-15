function killClick() {
	var choice = $(".wk").find(":selected").attr("value");
	var input = $(".way-input").val();
	console.log(choice);
	console.log(input);
	if (choice == "1") {
		$(".how-much").text("Need: " + input*97.5 + "/g");
	}else if (choice == "2") {
		$(".how-much").text("Need: " + input*65 + "/kg");
	}else if (choice == "3") {
		$(".how-much").text("Need: " + input*140 + "/mg");
	}else if (choice == "4") {
		$(".how-much").text("Need: " + input*14 + "/l");
	}else if (choice == "5") {
		$(".how-much").text("Need: " + input*33000 + "/g");
	}else if (choice == "6") {
		$(".how-much").text("Need: " + input*3 + "/g");
	}else if (choice == "7") {
		$(".how-much").text("Need: " + input*18000 + "/mg");
	}else if (choice == "8") {
		$(".how-much").text("Need: " + input*2 + "/kg");
	}else if (choice == "9") {
		$(".how-much").text("Need: " + input*250 + "/g");
	}else if (choice == "10") {
		$(".how-much").text("Need: " + input*35 + "/g");
	}else if (choice == "11") {
		$(".how-much").text("Need: " + input*25 + "/l");
	}
}