import React from "react"
import Link from "../Link"

interface LinkItem {
  section: string
  text: string
  href: string
}

const links: LinkItem[] = [
  {
    section: "learn",
    text: "学习",
    href: "/learn/"
  },
  {
    section: "code",
    text: "代码",
    href: "/code/"
  },
  {
    section: "community",
    text: "社区",
    href: "/community/"
  },
  {
    section: "faq",
    text: "FAQ",
    href: "/faq/"
  },
  {
    section: "spec",
    text: "规范",
    href: "https://spec.graphql.org/",
  },
  {
    section: "foundation",
    text: "基金会",
    href: "/foundation/",
  },
  {
    section: "news",
    text: "新闻",
    href: "/blog/",
  },
  {
    section: "landscape",
    text: "社区总览",
    href: "https://l.graphql.org/"
  },
  {
    section: 'principles',
    text: '开发原则',
    href: 'https://principles.graphql.cn/'
  },
]

export default () => (
  <nav>
    {links.map((link, i) => (
      <Link key={i} href={link.href}>
        {link.text}
      </Link>
    ))}
  </nav>
)
