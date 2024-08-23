import { type BlogPost, BlogPostPage } from "apps/blog/types.ts";
import Image from "apps/website/components/Image.tsx";
// import Icon from "site/components/ui/Icon.tsx";

interface Props {
  /**
   * @description The description of name.
   */
  page?: BlogPostPage | null;
}

const PARAGRAPH_STYLES = "[&_p]:leading-[150%] [&_*]:mb-4";
const HEADING_STYLES =
  "[&>h1]:text-4xl [&>h1]:my-6 [&>h1]:font-bold [&>h2]:text-3xl [&>h2]:my-6 [&>h2]:font-bold [&>h3]:text-2xl [&>h3]:my-6 [&>h3]:font-bold [&>h4]:text-xl [&>h4]:my-6 [&>h4]:font-bold [&>h5]:text-lg [&>h5]:my-6 [&>h5]:font-bold [&>h6]:text-base [&>h6]:my-6 [&>h6]:font-bold";
const CODE_BLOCK_STYLES =
  "[&>pre]:bg-gray-100 [&>pre]:text-gray-800 [&>pre]:p-4 [&>pre]:font-mono [&>pre]:text-sm [&>pre]:border [&>pre]:rounded-md [&>pre]:overflow-x-auto [&>code]:block [&>code]:w-full";
const IMAGE_STYLES = "[&_img]:rounded-2xl [&_img]:w-full [&_img]:my-12";
const BLOCKQUOTE_STYLES =
  "[&>blockquote]:my-6 [&>blockquote]:border-l-2 [&>blockquote]:border-black [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:pl-6";

const CONTENT_STYLES =
  `max-w-3xl mx-auto ${PARAGRAPH_STYLES} ${HEADING_STYLES} ${CODE_BLOCK_STYLES} ${IMAGE_STYLES} ${BLOCKQUOTE_STYLES}`;

const DEFAULT_AVATAR =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e";

const DEFAULT_PROPS: BlogPost = {
  title: "Blog title heading will go here",
  excerpt: "Excerpt goes here",
  authors: [
    {
      name: "Full name",
      email: "author@deco.cx",
      avatar: DEFAULT_AVATAR,
    },
  ],
  categories: [],
  date: "2022-01-01",
  image:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9",
  slug: "blog-post",
  content:
    '<h1>Heading 1</h1><p>This is a paragraph under <strong>Heading 1</strong>. It can contain <em>italic</em> text, <strong>bold</strong> text, and even <code>code snippets</code>.</p><h2>Introduction</h2><p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p><p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</p><h2>Heading 2</h2><p>More text can be placed here. This section is under <strong>Heading 2</strong>.</p><h3>Heading 3 with Code Block</h3><p>This is an example of a code block:</p><pre><code>// This is a code block console.log("Hello, World!");</code></pre><h4>Heading 4 with Image</h4><p>Below is an image:</p><img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9" alt="Description of Image"><p><strong>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</strong></p><p>Collaboratively deploy intuitive partnerships whereas customized e-markets. Energistically maintain performance based strategic theme areas whereas just in time methodologies. Phosfluorescently drive functionalized intellectual capital and.</p><blockquote>"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."</blockquote><p>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.<h2>Conclusion</h2><p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p><p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p><p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>',
};

function SocialIcons() {
  return (
    <div class="flex gap-2">
      <div class="bg-gray-200 rounded-full p-1">
        <Icon id="Link" size={24} />
      </div>
      <div class="bg-gray-200 rounded-full p-1">
        <Icon id="LinkedinOutline" size={24} />
      </div>
      <div class="bg-gray-200 rounded-full p-1">
        <Icon id="TwitterOutline" size={24} />
      </div>
      <div class="rounded-full bg-gray-200 p-1">
        <Icon id="FacebookOutline" size={24} />
      </div>
    </div>
  );
}

export default function BlogPost({ page }: Props) {
  const { title, authors, image, date, content } = page?.post || DEFAULT_PROPS;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full flex flex-col gap-20 container mx-auto px-4 md:px-0 py-12 lg:py-28">
      <div className="w-full flex flex-col gap-12 max-w-3xl lg:mx-auto">
        <h1 className="text-5xl font-bold">{title}</h1>
        <div className="flex items-center gap-4">
          <Image
            className="object-cover w-14 h-14 rounded-full"
            alt={authors[0]?.name}
            src={authors[0]?.avatar || DEFAULT_AVATAR}
            width={56}
            height={56}
          />
          <div className="flex flex-col">
            <p className="font-semibold text-base">
              {authors.map((author) => author.name).join(", ")}
            </p>
            <p className="text-base">{formattedDate}</p>
          </div>
        </div>
      </div>
      <Image
        className="w-full object-cover aspect-video max-h-[600px] rounded-2xl"
        width={600}
        src={image || ""}
      />
      <div
        class={CONTENT_STYLES}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      >
      </div>
      <div class="flex flex-col gap-10 max-w-3xl w-full mx-auto">
        <div class="space-y-4">
          <p class="text-lg font-bold">Share this post</p>
          <div class="flex flex-col gap-8 md:flex-row justify-between">
            <SocialIcons />
            <div class="flex gap-2 text-white text-xs">
              <p class="flex items-center bg-zinc-700 py-2 px-4 rounded-full">
                Tag #1
              </p>
              <p class="flex items-center bg-zinc-700 py-2 px-4 rounded-full">
                Tag #2
              </p>
              <p class="flex items-center bg-zinc-700 py-2 px-4 rounded-full">
                Tag #3
              </p>
            </div>
          </div>
        </div>
        {/* divider zinc-300 */}
        <div class="w-full h-px bg-zinc-300"></div>
        <div className="flex items-center gap-4">
          <Image
            className="object-cover w-14 h-14 rounded-full"
            alt={authors[0]?.name}
            src={authors[0]?.avatar || ""}
            width={56}
            height={56}
          />
          <div className="flex flex-col">
            <p className="font-semibold text-base">
              {authors[0].name}
            </p>
            <p className="text-base">
              {`${authors[0].jobTitle ?? "Job Title"}, ${
                authors[0].company || "Company"
              }`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
