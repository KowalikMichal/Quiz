let TextContent= {'#home': "🎮 Let's start", '#quizsettings': "👌 Look's good", "#quizstart": '▶ Next question', '#quizend': "Go to high scores", '#scores': '🔁 Play again'};

$(function(){
	$('.row-button').on('click', '.next', ()=> NextTabs());
	$('.row-button').on('click', '.previous', ()=> PreviousTabs());
	$('.nav-tabs').on('click', ()=> ChangeButtonText($('.nav-tabs li.active').children().attr('href')));
	ChangeButtonText('#home');
});

function NextTabs(){
	var activeTab = $('.nav-tabs li.active');
	(activeTab.next().length !== 1) ? null:CurrntTabs(activeTab);
	ChangeTab(activeTab.next());
}

function PreviousTabs(){
	var activeTab = $('.nav-tabs li.active');
	(activeTab.prev().length !== 1) ? null:CurrntTabs(activeTab);
	ChangeTab(activeTab.prev());
}

function CurrntTabs(activeTab){
	activeTab.removeClass('active');
	activeTab.find('a').addClass('disabled');
	activeTab.find('button').addClass('disabled');
	activeTab.find('button').css('border-style', 'solid');
}

function ChangeTab(element){
	element.find('a').removeClass('disabled');
	element.find('button').removeClass('disabled');
	element.addClass('active');
	element.find('a[data-toggle="tab"]').click();
}

function ChangeButtonText(element){
	console.log(element);
	$('.buttonTextContent').text(TextContent[element]);
}

// $.ajax({
// 	url: 'https://opentdb.com/api.php?amount=10&category=10&difficulty=easy',
// 	type: 'GET',
// 	dataType: 'JSON',
// })
// .done(function(data) {
// 	console.log("success");
// 	console.log(data);
// })
// .fail(function() {
// 	console.log("error");
// });


//https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple
