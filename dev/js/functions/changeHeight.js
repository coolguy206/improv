var changeHeight = function(){
	var title = $('.title h3').text();
	if(title == 'cast' || title == 'alumni'){
		var castLi = $('.cast li');
		$(castLi).each(function(i,val){
			setTimeout(function(){
				var name = $(val).find('span').text();
				if(name == 'Yogesh Upadhyaya' || name == 'Cherry Mardia' || name == 'Kaneez Surka Nalwala'){
					var height = $(val).prev().find('img').css('height');
					$(val).find('img').css('height', height);
				}

				if(name == 'Jnanasiddhy Raghavendra' || name == 'Kaneez Surka Nalwala'){
					var spanHeight = $(val).find('span').css('height');
					$('.cast li span').css('height', spanHeight);
				}

			},100);
		});

	}
};

module.exports = changeHeight; 