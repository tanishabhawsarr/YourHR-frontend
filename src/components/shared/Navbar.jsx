import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "../../utils/constant.js";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 h-16 max-w-7xl">
        <div>
          <h1 className="text-2xl font-bold">
            Your<span className="text-[#F83002]">HR</span>
          </h1>
        </div>

        <div className="flex items-center gap-6 lg:gap-12">
          {/* Links should stay in a row on all screen sizes */}
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
          </ul>

          <div className="flex items-center gap-4 sm:gap-2">
            {!user ? (
              <>
                <Link to="/login">
                  <Button variant="outline" className="text-sm sm:text-base">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-[#6a38c2] hover:bg-[#5b30a6] text-sm sm:text-base">
                    SignUp
                  </Button>
                </Link>
              </>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>

                <PopoverContent className="w-full sm:w-80">
                  <div>
                    <div className="flex gap-4 items-center">
                      <Avatar className="cursor-pointer">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                      </Avatar>
                      <h1 className="font-medium">YourHR-Job Search</h1>
                    </div>

                    <div className="flex flex-col my-2 text-gray-600 mx-2">
                      <div className="flex w-fit items-center gap-2 cursor-pointer ">
                        <User2 />
                        <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                      </div>
                      <div className="flex w-fit items-center gap-2 cursor-pointer ">
                        <LogOut />
                        <Button onClick={logoutHandler} variant="link">LogOut</Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
