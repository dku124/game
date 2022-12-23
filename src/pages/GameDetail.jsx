import React from 'react';
import { useParams } from 'react-router-dom';
import Hel from '../component/helmet/Hel';
// import games from '../assets/data/games';
import { Container, Row, Col } from 'reactstrap';
import GameItem from '../component/ui/gameItem/GameItem';

import '../style/gameDetail.css';
import AdsBlock from '../component/ui/ads/AdsBlock';
import Question from '../component/ui/question/Question';
import ReactPaginate from 'react-paginate';

import api from '../assets/data/api';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const GameDetail = () => {
  const { slug } = useParams();

  const [games, setGames] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axios.get(api[0].gameJson);
        setGames(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  const gameDetail = games?.find((game) => game.slug === slug);

  const [pageNumber, setPageNumber] = useState(0);
  const commentPerPage = 6;
  const visitedPage = pageNumber * commentPerPage;
  const cmtDisplay = gameDetail?.comment.slice(visitedPage, visitedPage + commentPerPage);
  const pageCount = Math.ceil(gameDetail?.comment.length / commentPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [gameDetail]);
  return (
    <>
      {gameDetail && (
        <Hel title={gameDetail.gameTitle}>
          <div className="body">
            <Container>
              <Row>
                <Col lg="8">
                  <div className="game_content">
                    <section className="section_head">
                      <div className="section breadcrumbs">
                        <a href="#" className="title">
                          Home
                        </a>
                        <i class="ri-arrow-right-s-line"></i>
                        <a href="#" className="title">
                          App Review
                        </a>
                        <i class="ri-arrow-right-s-line"></i>
                        <a href="#" className="title">
                          {gameDetail.gameName}
                        </a>
                      </div>
                    </section>

                    <section className="section_content">
                      <div className="section_main">
                        <div className="app">
                          <GameItem game={gameDetail} />
                        </div>
                      </div>
                    </section>

                    <section className="game_detail">
                      <p className="game_txt">{gameDetail.content01}</p>
                      <AdsBlock />
                      <img src={gameDetail.img02} alt="" />
                      <p className="game_txt">{gameDetail.content02}</p>
                      <AdsBlock />
                      <img src={gameDetail.img03} alt="" />
                      <p className="game_txt">{gameDetail.content03}</p>
                      <AdsBlock />
                      <img src={gameDetail.img04} alt="" />
                      <p className="game_txt">{gameDetail.content04}</p>
                      <AdsBlock />
                      <p className="game_txt">{gameDetail.content05}</p>
                    </section>

                    <section className="section_question">
                      <h3 className="section_title">Frequently asked questions</h3>
                      <Question game={gameDetail} />
                    </section>

                    <section className="section_category">
                      <h3 className="section_title">Categories</h3>
                      <div className="category_content">
                        {gameDetail.keyword.map((kw, index) => (
                          <span key={index}>{kw}</span>
                        ))}
                      </div>
                    </section>

                    <section className="section_comment">
                      <div className="comment_block">
                        <h3 className="section_title">Leave a comment</h3>
                        <div className="comment_form">
                          <form>
                            <div className="form_txt">
                              <div className="inp_group">
                                <div className="inp">
                                  <input type="text" placeholder="Name*" />
                                </div>
                                <div className="inp">
                                  <input type="text" placeholder="Email*" />
                                </div>
                              </div>
                              <div className="inp textarea">
                                <textarea placeholder="Comment*"></textarea>
                              </div>
                            </div>
                            <div className="form_check">
                              <input type="checkbox" id="{formCheckbox}" />
                              <label for="{formCheckbox}">
                                I read and agree the <a href="#">Privacy policy</a>
                              </label>
                            </div>
                            <div className="form_capcha">
                              <div className="g-recaptcha" data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR" />
                            </div>
                            <button>Add a comment</button>
                          </form>
                        </div>
                        <div className="comment_content">
                          <h3 className="section_title">{gameDetail.comment.length} Comment</h3>
                          <ul className="content_list">
                            {cmtDisplay.map((game, index) => (
                              <li key={index}>
                                <div class="user_info">
                                  <span className="user">
                                    <i class="ri-user-line"></i>
                                  </span>
                                  <div class="concise">
                                    <div class="nickname">{game.userName}</div>
                                    <div class="time">added {game.day} days ago</div>
                                  </div>
                                </div>
                                <p className="user_cmt">{game.cmt}</p>
                                <div className="user_action">
                                  <span>
                                    <span>
                                      <i class="ri-heart-add-line"></i>
                                    </span>
                                    <span>1</span>
                                  </span>
                                  <span>
                                    <span>
                                      <i class="ri-dislike-line"></i>
                                    </span>
                                    <span>0</span>
                                  </span>
                                  <span>
                                    <span>
                                      <i class="ri-chat-1-line"></i>
                                    </span>
                                    <span>0</span>
                                  </span>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <div id="pagination-container2" />
                          <div>
                            <ReactPaginate
                              pageCount={pageCount}
                              onPageChange={changePage}
                              previousLabel={<i class="ri-arrow-left-s-line"></i>}
                              nextLabel={<i class="ri-arrow-right-s-line"></i>}
                              containerClassName="pagination_button"
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </Col>
                <Col lg="4">
                  <section className="section_popular">
                    <h3 className="section_title">Popular</h3>
                    <ul className="list_game">
                      {games.map((game, index) => (
                        <li key={index}>
                          <GameItem game={game} />
                        </li>
                      ))}
                    </ul>
                  </section>
                </Col>
              </Row>
            </Container>
          </div>
        </Hel>
      )}
    </>
  );
};

export default GameDetail;
