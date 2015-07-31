var model = {
	sections : [{name: "iOS", abr: "iOS", description: "Hello!"},{name: ".NET", abr: ".NET", description: "Hello!"}, {abr: "Py", name: "Python", description: "Hello!"}, {abr:"JS", name: "JavaScript", description: "Hello!"}],
	contact : {twitter: { username: '@HistoireDeBabar', url : 'https://twitter.com/histoiredebabar'}}
};

var controller = {
	init : function(){
		
	},
	getSections : function(){
		return model.sections;
	},
	clicked : function(header, description, section){
		return function(){
			var large = header.classList.toggle("animate");
			if(large) {
				setTimeout(function () {
						header.innerHTML = "";
						header.innerHTML = section.name;
						description.innerHTML = section.description;
						header.appendChild(description);
			    }, 1700);
			}
			else {
				header.innerHTML = "";
				header.innerHTML = section.abr;
				header.removeChild(description);
			}
		};
	},
	getTwitter : function(){
		return model.contact.twitter;
	}

};


var sections_view = {
	sections: undefined,
	init: function(){
		this.sections = document.createElement("div");
		document.body.appendChild(this.sections);
		this.render();
	},
	render: function(){
		var sectionData = controller.getSections();
		for(var i = sectionData.length - 1; i >= 0; i--) {
			var section = document.createElement("div");
			var header = document.createElement("h3");
			header.innerHTML  = sectionData[i].abr;
			section.classList.add("section");
			if(i % 2 === 0) {
				section.classList.add("even");
			}
			else {
				section.classList.add("odd");
			}
			var description = document.createElement("p");
			header.addEventListener('click', controller.clicked(header, description, sectionData[i]));
			section.appendChild(header);
			this.sections.appendChild(section);
		}
	}
};

var footer_view = {
	foot: undefined,
	init: function(){
		this.foot = document.createElement("footer");
		document.body.appendChild(this.foot);
		this.render();
	},
	render : function(){
		var twitter = controller.getTwitter();
		var twitterLink = document.createElement("a");
		var twitterGraphic = document.createElement("span");
		twitterGraphic.classList.add("ico");
		twitterGraphic.classList.add("tweet");
		twitterLink.setAttribute("href", twitter.url);
		twitterLink.appendChild(twitterGraphic);
		this.foot.appendChild(twitterLink);
	}
};

(function(){

	sections_view.init();
	footer_view.init();

})();