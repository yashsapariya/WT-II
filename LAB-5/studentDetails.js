const fs = require('fs');
const studentDetails = [
    "StudentID:542,StudentName:Nandan Popat,StudentEnrollmentNumber:24010101676,StudentMobileNumber:7048470585 StudentDepartment:CSE StudentSPI:7.22",
    "StudentID: 135, StudentName: Aakash Kumar, StudentEnrollmentNumber: 24010201987, StudentMobileNumber: 9876543210, StudentDepartment: ECE, StudentSPI: 8.02",
    "StudentID: 576, StudentName: Neha Sharma, StudentEnrollmentNumber: 24010207654, StudentMobileNumber: 9087654321, StudentDepartment: CSE, StudentSPI: 7.91",
    "StudentID: 129, StudentName: Rohan Verma, StudentEnrollmentNumber: 24010109123, StudentMobileNumber: 9546237081, StudentDepartment: ME, StudentSPI: 6.78",
    "StudentID: 892, StudentName: Priya Mehta, StudentEnrollmentNumber: 24010305874, StudentMobileNumber: 8235674310, StudentDepartment: IT, StudentSPI: 8.11",
    "StudentID: 342, StudentName: Siddharth Raj, StudentEnrollmentNumber: 24010105678, StudentMobileNumber: 8745639102, StudentDepartment: EEE, StudentSPI: 7.45",
    "StudentID: 463, StudentName: Anjali Gupta, StudentEnrollmentNumber: 24010204567, StudentMobileNumber: 9123456789, StudentDepartment: CSE, StudentSPI: 7.89",
    "StudentID: 875, StudentName: Manish Yadav, StudentEnrollmentNumber: 24010102896, StudentMobileNumber: 8234567890, StudentDepartment: IT, StudentSPI: 8.30",
    "StudentID: 249, StudentName: Shruti Agarwal, StudentEnrollmentNumber: 24010207341, StudentMobileNumber: 9456781230, StudentDepartment: ME, StudentSPI: 6.90",
    "StudentID: 633, StudentName: Varun Joshi, StudentEnrollmentNumber: 24010306124, StudentMobileNumber: 9865432101, StudentDepartment: ECE, StudentSPI: 8.57",
    "StudentID: 384, StudentName: Pooja Desai, StudentEnrollmentNumber: 24010106543, StudentMobileNumber: 7632594810, StudentDepartment: IT, StudentSPI: 7.74",
    "StudentID: 540, StudentName: Vikram Rao, StudentEnrollmentNumber: 24010201236, StudentMobileNumber: 9345678201, StudentDepartment: ECE, StudentSPI: 7.35",
    "StudentID: 167, StudentName: Tanya Singh, StudentEnrollmentNumber: 24010108456, StudentMobileNumber: 8675309245, StudentDepartment: CSE, StudentSPI: 8.47",
    "StudentID: 439, StudentName: Aman Patel, StudentEnrollmentNumber: 24010201564, StudentMobileNumber: 9054321987, StudentDepartment: EEE, StudentSPI: 6.56",
    "StudentID: 711, StudentName: Snehal Mehta, StudentEnrollmentNumber: 24010304276, StudentMobileNumber: 9876123456, StudentDepartment: IT, StudentSPI: 7.89",
    "StudentID: 829, StudentName: Karan Gupta, StudentEnrollmentNumber: 24010107512, StudentMobileNumber: 9035678241, StudentDepartment: ME, StudentSPI: 7.62",
    "StudentID: 528, StudentName: Sonali Chauhan, StudentEnrollmentNumber: 24010204968, StudentMobileNumber: 9087216345, StudentDepartment: ECE, StudentSPI: 8.21",
    "StudentID: 765, StudentName: Ashish Kumar, StudentEnrollmentNumber: 24010306784, StudentMobileNumber: 9123486701, StudentDepartment: CSE, StudentSPI: 8.56",
    "StudentID: 210, StudentName: Divya Nair, StudentEnrollmentNumber: 24010101035, StudentMobileNumber: 8756349210, StudentDepartment: IT, StudentSPI: 7.89",
    "StudentID: 901, StudentName: Rajesh Joshi, StudentEnrollmentNumber: 24010207680, StudentMobileNumber: 9384765120, StudentDepartment: EEE, StudentSPI: 6.93",
    "StudentID: 354, StudentName: Kritika Rao, StudentEnrollmentNumber: 24010304567, StudentMobileNumber: 9283746051, StudentDepartment: ME, StudentSPI: 8.13"
]
const data = studentDetails.join('\n');
fs.appendFile('studentDetails.txt',data,(err)=>
{
    if(err)
    {
        console.log("Error writing to file: ",err)
    }
    else
    {
        console.log("Student Details written to file successfully")
    }
});