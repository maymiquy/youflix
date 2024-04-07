import { buttonVariants } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function NotFound() {
 return (
  <div className="bg-background text-foreground flex-grow flex-col space-y-4 flex items-center justify-center">
   <div className="space-y-4 border p-8 rounded-lg">
    <h2 className="text-8xl text-center mb-4">404</h2>
    <div className="border" />
    <h1 className="text-3xl font-semibold">Oops! Page not found</h1>
    <p className="text-sm text-muted-foreground">
     We are sorry, Error occurred while processing your request page.
    </p>
   </div>
   <NavLink to="/" className={buttonVariants()}>
    Back to Home
   </NavLink>
  </div>
 );
}
