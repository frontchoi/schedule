import { dronDome } from './data/dronDome';
import './css/index.scss';
import { useEffect, useState } from 'react';

function App() {
    const localhost = 'http://localhost:8080';
    const [data, setData] = useState();
    const [pageLength, setPageLength] = useState(0);
    useEffect(() => {
        setData(dronDome);
    }, [dronDome]);

    useEffect(() => {
        if (data) {
            let num = 0;
            data.section.forEach((item) => {
                num += item.pageList.length;
            });
            setPageLength(num);
        }
    }, [data]);
    return (
        <div className="App">
            {data ? (
                <>
                    <h1>▶ {data.name} 개발 현황 ◀</h1>
                    <p className="total_page">
                        총 페이지 : <span>{pageLength}</span>
                    </p>
                    <table className="table_wrap">
                        <colgroup>
                            <col width="200" />
                            <col width="220" />
                            <col width="*" />
                            <col width="80" />
                            <col width="150" />
                        </colgroup>
                        <caption>코딩작업현황</caption>
                        <thead>
                            <tr>
                                {data.header.map((item, index) => {
                                    return <th key={`th${index}`}>{item}</th>;
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {data.section.map((item, index) => {
                                return (
                                    <tr key={`tr${index}`}>
                                        <td colSpan="7">
                                            <table className="table_list">
                                                <colgroup>
                                                    <col width="200" />
                                                    <col width="220" />
                                                    <col width="*" />
                                                    <col width="80" />
                                                    <col width="150" />
                                                </colgroup>
                                                <tbody>
                                                    <tr className="section">
                                                        <td className="section_name">{item.sectionName}</td>
                                                        <td className="link"></td>
                                                        <td className="detail"></td>
                                                        <td className="day"></td>
                                                        <td className="end"></td>
                                                    </tr>
                                                    {item.pageList.map((list, index) => {
                                                        return (
                                                            <tr key={`tr${index}`}>
                                                                <td className="page_name">ㄴ{list.pageName}</td>
                                                                <td className="link">
                                                                    <a href={`${localhost}${list.link}`} target="_blank" rel="noreferrer">
                                                                        {list.link}
                                                                    </a>
                                                                </td>
                                                                <td className="detail">
                                                                    <ul>
                                                                        {list.detail.map((item, index) => {
                                                                            return <li key={`li${index}`}>- {item}</li>;
                                                                        })}
                                                                    </ul>
                                                                </td>
                                                                <td className="day">{list.day}</td>
                                                                <td className="end">{list.end}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            ) : undefined}
        </div>
    );
}

export default App;
