import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import newsApiService from '../../../services/NewsApiService';
import './HomePage.css';
import { Link } from 'react-router-dom';
export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'news_items': [] };
        this.fetchTopNews = this.fetchTopNews.bind(this);
    }
    componentDidMount() {
        this.fetchTopNews();
    }

    async fetchTopNews() {
        let response = await newsApiService.fetchTopNews();
        let data = [];
        [...Array(100).keys()].map(async (id) => {
            data.push(await newsApiService.fetchNewsItem(response[id]));
            this.setState({ 'news_items': data }, () => {
                // console.log(this.state.news_items.length);
            });
        });
    }
    render() {
        return (
            this.state.news_items.map((item, index) => {
                return (<div key={`item-${index}`} id={`item-${index}`} className="item-container">
                    <a className="item-link" target='_blank' href={item.url}>
                        <Container fluid>
                            <Row xs="auto">
                                <Col><span className={`material-icons icon-news item-${index}`}>article</span></Col>
                                <Col>
                                    <Col>
                                        <Row className="item-meta-col" xs="auto">
                                            <Col id={`item-by-${index}`}>{item.by}</Col>
                                            <Col>&#9679;</Col>
                                            <Col id={`item-time-${index}`}>{item.time}</Col>
                                        </Row>
                                    </Col>
                                    <Col id={`item-title-${index}`} className="item-title">
                                        {item.title}
                                    </Col>
                                </Col>
                            </Row>
                            <Row xs="auto">
                                <Col className="chat-meta-col">
                                    <span className="material-icons-outlined chat">
                                        chat_bubble_outline
                                    </span>
                                    <span id={`item-comment-count-${index}`} className="chat-info">{item.score}</span>
                                </Col>
                                <Col className="chat-meta-col">
                                    <span className="material-icons-outlined chat">
                                        bookmark_border
                                    </span>
                                    <span id={`item-save-button-${index}`} className="chat-info">Save</span>
                                </Col>
                            </Row>
                        </Container></a>
                </div>)
            })
        )
    }
}