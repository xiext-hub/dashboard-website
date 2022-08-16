import Overview from "./overview";
import Subscribe from "./subscribe";
import Order from "./order";
import Balance from "./balance";

export default [
  {
    path: "/resource",
    component: Overview,
    meta: {
      title: "Resource",
      isTab: 1,
    },
  },
  {
    path: "/resource/balance",
    component: Balance,
    meta: {
      title: "Balance Allocation",
      links: [
        {
          text: "Resource",
          to: "/resource",
        },
        {
          text: `Balance  Allocation`,
        },
      ],
    },
  },
  {
    path: "/resource/subscribe",
    component: Subscribe,
    meta: {
      title: "Subscribe",
      isTab: 1,
      links: [
        {
          text: "Resource",
          to: "/resource",
        },
        {
          text: `Subscribe`,
        },
      ],
    },
  },
  {
    path: "/resource/subscribe/order",
    component: Order,
    meta: {
      title: "Subscribe",
      links: [
        {
          text: "Resource",
          to: "/resource",
        },
        {
          text: `Subscribe`,
          to: "/resource/subscribe",
        },
        {
          text: "Order",
        },
      ],
    },
  },
];
