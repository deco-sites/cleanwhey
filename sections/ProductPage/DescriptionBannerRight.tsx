import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

interface Props {
    id: string;
    title: string;
    description: HTMLWidget;
    percentageBanner: {
        desktop: ImageWidget;
        mobile: ImageWidget;
        alt?: string;
    }
    rightImage: {
        desktop: ImageWidget;
        mobile: ImageWidget;
        alt: string;
    }
}

export default function DescriptionBannerRight(props: Props) {
    const {id, title, description, percentageBanner, rightImage} = props;
    return (
        <section class="bg-white-300" id={id}>
            <div class="container flex items-start justify-between">
                <div class="content flex flex-col items-start justify-start w-1/2">
                    <h2 class={"text-gray-400 font-bold text-5xl mb-6"}>{title}</h2>
                    <div class="max-w-lg text-gray-300 text-base font-normal mb-16" dangerouslySetInnerHTML={{__html: description}} />
                    <Picture>
                        <Source
                        src={percentageBanner.mobile}
                        width={348}
                        height={93}
                        media="(max-width: 767px)"
                        />
                        <Source
                        src={percentageBanner.desktop}
                        width={522}
                        height={139}
                        media="(min-width: 767px)"
                        />
                        <img class="w-full max-w-[522px]" src={percentageBanner.desktop} 
                        alt={percentageBanner.alt ?? title} />
                    </Picture>
                </div>
                <div class={"banner w-1/2"}>
                    <Picture>
                        <Source
                        src={rightImage.mobile}
                        width={348}
                        height={238}
                        media="(max-width: 767px)"
                        />
                        <Source
                        src={rightImage.desktop}
                        width={624}
                        height={428}
                        media="(min-width: 767px)"
                        />
                        <img class="w-full" src={rightImage.desktop} 
                        alt={rightImage.alt} />
                    </Picture>
                </div>
            </div>
        </section>
    )
}