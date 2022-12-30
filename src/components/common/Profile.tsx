import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Github, Linkedin, Twitter } from "../icons"
import { Button } from "."
import { EmptyProps, ISite } from "@/definitions"

const Bio: React.FC<EmptyProps> = () => {
  const data: { site: ISite } = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
            twitter
            github
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <>
      <div className="flex items-center space-x-3">
        <div className="rounded-full overflow-hidden h-[60px] w-[60px] sm:h-[120px] sm:w-[120px] bg-white bg-opacity-70">
          <img src="https://gioridze.vercel.app/static/0223a5799de0f61ffd441f13e243fb35/17eb7/avatar.avif" alt="Giorgi Chumburidze" className="w-full h-full"/>
        </div>
        <div>
          <h3 className="font-black sm:font-bold text-xl sm:text-xl tracking-wide">{author.name}</h3>
          <div className="pt-2 flex space-x-4">
            {social.linkedin && <Button
                label="Linkedin"
                href={`https://linkedin.com/in/${social.linkedin || ""}`}
            >
              <Linkedin className="w-5 h-5 fill-current" />
            </Button>}
            {social.twitter && <Button
              label="Twitter"
              href={`https://twitter.com/${social.twitter || ""}`}
            >
              <Twitter className="w-5 h-5 fill-current" />
            </Button>}
            {social.github && <Button
              label="Github"
              href={`https://github.com/${social.github || ""}`}
            >
              <Github className="w-5 h-5 fill-current" />
            </Button>}
          </div>
        </div>
      </div>
      <p className="mt-5 font-yrsa text-lg">{author.summary}</p>
    </>
  )
}

export default Bio
