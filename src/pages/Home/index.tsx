import Layout from "components/Layout";
import Row from "components/Row";
import Col from "components/Col";
import SearchInput from "components/SearchInput";
import Card from "components/Card";
import Loader from "components/Loader";

import useHome from "./useHome";

const Home = () => {
  const { loading, repos, onSearch, onRepo } = useHome();

  return (
    <Layout title="Github browser">
      <Row className="mt-4">
        <Col md={8} lg={6} xl={6} className="mx-auto">
          <SearchInput onSearch={onSearch} />
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          {repos.length === 0 ? (
            <div className="w-100 text-center">No results found.</div>
          ) : (
            repos.map((repo) => (
              <Col md={6} lg={4} xl={3} key={repo.id}>
                <Card
                  title={repo.name}
                  desc={repo.description}
                  language={repo.language}
                  onClick={() => onRepo(repo)}
                />
              </Col>
            ))
          )}
        </Row>
      )}
    </Layout>
  );
};

export default Home;
