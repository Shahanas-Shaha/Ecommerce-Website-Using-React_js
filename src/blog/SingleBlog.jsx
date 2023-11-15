import React from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { useState } from "react";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curpage={"Blog / Blog Details"} />
      <div className="blog-section blog-single padding-tb section bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>{" "}
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Omnis sequi placeat repellat
                                  minus rem ipsum dolores quam reprehenderit
                                  assumenda possimus. Molestiae dignissimos
                                  voluptate velit cum eligendi vitae maiores
                                  sed. Facere quos architecto incidunt illum.
                                  Enim odit provident, accusamus sed fugit
                                  nostrum illo odio consequatur expedita. Nulla
                                  aliquam ut accusamus minima molestiae omnis!
                                  Velit voluptatum necessitatibus doloremque
                                  explicabo cumque repudiandae! Quod. Ut
                                  fringilla elementum metus, nec iaculis felis
                                  interdum in. Nam eu eros tellus. Curabitur
                                  convallis risus pulvinar nibh luctus tempor.
                                  Etiam sit amet volutpat lacus, in pharetra
                                  eros. Etiam quis imperdiet neque. Mauris
                                  sodales, lorem at pharetra sollicitudin, augue
                                  odio maximus lectus, eget feugiat nisl neque
                                  id mauris. Pellentesque egestas, neque ac
                                  posuere molestie, justo nisl tincidunt nunc,
                                  in venenatis libero orci ac ipsum.
                                </p>
                                <blockquote>
                                  <p>
                                    Duis est ligula, imperdiet non pellentesque
                                    sed, laoreet quis urna. Curabitur ac viverra
                                    nulla, vel tristique felis. Etiam elementum
                                    consectetur magna vel sagittis. Morbi mollis
                                    lectus sit amet magna dapibus, id ultricies
                                    orci congue.
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Nam consectetur eros ac molestie blandit.
                                  Morbi placerat, lectus ac cursus suscipit,
                                  lectus justo cursus nibh, quis blandit elit
                                  risus nec ex. Donec volutpat tincidunt diam eu
                                  fringilla. Aenean semper purus id auctor
                                  molestie. Curabitur vestibulum auctor ex,
                                  suscipit luctus turpis placerat in.
                                  Pellentesque nisl justo, aliquam sed accumsan
                                  eget, mattis non dolor. Ut facilisis justo ac
                                  orci sagittis, in interdum massa tincidunt.
                                  Vivamus sit amet massa mauris. Quisque eu
                                  pulvinar arcu. Proin ut purus nec quam pretium
                                  tincidunt. Vivamus quis sagittis nisl.
                                </p>

                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Pellentesque lacinia felis dui, eget feugiat
                                  odio tempor in. Vestibulum accumsan ultricies
                                  maximus. Cras erat lectus, vestibulum sit amet
                                  commodo sit amet, iaculis a massa. Suspendisse
                                  vehicula rutrum turpis a tempus. Cras
                                  sollicitudin enim eget enim ornare, quis
                                  auctor ex vulputate. Donec tincidunt, lorem
                                  vitae varius auctor, lectus mauris tristique
                                  metus, vitae mattis lorem metus eget urna.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Fusce rhoncus vitae purus
                                  quis porttitor. In porta efficitur luctus. Sed
                                  et vestibulum lorem. Nullam fermentum nisi a
                                  nulla rutrum placerat.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/RH_V2rtFqYM?si=vhbJYtM6KjzFOsUD"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lacinia felis dui, eget feugiat odio tempor
                                  in. Vestibulum accumsan ultricies maximus.
                                  Cras erat lectus, vestibulum sit amet commodo
                                  sit amet, iaculis a massa. Suspendisse
                                  vehicula rutrum turpis a tempus. Cras
                                  sollicitudin enim eget enim ornare, quis
                                  auctor ex vulputate. Donec tincidunt, lorem
                                  vitae varius auctor, lectus mauris tristique
                                  metus, vitae mattis lorem metus eget urna.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">{
                                    socialList.map((val, i) =>(
                                        <li key={i}>
                                            <a href="#" className={val.className}>
                                               <i className={val.iconName}></i>
                                            </a>
                                        </li>
                                    ))
                                  }</ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="navigations-part">
                        <div className="left">
                            <a href="#" className="prev">
                                <i className="icofont-double-left"></i> Previous Blog
                            </a>
                            <a href="#" className="title">
                            Lorem ipsum dolor sit amet fusce vel lectus eget lectus sodales suscipit.
                            </a>
                        </div>
                        <div className="right">
                            <a href="#" className="prev">
                                <i className="icofont-double-right"></i>Previous Blog
                            </a>
                            <a href="#" className="title">
                            Lorem ipsum dolor sit amet fusce vel lectus eget lectus sodales suscipit.
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* right side of blog page */}
            <div className="col-lg-4 col-12">
                <aside>
                    <Tags/>
                    <PopularPost/>
                </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
