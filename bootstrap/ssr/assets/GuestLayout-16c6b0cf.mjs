import { j as jsxs, a as jsx } from "../app.mjs";
import { A as ApplicationLogo } from "./ApplicationLogo-461f084c.mjs";
import { Link } from "@inertiajs/react";
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen px flex flex-col sm:justify-center items-center px-2 pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "w-20 h-20 fill-current text-gray-500" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white rounded-md dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg", children })
  ] });
}
export {
  Guest as G
};
