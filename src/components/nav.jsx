import { NavLink } from "react-router-dom";

export default function Nav({
  open,
  setOpen,
  t,
  i18n,
  linkStyle,
  changeLanguage,
}) {
  const links = [
    { to: "/", label: t("home") },
    { to: "/ai", label: t("ai_advisor") },
    { to: "/calculator", label: t("calculator") },
    { to: "/hire", label: t("hire") },
    { to: "/tips", label: t("weekly_tips") },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b px-4 md:px-6 lg:px-10 py-3 md:py-4">
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <NavLink
            to="/"
            className="text-lg md:text-xl font-extrabold text-green-600"
          >
            SolarSDG
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 font-medium">

            {links.map((link, i) => (
              <NavLink key={i} to={link.to} className={linkStyle}>
                {link.label}
              </NavLink>
            ))}

            {/* LANGUAGE SWITCHER */}
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              className="border rounded-md px-2 py-1 text-sm bg-white"
            >
              <option value="en">EN</option>
              <option value="ha">HA</option>
              <option value="yo">YO</option>
            </select>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-5 flex flex-col gap-6">

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="text-2xl self-end"
          >
            ✕
          </button>

          {/* LINKS */}
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              onClick={() => setOpen(false)}
              className={linkStyle}
            >
              {link.label}
            </NavLink>
          ))}

          {/* LANGUAGE */}
          <div className="pt-4 border-t">
            <p className="text-xs text-gray-500 mb-2">
              {t("language")}
            </p>

            <select
              onChange={(e) => {
                changeLanguage(e.target.value);
                setOpen(false);
              }}
              value={i18n.language}
              className="w-full border rounded-md px-2 py-2 text-sm"
            >
              <option value="en">English</option>
              <option value="ha">Hausa</option>
              <option value="yo">Yoruba</option>
            </select>
          </div>

        </div>
      </div>
    </>
  );
}