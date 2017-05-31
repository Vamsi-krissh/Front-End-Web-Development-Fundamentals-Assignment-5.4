var employer ={

Employee : {
name:'Vamsi',
age:25,
salary:40000,
Address:{city:"Hyderabd",
State :"Telangana",
Pincode:500073
}},
 Employee1 : {
name:'krishna',
age:25,
salary:30000,
Address:{city:"vizag",
State :"Ap",
Pincode:500090
}},
Employee2 : {
name:'Upendra',
age:30,
salary:50000,
Address:{city:"Chennai",
State :"Tamilnadu",
Pincode:600119
}}
}

console.log("Name:"+employer.Employee["name"]+
"\n"+"Age:"+employer.Employee["age"]+
"\n"+"salary:"+employer.Employee["salary"]+
"\n"+"city:"+employer.Employee.Address["city"]+
"\n"+"State:"+employer.Employee.Address["State"]+
"\n"+"Pincode:"+employer.Employee.Address["Pincode"]);