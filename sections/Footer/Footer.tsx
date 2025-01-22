import { type ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useDevice as useDevice } from "@deco/deco/hooks";
/** @titleBy title */
interface Item {
  title: string;
  href: string;
}
/** @titleBy title */
interface Link extends Item {
  children: Item[];
}
/** @titleBy label */
interface Selos {
  image: ImageWidget;
  link?: string;
  label?: string;
}
/** @titleBy label */
interface Segurancas {
  image: ImageWidget;
  link?: string;
  label?: string;
}
/** @titleBy alt */
interface Social {
  alt?: string;
  href?: string;
  image: ImageWidget;
}
interface Props {
  links?: Link[];
  social?: Social[];
  paymentMethods?: Social[];
  logo?: ImageWidget;
  trademark?: string;
  selos?: Selos[];
  seguranca?: Segurancas[];
}
function Footer({
  links = [],
  social = [],
  paymentMethods = [],
  selos = [],
  seguranca = [],
  logo,
  trademark,
}: Props) {
  const device = useDevice();
  return (
    <footer class="sm:px-0  bg-primary" // style={{ backgroundColor: "#EFF0F0" }}
    >
      <div class="flex flex-col gap-5 sm:gap-10 pt-10 ">
        <ul class="container px-5 md:gap-0 gap-4 flex sm:flex-row flex-col justify-between px-2 xl:px-0">
          <li class="flex gap-4 items-start flex-col">
            <div
              class={"flex gap-4 items-center mb-6 w-full sm:w-auto space-between"}
            >
              {logo && <Image class={"max-w-[136px]"} width={134} height={68} loading="lazy" src={logo} />}
              <ul class="flex gap-4">
                {social.map(({ image, href, alt }) => (
                  <li>
                    <a href={href} target="_blank">
                      <Image
                        src={image}
                        alt={alt}
                        loading="lazy"
                        width={32}
                        height={32}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="text-white md:max-w-[328px]">
              <p>
                R. Eng. Haroldo Cavalcanti, 360 | Sal 305 Recreio dos
                Bandeirantes, Rio de Janeiro - RJ
              </p>
            </div>
          </li>

          {links.map(({ title, href, children }, index) => (
            <>
              {device === "desktop"
                ? (
                  <li key={index} class="flex flex-col gap-4">
                    <a class="text-white font-semibold" href={href}>
                      {title}
                    </a>
                    <ul class="flex flex-col gap-2">
                      {children.map(({ title, href }) => (
                        <li>
                          <a class="text-sm text-white" href={href}>
                            {title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
                : (
                  <div class="p-0 text-white font-semibold text-base collapse collapse-arrow bg-transparent border-0">
                    <input type="checkbox" class="max-h-10 min-h-10" />
                    <div class="after:!top-5 flex max-h-10 min-h-10 items-center justify-start collapse-title p-0 text-base font-semibold">
                      {title}
                    </div>
                    <div class="collapse-content p-0">
                      <ul class="flex flex-col gap-2">
                        {children.map(({ title, href }) => (
                          <li>
                            <a
                              class="text-sm text-white font-normal"
                              href={href}
                            >
                              {title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
            </>
          ))}

          <li class={"flex flex-col gap-4"}>
            <a href="#" class="text-white font-semibold">
              Formas de pagamento
            </a>
            <div class="flex flex-col sm:flex-row gap-12 justify-between items-start sm:items-center">
              <ul class="flex flex-wrap gap-2 md:max-w-64">
                {paymentMethods.map(({ image, alt }) => (
                  <li class="h-8 md:w-1/5 w-1/6 border border-base-100 bg-white rounded flex justify-center items-center">
                    <Image
                      src={image}
                      alt={alt}
                      width={50}
                      height={32}
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        <div class="container px-5 flex items-center justify-between px-2 xl:px-0">
          <ul class="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-2">
            {selos.map(({ image, label }) => (
              <li class="h-8 md:w-1/5 w-1/5 flex justify-center items-center">
                <Image
                  src={image}
                  alt={label}
                  width={77}
                  height={41}
                  loading="lazy"
                />
              </li>
            ))}
            {device === "mobile"
              ? (
                <>
                  {seguranca.map(({ image, label }) => (
                    <li class="h-8 w-1/5 flex justify-center items-center">
                      <Image
                        src={image}
                        alt={label}
                        width={42}
                        height={42}
                        loading="lazy"
                      />
                    </li>
                  ))}
                </>
              )
              : (
                ""
              )}
          </ul>

          <ul class="hidden sm:flex items-center gap-2">
            {seguranca.map(({ image, label }) => (
              <li class="h-8 w-1/3 flex justify-center items-center">
                <Image
                  src={image}
                  alt={label}
                  width={42}
                  height={42}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>

        <div class="grid bg-neutral py-4 grid-flow-row sm:grid-flow-col gap-8">
          <div class="container  sm:px-0 px-5 flex flex-nowrap items-center justify-between sm:justify-center gap-4">
            <span class="text-base font-normal text-white text-center">
              {trademark}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
