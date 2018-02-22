var bio = {
	"name": "Warsame M Jama",
	"role": "Profession Network Engineer Support",
	"contact": {
		"mobile": "1-(919) 884-0411",
		"email": "naleeye@gmail.com",
		"github": "naleeye",
		"twitter": "@naleeye",
		"location": "Durham NC"
	},
	"biopic": "images/Portfolio_Image.png",
	"welcomemessage": "I am seeking a challenging and responsible position within IT/MIS department, utilizing expertise in network design, troubleshooting, implementation, security monitoring and virtualization.",
	"skills": ["Routers", "Switches", "Firewalls", "Load Balancers", "Bridges", "Hubs", "WLans", "WAAS", "Linux OS", "HTML",]
};

var work = {
	"jobs": [
	{
		"employer": "AT&T SBC",
		"title": "Team Lead - Senior Professional and Specialist-Network Engineer",
		"location": "Durham NC",
		"dates": "August 2008 - Until now",
		"description": "T2 support. Break & Fix. VoIP SME, EVPN /MPLS. Network Support including Managing/Designing/Troubleshooting Routing/Switching and Firewall Networks"
	},
	{
		"employer": "MarMaxx",
		"title": "Voip Network",
		"location": "Atlanta GA",
		"dates": "2003-2005",
		"description": "Entry Level - Voip Network Tech troubleshooting and documenting End Users phone call issues."
	},
	]
};

var projects = {
	"projects": [
	{
		"title": "AllSBC English Translation",
		"dates": "2010-2011",
		"description": "Assisted in creation of the website and English Translation - HTML and JavaScript",
		"images": ["images/sbc.jpg"]
	},
	{
		"title": "PSSU",
		"dates": "2017",
		"description": "Working with PSSU school formation in Puntland Somalia, Current helping design",
		"images": ["images/pssu.jpg"]
	}
	]
};

var education = {
	"schools": [
	{
		"name": "Georgia State University",
		"location": "Atlanta, GA",
		"degree": "Bachelor of Computer Science",
		"majors": ["Information Systems"],
		"years": "2002-2005",
		"url": "www.gsu.edu"
	}
	],
	"onlineCourses": [
	{
		"title": "Front-end Web Developer Nanodegree",
		"school": "Udacity",
		"date": "2017",
		"url": "www.udacity.com"
	}
	]
};


bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
	
	$("#header").append(HTMLwelcome.replace("%data%", bio.welcomemessage));

	$("#header").append(HTMLbioPics.replace("%data%", bio.biopic));

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++) 
		{
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
/* 		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill); */
	}
	
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
};

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
};

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
	for (var image in projects.projects[project].images) {
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

education.display = function() {

	$("#education").append(HTMLschoolStart);
	for (var school in education.schools){
		$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
		$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].years));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
	}

	$(".education-entry").append(HTMLonlineClasses);

	for (var onlineClass in education.onlineCourses){
		$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title));
		$(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school));
		$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].date));
		$(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url));
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);