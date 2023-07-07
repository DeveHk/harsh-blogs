import { Roboto } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "public/logoblog.svg";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavLink from "./NavLink";
type Props = {};
const profile = {
  name: "John snow",
};
const roboto = Roboto({ weight: "300" });

const ACTIVELINKTYLE = "text-3xl";

const Navbar = (props: Props) => {
  const [nav, setNav] = useState<any>(false);
  const onScroll = useCallback((event: any) => {
    const { scrollY } = window;
    if (scrollY >= 20) setNav(true);
    else setNav(false);
  }, []);
  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const [show, setShow] = useState(false);

  const router = useRouter();
  return (
    <div className="relative flex w-full  flex-col ">
      <div
        className={`mt-5 navbar fixed z-[21] grid grid-cols-12  ${
          nav && "bg-yellow-900 bg-opacity-20 backdrop-blur-[10px]"
        } flex  h-[50px] w-full items-center py-1 px-6 md:h-[58px]`}
      >
        <div
          className={`col-span-2 flex   w-12 items-center justify-center  py-2 md:hidden `}
          onClick={() => setShow(!show)}
        >
          <AiOutlineMenu className="text-gray-200 h-5 w-5"></AiOutlineMenu>
        </div>

        <div className="col-span-8 flex justify-center  md:col-span-2 md:justify-start ">
          <Link href="/" className="  logo w-28 md:w-28 lg:ml-10">
            <Image
              className="ml-5  "
              width={50}
              height={50}
              src={logo}
              alt=""
            />
          </Link>
        </div>

        <ul
          className={`links hidden w-full items-center justify-around gap-8 md:col-span-9 md:flex  md:px-[5%] lg:col-span-8 lg:px-[10%] xl:px-[20%]  font-roboto  text-white`}
        >
          <NavLink href="/technology">Technology</NavLink>
          <NavLink href="/design">Design</NavLink>
          <NavLink href="/finance">Finance</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/about">About</NavLink>
          {/*<NavLink href="/about">About Us</NavLink>*/}
        </ul>

        {/* //Profile Button */}
      </div>

      {/*Ham menu */}
      <div
        className={` ${
          show
            ? "origin-top translate-x-[35vw] rotate-[0]  shadow-black "
            : "translate-x-0 rotate-[90deg]"
        }  fixed -left-[35vw] top-0 z-20 h-[100vh] w-[35vw] origin-top    transition-[transform] duration-500  md:hidden`}
      >
        <ul
          className={`flex flex-col justify-center shadow-2xl ${"font-koulen"} h-full w-[50vw]  space-y-10 rounded-br-[50%] rounded-tr-[50%] bg-prussian-blue-950 bg-opacity-20    pl-8 text-white backdrop-blur-[20px]`}
        >
          <NavLink href="/technology">Technology</NavLink>
          <NavLink href="/design">Design</NavLink>
          <NavLink href="/finance">Finance</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/about">About</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
/**
 *  <NavLink href="/about" imgScale={110}>
            About Us
          </NavLink>
 * *
          <div
        className={` ${
          show
            ? "origin-top translate-x-[35vw] rotate-[0]  shadow-black "
            : "translate-x-0"
        }  fixed -left-[35vw] top-0 z-20 h-[99vh] w-[35vw] origin-top rotate-[90deg]   transition-[transform] duration-1000  md:hidden`}
      >
          
 *  const handleLogout = async () => {
    sessionStorage.clear();
    const { error } = await supabase.auth.signOut();
  };
 *  //const session = useSession();
  //const user = useUser();
  // const supabase = useSupabaseClient();
  // const [profileMenu, setProfileMenu] = useState(false);
 * import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
 *  {<div className="profile-btn relative col-span-2 flex  items-center   justify-end md:col-span-1 lg:col-span-2">
          <button
            className="flex h-[45px]  items-center justify-center gap-3 rounded-full  lg:px-10"
            onClick={() => {
              if (session) setProfileMenu(!profileMenu);
            }}
          >
            {!session && (
              <Link href="/userlogin">
                <button className="relative -right-1 w-24 rounded-md  bg-saffron-500 px-4 py-1 font-koulen">
                  LogIn
                </button>
              </Link>
            )}
            {profileMenu && (
              <div className=" absolute top-full right-0 flex w-40 flex-col items-center gap-2 rounded bg-white py-2">
                {session && (
                  <button
                    onClick={handleLogout}
                    className="w-24 rounded-md bg-saffron-500 px-4 py-1 font-koulen"
                  >
                    LogOut
                  </button>
                )}
                {!session && (
                  <Link href="/userlogin">
                    <button className="w-24 rounded-md bg-saffron-500 px-4 py-1 font-koulen">
                      LogIn
                    </button>
                  </Link>
                )}

                {user && (
                  <Link
                    href={
                      user?.user_metadata.isAdmin
                        ? "/admin/events"
                        : "/user/regevents"
                    }
                  >
                    <button className="w-24 rounded-md bg-saffron-500 px-4 py-1 font-koulen">
                      Dashboard
                    </button>
                  </Link>
                )}
              </div>
            )}

            {session && (
              <div className="profile-pic flex h-6 w-10 items-center justify-center rounded-full">
                <Image
                  width={100}
                  height={100}
                  src={profilePic}
                  alt=""
                  className="w-8"
                />
              </div>
            )}
            {/*            <span
              className={`${'font-koulen'}  hidden text-xl text-white sm:block`}
            >
              {profile.name.split(" ")[0].slice(0, 8)}
          </span>}
          </button>
        </div>}
 */
