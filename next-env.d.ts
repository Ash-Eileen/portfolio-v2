/// <reference types="next" />
/// <reference types="next/types/global" />

type SocialMediaLinks = {
    href: string,
    aria: string,
    icon: string,
}

type Project = {
    imageSrc: string,
    codeIcon: string,
    name: string,
    platformIcon: string,
    description: JSX.Element,
    link: string,
}