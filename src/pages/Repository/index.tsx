import Col from "components/Col";
import Layout from "components/Layout";
import Row from "components/Row";
import Loader from "components/Loader";

import useRepo from "./useRepo";

const Repository = () => {
  const { owner, repo, loading, languages, readme } = useRepo();

  return (
    <Layout title={`${owner}/${repo}`}>
      {loading ? (
        <Loader height="400px" />
      ) : (
        <Row className="my-5 repo-info">
          <Col className="mb-3">
            <h1>{`${owner}/${repo}`}</h1>
            <div className="mb-2">Languages:</div>
            {Object.keys(languages).map((language, index) => {
              return (
                <div key={index} className={`${language} d-inline px-3`}>
                  {language}
                </div>
              );
            })}
          </Col>
          <Col className="bg-white px-5 py-4 border readme">
            <div dangerouslySetInnerHTML={{ __html: readme }}></div>
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default Repository;
