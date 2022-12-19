import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';

function News() {
    const { lang, setLang } = useContext(LanguageContext);
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('http://192.168.3.24:3001/news/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNews(data)
            });
    }, [])
    return (
        <>
            <div class="body_Naujienos_wrapper">
                <div class="page_body_Naujienos">
                    <h2 class="news_1">{context[lang].news.first}</h2>
                </div>
                <div class="page_body_Naujienos_the_loop_wrapper paddingNews list-wrapper">
                    {news.map(news_item => (
                        <a href={`/news/${news_item.id}`}>
                            <div class="the_loop_img list-item">
                                <img src={`${news_item.img}`} class="newsImage" width="250px" height="250px" alt="" />
                                <h5 class="the_loop_text textOverflow news_title">{news_item[`title_${lang}`]}</h5>
                                <p class="the_loop_p news_date">{news_item.date}</p>
                            </div>
                        </a>
                    ))}
                    <div class="roditi_dougiau_button">

                    </div>
                </div>
                <div id="pagination-container" class="light-theme simple-pagination"></div>
            </div>
        </>
    );
}

export default News;
