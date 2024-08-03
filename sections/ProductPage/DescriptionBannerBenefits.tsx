import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

interface Benefit {
    icon: ImageWidget;
    title: string;
    description: string;
}

interface Props {
    leftImage: {
        desktop: {
            src: ImageWidget;
            width?: number;
            height?: number;
        };
        mobile: {
            src: ImageWidget;
            width?: number;
            height?: number;
        };
        alt: string;
    },
    title: HTMLWidget;
    benefits: Benefit[]
}
export default function DescriptionBannerBenefits(props: Props) {
    const { leftImage, title, benefits } = props;
    return (
        <section class="bg-white-300 pb-8 md:pb-16" >
            <div className="container px-4 md:px-0 flex flex-col md:flex-row items-center justify-between">
                <div class={"banner w-auto"}>
                    <Picture>
                        <Source
                            src={leftImage.mobile.src}
                            width={leftImage.mobile.width ?? 356}
                            height={leftImage.mobile.height ?? 277}
                            media="(max-width: 767px)"
                        />
                        <Source
                            src={leftImage.desktop.src}
                            width={leftImage.desktop.width ?? 1052}
                            height={leftImage.desktop.height ?? 948}
                            media="(min-width: 767px)"
                        />
                        <img class="w-full max-w-[576px]" src={leftImage.desktop.src}
                            alt={leftImage.alt} />
                    </Picture>
                </div>

                <div class={"md:w-[65%] w-full max-w-[668px]"}>
                    <h2 class="mb-4 md:text-start text-center" dangerouslySetInnerHTML={{__html: title}} />
                    <ul class="flex flex-col gap-2">
                        {benefits && benefits.map(benefit => (
                            <li class="py-6 px-4 bg-white border rounded-lg border-gray-100 flex flex-col text-center md:flex-row md:text-start items-center gap-4">
                                <div className="icone">
                                    <img src={benefit.icon} loading={"lazy"}/>
                                </div>
                                <div className="content flex flex-col gap-1">
                                    <h3 class="font-bold text-base text-orange-300">
                                    {benefit.title}
                                    </h3>
                                    <p class="font-normal text-base text-gray-300">
                                    {benefit.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}