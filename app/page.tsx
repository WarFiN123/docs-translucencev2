import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";
import Link from "next/link";
import Particles from "../components/particles";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <Link
        href="https://github.com/warfin123/translucencev2"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Follow along on GitHub{" "}
        <FaArrowUpRightFromSquare className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl font-display">
        Translucence
      </h1>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl font-modern">V2</h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground text">
        Acrylic theme for Discord<br></br>
        <SiDiscord
          size={20}
          style={{ verticalAlign: "middle", display: "inline-flex" }}
        />
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
        <Link
          href="https://discord.com/invite/t6CKrYvQuE"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Discord
        </Link>
      </div>
    </div>
  );
}
