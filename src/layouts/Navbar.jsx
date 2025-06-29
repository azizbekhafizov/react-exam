import React, { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";
import { useStorage } from "../contexts/StorageContext";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { setSearchTerm } = useSearch();
  const { wishlist, cart } = useStorage();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="w-full shadow-md bg-white text-black fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wide text-black">
          cyber
        </Link>

        <div className="hidden lg:flex items-center border border-gray-300 gap-4 px-4 py-1 rounded-2xl bg-white mx-6 flex-grow max-w-xl">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder={t("search") || "Search"}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none w-full h-[40px] placeholder-gray-500 text-black"
          />
        </div>
        <nav className="hidden lg:flex items-center gap-6 text-base font-medium">
          <Link to="/" className="">{t("home")}</Link>
          <Link to="/shop" className="">{t("shop")}</Link>
          <Link to="/contact" className="">{t("contact")}</Link>
        </nav>

        <div className="flex items-center space-x-4 ml-4">
          <Link to="/wishlist" className="relative">
            <FaHeart className="text-xl" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          <select
            className="cursor-pointer bg-white text-black border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
            value={i18n.language}
            onChange={handleLanguageChange}
          >
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>

          <button className="lg:hidden ml-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <div className="flex items-center border border-gray-300 px-3 py-2 rounded-md">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder={t("search") || "Search"}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent outline-none placeholder-gray-500 text-black"
              />
            </div>

            <Link to="/" onClick={() => setMenuOpen(false)} className="block text-base ">
              {t("home")}
            </Link>
            <Link to="/shop" onClick={() => setMenuOpen(false)} className="block text-base ">
              {t("shop")}
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-base ">
              {t("contact")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
