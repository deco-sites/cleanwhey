interface Link {
    title: string;
    url: string;
}
export interface Props {
    links: Link[]
}

export default function DescriptionNavigator({links}: Props) {
    return (
        <section class="bg-white-200">
            <div class="container mb-4">
                <ul className={`
                [&::-webkit-scrollbar]:[width:3px]
                [&::-webkit-scrollbar-thumb]:[background-color: #ff0000]
                flex items-start 
                md:items-center overflow-x-auto justify-start 
                md:justify-center gap-8`}>
                    {links.map(link => (
                        <li class="p-3 flex-shrink-0">
                            <a href={link.url} class="text-gray-300 cursor-pointer font-bold text-sm">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}