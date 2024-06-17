type SocialMediaLinks = {
  facebook: string
  twitter: string
  linkedin: string
  portfolio: string
}

export interface UserProfile {
  id: string
  fName: string
  lName: string
  career: string
  email: string
  description: string
  socialMediaLinks: SocialMediaLinks
}