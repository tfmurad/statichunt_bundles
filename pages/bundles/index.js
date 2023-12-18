import Base from "layouts/Baseof";
import { getListPage } from "lib/contentParser";
import { markdownify } from "lib/utils/textConverter";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";

const bundles = ({ data }) => {
  const { content, frontmatter } = data;
  const { title, bundles } = frontmatter;

  return (
    <Base>
      <section className="pt-[100px] pb-[120px]">
        <div className="container">
          <div className="row text-center">
            <h1>{title}</h1>
            <p className="mx-auto col-12 md:col-8 pt-6">{markdownify(content)}</p>
          </div>

          <div className="row pt-14 xl:px-24 gap-y-14">
            {bundles.map((bundle, i) => {
              return (
                <div key={i} className="col-12 lg:col-6 mx-auto">
                  <div>
                    <Image
                      src={bundle.image}
                      alt={bundle.title}
                      height="400"
                      width="716"
                      className="w-full rounded-t-md overflow-hidden"
                    />
                  </div>

                  <div className="p-4 md:p-8 shadow-md rounded-b-md">
                    <div className="flex justify-between">
                      <h3>
                        {bundle.bundle}{" "}
                        <span className="text-sm text-dark dark:text-darkmode-dark font-normal">
                          By {bundle.author}
                        </span>
                      </h3>

                      <p className="text-dark dark:text-darkmode-dark font-bold text-2xl">
                        {bundle.price}{" "}
                        <s className="text-sm text-dark dark:text-darkmode-dark font-normal">
                          {bundle.regular_price}
                        </s>
                      </p>
                    </div>

                    <div className="flex justify-between pt-6">
                      <div className="row gap-y-4">
                        {bundle.features.map((feature, i) => (
                          <p className="col-12 sm:col-6 text-sm flex items-center gap-x-2" key={i}>
                            <FaRegCircleCheck
                              size={16}
                              className="text-primary"
                            />{" "}
                            {feature}
                          </p>
                        ))}
                      </div>
                      <a
                        className="btn btn-outline-primary border-2 font-bold text-primary whitespace-nowrap mt-auto origin-right scale-90 md:scale-100 lg:ml-0"
                        href="https://zeon.studio/?ref=statichunt.com"
                        target="_blank"
                      >
                        {bundle.button_label}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Base>
  );
};

export const getStaticProps = async () => {
  const data = await getListPage("content/bundles/_index.md");
  return {
    props: {
      data: data,
    },
  };
};

export default bundles;
