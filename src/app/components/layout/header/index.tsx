"use client";

import { Button } from "@/components/ui/button";
import Logo from "../logo";

const Header = () => {
  const handleDownloadPDF = () => {
    window.print();
  };
  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <div>
              <Logo />
            </div>

            {/* <Button
              variant={"outline"}
              onClick={handleDownloadPDF}
              className="button-fill relative overflow-hidden cursor-pointer w-fit h-full py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
            >
              <span className="relative z-10 text-xl font-medium text-foreground group-hover:text-primary-foreground transition-colors duration-300">
                Télécharger le CV
              </span>
            </Button> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
