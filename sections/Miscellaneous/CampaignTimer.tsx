import type { HTMLWidget } from "apps/admin/widgets.ts";
import { useId } from "../../sdk/useId.ts";
import { useScript as useScript } from "@deco/deco/hooks";
export interface Props {
  /**
   * @title Text
   * @default Time left for a campaign to end with a link
   */
  text?: HTMLWidget;
  /**
   * @title Expires at date
   * @format datetime
   */
  expiresAt?: string;
  labels?: {
    days?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
  };
}
const snippet = (expiresAt: string, rootId: string) => {
  const expirationDate = new Date(expiresAt).getTime();
  const getDelta = () => {
    const delta = expirationDate - new Date().getTime();
    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((delta % (1000 * 60)) / 1000);
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };
  const setValue = (id: string, value: number) => {
    const elem = document.getElementById(id);
    if (!elem) {
      return;
    }
    elem.style.setProperty("--value", value.toString());
  };
  const start = () =>
    setInterval(() => {
      const { days, hours, minutes, seconds } = getDelta();
      const isExpired = days + hours + minutes + seconds < 0;
      if (isExpired) {
        const expired = document.getElementById(`${rootId}::expired`);
        const counter = document.getElementById(`${rootId}::counter`);
        expired && expired.classList.remove("hidden");
        counter && counter.classList.add("hidden");
      } else {
        setValue(`${rootId}::days`, days);
        setValue(`${rootId}::hours`, hours);
        setValue(`${rootId}::minutes`, minutes);
        setValue(`${rootId}::seconds`, seconds);
      }
    }, 1000);
  document.readyState === "complete"
    ? start()
    : addEventListener("load", start);
};
function CampaignTimer({
  expiresAt = `${new Date()}`,
  labels = {
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds",
  },
  text = "",
}: Props) {
  const id = useId();
  interface TimeComponentProps {
    id: string;
    label: string | undefined;
    time: string;
  }
  const TimeComponent: preact.FunctionalComponent<TimeComponentProps> = (
    { id, label, time },
  ) => (
    <div class="flex flex-col items-center">
      <span class="countdown font-normal text-xl desktop:text-2xl">
        <span
          class="phone:text-8xl text-6xl font-normal text-base-content tracking-[-3px]"
          id={`${id}::${time}`}
        />
      </span>
      <span class="phone:text-2xl text-base-content font-normal">
        {label || ""}
      </span>
    </div>
  );
  return (
    <>
      <div>
        <div class="container mx-auto flex flex-col desktop:flex-row desktop:items-center desktop:justify-center desktop:gap-16 py-16 mobile:px-10 gap-4">
          <div
            id={`${id}::expired`}
            class="hidden text-sm text-center desktop:text-xl desktop:text-left desktop:max-w-lg"
            dangerouslySetInnerHTML={{ __html: text || "Expired!" }}
          >
          </div>
          <div class="flex flex-wrap gap-8 desktop:gap-16 items-center justify-center desktop:justify-normal">
            <div id={`${id}::counter`}>
              <div class="grid grid-flow-col phone:gap-20 mobile:gap-10 gap-5 text-center auto-cols-max items-center">
                <TimeComponent id={id} label={labels?.days} time="days" />
                <TimeComponent id={id} label={labels?.hours} time="hours" />
                <TimeComponent id={id} label={labels?.minutes} time="minutes" />
                <TimeComponent id={id} label={labels?.seconds} time="seconds" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(snippet, expiresAt, id) }}
      />
    </>
  );
}
export default CampaignTimer;
