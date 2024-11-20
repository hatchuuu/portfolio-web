import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    // <div className="flex sm:flex-row flex-col w-full sm:justify-evenly justify-center items-center gap-5 sm:gap-0 px-0 sm:px-10">
    <div className="grid sm:grid-cols-5 sm:gap-0">
      <section className="col-span-3 self-center  mx-auto text-base sm:text-3xl font-bold neu sm:w-[40vw] w-[80vw] h-[20vh] sm:h-[50vh] bg-mainAccent flex flex-col justify-center items-center gap-3 text-white">
        <img src="/vector.png" alt="profile image" className="w-72" />
        <p className="break-words text-center">
          SELAMAT DATANG DI WEB PORTFOLIO
        </p>
        <Link to="/contact">
          <Button
            variant="neutral"
            className="bg-bg py-2 px-6 rounded-lg sm:text-lg text-base font-semibold text-black"
          >
            RYAN KUSUMA
          </Button>
        </Link>
      </section>

      <section className="col-span-2 self-end place-self-end text-lg sm:text-3xl font-bold sm:h-[87vh] sm:border-l-2 sm:border-black  sm:w-full w-[80vw] min-h-[20vh] sm:h- bg-mainAccent flex flex-col justify-center items-center gap-3 text-white">
        <div className="border-2 border-black sm:mx-10 mx-6 sm:my-10 sm:mt-20 h-full my-6 rounded-lg bg-bg text-black px-6 sm:py-6 py-3  font-semibold text-sm sm:text-lg">
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
          <Separator className="sm:hidden block my-2" />
          <li>Saya akan sangat senang jika dapat bekerja sama dengan anda .</li>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
