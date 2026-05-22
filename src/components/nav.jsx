import { NavLink } from "react-router-dom";

export default function Nav({
  open,
  setOpen,
  t,
  i18n,
  linkStyle,
  changeLanguage,
}) {
  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b px-4 md:px-6 lg:px-10 py-3 md:py-4">

        <div className="flex justify-between items-center">

          {/* LOGO */}
          <NavLink
            to="/"
            className="text-lg md:text-xl lg:text-2xl font-extrabold text-green-600"
          >
            SolarSDG
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium">

            <NavLink to="/" className={linkStyle}>
              {t("home")}
            </NavLink>

            
            <NavLink to="/AI" className={linkStyle}>
              {t("AI smart answer")}
            </NavLink>


            <NavLink to="/calculator" className={linkStyle}>
              {t("calculator")}
            </NavLink>
            
          <NavLink to="/hire" className={linkStyle}>
              {t("Hire")}
            </NavLink>
          
             <NavLink to="/tips" className={linkStyle}>
              {t("Weekly tips")}
            </NavLink>

            {/* LANGUAGE SWITCHER (DESKTOP) */}
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

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >

        <div className="p-5 flex flex-col gap-6">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="text-2xl self-end"
          >
            ✕
          </button>

          {/* LINKS */}
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={linkStyle}
          >
            {t("home")}
          </NavLink>

          <NavLink
            to="/calculator"
            onClick={() => setOpen(false)}
            className={linkStyle}
          >
            {t("calculator")}

            
          </NavLink>

          
          <NavLink
            to="/hire"
            onClick={() => setOpen(false)}
            className={linkStyle}
          >
            {t("hire")}

            
          </NavLink>

          
          <NavLink
            to="/AI"
            onClick={() => setOpen(false)}
            className={linkStyle}
          >
            {t("AI answer")}

            
          </NavLink>

          <NavLink
            to="/tips"
            onClick={() => setOpen(false)}
            className={linkStyle}
          >
            {t("Farm TIPS")}

            
          </NavLink>

          
          {/* LANGUAGE SWITCHER (MOBILE) */}
          <div className="pt-4 border-t">
            <p className="text-xs text-gray-500 mb-2">Language</p>

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