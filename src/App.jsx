import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";
import { Calendar } from "@/components/ui/calendar"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
 


import Hero from "./Hero";
import Navigation from "./Navigation";

function App() {
  const name = "Yasindu";
  const cartCount = 100;

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero />
      <div className="p-4">
        <Button variant="destructive">Buy Now</Button>
      </div>

      <div className="p-4">
        <h2>Alert Dialog</h2>
        <AlertDialog>
          <AlertDialogTrigger>
          <Button>Click Me</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="p-4">
      <h2>Alert</h2>
      <Alert variant="destructive">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>

      </div>

      <div className="p-4">
      <Button>
      <Mail /> Login with Email
    </Button>
      </div>

      

      <div className="p-4"> 
        <h2>Calendar</h2>
        <Calendar/>
      </div>
    </div>
    
  );
}

export default App;
