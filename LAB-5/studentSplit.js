const fs = require('fs');

const data = fs.readFileSync('studentDetails.txt', 'utf8');

if (data) {
    const students = data.split('\n').map(line => {
        const [StudentID, StudentName, StudentSurename, StudentEnrollmentNumber, StudentMobileNumber, StudentDepartment, StudentSPI] = line.split(' ');

        return {
            StudentID,
            StudentName,
            StudentSurename,
            StudentEnrollmentNumber,
            StudentMobileNumber,
            StudentDepartment,
            StudentSPI
        };
    });

    console.log('Student Details:', students);

// practical 6:
    const lowSPIStudents = students.filter(student => student.StudentSPI > 6);
    console.log('Students with SPI > 6:', lowSPIStudents);

} else {
    console.log('The file is empty.');
}
