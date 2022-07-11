import Discount from "./Discount";
import Featured from "./Featured";
import Leatest from "./Leatest";
import Leatestblg from "./Leatestblg";
import Logo from "./Logo";
import Newslater from "./Newslater";
import Shopex from "./Shopex";
import Top from "./Top";
import Trending from "./Trending";
import Unique from "./Unique";

function Content() {
  return (
    <div className="content">
      <Featured />
      <Leatest />
      <Shopex />
      <Unique />
      <Trending />
      <Discount />
      <Top />
      <Newslater />
      <Logo />
      <Leatestblg />
    </div>
  );
}
export default Content;
