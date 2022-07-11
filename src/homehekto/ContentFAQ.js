function ContentFAQ() {
  return (
    <div className="contentfaq">
      <div className="contentfaq__infomations">
        <h1>Generel Information</h1>
        <div className="contentfaq__infomations__all">
        <div className="contentfaq__infomations__all__infomation">
          <div className="contentfaq__infomations__all__infomation__title">
            Eu dictumst cum at sed euismood condimentum?
          </div>
          <div className="contentfaq__infomations__all__infomation__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </div>
        </div>
        <div className="contentfaq__infomations__all__infomation">
          <div className="contentfaq__infomations__all__infomation__title">
            Magna bibendum est fermentum eros.
          </div>
          <div className="contentfaq__infomations__all__infomation__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </div>
        </div>
        <div className="contentfaq__infomations__all__infomation">
          <div className="contentfaq__infomations__all__infomation__title">
            Odio muskana hak eris conseekin sceleton?
          </div>
          <div className="contentfaq__infomations__all__infomation__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </div>
        </div>
        <div className="contentfaq__infomations__all__infomation">
          <div className="contentfaq__infomations__all__infomation__title">
            Elit id blandit sabara boi velit gua mara?
          </div>
          <div className="contentfaq__infomations__all__infomation__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </div>
        </div>
        </div>
      </div>
      <div className="contentfaq__question">
        <h1>Ask a Question</h1>
        <div className="contentfaq__question__input">
          <input type="text" placeholder="Your Name *" id="input__name"></input>
          <input
            type="text"
            placeholder="Subject *"
            id="input__subject"
          ></input>
          <textarea
            placeholder="Type Your Message *"
            id="input__mess"
          ></textarea>
        </div>
        <button>Send Mail</button>
      </div>
    </div>
  );
}
export default ContentFAQ;
