import { useState } from "react";

interface InputProps {
  value?: string;
  password?: string;
}

const Slider = () => {
  const [password, setPassword] = useState("");

  const convertToStars = ({ value }: InputProps) => {
    return value?.replace(/./g, "*");
  };

  return (
    <div className="w-full px-4">
      <div
        className="w-full min-h-full flex py-4 rounded-2xl bg-no-repeat"
        style={{ backgroundImage: "url(/assets/images/sliderbg.png)" }}
      >
        <div
          className="grid w-full grid-cols-1 md:grid-cols-2 bg-blend-screen"
          // style={{backgroundImage: "url(/assets/images/slidervector.png)"}}
        >
          <div className="md:flex items-center hidden md:justify-end p-4 pl-4 md:pl-32">
            <div className="block text-center md:text-left p-8">
              <p className="text-[#00FF84] font-semibold py-1">
                Start Learning For Free
              </p>
              <h2 className="text-white text-3xl md:text-5xl py-2 font-bold">
                Explore your creativity with thousands of online classes.
              </h2>
              <button className="bg-white text-black border-white border rounded-md px-6 py-2.5 my-2 font-medium text-sm">
                Find Courses
              </button>
            </div>
          </div>
          {/* Slider Form */}
          <div className="flex items-center p-4 w-full">
            <div className="bg-white rounded-lg w-full md:w-3/5 p-6 py-10">
              <h2 className="text-center md:text-left font-semibold">
                Create Your{" "}
                <span className="text-primary">Free Account</span>
              </h2>
              <form className="p-2 w-full">
                <div className="py-2">
                  <label className="font-medium w-full text-left justify-start flex py-1">
                    Email Address
                  </label>
                  <input className="inputform" />
                </div>
                <div className="py-2">
                  <label className="font-medium w-full text-left justify-start flex py-1">
                    Password
                  </label>
                  <input
                    value={convertToStars({ password })}
                    className="inputform"
                    type="password"
                  />
                </div>
                <div className="py-4 w-full">
                  <button className="py-3 w-full rounded-lg bg-primary border-primary text-sm border text-white">
                    Start Learning For Free
                  </button>
                </div>
                <p className="text-left text-sm">
                  By continuing, you accept our Terms of Use, our Privacy Policy
                  and that your data is stored in the USA. You confirm you are at
                  least 16 years old (13 if you are an authorized Classrooms user).
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
