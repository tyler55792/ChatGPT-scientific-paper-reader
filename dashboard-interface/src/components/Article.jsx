import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Article({id, title, content, date, sourceID, deleteClick}) {

    return (
      <div className="article-container">    
        <div className="article-date">
            {date}
        </div>
        <div className="article-title">
            {title}
        </div>
        <div className="article-content">
            {content}
        </div>
        <Link to={`/${id}`} className="chatLink">
            Ask GPT
        </Link>
        <button onClick={() => deleteClick(id, sourceID)} className="delete-button">
            Delete
        </button>
      </div>
    )
}

Article.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    sourceID: PropTypes.string,
    deleteClick: PropTypes.func.isRequired,
};
  
export default Article;