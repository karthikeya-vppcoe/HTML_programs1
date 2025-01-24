const Employee = require('../model/Employee');

// post or inset data
const createEmployee = async (req, res) => {
  try {
    const{name, email, phone,}=req.body;
    const employee = new Employee({
        name,
        email,
        phone
    });
    await employee.save();
    res.status(201).json({message:"Employee created successfully", employee});
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error"});    
    }
};

// get or fetch  here in below code we are fetching all the data from the database
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({employees});
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error"});    
    }
};
// get or fetch  here in below code we are fetching the data from the database by id
const getEmployee= async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if(!employee){
      return res.status(401).json({message:"Employee not found"});
    }
    res.status(200).json({employee});
  } catch (error) {
    console.log(error);
    res.status(501).json({message:"Internal server error"});    
    }
};

//update or put 
const updateEmployee=async(request,response)=>{
  try{
      const{name,email,phone}=request.body;
      const myEmployee=await Employee.findByIdAndUpdate(request.params.id,
      {name,email,phone}
      )
      if(!myEmployee)
      {
          return response.status(404).json({message:"Employee document is not updated"})
      }
      response.status(200).json(myEmployee);

  }
  catch(err){
      console.log(err);
      response.status(501).json({message:"Server related error"})
  }
}

//Delete or remove 

const deleteEmployee=async(request,response)=>{
  try{
      const myEmployee=await Employee.findByIdAndDelete(request.params.id);
      if(!myEmployee)
      {
          return response.status(404).json({message:"Employee document is not deleted"})
      } 
      response.status(200).json({message:"Employee document is deleted successfully"});
  }
  catch(err){
      console.log(err);
      response.status(501).json({message:"Server related error"})
  }
}

module.exports = {createEmployee, getEmployees, getEmployee,updateEmployee,deleteEmployee};