interface Link {
    title: string;
    url: string;
}
export interface Props {
    links: Link[]
}

export default function DescriptionNavigator({links}: Props) {
    return (
        <section>
            <div class="container">
                <ul className="flex items-center gap-8">
                    {links.map(link => (
                        <li>
                            <a href={link.url}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}