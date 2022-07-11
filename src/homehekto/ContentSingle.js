function ContentSingle() {
  const fakeProduct = [
    {
      image: "./images/Rectangle 63.png",
      title: "Quam sed",
    },
    {
      image: "./images/Rectangle 632.png",
      title: "Tristique sed",
    },
    {
      image: "./images/Rectangle 633.png",
      title: "A etiam",
    },
    {
      image: "./images/Rectangle 634.png",
      title: "Mi nisi",
    },
  ];
  const recentpost =[
    "./images/Rectangle 126.png",
    "./images/Rectangle 127.png",
    "./images/Rectangle 126 (2).png",
    "./images/Rectangle 129.png"
  ];
  const saleproduct=[
    {
      image:"./images/saleproduct1.png",
      title:"Elit ornare in enim mauris."
    },
    {
      image:"./images/saleproduct2.png",
      title:"Viverra pulvinar et enim."
    },
    {
      image:"./images/saleproduct3.png",
      title:"Mattis varius donec fdsfd"
    }
  ]
  return (
    <div className="singleblog">
      <div className="contentsingle">
      <div className="contentsingle__left">
        <div className="contentsingle__left__post">
          <div className="contentsingle__left__post__banner">
            <img
              src="./images/bruce-mars-FWVMhUa_wbY-unsplash 2.png"
              alt=""
            ></img>
          </div>
          <div className="contentsingle__left__post__timeactor">
            <div className="contentsingle__left__post__timeactor__actor">
              <div className="contentsingle__left__post__timeactor__actor__image">
                <img src="./images/Vector (3).png" alt=""></img>
              </div>
              <div className="contentsingle__left__post__timeactor__actor__text">
                Surf Auxion
              </div>
            </div>

            <div className="contentsingle__left__post__timeactor__time">
              <div className="contentsingle__left__post__timeactor__time__image">
                <img src="./images/Vector (4).png" alt=""></img>
              </div>
              <div className="contentsingle__left__post__timeactor__time__text">
                Aug 09 2020
              </div>
            </div>
          </div>
          <div className="contentsingle__left__post__title">
            Mauris at orci non vulputate diam tincidunt nec.
          </div>
          <div className="contentsingle__left__post__paragraph">
            <div className="contentsingle__left__post__paragraph__paragraph1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at.
            </div>
            <div className="contentsingle__left__post__paragraph__paragraph2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              dapibus est, nunc, montes, lacus consequat integer viverra. Sit
              morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
              posuere malesuada.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat
              integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu
              platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Velit dapibus est, nunc,
            </div>
            <div className="contentsingle__left__post__paragraph__paragraph3">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Commodo dictum sapien, amet,
                consequat toamk risusu”
              </p>
            </div>
            <div className="contentsingle__left__post__paragraph__banner">
              <div className="contentsingle__left__post__paragraph__banner__image1">
                <img src="./images/Group 92.png" alt=""></img>
              </div>
              <div className="contentsingle__left__post__paragraph__banner__image2">
                <img src="./images/Rectangle 70.png" alt=""></img>
              </div>
            </div>
            <div className="contentsingle__left__post__paragraph__paragraph4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              dapibus est, nunc, montes, lacus consequat integer viverra. Sit
              morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
              posuere malesuada.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat
              integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu
              platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Velit dapibus est, nunc,
            </div>
            <div className="contentsingle__left__post__paragraph__products">
              {fakeProduct.map((product) => (
                <div className="contentsingle__left__post__paragraph__products__product">
                  <div className="contentsingle__left__post__paragraph__products__product__image">
                    <img src={product.image} alt=""></img>
                  </div>
                  <div className="contentsingle__left__post__paragraph__products__product__text">
                    <div className="contentsingle__left__post__paragraph__products__product__text__title">
                      {product.title}
                    </div>
                    <div className="contentsingle__left__post__paragraph__products__product__text__prices">
                      <div className="contentsingle__left__post__paragraph__products__product__text__prices__price">
                        $32.00
                      </div>
                      <div className="contentsingle__left__post__paragraph__products__product__text__prices__extrude">
                        $56.00
                      </div>
                      <div className="contentsingle__left__post__paragraph__products__product__text__prices__rate">
                        <img src="./images/Vector (8).png" alt=""></img>
                        <img src="./images/Vector (8).png" alt=""></img>
                        <img src="./images/Vector (8).png" alt=""></img>
                        <img src="./images/Vector (8).png" alt=""></img>
                        <img src="./images/Vector (10).png" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="contentsingle__left__post__paragraph__paragraph5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              dapibus est, nunc, montes, lacus consequat integer viverra. Sit
              morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
              posuere malesuada.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat
              integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu
              platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Velit dapibus est, nunc,
            </div>
            <div className="contentsingle__left__post__paragraph__paragraph6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              dapibus est, nunc, montes, lacus consequat integer viverra. Sit
              morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
              posuere malesuada.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat
              integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu
              platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Velit dapibus est, nunc,
            </div>
            <div className="contentsingle__right__follow__content">
              <img src="./images/Group 2021.png" alt=""></img>
              <img src="./images/Group 2031.png" alt=""></img>
              <img src="./images/Group 2041.png" alt=""></img>
            </div>
            <div className="contentsingle__left__post__paragraph__footer">
              <div className="contentsingle__left__post__paragraph__footer__pre">
                <div className="contentsingle__left__post__paragraph__footer__pre__image">
                  <img src="./images/Vectorpre.png" alt=""></img>
                </div>
                <div className="contentsingle__left__post__paragraph__footer__pre__text">
                  Previous Post
                </div>
              </div>
              <div className="contentsingle__left__post__paragraph__footer__next">
                <div className="contentsingle__left__post__paragraph__footer__next__text">
                  Next Post
                </div>
                <div className="contentsingle__left__post__paragraph__footer__next__image">
                  <img src="./images/Vectornext.png" alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contentsingle__left__postsmall">
          <div className="contentsingle__left__postsmall__post1">
            <div className="contentsingle__left__postsmall__post1__post">
            <div className="contentsingle__left__postsmall__post1__post__image">
              <img src="./images/smallpost1.png" alt=""></img>
            </div>
            <div className="contentsingle__left__postsmall__post1__post__text">
              <div className="contentsingle__left__postsmall__post1__post__text__title">
                Sapien ac
              </div>
              <p>Jan 09 2020</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in
                vitae rutrum vulputate consectetur.
              </span>
            </div>
            </div>
          </div>
          <div className="contentsingle__left__postsmall__post2">
            <div className="contentsingle__left__postsmall__post2__post">
            <div className="contentsingle__left__postsmall__post2__post__image">
              <img src="./images/smallpost2.png" alt=""></img>
            </div>
            <div className="contentsingle__left__postsmall__post2__post__text">
              <div className="contentsingle__left__postsmall__post2__post__text__title">
                Augue conva
              </div>
              <p>Aug 18 2020</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in
                vitae rutrum vulputate consectetur.
              </span>
            </div>
            </div>
          </div>
        </div>
        <div className="contentsingle__left__comment">
        <div className="contentsingle__left__comment__input">
        <input type="text" className="fontAwesome" id="singlename" placeholder="&#xf007; Your Name*" />
        <input type="text" className="fontAwesome" id="singlemail" placeholder="&#xf0e0; Write Your Email*" />
        <textarea type="text" className="fontAwesome" id="singlemess" placeholder="&#xf075; Write your comment*" />
        </div>
        <div className="contentsingle__left__comment__checkbox">
          <input type="checkbox"/>
          <p>Save my name, email, and website in this browser for the next time I comment.</p>
        </div>
        <button className="continueshipping">Continue Shipping</button>
        </div>
      </div>
      <div className="contentsingle__right">
        <div className="contentsingle__right__search">
          <div className="contentsingle__right__search__title">Search</div>
          <div className="contentsingle__right__search__content">
            <input type="text" placeholder="Search For Posts"></input>
          </div>
        </div>
        <div className="contentsingle__right__categories">
          <div className="contentsingle__right__categories__title">
            Categories
          </div>
          <div className="contentsingle__right__categories__content">
            <div className="contentsingle__right__categories__content__optionaction">
              Hobbies (14)
            </div>
            {Array(5).fill().map(()=>(
              <div className="contentsingle__right__categories__content__option">
              Women (21)
            </div>
            ))}
          </div>
        </div>
        <div className="contentsingle__right__recentpost">
          <div className="contentsingle__right__recentpost__title">
            Recent Post
          </div>
          {recentpost.map(image=>(
            <div className="contentsingle__right__recentpost__content">
            <div className="contentsingle__right__recentpost__content__post">
              <div className="contentsingle__right__recentpost__content__post__image">
                <img src={image} alt=""></img>
              </div>
              <div className="contentsingle__right__recentpost__content__post__text">
                <p>It is a long established fact</p>
                <span>Aug 09 2020</span>
              </div>
            </div>
          </div>
          ))}

        </div>
        <div className="contentsingle__right__saleproduct">
          <div className="contentsingle__right__saleproduct__title">
            Sale Product
          </div>
          <div className="contentsingle__right__saleproduct__content">
            {saleproduct.map(product=>(
              <div className="contentsingle__right__saleproduct__content__product">
              <div className="contentsingle__right__saleproduct__content__product__image">
                <img src={product.image} alt=""></img>
              </div>
              <div className="contentsingle__right__saleproduct__content__product__text">
                <p>{product.title}</p>
                <span>Aug 09 2020</span>
              </div>
            </div>
            ))}
            
          </div>
        </div>
        <div className="contentsingle__right__offerproduct">
          <div className="contentsingle__right__offerproduct__title">
            Offer product
          </div>
          <div className="contentsingle__right__offerproduct__content">
            <div className="contentsingle__right__offerproduct__content__product">
              <div className="contentsingle__right__offerproduct__content__product__image">
                <img src="./images/offerproduct1.png" alt=""></img>
              </div>
              <div className="contentsingle__right__offerproduct__content__product__text">
                <p>Duis lectus est.</p>
                <span>$12.00 - $15.00</span>
              </div>
            </div>
            <div className="contentsingle__right__offerproduct__content__product">
              <div className="contentsingle__right__offerproduct__content__product__image">
                <img src="./images/offerproduct2.png" alt=""></img>
              </div>
              <div className="contentsingle__right__offerproduct__content__product__text">
                <p>Sed placerat.</p>
                <span>$12.00 - $15.00</span>
              </div>
            </div>
            <div className="contentsingle__right__offerproduct__content__product">
              <div className="contentsingle__right__offerproduct__content__product__image">
                <img src="./images/offerproduct3.png" alt=""></img>
              </div>
              <div className="contentsingle__right__offerproduct__content__product__text">
                <p>Netus proin.</p>
                <span>$12.00 - $15.00</span>
              </div>
            </div>
            <div className="contentsingle__right__offerproduct__content__product">
              <div className="contentsingle__right__offerproduct__content__product__image">
                <img src="./images/offerproduct4.png" alt=""></img>
              </div>
              <div className="contentsingle__right__offerproduct__content__product__text">
                <p>Platea in.</p>
                <span>$12.00 - $15.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contentsingle__right__follow">
          <div className="contentsingle__right__follow__title">Follow</div>
          <div className="contentsingle__right__follow__content">
            <img src="./images/Group 2021.png" alt=""></img>
            <img src="./images/Group 2031.png" alt=""></img>
            <img src="./images/Group 2041.png" alt=""></img>
          </div>
        </div>
        <div className="contentsingle__right__tags">
          <div className="contentsingle__right__tags__title">Tags</div>
          <div className="contentsingle__right__tags__content">
            <a className="contentsingle__right__tags__content" href={{href:"#"}}>
              General
            </a>
            <a className="contentsingle__right__tags__content" href={{href:"#"}}>
              Atsanil
            </a>
            <a className="contentsingle__right__tags__content" href={{href:"#"}}>
              Insas.
            </a>
            <a className="contentsingle__right__tags__content" href={{href:"#"}}>
              Bibsaas
            </a>
            <a className="contentsingle__right__tags__content" href={{href:"#"}}>
              Nulla.
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default ContentSingle;
