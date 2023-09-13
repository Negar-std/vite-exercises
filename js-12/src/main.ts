import "./style.css";
const app = document.querySelector<HTMLDivElement>("#app");

type BoxProps = {
  element: string;
  attr?: any;
  children?: string | string[] | Element | Element[];
};

const Box = (props: BoxProps) => {
  const el = document.createElement(props.element);
  if (props.attr)
    Object.keys(props.attr).forEach((key: string) => {
      el[key] = props.attr[key];
    });
  if (!Array.isArray(props.children)) el.append(props.children!);
  else el.append(...props.children);
  return el;
};

app!.append(
  Box({
    element: "div",
    attr: {
      className:
        "container px-2 flex h-screen justify-center items-center bg-slate-100",
    },
    children: [
      Box({
        element: "form",
        attr: {
          className:
            "w-1/3 bg-white border border-gray-200 rounded-lg shadow p-12",
        },
        children: [
          Box({
            element: "div",
            attr: { className: "avatar mb-4 flex justify-center items-center" },
            children: Box({
              element: "div",
              attr: {
                className:
                  "w-24 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2",
              },
              children: Box({
                element: "img",
                attr: {
                  className: "rounded-full",
                  src: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
                },
              }),
            }),
          }),
          Box({
            element: "div",
            attr: { className: "mb-6" },
            children: [
              Box({
                element: "label",
                attr: {
                  className:
                    "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                  for: "contactName",
                },
                children: "Contact Name",
              }),
              Box({
                element: "input",
                attr: {
                  id: "contactName",
                  type: "text",
                  className:
                    "bg-blue-50 border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                },
              }),
            ],
          }),
          Box({
            element: "div",
            attr: { className: "mb-6" },
            children: [
              Box({
                element: "label",
                attr: {
                  className:
                    "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                  for: "phoneNumber",
                },
                children: "Phone Number",
              }),
              Box({
                element: "input",
                attr: {
                  id: "phoneNumber",
                  type: "text",
                  className:
                    "bg-blue-50 border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                },
              }),
            ],
          }),
          Box({
            element: "div",
            attr: { className: "flex items-center justify-between mb-4" },
            children: [
              Box({
                element: "div",
                attr: { className: "flex items-center" },
                children: [
                  Box({
                    element: "input",
                    attr: {
                      id: "SIMStorage",
                      type: "radio",
                      value: "",
                      name: "default-radio",
                      className:
                        "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
                    },
                  }),
                  Box({
                    element: "label",
                    attr: {
                      for: "SIMStorage",
                      className:
                        "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                    },
                    children: "SIM",
                  }),
                ],
              }),
              Box({
                element: "div",
                attr: { className: "flex items-center" },
                children: [
                  Box({
                    element: "input",
                    attr: {
                      id: "deviceStorage",
                      type: "radio",
                      value: "",
                      name: "default-radio",
                      className:
                        "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
                    },
                  }),
                  Box({
                    element: "label",
                    attr: {
                      for: "deviceStorage",
                      className:
                        "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                    },
                    children: "Device",
                  }),
                ],
              }),
            ],
          }),
          Box({
            element: "button",
            attr: {
              type: "button",
              id: "submitButton",
              className:
                "px-5 py-2.5 border border-blue-500 font-medium bg-blue-50 hover:bg-blue-600 hover:text-gray-100 text-blue-600 rounded-lg text-sm transition w-full mb-3",
            },
            children: "Save",
          }),
          Box({
            element: "button",
            attr: {
              type: "button",
              id: "showContactsButton",
              className:
                "px-5 py-2.5 border border-blue-500 font-medium bg-blue-50 hover:bg-blue-600 hover:text-gray-100 text-blue-600 rounded-lg text-sm transition w-full mb-3",
            },
            children: "Show Contacts",
          }),
        ],
      }),

      Box({
        element: "div",
        attr: {
          id: "contactListDrawer",
          className:
            "fixed bottom-[-100%] border-t-2 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-all shadow bg-white dark:bg-gray-800 transform-none",
          tabindex: "-1",
        },
        children: [
          Box({
            element: "h5",
            attr: {
              id: "drawer-bottom-label",
              className:
                "inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400",
            },
            children: "Contact List",
          }),
          Box({
            element: "button",
            attr: {
              id: "closeDrawerButton",
              className:
                "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white",
            },
            children: [
              Box({
                element: "svg",
                attr: {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 14 14",
                  className: "w-3 h-3",
                },
                children: Box({
                  element: "path",
                  attr: {
                    stroke: "currentColor",
                    d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6",
                  },
                  children: "X",
                }),
              }),
              Box({
                element: "span",
                attr: { className: "sr-only" },
                children: "Close menu",
              }),
            ],
          }),
          Box({
            element: "ul",
            attr: { id: "contact-list", className: "flex flex-col list-none" },
            children: "",
          }),
        ],
      }),
    ],
  })
);




export type ContactProps = {
  id: string;
  contactName: string;
  phoneNumber: string | number;
  storage: "SIM" | "Device";

}

export type contactInfoType = {
  contactName : string;
  phoneNumber : string | number;
}

export type ContactsListType = ContactProps[];


export const contactList: ContactsListType = [];

export const contactNameInput =
  document.querySelector<HTMLInputElement>("#contactName");

export const phoneNumberInput =
  document.querySelector<HTMLInputElement>("#phoneNumber");

export const deviceStorageInput =
  document.querySelector<HTMLInputElement>("#deviceStorage");

export const submitButton =
  document.querySelector<HTMLInputElement>("#submitButton");

export const showContactsButton = document.querySelector<HTMLButtonElement>(
  "#showContactsButton"
);

export const contactListDrawer =
  document.querySelector<HTMLButtonElement>("#contactListDrawer");

export const closeDrawerButton =
  document.querySelector<HTMLButtonElement>("#closeDrawerButton");

export const contactListElement =
  document.querySelector<HTMLUListElement>("#contact-list");


export const createListItem = (contactInfo: contactInfoType): HTMLLIElement => {
  const listItem = document.createElement("li");
  listItem.className = "py-4 px-1 bg-blue-50 rounded-lg";
  const contactNameElement = document.createElement("h2");
  contactNameElement.className = "text-slate-900";
  contactNameElement.innerText = contactInfo.contactName;
  const phoneNumberElement = document.createElement("p");
  phoneNumberElement.className = "text-slate-700";
  phoneNumberElement.innerText = contactInfo.phoneNumber.toString();
  listItem.appendChild(contactNameElement);
  listItem.appendChild(phoneNumberElement);
  return listItem;
};

export const validateFiels = (...fields: string[]): boolean => {
  return fields.every((field) => !!field.toString());
};

export const validateCreateContact = (contactInfo: contactInfoType) => {
  console.log(contactInfo);
  if (!validateFiels(contactInfo.contactName, contactInfo.phoneNumber + "")) {
    alert("fill all fields!");
    throw Error("fill all fields!");
  }
};

export const showContactsDrawerHandler = () => {
  contactListDrawer?.classList.remove("bottom-[-100%]");
  contactListDrawer?.classList.add("bottom-[0%]");
};

export const closeContactsDrawerHandler = () => {
  contactListDrawer?.classList.add("bottom-[-100%]");
  contactListDrawer?.classList.remove("bottom-[0%]");
};

export const handleCreateContact = () => {
  validateCreateContact({
    contactName: contactNameInput!.value,
    phoneNumber: phoneNumberInput!.value,
  });

  const newContact: ContactProps = {
    id: crypto.randomUUID(),
    contactName: contactNameInput?.value ?? "",
    phoneNumber: phoneNumberInput?.value ?? "",
    storage: deviceStorageInput?.checked ? "Device" : "SIM",
  };
  contactList.push(newContact);

  const listItem = createListItem({
    contactName: newContact.contactName,
    phoneNumber: newContact.phoneNumber,
  });
  contactListElement?.appendChild(listItem);
};

showContactsButton?.addEventListener("click", showContactsDrawerHandler);

closeDrawerButton?.addEventListener("click", closeContactsDrawerHandler);

submitButton?.addEventListener("click", handleCreateContact);


