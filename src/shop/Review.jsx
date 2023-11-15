import React, { useState } from 'react'
import Ratting from '../components/Ratting';
const reviwtitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on October 10, 2023 at 6:57 pm",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on October 12, 2023 at 5:01 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpeg",
        imgAlt: "Client thumb",
        name: "Amelia Jhon",
        date: "Posted on September 18, 2023 at 7:29 pm",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpeg",
        imgAlt: "Client thumb",
        name: "Olivia Thomas",
        date: "Posted on August 27, 2022 at 12:53 pm",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];


const Review = () => {
    const [reviewShow, setReviewShow] = useState(true)

    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className="desc" onClick={() => setReviewShow(!reviewShow)}>Description</li>
                <li className="rev" onClick={() => setReviewShow(!reviewShow)}>Review 4</li>
            </ul>

            {/* desc & review content */}
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className="review-showing">
                    <ul className="content lab-ul">
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className="post-thumb">
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className="entry-content">
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))

                        }
                    </ul>

                    {/* add review field */}
                    <div className='client-review'>
                        <div className="review-form">
                            <div className="review-title">
                                <h5>{reviwtitle}</h5>
                            </div>

                            <form action="action" className='row'>
                                <div className="col-md-4 col-12">
                                    <input type="text" name="name" placeholder='Full Name *' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <input type="email" name="email" placeholder='Your Email *' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="rating">
                                        <span className='me-2'>Your Rating</span>
                                        <Ratting />
                                    </div>
                                </div>
                                <div className="col-md-12 col-12">
                                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Type Here Message'>
                                    </textarea>
                                </div>
                                <div className="col-12">
                                    <button type='submit' className='default-button'>
                                        <span>Submit Review</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* description */}
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas minima unde voluptate ullam voluptatem sequi illum consequatur dolorum atque inventore nulla soluta quis mollitia quisquam nesciunt, odio rem reiciendis eligendi eum dicta deleniti optio ratione! Modi eos repellat vitae? Quibusdam dolorum provident amet explicabo libero repudiandae autem eligendi repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe a nam vero nemo illum unde dolore ea! Enim quam facere, ipsam quis dolorum optio deleniti saepe perferendis adipisci! Cum accusantium, nostrum rerum ducimus eos non, excepturi saepe, labore officia unde perferendis corrupti. Ut minus pariatur, quibusdam laborum eligendi iusto incidunt!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa, iste beatae enim consectetur et nesciunt omnis animi. Dolor amet voluptatem, placeat enim repellat accusantium quaerat dolorum repellendus praesentium et repudiandae, libero non quasi, delectus provident eligendi maxime id ratione itaque optio ipsum molestiae quo accusamus ducimus! Soluta, eum eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, eum eius voluptatibus non laudantium veritatis recusandae ab? Molestias libero dolore eveniet enim, doloremque amet, quidem reprehenderit ipsa animi iste sequi, officiis dolorem optio nihil ducimus adipisci accusantium distinctio est perferendis voluptatibus facilis praesentium excepturi. Sit cum ipsa a fugiat odio.</p>
                
                <div className="post-item">
                    <div className="post-thumb">
                        <img src="/src/assets/images/shop/01.jpg" alt="" />
                    </div>
                    <div className="post-content">
                        <ul className="lab-ul">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex eum officiis, numquam sit commodi dignissimos vitae facilis nulla. Iusto ipsa sapiente quos molestias libero? Accusantium numquam cum provident enim.</li>
                            <li> amet consectetur adipisicing elit. Aliquid ex eum officiis, numquam sit commodi dignissimos vitae facilis nulla. Iusto ipsa sapiente quos molestias libero? Accusantium numquam cum provident enim.</li>
                            <li>amet consectetur adipisicing elit. Aliquid ex eum officiis, numquam sit commodi dignissimos vitae facilis nulla. Iusto ipsa sapiente quos molestias libero? Accusantium numquam cum provident enim.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex eum officiis, numquam sit commodi dignissimos vitae facilis nulla. Iusto ipsa sapiente quos molestias libero? Accusantium numquam cum provident enim.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex eum officiis, numquam sit commodi dignissimos vitae facilis nulla. Iusto ipsa sapiente quos molestias libero? Accusantium numquam cum provident enim.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex eum officiis, numquam sit commodi dignissimos vitae facilis nulla. Iusto ipsa sapiente quos molestias libero? Accusantium numquam cum provident enim.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex eum officiis, numquam sit commodi dignissimos vitae facilis nulla. Iusto ipsa sapiente quos molestias libero? Accusantium numquam cum provident enim.</li>
                        </ul>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas minima unde voluptate ullam voluptatem sequi illum consequatur dolorum atque inventore nulla soluta quis mollitia quisquam nesciunt, odio rem reiciendis eligendi eum dicta deleniti optio ratione! Modi eos repellat vitae? Quibusdam dolorum provident amet explicabo libero repudiandae autem eligendi repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe a nam vero nemo illum unde dolore ea! Enim quam facere, ipsam quis dolorum optio deleniti saepe perferendis adipisci! Cum accusantium, nostrum rerum ducimus eos non, excepturi saepe, labore officia unde perferendis corrupti. Ut minus pariatur, quibusdam laborum eligendi iusto incidunt!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa, iste beatae enim consectetur et nesciunt omnis animi. Dolor amet voluptatem, placeat enim repellat accusantium quaerat dolorum repellendus praesentium et repudiandae, libero non quasi, delectus provident eligendi maxime id ratione itaque optio ipsum molestiae quo accusamus ducimus! Soluta, eum eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, eum eius voluptatibus non laudantium veritatis recusandae ab? Molestias libero dolore eveniet enim, doloremque amet, quidem reprehenderit ipsa animi iste sequi, officiis dolorem optio nihil ducimus adipisci accusantium distinctio est perferendis voluptatibus facilis praesentium excepturi. Sit cum ipsa a fugiat odio.</p>

                </div>
            </div>
        </>
    )
}

export default Review
