 //Parent class
 function School(name,address){
	 this.name = name;
	 this.address = address;
	 this.type = "Learning Institution";
	 this.studentList = [];
	 this.staff = [];
	 this.certIsued = "Certificate";
	 this.getAbout = function (){
		return "Welcome to " + this.name + " located at " + this.address + ". We are a " + this.type;
		
	 };
	 this.setAbout = function (name,address){
		 this.address = address;
		 this.name = name;
	 };
	 this.admitStudents = function (stdname){
		 this.studentList.push(stdname);
		return stdname;
	 };
	 this.viewStudents = function(){
		 var l = this.studentList.length;
		 var list = "";
		 for (var a = 0; a<=l; a++){
			list +=  this.studentList[a];
		 }
		 
		return list;
	 };
	 this.employStaff = function(stfname){
		 this.staff.push(stfname);
		 
	 };
	 this.expellStudent = function(stdname){
		 delete this.studentList[stdname];
		 
	 }
 }
 
 //first child class
 function PrimarySchool(name,address){
	this.type = "Primary School"; 
	 this.name = name;
	 this.address = address;
	 this.studentList = [];
	 this.staff = [];
	 this.certIsued ="Certificate";
 }
 PrimarySchool.prototype = new School();
 PrimarySchool.prototype.constructor = PrimarySchool;
 
 //second child class; inheritance.
 function SecondarySchool(name,address){
	this.type = "Secondary School"; 
	 this.name = name;
	 this.address = address;
	 this.studentList = [];
	 this.staff = []; 
	 this.certIsued ="Certificate";
	 //polymorphism.
	 this.vacation = function(){
		 return "Were are currently on vacation";
	 }
 }
 SecondarySchool.prototype = new School();
 SecondarySchool.prototype.constructor = SecondarySchool;
 
 School.prototype.vacation = function (){
	 return "Welcome to " + this.name + " located at " + this.address + ". We are a " + this.type + "Were are currently on vacation";
 }
 