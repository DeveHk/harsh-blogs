import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  className?: string;
  imgScale?: number;
  children: string;
  underlineclassName?: string;
};

const NavLink = (props: Props) => {
  const { href, className, imgScale, children, underlineclassName } = props;
  const router = useRouter();
  //
  return (
    <Link
      href={href}
      className={`link  text-gray-100 relative  ${
        router.asPath.split("/").at(1) === href.split("/").at(1)
          ? "flex  w-fit  font-semibold bg-gradient-to-r from-[#3b7edc]  via-[#5e93dc] text-clip text-transparent bg-clip-text to-[#a0afc4cc]   flex-col items-center justify-center text-center text-[15px]"
          : "text-[15px] "
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
