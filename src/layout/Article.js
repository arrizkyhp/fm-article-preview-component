import Moment from 'react-moment';
import Button from 'components/Button';
import Toggle from 'components/Toggle';

const Article = ({ data }) => {
    const articleAPI = data[0];
    console.log(articleAPI.writer[0].imageUrl)
    return (
      <>
        <section className="drawer">
          <img src={articleAPI.imageUrl} alt="drawer with nice vase and photoframe" />
        </section>

        <section className="information">
          <header className="article">
            <h1 className="article__title text-dark">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
            <p className="article__content text-desaturated">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
          </header>

          <footer className="writer">
            <section className="writer__information">
              <img src={articleAPI.writer[0].imageUrl} alt="" />
              <div className="writer__information__detail">
                <h2 className="text-desaturated">{articleAPI.writer[0].name}</h2>
                <span className="writer__information__detail__publish-date text-gray">
                  <Moment format="D MMM YYYY">{articleAPI.publishDate}</Moment>
                </span>
              </div>
            </section>
            <Toggle />
          </footer>
        </section>
      </>
    );
}

export default Article;