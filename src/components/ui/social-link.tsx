import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

type SocialLinkProps = {
  url: string
}

export function SocialLink({ url }: SocialLinkProps) {
  let Icon = ExternalLink
  let label = 'External Link'

  if (url.includes('mailto:')) {
    Icon = Mail
    label = 'Email'
  } else if (url.includes('linkedin.com')) {
    Icon = Linkedin
    label = 'LinkedIn'
  } else if (url.includes('github.com')) {
    Icon = Github
    label = 'GitHub'
  }

  return (
    <Button variant="outline" size="icon" asChild>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Icon className="h-5 w-5" />
        <span className="sr-only">{label}</span>
      </a>
    </Button>
  )
}

