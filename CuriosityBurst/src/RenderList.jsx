import PropTypes from 'prop-types';

function RenderList(props){
  return(
    <div>
      <p>{props.category}</p>
      <p>
        {props.items.map((item, index) => (
          <div>
            <button key={index}>{item.name}</button>
          </div>
        ))}
      </p>
    </div>
  );
}

RenderList.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    ISBN: PropTypes.string,
  })),
}

RenderList.defaultProps = {
  category: 'Unknown',
  items: [],
}

export default RenderList;