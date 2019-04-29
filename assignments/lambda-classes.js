// Person class , base-class
// Person receives name, age, location, gender all as props
// speak as a method logs out a phrase Hello my name is Fred, I am from Bedrock
// where name and locaiton are the object's own props

class Person{
	constructor(attributes){
		this.name = attributes.name;
		this.location = attributes.location;
		this.age = attributes.age;
		this.gender = attributes.gender;
	}
	
	speak(){
		return (`Hello my name is ${this.name}, I am from ${this.location}.!!!`);
	}
}

/*  
##########################################################################
	Instructor extensions of Person
Now that we have a Person as our base class, we'll build our Instructor class.
Instructor uses the same attributes that have been set up by Person

Instructor has the following unique props:
@ specialty what the Instructor is good at i.e. 'redux'
@ favLanguage i.e. 'JavaScript, Python, Elm etc.'
@ catchPhrase i.e. Don't forget the homies

Instructor has the following methods:
@ demo receives a subject string as an argument and logs out the phrase 
'Today we are learning about {subject}' where subject is the param passed in.
@ grade receives a student object and a subject string as arguments and 
logs out '{student.name} receives a perfect score on {subject}'

 ##############################################################################
*/ 

class Instructor extends Person {
 	constructor(instructorAttr) {
		super(instructorAttr);
		this.specialty = instructorAttr.specialty;
		this.favLanguage = instructorAttr.favLanguage;
		this.catchPhrase = instructorAttr.catchPhrase;	
	}
	
	demo(subject){
		return `Today we are learning about ${subject}`;
	}
	
	grade(student, subject){
		return `${student.name} receives a perfect scroe on ${subject}`;
	} 
}

/*
##############################################################################
Student extensions of Person
Now we need some students!
Student uses the same attributes that have been set up by Person

Student has the following unique props:
@ previousBackground i.e. what the Student used to do before Lambda School
@ className i.e. CS132
@ favSubjects. i.e. an array of the student's favorite subjects 
['Html', 'CSS', 'JavaScript']

Student has the following methods:
@ listsSubjects a method that logs out all of the student's favoriteSubjects 
one by one.
@ PRAssignment a method that receives a subject as an argument and logs out 
that the student.name has submitted a PR for {subject}
@ sprintChallenge similar to PRAssignment but logs out student.name has begun 
print challenge on {subject}

##############################################################################
*/

class Student extends Person{
	constructor(studentAttr){
		super(studentAttr);
		this.previousBackground = studentAttr.previousBackground;
		this.className = studentAttr.className;
		this.favSubjects = studentAttr.favSubjects;
	}
	
	listsSubjects(){
		this.favSubjects.forEach(elem => {
			console.log(elem);
		});
	}
	
	PRAssignment(subject){
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}
	
	sprintChallenge(subject){
		console.log(`${this.name} has begun a spring challengeon ${subject}`);
	}
}

/*
##############################################################################
Project Manager extensions of Instructors
Now that we have instructors and students, we'd be nowhere without our PM's
ProjectManagers are extensions of Instructors

ProjectManagers have the following unique props:
@ gradClassName: i.e. CS1
@ favInstructor: i.e. Sean

ProjectManagers have the following Methods:
@ standUp a method that takes in a slack channel and logs `{name} announces 
to {channel}, @channel standy times!​​​​​
@ debugsCode a method that takes in a student object and a subject and logs out 
{name} debugs {student.name}'s code on {subject}

##############################################################################
*/

class ProjectManager extends Instructor{
	constructor(projectManagerAttr){
		super(projectManagerAttr);
		this.gradClassName = projectManagerAttr.gradClassName;
		this.favInstructor = projectManagerAttr.favInstructor;
	}
	
	standUp(channel){
		console.log(`${this.name} announces to ${channel}, @channel standy times!!`);
	}

	debugsCode(student, subject){
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
	}
}

// create objects for each class constructor

// Instructor object

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});


const dan = new Instructor({
  name: 'Dan',
  location: 'Utah',
  age: 32,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'React',
  catchPhrase: `Salt Lake Bees`
});



// Students

const matt = new Student({
  name: 'Matt',
  location: 'Indiana',
  age: 25,
  gender: 'male',
  previousBackground: 'US Marin',
  className: 'WEBPT6',
  favSubjects: ['HTML5', 'CSS3', 'JavaScript', 'NodeJS' ],
  grade: 68,
});



const soraia = new Student({
  name: 'Soraia',
  location: 'New York',
  age: 26,
  gender: 'famale',
  previousBackground: 'US Airforce',
  className: 'WEBPT6',
  favSubjects: ['HTML5', 'CSS3', 'JavaScript', 'Python' ],
  grade: 78,
});


// Project Manager

const caitlin = new ProjectManager({
  name: 'Caitlin',
  location: 'California',
  age: 25,
  gender: 'female',
  favLanguage: 'NodeJS',
  specialty: 'Back End',
  catchPhrase: 'That all I have for now!!',
  gradClassName: 'WEBPT16 Section Lead',
  favInstructor: 'Dan',

});


// Testing objects created above
console.log("#################################################\n");
console.log("############# Instructors #######################\n");
console.log(fred); // Instructor
console.log(fred.speak()); // Instructor method
console.log(dan);
console.log("#################################################\n");
console.log("################# Student #######################\n");
console.log(matt);
console.log(soraia);
console.log("#################################################\n");
console.log("############# Project Managers ##################\n");
console.log(caitlin);

// Testing method on the Instructor objects
console.log("\n ###################################################");
console.log("\n ############# Instructor Methods ##################");
console.log(dan.name);
console.log(dan.demo('React'));
console.log(dan.grade(matt, 'JavaScript Challenge'));
console.log(dan.specialty);

// Testing method on the Students objects
console.log("\n ###################################################");
console.log("\n ############# students Methods ##################");
console.log(matt.listsSubjects());
console.log(soraia.previousBackground);
console.log(matt.sprintChallenge('JAVA Spring boot'));
console.log(matt.className);



// Testing method on the Project Manager objects
console.log("\n ########################################################");
console.log("\n ################ Project Manager Methods ###############");
console.log(caitlin.standUp('WEBPT6'));
console.log(caitlin.debugsCode(matt, 'JavaScript Challenge'));
console.log(caitlin.specialty);

