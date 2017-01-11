abstract class Department{
	constructor(public name: string){

	}

	printName():void{
		console.log("Department Name: " + this.name);
	}

	abstract printMeeting():void; //Must be implemented in derived classes
}


class AccountingDepartment extends Department{
	constructor(){
		super("Accounting and Auditing"); // constructors in derived classes must call super
	}

	printMeeting():void{
		console.log("The Accounting Department meets each Monday at 10am.");
	}

	generateReports():void{
		console.log("Generating accounting reports...");
	}
}


class HRDepartment extends Department{
	constructor(){
		super("Recruiting and Staffing"); // constructors in derived classes must call super
	}

	printMeeting():void{
		console.log("The Human Resource Department meets each Monday at 11am.");
	}

	generateReports():void{
		console.log("Generating New Joinees reports...");
	}
}

class ResearchAndDevelopmentDepartment extends Department{
	constructor(){
		super("Research and Development"); // constructors in derived classes must call super
	}

	printMeeting():void{
		console.log("The Research and Development meets each Tuesday at 10am.");
	}

	generateReports():void{
		console.log("Generating annual project reports...");
	}
}

let department: Department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//department.generateReports(); // error: method doesn't exist on declared abstract type


department = new HRDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();

department = new ResearchAndDevelopmentDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();

