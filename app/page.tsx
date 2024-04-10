import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import IntroLoggedIn from "@/components/introLoggedIn";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import UserProfile from "@/components/UserProfile";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Script from "next/script";

export default async function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const loggedIn = await isAuthenticated();

  return (
    <main className="flex flex-col items-center px-4">
      {(await isAuthenticated()) ? <IntroLoggedIn /> : <Intro />}
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      {/* <UserProfile /> */}
      {/* <Script id="c1" type="text/javascript" src="//mau.estatengine.io/form/generate.js?id=1"></Script> */}
    </main>
  );
}
