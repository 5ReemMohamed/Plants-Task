import React from "react";

export default function Footer() {
  const links: { href: string; label: string }[] = [
    { href: "#", label: "Terms of Use" },
    { href: "#", label: "Copyright & Trademark" },
    { href: "#", label: "Policy" },
    { href: "#", label: "Sitemap" },
  ];

  return (
    <footer className="bg-[#224229] text-white">
      <div className="p-7 flex flex-col md:flex-row justify-between items-center text-center gap-3">
        <p className="text-sm md:text-base mb-2">© 2025 Verdant Haven Store</p>

        <ul className="flex gap-2 text-sm md:text-base">
          {links.map(({ href, label }) => (
            <li key={label}>
              <a href={href} className="hover:underline" aria-label={label}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
