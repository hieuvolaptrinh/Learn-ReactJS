import PropTypes from "prop-types";

// sử dụng thông thường
function MainContent1(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </li>
  );
}
// sử dụng destructuring để giảm thiểu gọi props
function MainContent({ image, title, desc }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  );
}
// sử dụng propTypes để kiểm tra kiểu dữ liệu của props
// để khỏi cảnh báo lỗi
MainContent1.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};
MainContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export { MainContent1, MainContent };
