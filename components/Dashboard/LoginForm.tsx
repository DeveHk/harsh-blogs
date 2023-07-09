import { Spinner, useToast } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import google from "../../public/google.svg";

import Axios from "axios";
import { AiOutlineCheck, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { supabase } from "../../db/supabaseClient";
import img from "../../public/login.svg";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const toast = useToast();
  //const [user,setUser]=useUserState()
  {
    /**Signup functionality */
  }

  {
    /**Google sign in Handeler*/
  }
  const router = useRouter();
  const [tokenClient, setTokenClient] = useState<any>({});
  const googleSignHandler = () => {
    tokenClient.requestAccessToken();
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUserData");
    if (storedUser) {
      router.push("/dashboard");
    }

    const google = (window as any).google; //getting global google variable. It is declared in HTML script
    google.accounts.id.initialize({
      client_id:
        process.env.GOOGLE_CLIENT_ID ||
        "787750941206-jvh44itqk0mgue54jpmuic06hhs7b0qm.apps.googleusercontent.com",
    });
    //to get the access token for jwt signup
    setTokenClient(
      google.accounts.oauth2.initTokenClient({
        client_id:
          process.env.GOOGLE_CLIENT_ID ||
          "787750941206-jvh44itqk0mgue54jpmuic06hhs7b0qm.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/userinfo.email",
        callback: (tokenResponse: any) => {
          if (tokenResponse && tokenResponse.access_token) {
            const googleAccessToken = tokenResponse.access_token;
            console.log(
              "tokenResponse.access_token",
              tokenResponse.access_token
            );
            setGproces(true);
            Axios.post("/api/signup", {
              googleAccessToken,
            })
              .then((result) => {
                console.log(result);
                localStorage.setItem(
                  "currentUserData",
                  JSON.stringify(result.data.user)
                );
                //setUser(result);
                return Axios.get(
                  `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`,
                  {
                    headers: {
                      Authorization: `Bearer ${tokenResponse.access_token}`,
                      Accept: "application/json",
                    },
                  }
                );
              })
              .then((res) => {
                localStorage.setItem("currentUser", googleAccessToken);
                //setToken(googleAccessToken);

                router.push("/dashboard");
                setGproces(false);
              })
              .catch((err) => {
                setWpass(err);
              });
          }
        },
      })
    );
    google.accounts.id.prompt();
  }, [router]);

  //Client secreat: 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
  ///////////////////////////////////////////////////////////////////////////////////////

  const handleSignup = async (event: any) => {
    event.preventDefault();
    try {
      if (password == cpassword) {
        setProces(true);
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) {
          setWpass(error.message);
          throw error;
        }

        // User signed up successfully
        console.log("Signup successful:", data);
        toast({
          title: `Sign up`,
          description: "We've created an account for you.",
          status: "success",
          duration: 5000,
          position: "top-right",
          isClosable: true,
        });
        //now loggin in to account
        await handleSignin(event);
        // Store user information in local storage
        setProces(false);
        setWpass("");
        setEmail("");
        setPassword("");
        setCpassword("");
      } else setWpass("confirm password mismatch");
    } catch (error) {
      console.log("Signup failed:", error);
    }
    setProces(false);
  };

  const handleSignin = async (event: any) => {
    event.preventDefault();
    try {
      setProces(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setWpass(error.message);
        console.log("Signin failed:", error.message);
        throw error;
      }
      // User signed in successfully
      console.log("Signin successful:", data);
      toast({
        title: `Sign in`,
        description: "We've logged in to your account.",
        status: "success",
        duration: 5000,
        position: "top-right",
        isClosable: true,
      });

      localStorage.setItem("user", JSON.stringify(data));
      // Optionally, you can redirect to another page or perform any other actions
      setProces(false);
      setWpass("");
      setEmail("");
      setPassword("");
      setCpassword("");
    } catch (error) {
      console.error("Signin failed:", error);
    }
    setProces(false);
  };

  const [wpass, setWpass] = useState("");

  const [proces, setProces] = useState(false);

  const [gproces, setGproces] = useState(false);
  const [inp, setInp] = useState(false);
  const [pass, setPass] = useState(false);
  const [cpass, setCpass] = useState(false);

  {
    /*signup functionality to be added latter*/
  }
  const [sign, setSign] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <div
      onMouseOver={() => {
        setFocused(true);
      }}
      onMouseLeave={() => {
        setFocused(false);
      }}
      className={`first-letter:max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 m-7 rounded-3xl transition-[transform,_box-shadow] duration-100 ${
        focused ? " cursor-pointer shadow-xl shadow-slate-900" : "shadow-sm"
      }`}
    >
      <div className="overflow-hidden  rounded-3xl">
        <div className="max-h-[220px] overflow-hidden">
          <Image
            className="w-full h-full  "
            width={100}
            height={100}
            src={img}
            alt=""
          />
        </div>
        <div className="p-5">
          <div className="">
            <h5 className="mb-2 text-2xl font-serif  tracking-wide text-gray-900 dark:text-white">
              {sign ? "Create Your Account" : "Login To Your Account"}
            </h5>
          </div>
          <div
            onClick={() => {
              setSign(!sign);
              setWpass("");
            }}
            className="bg-green-600 bg-opacity-30 text-gray-300 font-sans text-sm inline-flex px-8"
          >
            {sign ? "Existing User" : "New user signup"}
          </div>
          <div className="">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
              nesciunt velit officiis, expedita obcaecati sit commodi. Excepturi
              laudantium nostrum quibusdam.
            </p>
          </div>
          <div className="flex flex-wrap">
            <Marquee>
              {[
                ["new"],
                ["user"],
                ["awsome"],
                ["blogger"],
                ["fun"],
                ["new"],
                ["user"],
                ["awsome"],
                ["blogger"],
                ["fun"],
                ["new"],
                ["user"],
                ["awsome"],
                ["blogger"],
                ["fun"],
              ].map((word: any, i: any) => {
                return (
                  <div
                    className=" m-1 mt-2 bg-red-600 bg-opacity-25 rounded-2xl text-gray-400 font-sans text-xs px-2 flex flex-wrap"
                    key={i}
                  >
                    #{word[0]}
                  </div>
                );
              })}
            </Marquee>
          </div>
          <div className=" w-full flex-col items-center  justify-between mt-4 ">
            <div className="flex flex-col w-full ">
              {/**User name */}
              <div className="w-full flex justify-center px-2 sm:px-6 items-center flex-col">
                <div className="h-[30px] w-full relative overflow-hidden rounded-2xl">
                  <div className="bg-white absolute -bottom-4 left-5 w-5 h-5"></div>
                  <div
                    className={`${
                      inp ? "border border-slate-600" : ""
                    } w-full h-full bg-slate-500 rounded-2xl bg-opacity-20 backdrop-blur-[20px] flex justify-center items-center space-x-2  `}
                  >
                    <AiOutlineUser className="h-7 w-7 text-blue-800"></AiOutlineUser>
                    <input
                      type="email"
                      placeholder="email"
                      className="w-[80%] bg-transparent font-sans focus:outline-0"
                      name=""
                      id=""
                      onBlur={() => setInp(false)}
                      onFocus={() => setInp(true)}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/**Password */}
              <div className="w-full flex justify-center px-2 sm:px-6 items-center flex-col mt-5">
                <div className="h-[30px] w-full relative overflow-hidden rounded-2xl">
                  <div className="bg-white absolute -bottom-4 left-5 w-5 h-5"></div>
                  <div
                    className={`${
                      pass ? "border border-slate-600" : ""
                    } w-full h-full bg-slate-500 rounded-2xl bg-opacity-20 backdrop-blur-[20px] flex justify-center items-center space-x-2  `}
                  >
                    <AiOutlineLock className="h-7 w-7 text-blue-800"></AiOutlineLock>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-[80%] bg-transparent font-sans focus:outline-0"
                      name=""
                      id=""
                      onBlur={() => setPass(false)}
                      onFocus={() => setPass(true)}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/**Confirm password */}
              {sign && (
                <div className="w-full px-2 sm:px-6 flex justify-center items-center flex-col mt-5">
                  <div className="h-[30px] w-full relative overflow-hidden rounded-2xl">
                    <div className="bg-white absolute -bottom-4 left-5 w-5 h-5"></div>
                    <div
                      className={`${
                        cpass ? "border border-slate-600" : ""
                      } w-full h-full bg-slate-500 rounded-2xl bg-opacity-20 backdrop-blur-[20px] flex justify-center items-center space-x-2  `}
                    >
                      <AiOutlineCheck className="h-7 w-7 text-blue-800"></AiOutlineCheck>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-[80%] bg-transparent font-sans focus:outline-0"
                        name=""
                        id=""
                        onBlur={() => setCpass(false)}
                        onFocus={() => setCpass(true)}
                        value={cpassword}
                        onChange={(e) => setCpassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
              {wpass && (
                <div className="px-2 sm:px-6 text-red-500">{wpass}</div>
              )}
            </div>

            <div
              className="mt-5 flex justify-between h-8 bg-blue px-2 sm:px-6"
              onClick={googleSignHandler}
            >
              <button
                disabled={gproces}
                className="flex max-w-[200px]  items-center px-2 py-1 h-8 justify-center  text-gray-950 hover:bg-gray-300 mr-2 focus:ring-blue-300 focus:ring-4 font-sans rounded-lg bg-white"
              >
                <Image
                  className="h-full w-10 "
                  width={100}
                  height={100}
                  src={google}
                  alt=""
                />
                {gproces ? <Spinner></Spinner> : ""}
                <div className="flex-1 text-sm hidden sm:flex ">
                  Sign in With google
                </div>
                <div className="flex-1 text-sm sm:hidden">google</div>
              </button>

              <button
                disabled={proces}
                onClick={(e) => {
                  sign ? handleSignup(e) : handleSignin(e);
                }}
                className="inline-flex w-[100px]  items-center px-2 py-1 h-8 justify-center  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none "
              >
                {proces ? (
                  <Spinner></Spinner>
                ) : (
                  <div className=" font-sans text-center">
                    {sign ? "Sign Up" : "Log In"}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
/**
 * <div className="relative">
        <div
          className={`flex justify-center flex-col items-center absolute  top-0 h-full w-full p-7 `}
        >
          <div className="bg-gradient-to-l  from-[#c29109] to-[#d9b58f] rounded-full h-32 w-32 "></div>
        </div>

        <div >
          <div
            onMouseOver={() => {
              setFocused(true);
            }}
            onMouseLeave={() => {
              setFocused(false);
            }}
            className={`max-w-sm transition-[transform,_box-shadow] duration-100 bg-opacity-30 backdrop-blur-[90px]   shadow bg-gray-800  m-7 rounded-3xl ${
              focused
                ? "scale-[1.025] cursor-pointer shadow-xl shadow-slate-950"
                : "scale-100"
            }`}
          >
            <div className="overflow-hidden  rounded-3xl">
              <div className="p-5">
                <h5 className="mb-2 text-xl font-serif  tracking-wide text-gray-900 dark:text-white">
                  Login
                </h5>
                <div className="bg-yellow-600 bg-opacity-20 text-gray-400 font-sans text-sm inline-flex px-8">
                  Recommended
                </div>
              </div>
              <div className="max-h-[220px] overflow-hidden">
                <Image
                  className="w-full h-full  "
                  width={100}
                  height={100}
                  src={img}
                  alt=""
                />
              </div>
              <div className="p-5">
                <div className="">
                  <p className=" font-normal text-gray-700 dark:text-gray-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quia vero eius vitae porro laboriosam inventore facere tenetur sequi quo.
                  </p>
                </div>
                <div className="text-blue-500 mb-3 font-sans text-xs">
                  View More
                </div>
                <div className="flex flex-wrap">
                  {['dev'].map((word: any, i: any) => {
                    return (
                      <div
                        className=" m-1 mt-2 bg-yellow-600 bg-opacity-25 rounded-2xl text-gray-400 font-sans text-xs px-2 flex "
                        key={i}
                      >
                        #{word}
                      </div>
                    );
                  })}
                </div>
                <div className=" w-full flex items-center justify-center bg-black rounded-3xl mt-4 bg-opacity-25 py-1 text-center">
                  <div className="flex flex-col ">
                    <div className="text-gray-300 ">{data.by}</div>
                    <div className="text-gray-400 text-sm ">{data.des}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 */
