import React from "react";
import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi";
import { Typography, Row, Col, Card, Avatar } from "antd";
import Loader from "./Loader";
import HTMLReactParser from 'html-react-parser';

const { Text, Title } = Typography;

// const demoImage =
//   "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const { data: cryptoNews, isFetching } = useGetCryptosNewsQuery();
  const newsData = simplified ? cryptoNews?.data.slice(0, 6) : cryptoNews?.data;
  if (isFetching) return <Loader />;
  return (
    <Row gutter={[24, 24]}>
      {newsData?.map((news, i) => {
        return (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.title}
                  </Title>
                  {/* <img
                    src={demoImage}
                    alt="news"
                    style={{ height: "100px", objectFit: "cover" }}
                  /> */}
                </div>
                <p>
                  {news.description > 100
                    ? `${HTMLReactParser(news.description.substring(0, 75))} ...`
                    : HTMLReactParser(news.description)}
                </p>
                <div className="provider-container">
                  <Avatar src={news.icon} alt="" />
                  <Text className="provider-name">{news.hostname}</Text>
                </div>
              </a>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default News;
