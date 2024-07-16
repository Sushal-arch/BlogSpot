import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex max-w-3xl mx-auto gap-8 flex-col md:flex-row md:items-center">
        <div className="flex-1">
          <Link to="/" className=" text-4xl font-bold dark:text-white ">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-lg px-2 py-1 text-white">
              Sushal's
            </span>
            Blog
          </Link>
          <p className="mt-5 text-sm font-semibold">
            This is demo project. Please enter your username and password to
            proceed further.
          </p>
        </div>
        <div className="flex-1 ">
          <form className=" flex flex-col gap-4">
            <div>
              <Label value="Your username"></Label>
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email"></Label>
              <TextInput type="email" placeholder="name@gmail.com" id="email" />
            </div>
            <div>
              <Label value="Your password"></Label>
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" typw="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex  text-sm gap-2 mt-5 font-semibold">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
