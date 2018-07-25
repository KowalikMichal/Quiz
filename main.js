$(function(){
	$('.tabText').on('click', '.next', ()=> NextTabs());
	$('.tabText').on('click', '.previous', ()=> PreviousTabs());
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