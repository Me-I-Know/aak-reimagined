import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/aak-logo.png";

const internalNav = [
  { label: "Events", to: "/events" },
  { label: "Arbitration", to: "/arbitration" },
  { label: "Team", to: "/team" },
] as const;

const nav = [
  { label: "About Us", href: "https://aak.or.ke/about-us" },
  { label: "Membership", href: "https://aak.or.ke/membership" },
  { label: "Reports", href: "https://aak.or.ke/reports" },
  { label: "Resource Centre", href: "https://aak.or.ke/resource-centre" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/95 backdrop-blur-[2px]">
      <a href="#main" className="skip-link label">
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-baseline gap-2.5">
          <img src={logo} alt="Architectural Association of Kenya" className="h-9 w-9" />
          <span className="font-serif text-3xl font-bold tracking-tighter">AAK</span>
          <span className="label border-l border-input pl-2.5 leading-none text-ink/70">
            Est. 1967
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {internalNav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="label text-ink/80 hover:text-aak-red"
              activeProps={{ className: "label text-aak-red" }}
            >
              {item.label}
            </Link>
          ))}
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="label text-ink/80 hover:text-aak-red">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="https://aak.or.ke/wp-login.php"
            className="label hidden border-b-2 border-aak-red pb-0.5 lg:inline-block"
          >
            Log In
          </a>
          <a
            href="https://aak.or.ke/membership"
            className="label bg-ink px-5 py-2.5 text-paper hover:bg-aak-red"
          >
            Join AAK
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-input lg:hidden"
          >
            <span className="block h-px w-4 bg-ink" />
            <span className="block h-px w-4 bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-paper-dim px-6 py-6 lg:hidden">
          <ul className="space-y-4">
            {internalNav.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="label block" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            {nav.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="label block">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="https://aak.or.ke/wp-login.php" className="label block text-aak-red">
                Log In
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
