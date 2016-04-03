
var model = {
  welcome: {
    title: 'Hello, my name is Paul',
    message: "I'm a Software Engineer from South Shields, England."
  },
  contacts : [
    {
      name: 'Twitter',
      username: '@HistoireDeBabar',
      url : 'https://twitter.com/histoiredebabar',
    },
    {
      name: 'Linkedin',
      url: 'https://uk.linkedin.com/pub/paul-barber/78/130/8ab',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/HistoireDeBabar',
      icon: 'github',
    }
  ],
  journey:[
    {
      place: 'Newcastle University',
      position: 'MSc Computer Science',
      description: 'Where the journey began.  Learning Java, SQL and the basic principles of OOP, and SOLID. For specialist study I focused upon NoSQL Datastores, and how efficient they can store and query Geospatial data.',
    },
    {
      place: 'SaleCycle',
      position: 'Software Engineer',
      description: 'Where the journey really began.  I Work on a distributed web application to process impression data from across the internet.  Learning not only how to work with technologies such as and .NET and Couchbase.  But also how to architect distributed systems which can scale limitlessly.  Currently I work on a cloud based solution utilizing AWS Lambda and Kinesis.',
    },
    {
      place: 'Place A Vote',
      position: 'Frontend Developer',
      description: 'Place A Vote are trying to change democarcy.  Voters can decide how they congressmen and woman vote on every bill that enters congress.  I work on the Frontend applications for web using Angular and Node JS.  As well as developing the iOS and Android versions of the application.',
    },
    {
      place: 'Associate Level',
      position: 'AWS Developer Certification',
      description: 'The AWS Certified Developer – Associate exam validates technical expertise in developing and maintaining applications on the AWS platform. Exam concepts you should understand for this exam include: Picking the right AWS services for the application, Leveraging AWS SDKs to interact with AWS services from your application, Writing code that optimizes performance of AWS services used by your application, Code-level application security (IAM roles, credentials, encryption, etc.)',
    },
  ],
};

var controller = {
  init : function(){
  },
  getContacts : function(){
    return model.contacts;
  },
  getWelcome: function() {
    return model.welcome;
  },
  getJourney: function() {
    return model.journey;
  },
};


var welcome_view = {
  sections: undefined,
  init: function(){
    this.title = document.createElement("div");
    document.body.appendChild(this.title);
    this.render();
  },
  render: function() {
    this.renderWelcomeModal();
  },
  renderWelcomeModal: function() {
    var welcomeModal = controller.getWelcome();
    var welcome = document.createElement('div');
    var title = document.createElement('h1');
    var strong = document.createElement('strong');
    var weak = document.createElement('span');
    strong.innerHTML = welcomeModal.title + '. ';
    weak.innerHTML = welcomeModal.message;
    title.appendChild(strong);
    title.appendChild(weak);
    strong.classList.add('bold');
    weak.classList.add('weak');
    welcome.appendChild(title);
    this.title.classList.add('title-container');
    this.title.appendChild(welcome);
  },
};


var menu_view = {
  init: function() {
    this.nav = document.createElement('nav');
    this.menu = document.createElement("ul");
    this.nav.appendChild(this.menu);
    document.body.appendChild(this.nav);
    this.render();
  },
  render : function() {
    this.renderContact();
  },
  renderContact: function() {
    var contacts = controller.getContacts();
    var contactsList = document.createElement("li");
    for (var i = 0; i < contacts.length; i++) {
      var item = this.createContactItem(contacts[i]);
      this.menu.appendChild(item);
    }
    this.menu.classList.add('menu-bar');
  },
  createContactItem: function(contact) {
    var contactItem = document.createElement("li");
    var contactLink = document.createElement("a");
    var contactInner = document.createElement("span");
    contactInner.innerHTML = contact.name;
    contactLink.setAttribute("href", contact.url);
    contactLink.appendChild(contactInner);
    contactItem.appendChild(contactLink);
    contactItem.classList.add('item');
    return contactItem;
  },
};

var journey_view = {
  init: function() {
    this.journey = controller.getJourney();
    if (!this.journey || this.journey.length == 0) {
      return;
    }
    this.timelineSection = document.createElement('section');
    this.timelineSection.classList.add('timeSection');
    this.start = document.createElement('h2');
    this.start.innerHTML = 'Start';
    this.start.classList.add('start');
    this.timeline = document.createElement('ul');
    this.timeline.classList.add('timeline');
    this.end = document.createElement('h2');
    this.end.innerHTML = 'To be continued...';
    this.end.classList.add('start');
    this.timelineSection.appendChild(this.start);
    this.timelineSection.appendChild(this.timeline);
    this.timelineSection.appendChild(this.end);
    document.body.appendChild(this.timelineSection);
    this.render();
  },
  render: function() {
    var len = this.journey.length;
    for (var i = 0; i < len; i ++) {
      var step = this.createStep(this.journey[i], i);
      this.timeline.appendChild(step);
    }
  },
  createStep: function(step, position) {
    var stepItem = document.createElement('li');
    var direction = this.getDirection(position);
    var wrapper = document.createElement('div');
    wrapper.classList.add('flag-wrapper');
    var flag = document.createElement('span');
    flag.classList.add('flag');
    flag.innerHTML = step.position;
    var placeWrapper = document.createElement('span');
    placeWrapper.classList.add('time-wrapper');
    var place = document.createElement('span');
    place.classList.add('time');
    place.innerHTML = step.place;
    placeWrapper.appendChild(place);
    wrapper.appendChild(flag);
    wrapper.appendChild(placeWrapper);
    var desc = document.createElement('div');
    desc.innerHTML = step.description;
    desc.classList.add('desc');
    direction.appendChild(wrapper);
    direction.appendChild(desc);
    stepItem.appendChild(direction);
    return stepItem;
  },
  getDirection: function(position) {
    var side = position % 2;
    var sideDiv = document.createElement('div');
    if (side === 0) {
      sideDiv.classList.add('direction-r');
    }
    else {
      sideDiv.classList.add('direction-l');
    }
    return sideDiv;
  }
};



(function(){

  menu_view.init();
  welcome_view.init();
  journey_view.init();

})();
