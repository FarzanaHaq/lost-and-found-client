import { Link } from "react-router";
import ErrorPageFour from "../../assets/404 Error Page.svg";
import '../../../src/index.css'

const ErrorPage = () => {
  return (
    <div className="h-screen flex ">
      <div className="flex-1/2 mt-32">
        <h1 className="text-[50px] font-extrabold text-[#503BC3] text-center text-sm/13 sora-font">
          404 <br /> error
        </h1>
        <p className="text-[20px] font-semibold text-[#503BC3] text-center text-sm/9 mt-5">
          The page you are looking for was <br /> moved, removed, renamed or
          might <br /> never existed
        </p>
        <div className="flex justify-center mt-10">
          <Link to={"/"}>
            {" "}
            <button className="bg-[#31CED7] px-6 py-2 text-[16px] font-medium text-[#503BC3]">
              GO TO HOMEPAGE
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1/2 relative">
        <img src={ErrorPageFour} alt="" srcset="" />
        <a
          className="absolute bottom-4 right-55 text-[12px]"
          href="https://storyset.com/web"
        >
          Web illustrations by Storyset
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
