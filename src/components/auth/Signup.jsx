import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { useState } from "react";
import axios from "axios";
import {USER_API_END_POINT} from "../../utils/constant.js"
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {

    const [input,setInput]=useState({
        fullname:"",
        email:"",
        phoneNumber:"",
        password:"",
        role:"",
        file:"",
      });

      const navigate=useNavigate();
      const {loading}=useSelector(store=>store.auth);
      const dispatch=useDispatch();
  
      const changeEventHandler=(e)=>{
          setInput({...input,[e.target.name]:e.target.value});
      }
  
      const changeFileHandler=(e)=>{
          setInput({...input,file:e.target.files?.[0]});
      }

      const submitHandler= async (e)=>{
          e.preventDefault();
          const formData=new FormData();
          formData.append("fullname",input.fullname);
          formData.append("email",input.email);
          formData.append("phoneNumber",input.phoneNumber);
          formData.append("password",input.password);
          formData.append("role",input.role);
          if(input.file){
            formData.append("file",input.file);
          }
          try {
            dispatch(setLoading(true));
            const res=await axios.post(`${USER_API_END_POINT}/register`,formData,{
                headers:{
                    "Content-Type":"multipart/form-data"
                },
                withCredentials:true
            });
            if(res.data.success){
                navigate("/login");
                toast.success(res.data.message);
            }
          } catch (error) {
            console.log(error);
            toast.error(error.response.data.message); 
          }finally{
            dispatch(setLoading(false));
          }
      }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input 
            type="text" 
            value={input.fullname}
            name="fullname"
            onChange={changeEventHandler}
            placeholder="Enter your Full Name" />
          </div>

          <div className="my-2">
            <Label>Email</Label>
            <Input 
            type="email"
            value={input.email}
            name="email"
            onChange={changeEventHandler} 
            placeholder="abc@gmail.com" />
          </div>

          <div className="my-2">
            <Label>PhoneNumber</Label>
            <Input 
            type="text" 
            value={input.phoneNumber}
            name="phoneNumber"
            onChange={changeEventHandler} 
            placeholder="000-000-0000" />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input 
            type="password" 
            value={input.password}
            name="password"
            onChange={changeEventHandler} 
            placeholder="**** " />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5" >
              <div className="flex items-center space-x-2">
                <Input 
                    type="radio"
                    name="role"
                    value="Student"
                    checked={input.role==='Student'}
                    onChange={changeEventHandler} 
                    className="cursor-pointer"
                />
                <Label htmlFor="r1">Fresher</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input 
                    type="radio"
                    name="role"
                    value="Experienced"
                    checked={input.role==='Experienced'}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                />
                <Label htmlFor="r2">Experienced</Label>
              </div>
            </RadioGroup> 

            <div className="flex items-center gap-2">
                <Label>Resume</Label>
                <Input
                    accept=".pdf,.doc,.docx,.odt,.rtf"
                    type="file"
                    onChange={changeFileHandler}
                    className="cursor-pointer"
                />
            </div>      
          </div>       
          {
            loading ? 
            <Button><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button> :
            <Button type="submit" className="w-full my-4">Sign Up</Button>
          } 
          <span className="text-sm">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></span>

        </form>
      </div>
    </div>
  );
};

export default Signup;
