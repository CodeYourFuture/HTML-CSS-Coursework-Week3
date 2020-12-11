function participant(students, mentors) {
    let percentageOfStudent = students / (students + mentors)*100;
    let percentageOfMentors = mentors / (students + mentors)*100;
    return percentageOfStudent;
    
}
console.log("The percentage of student participant is" + " " + Math.round(participant(15, 8)) + "%");



