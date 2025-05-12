import Navigation from "@/components/front-end/Header/Navigation";
import Portfolio from "@/components/front-end/Main/Portfolio";
import Presentation from "@/components/front-end/Main/Presentation";
import Services from "@/components/front-end/Main/Services";
import Skills from "@/components/front-end/Main/Skills";


export default function Home() {
  return (
   <main className="flex min-h-screen flex-col ">
    <div className="px-24 py-6">
      <Navigation />
    </div>
    
    <div className="px-24 py-6">
      <Presentation />
    </div>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="px-24 py-6">
        <Services /> 
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="px-24 py-6">
        <Skills /> 
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="px-24 py-6">
        <Portfolio /> 
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
   </main>
  );
}
