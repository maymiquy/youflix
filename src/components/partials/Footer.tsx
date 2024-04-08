import { appConfig } from "@/config/app";
import { ModeToggle } from "../mode-toggle";
import { Logo } from "../logo";

export function Footer() {
 return (
  <footer className="flex flex-col items-center justify-between min-h-[rem] md:h-20 py-2 md:flex-row">
   <p className="text-center w-1/3 text-sm leading-loose text-muted-foreground md:text-left">
    The source code is available on{" "}
    <a
     href={appConfig.github.url}
     target="_blank"
     rel="noreferrer"
     className="font-medium underline underline-offset-4"
    >
     GitHub
    </a>{" "}
    .
   </p>
   <div className="flex flex-row items-center justify-self-end">
    <Logo />
   </div>
   <div className="hidden w-1/3 justify-end md:flex">
    <ModeToggle />
   </div>
  </footer>
 );
}
