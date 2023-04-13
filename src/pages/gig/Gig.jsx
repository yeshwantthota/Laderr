import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">Laderr > Health & Wellness ></span>
          <h1>New Innovation in health Industry</h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Anna Bell</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About This Innovation</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos fuga dolorum corporis tenetur, ipsum assumenda laborum
            amet illum delectus impedit nisi consequatur cum aliquam rerum non
            sunt sapiente esse quas culpa sed. Qui aliquid voluptatem, cumque
            molestias numquam ex illo enim ratione autem, velit, optio esse
            ipsam debitis minima tempora omnis vel veniam? Id cumque vero odio
            eveniet dicta officia quas nisi tenetur nam, quibusdam soluta hic
            aspernatur atque quae blanditiis, quia unde quaerat, in laudantium
            corporis quos. Maxime ratione ducimus voluptates. Error perferendis
            nihil voluptatibus quos aliquam porro quidem, culpa sunt aperiam et
            deleniti, corporis quae numquam sit necessitatibus facilis
            praesentium magnam. Hic temporibus labore necessitatibus eligendi,
            accusantium nisi? Obcaecati illum accusamus repudiandae facilis
            assumenda consequatur. Cum, cupiditate! Accusamus veniam, ut
            officiis quibusdam porro deleniti nam dolorem, perferendis
            laboriosam dignissimos praesentium? Laborum a eius quaerat soluta
            natus inventore qui eveniet? Ex numquam corrupti voluptatem
            consectetur voluptatum exercitationem facere fugiat velit.
            Reiciendis commodi, perspiciatis ea aspernatur recusandae laudantium
            neque quia. Quisquam voluptatibus placeat hic aut. Dolorum fugiat
            rem impedit voluptas facilis aspernatur a ea voluptate voluptates
            consequuntur quia voluptatem placeat blanditiis debitis porro
            repellendus sed laboriosam, itaque amet, numquam odio vero! Nisi
            ullam laboriosam beatae distinctio earum! Ea, aliquid illo.
          </p>
          <div className="seller">
            <h2>About The Innovator</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>Anna Bell</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                autem, dignissimos ex, architecto eos fugiat odio nobis quam,
                obcaecati soluta est! Magnam eos, perferendis sequi odit
                nesciunt cupiditate repudiandae nihil! Exercitationem odit
                totam, doloremque temporibus reprehenderit repellat minima saepe
                ea quam obcaecati quo reiciendis! Id eveniet consequatur fugiat
                quaerat iusto.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                cupiditate laborum culpa ipsam repellat? Error magni sapiente in
                nobis commodi sed quaerat quo enim. Officiis laborum molestiae
                dolorum ad at praesentium numquam amet fugiat accusamus non
                dicta, soluta a magni quos, deserunt fugit ipsa eaque natus id
                autem ut voluptate.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                necessitatibus harum accusamus provident quisquam, sed vero sit.
                Pariatur rem magnam quis qui laboriosam? Expedita ullam qui
                eligendi, quaerat iste maiores sed? Nihil, officia
                necessitatibus ratione ad illo omnis iure dolor modi quas nulla.
                Assumenda hic dolorum dicta amet odio mollitia?
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lyle Giles </span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                doloremque accusamus ipsum sequi, dolorum nihil? Minus,
                distinctio sequi consequatur accusamus aspernatur et repellat
                dolorum harum ex, optio, delectus est error consectetur a amet
                itaque totam repellendus dolorem voluptatibus ad sit illo. Hic
                nam temporibus accusamus, illum aliquam facilis accusantium
                debitis.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>3D - devices</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            expedita mollitia, consequatur quasi cum praesentium at consequuntur
            perspiciatis explicabo. Laborum atque itaque praesentium magni
            necessitatibus.
          </p>
          {/* <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div> */}
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Lorem, ipsum.</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Lorem, ipsum.</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Lorem, ipsum dolor.</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Lorem, ipsum.</span>
            </div>
          </div>
          <button>Invest</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
