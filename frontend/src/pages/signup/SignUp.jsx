import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return  <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
     <div className="w-full p-6 rounded-lg shadow-md bg-indigo-400 bg-clip-padding backdrop-filter background-blur-lg 
    bg-opacity-0">
       <div>
            <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
                <span className='text-pink-200'> ChatApp</span>
            </h1>
            <form>
                <div>
                <label className="label p-2">
                    <span className="text-base label-text text-pink-200">Full Name</span>
                </label>
                <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full input input-bordered h-10"/>
                </div>
                <div>
                <label className="label p-2">
                    <span className="text-base label-text text-pink-200">Username</span>
                </label>
                <input 
                    type="text" 
                    placeholder="johndoe" 
                    className="w-full input input-bordered h-10"/>
                </div>
                <div>
                <label className="label">
                    <span className="text-base label-text text-pink-200">Password</span>
                </label>
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    className="w-full input input-bordered h-10 "/>
                </div>
                <div>
                <label className="label">
                    <span className="text-base label-text text-pink-200">Confirm Password</span>
                </label>
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    className="w-full input input-bordered h-10 "/>
                </div>
                <GenderCheckBox></GenderCheckBox>
                <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-pink-200'>
                   Already have an account?
                </a>
                <div>
                    <button className="btn btn-block btn-sm mt-2">Sign Up</button>
                </div>
            </form>
       </div>
       </div>
    </div>;
};

export default SignUp;
/* 
import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return  <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
     <div className="w-full p-6 rounded-lg shadow-md bg-indigo-400 bg-clip-padding backdrop-filter background-blur-lg 
    bg-opacity-0">
       <div>
            <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
                <span className='text-pink-200'> ChatApp</span>
            </h1>
            <form>
                <div>
                <label className="label p-2">
                    <span className="text-base label-text text-pink-200">Full Name</span>
                </label>
                <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full input input-bordered h-10"/>
                </div>
                <div>
                <label className="label p-2">
                    <span className="text-base label-text text-pink-200">Username</span>
                </label>
                <input 
                    type="text" 
                    placeholder="johndoe" 
                    className="w-full input input-bordered h-10"/>
                </div>
                <div>
                <label className="label">
                    <span className="text-base label-text text-pink-200">Password</span>
                </label>
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    className="w-full input input-bordered h-10 "/>
                </div>
                <div>
                <label className="label">
                    <span className="text-base label-text text-pink-200">Confirm Password</span>
                </label>
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    className="w-full input input-bordered h-10 "/>
                </div>
                <GenderCheckBox></GenderCheckBox>
                <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-pink-200'>
                   Already have an account?
                </a>
                <div>
                    <button className="btn btn-block btn-sm mt-2">Sign Up</button>
                </div>
            </form>
       </div>
       </div>
    </div>;
};

export default SignUp; */