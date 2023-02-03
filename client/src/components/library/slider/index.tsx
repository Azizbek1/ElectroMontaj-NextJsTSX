import Slider from "react-slick";

const slickProps = {
  autoplay: true,
  arrows: false,
  dots: true,
};
const SliderPage = () => {
  return (
    <div>
      <Slider {...slickProps}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
      </Slider>
    </div>
  );
};

export default SliderPage;
