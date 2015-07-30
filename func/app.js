var model = {
	sections : [{name: "iOS", description: "Hello!"},{name: ".NET", description: "Hello!"}, {name: "KO", description: "Hello!"}, {name:"JS", description: "Hello!"}]
};

var controller = {
	init : function(){
		
	},
	getSections : function(){
		return model.sections;
	},
	clicked : function(header, description){
		return function(){
			var large = header.classList.toggle("animate");
			if(large) {
				setTimeout(function () {
						header.appendChild(description);
			    }, 2000);
			}
			else {
				header.removeChild(description);
			}
		};
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
			header.innerHTML  = sectionData[i].name;
			section.classList.add("section");
			if(i % 2 === 0) {
				section.classList.add("even");
			}
			else {
				section.classList.add("odd");
			}
			var description = document.createElement("p");
			description.innerHTML = sectionData[i].description;
			header.addEventListener('click', controller.clicked(header, description));
			section.appendChild(header);
			this.sections.appendChild(section);
		}
	}
};

(function(){

	sections_view.init();


})();