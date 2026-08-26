import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink-deep pt-20 pb-12 text-paper">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="mb-8 font-serif text-3xl leading-tight">
              Architectural Association of Kenya
            </h2>
            <address className="mb-8 text-sm leading-relaxed text-paper/60 not-italic">
              Blue Violets Plaza, 6th Floor, Room 605
              <br />
              Kindaruma Rd off Ngong Rd
              <br />
              P.O. Box 44258, 00100 Nairobi
            </address>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:aak@aak.or.ke" className="hover:text-aak-red">
                aak@aak.or.ke
              </a>
              <a href="mailto:advocacy@aak.or.ke" className="hover:text-aak-red">
                advocacy@aak.or.ke
              </a>
              <a href="tel:+254721691337" className="hover:text-aak-red">
                0721 691 337
              </a>
              <a href="tel:+254202420808" className="hover:text-aak-red">
                020 242 0808
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="label mb-6 text-paper/40">Member Services</h3>
            <ul className="space-y-4 text-xs font-medium">
              <li>
                <a href="https://aak.or.ke/validate-certificate" className="hover:text-aak-red">
                  Validate Certificate
                </a>
              </li>
              <li>
                <a href="https://aak.or.ke/members-directory" className="hover:text-aak-red">
                  Members Directory
                </a>
              </li>
              <li>
                <a href="https://aak.or.ke/wp-login.php" className="hover:text-aak-red">
                  Member Portal
                </a>
              </li>
              <li>
                <a href="https://sacco.aak.or.ke/" className="hover:text-aak-red">
                  AAK Sacco
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="label mb-6 text-paper/40">Resources</h3>
            <ul className="space-y-4 text-xs font-medium">
              <li>
                <a href="https://aak.or.ke/reports" className="hover:text-aak-red">
                  Buildpress Magazine
                </a>
              </li>
              <li>
                <a href="https://aak.or.ke/reports" className="hover:text-aak-red">
                  AGM Reports
                </a>
              </li>
              <li>
                <a href="https://aak.or.ke/je-una-mjengo/" className="hover:text-aak-red">
                  Je Una Mjengo
                </a>
              </li>
              <li>
                <a href="http://buildhub.aak.or.ke/" className="hover:text-aak-red">
                  BuildHub
                </a>
              </li>
            </ul>
          </div>

          <div className="border-t border-paper/10 pt-8 md:col-span-4 md:border-t-0 md:border-l md:pt-0 md:pl-12">
            <h3 className="label mb-6 text-paper/40">Subscribe to the Journal</h3>
            <p className="mb-6 text-sm leading-relaxed text-paper/60">
              Quarterly briefings on policy, practice and the state of the built environment in
              Kenya.
            </p>
            <form
              className="flex items-center border-b border-paper/25 pb-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-transparent text-sm text-paper placeholder:text-paper/35 focus:outline-none"
              />
              <button type="submit" className="label text-aak-red">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-paper/35">
            &copy; {new Date().getFullYear()} Architectural Association of Kenya
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="label text-paper/35 hover:text-paper">
              Privacy Policy
            </Link>
            <Link to="/terms" className="label text-paper/35 hover:text-paper">
              Terms of Use
            </Link>
            <a href="https://aak.or.ke/contact-us" className="label text-paper/35 hover:text-paper">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
