let users = [
    {
        id: 1,
        name: 'Rahul',
        email: 'rahul@gmail.com',
        phoneNumber: '9859868532',
        dateOfBirth: '12/11/2001',
        collegeStartDate: '21/08/2019',
        collegeEndDate: '24/09/2022',
        workStartDate: '1/05/2023',
        workEndDate: '30/07/2025',
        address: 'hyderabad,telangana,india'
    },
    {
        id: 2,
        name: 'John',
        email: 'john@gmail.com',
        phoneNumber: '9859868532',
        dateOfBirth: '21/01/1998',
        collegeStartDate: '24/07/2013',
        collegeEndDate: '10/09/2016',
        workStartDate: '1/02/2017',
        workEndDate: '30/09/2022',
        address: 'hyderabad,telangana,india'
    }
];

const userData = async (req, res) => {
    res.json(users);
};
const createUser = async(req,res)=>{
    const user=req.body
    users.push(user);
    console.log(req,res,'user',users);
    res.status(201).json({
    message: 'User added successfully',
    user: user
  });
}

module.exports = {
    userData,
    createUser
}