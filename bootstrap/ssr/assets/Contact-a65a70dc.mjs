import { j as jsxs, F as Fragment, a as jsx } from "../app.mjs";
import { H as Header, F as Footer } from "./Header-31d58b9c.mjs";
import "react";
import "react/jsx-runtime";
import "lodash";
import "axios";
import "react-dom/client";
import "@inertiajs/react";
const Contact = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("section", { class: "bg-white dark:bg-gray-900", children: /* @__PURE__ */ jsxs("div", { class: "py-8 lg:py-16 px-4 mx-auto max-w-screen-md", children: [
      /* @__PURE__ */ jsx("h2", { class: "mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white", children: "Contact Us" }),
      /* @__PURE__ */ jsx("p", { class: "mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl", children: "Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know." }),
      /* @__PURE__ */ jsxs("form", { action: "#", class: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              for: "email",
              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
              children: "Your email"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "email",
              class: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",
              placeholder: "example@example.com",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              for: "subject",
              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
              children: "Subject"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "subject",
              class: "block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",
              placeholder: "Let us know how we can help you",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              for: "message",
              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",
              children: "Your message"
            }
          ),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "message",
              rows: "6",
              class: "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
              placeholder: "Leave a comment..."
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            class: "py-3 px-5 bg-blue-600 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
            children: "Send message"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Contact as default
};
