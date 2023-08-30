const express = require('express');
const morgan = require('morgan');

const app = express();

// Morgan 미들웨어를 사용하여 요청에 대한 로깅을 설정
// 'dev' 포맷은 로그 메시지를 간결하게 표시하는 형식
app.use(morgan('dev'));

// express.json() 미들웨어는 요청의 본문 데이터를 JSON 형식으로 파싱하여 JavaScript 객체로 변환
app.use(express.json());

// route 연결

app.listen(8888, () => console.log('Listening on port 8888'));