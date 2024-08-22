import Icon from "../../components/ui/Icon.tsx";


export interface Props {
  link?: string;
}

function WhatsApp({ link }: Props) {
  if (!link) {
    return null;
  }

  return (
    <a
      href={link}
      target={"_blank"}
      class="fixed bottom-6 right-6 z-40"
      aria-label="Chat on WhatsApp"
    >
      <button
        class="bg-[#45D268] text-white p-2 rounded-full shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <Icon id="WhatsApp" size={48} stroke="0.01" />
      </button>
    </a>
  );
}

export default WhatsApp;
