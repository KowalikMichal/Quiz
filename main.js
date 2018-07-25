$(function(){
	$('.row-button').on('click', '.next', ()=> NextTabs());
});

function NextTabs(){
	var activeTab = $('.nav-tabs li.active');
		activeTab.removeClass('active');
		activeTab.find('a').addClass('disabled');
		activeTab.find('button').addClass('disabled');
		activeTab.find('button').css('border-style', 'solid')
	var nexTab = activeTab.next();
		nexTab.find('a').removeClass('disabled');
		nexTab.find('button').removeClass('disabled');
		nexTab.addClass('active');
		nexTab.find('a[data-toggle="tab"]').click();
}


