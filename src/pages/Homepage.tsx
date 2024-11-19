import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon } from "lucide-react";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center py-10 items-center gap-5 sm:gap-7">
      <div className=" text-base sm:text-3xl font-bold neu sm:w-[50vw] w-[80vw] min-h-[20vh] bg-mainAccent flex flex-col justify-center items-center gap-3 text-white">
        <p className="break-words text-center">
          SELAMAT DATANG DI WEBSITE PORTFOLIO
        </p>
        <p className="bg-bg py-2 px-6 rounded-lg sm:text-lg text-base text-black">
          RYAN KUSUMA
        </p>
      </div>

      <div className=" text-lg  sm:text-3xl font-bold neu sm:w-[50vw] w-[80vw] min-h-[20vh] bg-mainAccent flex flex-col justify-center items-center gap-3 text-white">
        <div className="border-2 border-black sm:mx-10 mx-6 sm:my-10 my-6 rounded-lg bg-bg text-black px-6 sm:py-6 py-3  font-semibold text-sm sm:text-lg">
          <li>
            Saya adalah seorang alumni Program Studi Computer Engineering dari
            Politeknik Negeri Medan.
          </li>
          <Separator className="sm:hidden block my-2" />
          <li>
            Sebagai seorang Web Developer, saya memiliki pengalaman dalam
            membangun aplikasi web modern menggunakan React dan Next.js, baik
            dengan JavaScript maupun TypeScript.
          </li>
          <Separator className="sm:hidden block my-2" />
          <li>
            Saya juga sering menggunakan ShadCN UI untuk menciptakan antarmuka
            pengguna yang menarik dan responsif.
          </li>
        </div>
      </div>
      <Button className="bg-secAccent text-sm sm:text-lg uppercase sm:h-12 text-center">
        Hubungi saya!
        <ArrowRightIcon size={15} />
      </Button>
    </div>
  );
};

export default Homepage;
