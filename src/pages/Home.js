import Article from 'layout/Article';

import apiData from 'json/apiData.json';
import Attribution from 'layout/Attribution';

const Home = () => {
    return (
      <>
        <main>
          <Article data={apiData.articles} />
        </main>
        <Attribution />
      </>
    );
}

export default Home;