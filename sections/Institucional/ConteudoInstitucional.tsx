import { HTMLWidget } from "apps/admin/widgets.ts";

interface Props {
  conteudoTextual: HTMLWidget;
}

export default function ConteudoInstitucional({ conteudoTextual }: Props) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: conteudoTextual }} />
    </>
  );
}
