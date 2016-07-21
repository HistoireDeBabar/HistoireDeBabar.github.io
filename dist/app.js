var model={welcome:{title:"Hello, my name is Paul",message:"I'm a Software Engineer from South Shields, England."},contacts:[{name:"Twitter",username:"@HistoireDeBabar",url:"https://twitter.com/histoiredebabar"},{name:"Linkedin",url:"https://uk.linkedin.com/pub/paul-barber/78/130/8ab"},{name:"GitHub",url:"https://github.com/HistoireDeBabar",icon:"github"}],journey:[{place:"Newcastle University",position:"MSc Computer Science",description:"Where the journey began. Learning Java, SQL and the basic principles of OOP, and SOLID. For specialist study I focused upon NoSQL Datastores, and how efficient they can store and query Geospatial data."},{place:"SaleCycle",position:"Software Engineer",description:"Where the journey really began. I Worked on multiple distributed web applications to process millions of requests per day from hundreds of e-commerce website from across the world. These stacks include, but not are not limited too, a distributed .NET event driven system, with Couchbase as the data store to a cloud based serverless architecture running on AWS Lambda.  I programmed in languages from C#, Javascript (Node) and Golang."},{place:"Place A Vote",position:"Frontend Developer",description:"Place A Vote are trying to change democarcy. It is a social web application to promote discusion and envolvement in US politics. I primarily work on the frontend web application. However, also made small data APIs too. Tools, frameworks and languages primarily used were: Node.js, Express, Gulp, Web-Pack, Angular, React, Redux, Yeoman, Redis, CircleCI (continious delivery), SASS and Convox/Docker."},{place:"Associate Level",position:"AWS Developer Cert.",description:"The AWS Certified Developer – Associate exam validates technical expertise in developing and maintaining applications on the AWS platform. Exam concepts you must understand for this exam include: Picking the right AWS services for the application, Leveraging AWS SDKs to interact with AWS services from your application, Writing code that optimizes performance of AWS services used by your application, Code-level application security (IAM roles, credentials, encryption, etc.)"}]},controller={init:function(){},getContacts:function(){return model.contacts},getWelcome:function(){return model.welcome},getJourney:function(){return model.journey}},welcome_view={sections:void 0,init:function(){this.title=document.createElement("div"),document.body.appendChild(this.title),this.render()},render:function(){this.renderWelcomeModal()},renderWelcomeModal:function(){var e=controller.getWelcome(),t=document.createElement("div"),n=document.createElement("h1"),i=document.createElement("strong"),a=document.createElement("span");i.innerHTML=e.title+". ",a.innerHTML=e.message,n.appendChild(i),n.appendChild(a),i.classList.add("bold"),a.classList.add("weak"),t.appendChild(n),this.title.classList.add("title-container"),this.title.appendChild(t)}},menu_view={init:function(){this.nav=document.createElement("nav"),this.menu=document.createElement("ul"),this.nav.appendChild(this.menu),document.body.appendChild(this.nav),this.render()},render:function(){this.renderContact()},renderContact:function(){for(var e=controller.getContacts(),t=(document.createElement("li"),0);t<e.length;t++){var n=this.createContactItem(e[t]);this.menu.appendChild(n)}this.menu.classList.add("menu-bar")},createContactItem:function(e){var t=document.createElement("li"),n=document.createElement("a"),i=document.createElement("span");return i.innerHTML=e.name,n.setAttribute("href",e.url),n.appendChild(i),t.appendChild(n),t.classList.add("item"),t}},journey_view={init:function(){this.journey=controller.getJourney(),this.journey&&0!=this.journey.length&&(this.timelineSection=document.createElement("section"),this.timelineSection.classList.add("timeSection"),this.start=document.createElement("h2"),this.start.innerHTML="Start",this.start.classList.add("start"),this.timeline=document.createElement("ul"),this.timeline.classList.add("timeline"),this.end=document.createElement("h2"),this.end.innerHTML="To be continued...",this.end.classList.add("start"),this.timelineSection.appendChild(this.start),this.timelineSection.appendChild(this.timeline),this.timelineSection.appendChild(this.end),document.body.appendChild(this.timelineSection),this.render())},render:function(){for(var e=this.journey.length,t=0;t<e;t++){var n=this.createStep(this.journey[t],t);this.timeline.appendChild(n)}},createStep:function(e,t){var n=document.createElement("li"),i=this.getDirection(t),a=document.createElement("div");a.classList.add("flag-wrapper");var o=document.createElement("span");o.classList.add("flag"),o.innerHTML=e.position;var r=document.createElement("span");r.classList.add("time-wrapper");var s=document.createElement("span");s.classList.add("time"),s.innerHTML=e.place,r.appendChild(s),a.appendChild(o),a.appendChild(r);var c=document.createElement("div");return c.innerHTML=e.description,c.classList.add("desc"),i.appendChild(a),i.appendChild(c),n.appendChild(i),n},getDirection:function(e){var t=e%2,n=document.createElement("div");return 0===t?n.classList.add("direction-r"):n.classList.add("direction-l"),n}};!function(){menu_view.init(),welcome_view.init(),journey_view.init()}();