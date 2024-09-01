export default {
  default: [
    {
      type: 'doc',
      id: 'index',
      label: "overview"
    },
    {
      type: "category",
      label: "Products",
      items: [
        {
          type: "link",
          label: "布谷法律工作台",
          href: "/docs/law"
        },
      ]
    },
    {
      type: "category",
      label: "开发人员",
      items: [
        {
          type: "link",
          label: "开发人员文档",
          href: "/docs/dev"
        },
      ]
    }
  ]
}