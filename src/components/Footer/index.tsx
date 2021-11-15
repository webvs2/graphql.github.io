import React from "react"
import Link from "../Link"

interface LinkItem {
  text:string,
  href:string
}

interface FooterLinks {
  text:string,
  href?:string,
  subsections: LinkItem[]
}

const getLinks = (sourcePath: string): FooterLinks[] => [
  {
    text: "学习",
    href: "/learn/",
    subsections: [
      { text: "入门", href: "/learn/" },
      { text: "查询语言", href: "/learn/queries/" },
      { text: "类型系统", href: "/learn/schema/" },
      { text: "执行", href: "/learn/execution/" },
      { text: "最佳实践", href: "/learn/best-practices/" },
    ],
  },
  {
    text: "规范和代码",
    href: "/code",
    subsections: [
      { text: "规范", href: "https://spec.graphql.cn" },
      { text: "语言", href: "/code/#languages" },
      { text: "工具", href: "/code/#tools" },
      { text: "服务", href: "/code/#services" },
      {
        text: "编辑此页 ✎",
        href:
          "https://github.com/xitu/graphql.github.io/edit/source/" +
          sourcePath,
      },
    ],
  },
  {
    text: "社区",
    href: "/community",
    subsections: [
      { text: "行为守则", href: "/codeofconduct/" },
      { text: "GitHub", href: "https://github.com/graphql" },
      {
        text: "Stack Overflow",
        href: "http://stackoverflow.com/questions/tagged/graphql",
      },
      {
        text: "Facebook Group",
        href: "https://www.facebook.com/groups/graphql.community/",
      },
      { text: "Twitter", href: "https://twitter.com/GraphQL" },
      { text: "即将到来的活动", href: "/community/upcoming-events/" },
    ],
  },
  {
    text: "GraphQL 基金会",
    subsections: [
      { text: "关于", href: "/foundation/" },
      { text: "加入", href: "/foundation/join/" },
      { text: "会员", href: "/foundation/members/" },
      { text: "总览", href: "https://landscape.graphql.org" },
      { text: "图表", href: "https://github.com/graphql/artwork" },
      { text: "联系", href: "/foundation/contact/" },
    ],
  },
]

const Footer = ({sourcePath}: { sourcePath: string }) => {
  return (
    <div>
      <footer>
        <section className="sitemap">
          <Link href="/" className="nav-home" aria-label="Homepage" />
          {getLinks(sourcePath).map((section, i) => (
            <div key={i}>
              <h5>
                {section.href ? (
                  <Link href={section.href}>{section.text}</Link>
                ) : (
                  section.text
                )}
              </h5>
              {section.subsections.map((subsection: any, i) => (
                <Link key={i} href={subsection.href}>
                  {subsection.text}
                </Link>
              ))}
            </div>
          ))}
        </section>
        <section className="copyright">
            Copyright © {`${new Date().getFullYear()}`} GraphQL 基金会。保留所有权利。
            Linux 基金会已经注册了商标和使用商标。有关 Linux 基金会的商标清单，请参阅我们的
            <a href="https://www.linuxfoundation.org/trademark-usage">商标使用</a> 页面
            Linux 是 Linus Torvalds 的注册商标。<a href="http://www.linuxfoundation.org/privacy">隐私政策</a>
            和 <a href="http://www.linuxfoundation.org/terms">使用条款</a>。
        </section>
      </footer>

    </div>
  )
}

export default Footer
