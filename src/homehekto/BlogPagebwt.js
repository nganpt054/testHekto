import BlogPageSingle from "./BlogPageSingle";

export default function BlogPagebwt() {
  const ListBlogPage = [
    {
      image: "../images/blogpage1.png",
      Name: "Mauris at orci non vulputate diam tincidunt nec.",
    },
    {
      image: "../images/blogpage2.png",
      Name: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    },
    {
      image: "../images/blogpage3.png",
      Name: "Sit nam congue feugiat nisl, mauris amet nisi. ",
    },
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
  ];
  const recentpost =[
    "./images/Rectangle 126.png",
    "./images/Rectangle 127.png",
    "./images/Rectangle 126 (2).png",
    "./images/Rectangle 129.png"
  ];
  return (
    <div className="BlogPagebwt">
      <div className="BlogPagebwt__left">
        {ListBlogPage.map((blogpage) => (
          <BlogPageSingle image={blogpage.image} Name={blogpage.Name} />
        ))}
      </div>
      <div className="BlogPagebwt__right">
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
              {Array(5)
                .fill()
                .map(() => (
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
            {recentpost.map((image) => (
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
              {saleproduct.map((product) => (
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
              <a
                className="contentsingle__right__tags__content"
                href={{ href: "#" }}
              >
                General
              </a>
              <a
                className="contentsingle__right__tags__content"
                href={{ href: "#" }}
              >
                Atsanil
              </a>
              <a
                className="contentsingle__right__tags__content"
                href={{ href: "#" }}
              >
                Insas.
              </a>
              <a
                className="contentsingle__right__tags__content"
                href={{ href: "#" }}
              >
                Bibsaas
              </a>
              <a
                className="contentsingle__right__tags__content"
                href={{ href: "#" }}
              >
                Nulla.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
