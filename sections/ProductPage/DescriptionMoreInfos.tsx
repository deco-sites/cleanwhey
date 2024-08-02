import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";

interface Card {
    title: string;
    description: string;
    content?: HTMLWidget;
}
interface Props {
    cards: Card[];
    rightImage: {
        src: ImageWidget;
    }
}

export default function DescriptionMoreInfos(props: Props) {
    const {cards, rightImage} = props;
    return (
        <section class="bg-white-300">
            <div className="container h-full flex px-4 md:px-0 md:flex-row flex-col-reverse items-center">
                <div class="relative z-10 w-full md:w-[50%] gap-4 flex flex-row flex-wrap justify-center items-stretch">
                    {cards && cards.slice(0,3).map((card, index) => (
                        <div class={`${index == 0 ? "grow basis-full" : "grow-0 w-[calc(50%-8px)]"} p-4 md:p-8 bg-[#E06741D9] rounded-lg text-white backdrop-blur`}>
                            <h3 class={`text-white font-bold ${ index == 0 ? "text-3xl" : "text-lg mb-2"}`}>{card.title}</h3>
                            <p class={`text-white font-normal ${ index == 0 ? "text-base mb-4" : "text-sm"}`}>{card.description}</p>
                            {card.content && (
                                <div class="!text-white !list-disc [&>ul]:pl-8 [&>ul>li]:!list-disc" dangerouslySetInnerHTML={{__html: card.content}} />
                            )}
                        </div>
                    ))}
                </div>
                <div class="w-full md:w-[60%] max-w-[696px] px-4 md:px-0 -mb-8 md:-ml-20">
                    <figure>
                        <img class="w-full max-w-[696px]" src={rightImage.src} />
                    </figure>
                </div>
            </div>
        </section>
    )
}