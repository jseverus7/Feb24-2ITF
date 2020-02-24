class Student
{
    constructor(name, course, section)
    {
        this.name = name;
        this.course = course;
        this.section = section;
    }

    enroll(subject)
    {
        console.log(`${this.name}, ${this.course} is enrolled in section ${this.section}`);
        console.log(`He is studying ${subject}`);
    }
}

let stud1 = new Student("Juan Dela Cruz", "Information Technology", "2ITF");
stud1.enroll("ICS2609");