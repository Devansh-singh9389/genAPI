import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const location = useLocation();

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: logo + brand */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shadow-inner">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 12h18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 3v18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-semibold text-lg tracking-tight">
                SoSoBeautiful
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1 ml-6">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Blog", path: "/blog" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all ${
                    isActiveLink(item.path)
                      ? "bg-blue-500 text-white shadow-md"
                      : "hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: search + actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white/90 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M16.65 16.65A7 7 0 1010 3a7 7 0 006.65 13.65z"
                />
              </svg>
              <input
                type="text"
                className="bg-transparent outline-none placeholder-white/80 text-sm text-white w-44"
                placeholder="Search..."
              />
            </div>

            <Link
              to="/get-started"
              className="hidden md:inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium hover:bg-white/20 transition"
            >
              Get Started
            </Link>

            {/* Profile dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen((p) => !p)}
                className="flex items-center gap-2 rounded-full p-1 hover:bg-white/10 transition"
              >
                <img
                  src={`https://api.dicebear.com/6.x/thumbs/svg?seed=devansh`}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border-2 border-white/30"
                />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white/10 backdrop-blur rounded-xl py-2 shadow-xl z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                  >
                    Settings
                  </Link>
                  <div className="border-t border-white/10 my-1" />
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 transition"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
          <div className="space-y-1">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Blog", path: "/blog" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActiveLink(item.path)
                    ? "bg-blue-500 text-white shadow-md"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setOpen(false)} // close mobile menu on click
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-3 px-3">
            <Link
              to="/get-started"
              className="w-full block text-center py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}