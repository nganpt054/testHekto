function AboutInfo({image,name,office}){
    return(
        <div className="aboutcontent__bot__info">
              <div className="aboutcontent__bot__info__image">
                <img src={image} alt=""></img>
              </div>
              <div className="aboutcontent__bot__info__name">{name}</div>
              <div className="aboutcontent__bot__info__office">{office}</div>
              <div className="aboutcontent__bot__info__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices
                dolor aliquam lacus volutpat praesent.
              </div>
            </div>
    )
}
export default AboutInfo;