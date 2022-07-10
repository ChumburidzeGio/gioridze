import { MDXProviderComponentsProp, MDXProviderProps } from "@mdx-js/react"
import React, { ReactElement } from "react"
import CodeBlock from "./CodeBlock"
import {CustomH1, CustomH2, CustomH3, CustomH4, CustomP} from "@/components/mdx/typography";
import {CustomLi, CustomUl} from "@/components/mdx/lists";
import {Anchor, AnchorProps} from "@/components/mdx/anchor";

const preToCodeBlock = (preProps: MDXProviderProps) => {
  if (
    // children is code element
    preProps.children &&
    // code props
    (preProps.children as ReactElement).props &&
    // if children is actually a <code>
    (preProps.children as ReactElement).props.mdxType === "code"
  ) {
    // we have a <pre><code> situation
    const {
      children: codeString,
      className = "",
      ...props
    } = (preProps.children as ReactElement).props

    const matches = className.match(/language-(?<lang>.*)/)
    if (matches) {
      return {
        codeString: codeString.trim(),
        className,
        language:
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : "",
        ...props,
      }
    }
  }
}

const components: MDXProviderComponentsProp = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <CodeBlock {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  p: CustomP,
  ul: CustomUl,
  li: CustomLi,
  a: (props: AnchorProps) => <Anchor {...props} />,
}

export default components

