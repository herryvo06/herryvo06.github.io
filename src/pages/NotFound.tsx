import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NotFoundScene } from "../components/art/scenes/NotFoundScene";
import { Nav } from "../components/Nav";
import { notFound, seo } from "../content/site";
import { btnPrimary } from "../lib/ui";

/** Themed 404 for unknown routes: an empty hook, "This one got away". */
export default function NotFound() {
  useEffect(() => {
    const prev = document.title;
    document.title = `${notFound.title} · ${seo.title}`;
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <>
      <Nav />
      <main
        id="main"
        tabIndex={-1}
        className="mx-auto flex min-h-[calc(100vh-var(--nav-h))] max-w-[1228px] flex-col items-center justify-center px-6 pb-24 text-center outline-none lg:px-16"
      >
        <NotFoundScene className="h-auto w-[320px]" />
        <p className="km-label mt-8">{notFound.label}</p>
        <h1 className="mt-4 text-5xl text-foam">{notFound.title}</h1>
        <p className="mt-4 text-silt">{notFound.body}</p>
        <Link to="/" className={`${btnPrimary} mt-8`}>
          {notFound.back}
        </Link>
      </main>
    </>
  );
}
