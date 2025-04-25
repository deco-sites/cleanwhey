import { HTMLWidget } from "apps/admin/widgets.ts";
import Section, {
  type Props as SectionHeaderProps,
} from "../../components/ui/Section.tsx";
import Icon from "../../components/ui/Icon.tsx";

export interface Question {
  question: string;

  answer: HTMLWidget;
}
export interface Props extends SectionHeaderProps {
  questions?: Question[];
  subtitle?: HTMLWidget;
  /** @format color */
  bgColor?: string;
}

function Question({ question, answer }: Question) {
  return (
    <details class="max-w-[1008px] m-auto collapse collapse-arrow border border-gray-100 bg-white">
      <summary class="collapse-title after:!h-3 after:!w-3 after:text-orange-300 text-lg font-medium gap-2 !flex items-center">
        <Icon id="info_custom" class="text-orange-300 w-4 h-4" />
        {question}
      </summary>
      <div
        class="collapse-content"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </details>
  );
}

export default function FAQ({
  title,
  subtitle,
  bgColor,
  questions = [
    {
      question: "Como faço para acompanhar o meu pedido?",
      answer:
        "Acompanhar o seu pedido é fácil! Assim que o seu pedido for enviado, enviaremos um e-mail de confirmação com um número de rastreamento. Basta clicar no número de rastreamento ou visitar o nosso site e inserir o número de rastreamento na seção designada para obter atualizações em tempo real sobre a localização e o status de entrega do seu pedido.",
    },
    {
      question: "Qual é a política de devolução?",
      answer:
        "Oferecemos uma política de devolução sem complicações. Se você não estiver completamente satisfeito(a) com a sua compra, pode devolver o item em até 30 dias após a entrega para obter um reembolso total ou troca. Certifique-se de que o item esteja sem uso, na embalagem original e acompanhado do recibo. Entre em contato com a nossa equipe de atendimento ao cliente e eles o(a) orientarão pelo processo de devolução.",
    },
  ],
}: Props) {
  return (
    <div class={`bg-base-200`} style={{ backgroundColor: `${bgColor}` }}>
      <Section.Container>
        {/* <Section.Header title={title} cta={cta} /> */}
        <h3 class="text-center font-bold text-gray-300 text-sm">{title}</h3>
        {subtitle && (
          <h2
            class="text-gray-300 text-2xl font-bold text-center"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
        <ul class="w-full px-4 phone:px-0">
          <li class="gap-2 flex flex-col px-2 desktop-sm:px-0">
            {questions.map((question) => <Question {...question} />)}
          </li>
        </ul>
      </Section.Container>
    </div>
  );
}
