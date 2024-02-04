

import ToastSuccess from '@/components/Shared/Toast/ToastSuccess';
import {MongoConnection} from '../mongodb/DbConnection'
import {User} from '../mongodb/model/userModel'
import bcrypt from "bcryptjs";


const page = async () => {

    const userFormData = async (formData: FormData) => {
        "use server"
 
        const rawFormData:any = {
            username: formData.get('username'), 
            password: formData.get('password'), 
        }
        await MongoConnection();
        const userInutName = rawFormData.username; 
      
        
        async function checkUser() {
            //... fetch user from a db etc.
            const res = await User.findOne({username: userInutName })
            const user:string = res._doc.password;
            const inputPassword = rawFormData.password;
            
            
            const message = "success"
            const match = await bcrypt.compare(inputPassword, user);
        
            if(match) {
                //login
               
                console.log('Authorized');
                
            }else{
                console.log("Unauthorized");
                
            }
            
            

        }
       
        checkUser()  

    }


    return (
        <div className="hero min-h-screen bg-base-200">
       
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form action={userFormData} className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">username</span>
                            </label>
                            <input type="text" placeholder="username" name="username" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;