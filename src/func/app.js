var jsDesc = "Javascript is one of the most ubiquitous programming languages in the world.  Appearing on almost every device, from mobile to desktop computers, across browsers and operating systems.  Traditionally javascript has been used in front-end development to provide rich user experiences for web users.  However, Javascript is no longer considered merely a front-end language.  My experiences of using Javascript are extensive.  Through developing front-end	applications using Angular, Knockout and vanilla Javascript I have developed an understanding of fundamental design patterns using Javascript.  Furthermore, by developing applications running in nodeJS and Lambda functions on AWS I have gained experience in writing modular code that runs back-end services.";
var netDesc = "Professionally I work on several .NET solutions.  These solutions are all web based using ASP.NET.  They range from all encompassing MVC projects to Web API projects.  They entail various system architectures from N-Tier to CQRS.  These solutions also use various Datastorage technologies, from SQL to NoSQL.  Building full stack web applications in .NET also provides experience in system architecture to front-end UX.  Furthermore, developing on a wide range of solutions provide an understanding and appreciation for both monolithic and microservice based applications. The primary .NET project I work upon is a scalable, cloud based solution which provides a remarketing solution for clients.  This project records hundreds of thousands impressions from various clients websites and retargets there clients with products they have abandoned.";
var iOSDesc = "For hobby projects I have developed multiple iOS applications.  From simple applications that merely interact with REST APIs to display information, or trigger events (such as a home automation system).  To a larger project that requires full stack development, including a REST API as well as an iOS client. I have developed these applications using Swift and the Apple SDKs. ";
var pyDesc = "I regularly attend Python North East, a Python meetup group.  These meetups allow me to draw upon the experience and knowledge of others to develop my own small projects in Python.  I’ve used various Python frameworks from Django, Flask and with the Google App Enginge.  These projects are usually trivial, for my own pleasure and enjoyment.  Nevertheless, I still have experience and knowledge of writing programs in Python and have taken numerous Pluralsight and Udacity courses based in Python.";

var model = {
	sections : [{name: "iOS", abr: "iOS", description: iOSDesc}, {abr: "Py", name: "Python", description: pyDesc},{name: ".NET", abr: ".NET", description: netDesc}, {abr:"JS", name: "JavaScript", description: jsDesc}],
	contact : {twitter: { username: '@HistoireDeBabar', url : 'https://twitter.com/histoiredebabar'}}
};

function showHide(show, hide, duration, callback){
	setTimeout(function(){
		hide.classList.add("hide");
		show.classList.remove("hide");
		show.classList.add("show");
		hide.classList.remove("show");
		callback();
	}, duration);
}

var controller = {
	init : function(){

	},
	getSections : function(){
		return model.sections;
	},
	clicked : function(header, description){
		return function(){
			var large = header.classList.toggle("animate");
			var atr = header.childNodes[0];
			var name = header.childNodes[1];
			if(large) {
						showHide(name, atr, 1500, function(){
							header.appendChild(description);
						});
			}
			else {
				showHide(atr, name, 1500, function(){
					header.removeChild(description);
				});
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
			var atr = document.createElement("span");
			var name = document.createElement("span");
			name.innerHTML = sectionData[i].name;
			name.classList.add("visuallyHiden");
			name.classList.add("hide");
			atr.innerHTML  = sectionData[i].abr;
			atr.classList.add("shown");
			header.appendChild(atr);
			header.appendChild(name);
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
