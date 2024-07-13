import { ImageWidget } from "apps/admin/widgets.ts";
import Slider from "../../components/ui/Slider.tsx";
import { useId } from "../../sdk/useId.ts";
import Icon from "../ui/Icon.tsx";
import { AlertError } from "../../static/adminIcons.ts";
export interface alert {
  alertText: string;
  alertImage?: ImageWidget;
}
export interface Props {
  alerts?: alert[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="grid grid-rows-[1fr_32px_1fr_64px] grid-cols-[32px_1fr_32px] sm:grid-cols-[112px_1fr_112px] w-screen bg-blue-400 max-h-8"
    >
      <div class="col-span-full row-span-full max-h-8">
        <Slider class="carousel carousel-center w-screen gap-6 text-secondary-content text-sm/4">
          {alerts.map((alert, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-screen justify-center"
            >
              <img
                loading="lazy"
                src={alert.alertImage}
                alt={alert.alertText}
              />
              <span
                class="px-2 py-2 text-center text-white"
                dangerouslySetInnerHTML={{ __html: alert.alertText }}
              />
            </Slider.Item>
          ))}
        </Slider>
      </div>

      <div class="hidden sm:flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton
          class="cursor-pointer"
          disabled={false}
        >
          <Icon id="chevron-right" class="rotate-180 text-white" />
        </Slider.PrevButton>
      </div>

      <div class="hidden sm:flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton
          class="cursor-pointer"
          disabled={false}
        >
          <Icon id="chevron-right" class="text-white" />
        </Slider.NextButton>
      </div>

      <Slider.JS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;
