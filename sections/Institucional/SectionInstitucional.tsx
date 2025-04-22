import { type Section as Section } from "@deco/deco/blocks";
interface Menu {
  texto: string;
  link: string;
  active?: boolean;
}
export interface Props {
  conteudos: Section[];
  menus: Menu[];
}
export default function SectionInstitucional({ conteudos, menus }: Props) {
  return (
    <div class="container px-4 desktop:px-0 pt-8 pb-28 desktop:max-w-[1216px] mx-auto">
      <div class="flex gap-8 desktop:flex-row flex-col">
        <div
          class={"w-full desktop:max-w-[280px] max-w-full rounded h-full bg-white-300 p-6 border border-gray-100"}
        >
          <ul>
            {menus.map((menu) => (
              <li class="mb-1.5">
                <a
                  href={menu.link}
                  class={`white-space-nowrap leading-8 block h-8 pl-4 text-base ${
                    menu.active
                      ? "text-orange-300 border-l-2 border-l-orange-300"
                      : "text-gray-300 border-l-2 border-l-transparent"
                  }`}
                >
                  {menu.texto}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="w-full">
          {conteudos.map((conteudo) => (
            <>
              <conteudo.Component {...conteudo.props} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
