import Base from "layouts/Baseof";
import { getListPage } from "lib/contentParser";
import { markdownify } from "lib/utils/textConverter";
import React from "react";

const bundles = ({ data }) => {
  const { content, frontmatter } = data;
  const { title, bundles } = frontmatter;
  console.log(content);
  return (
    <Base>
      <section className="pt-[100px] pb-[120px]">
        <div className="container">
          <div className="row text-center">
            <h1>{title}</h1>
            <p className="mx-auto col-8 pt-6">{markdownify(content)}</p>
          </div>

          <div>
            {
              bundles.map((bundle, i) => {
                return (
                  <div key={i}>
                    <h3>{bundle.bundle}</h3>
                    <p>{bundle.image}</p>
                  </div>
                )
              })
            }
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
