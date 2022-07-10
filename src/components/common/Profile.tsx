import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <>
      <div className="flex items-center space-x-3">
        <div className="rounded-full overflow-hidden">
          <StaticImage
            className="hidden sm:flex"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../../images/avatar.jpeg"
            width={120}
            height={120}
            quality={95}
            imgStyle={{ borderRadius: "100%" }}
            alt="Giorgi Chumburidze"
          />
          <StaticImage
            className="flex sm:hidden"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../../images/avatar.jpeg"
            width={60}
            height={60}
            quality={95}
            imgStyle={{ borderRadius: "100%" }}
            alt="Giorgi Chumburidze"
          />
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
