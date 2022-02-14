function developer(name){
    this.name = name;
    this.type = "developer";
    this.kip = "hallo"
}

function tester(name){
    this.name = name;
    this.type = "tester";
}

function EmployeeFactory()
{
    this.create = (name, type) => {
        switch (type)
        {
            case 1:
                return new developer(name);
                break;
            case 2:
                return new tester(name);
                break;
        }
    }
}


function say(){
    console.log("ik ben " + this.name + " type " + this.type)
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("patrick", 1))
employees.push(employeeFactory.create("john", 2))
employees.push(employeeFactory.create("kip", 2))
employees.push(employeeFactory.create("sate", 1))


employees.forEach(emp => {
    say.call(emp)
})

// source https://www.youtube.com/watch?v=kuirGzhGhyw