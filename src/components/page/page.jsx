import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import { useParams } from 'react-router-dom'

function PageOpened() {
    const { lang, setLang } = useContext(LanguageContext);
    const { id } = useParams()
    const [page, setPage] = useState([])
    useEffect(() => {
        fetch(`http://192.168.3.24:3001/sub_categories/get/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPage(data)
            });
    }, [])
    return (
        <>
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="sn-container">
                            {page.map(item => (
                                <div class="sn-content">
                                    <h1 class="sn-title">{item[`section_title_${lang}`]}</h1>
                                    <div class="mainBody" dangerouslySetInnerHTML={{ __html: item[`section_main_${lang}`] }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageOpened;
