function Sidebar({ image, check, rating }) {
  return (
    <div className="contentShop__shopleft__sidebar__brand__listbrand">
      <div className="contentShop__shopleft__sidebar__brand__listbrand__check">
        <img alt="" src={image}></img>
      </div>

      {rating === null ? (
        <></>
      ) : (
        <div className="contentShop__shopleft__sidebar__brand__listbrand__checkimg">
          {rating}
        </div>
      )}
      <div className="contentShop__shopleft__sidebar__brand__listbrand__checklist">
        <a href="/">{check}</a>
      </div>
    </div>
  );
}
export default Sidebar;
