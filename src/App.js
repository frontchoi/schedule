import { dronDom } from './data/dronDom';
import './css/index.scss';
import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState();
    useEffect(() => {
        setData(dronDom);
    }, [dronDom]);

    return (
        <div className="App">
            <h1>▶ 드론돔 코딩현황 ◀</h1>
            <table>
                <caption>코딩작업현황</caption>
                <colgroup>
                    <col width="160" />
                    <col width="400" />
                    <col width="200" />
                    <col width="200" />
                    <col width="100" />
                    <col width="*" />
                </colgroup>
                <thead>
                    <tr>
                        <th>화면명</th>
                        <th>디테일</th>
                        <th>경로</th>
                        <th>파일명</th>
                        <th class="date">예상 일정</th>
                        <th>비고 및 완료 여부</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="section">
                        <th>로그인</th>
                        <td class="detail"></td>
                        <td class="path">/login/</td>
                        <td class="file"></td>
                        <td class="time"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <th>로그인 화면</th>
                        <td class="detail"></td>
                        <td class="path"></td>
                        <td class="file">
                            <a href="/login/index.html" target="_blank">
                                index.html
                            </a>
                        </td>
                        <td class="time">1</td>
                        <td class="note"></td>
                    </tr>
                    <tr class="section">
                        <th>대시보드</th>
                        <td class="detail"></td>
                        <td class="path">/dashboard/</td>
                        <td class="file"></td>
                        <td class="time"></td>
                        <td class="note"></td>
                    </tr>
                    <tr>
                        <th>기본 상태</th>
                        <td class="detail">
                            <ul>
                                <li>좌측 메뉴 열고 닫기 기능</li>
                                <li>날짜 및 현재 시각 표현</li>
                                <li>지도의 원으로 된 선 표현</li>
                            </ul>
                        </td>
                        <td class="path"></td>
                        <td class="file">
                            <a href="/dashboard/index.html" target="_blank">
                                index.html
                            </a>
                        </td>
                        <td class="time">2</td>
                        <td class="note"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;
