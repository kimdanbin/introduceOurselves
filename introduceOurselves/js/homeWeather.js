
// api 요청 변수를 변수로 만들어서 저장하기
// const serviceKey = "%2FeJ1zHmb8qeEge4qb8RONFKwdOUczYMUhK0L%2Fkbx6LlExpgro4780GzjZP4cN0MeT7IYti4VVsE2W%2BmD0ZfzzA%3D%3D";
// let numOfRows = "12"; // 1시간당 기상 정보가 최저기온,최고기온을 제외하면 12개이므로 12개가 편하다
// let pageNo = "1"; // 페이지 번호
// let dataType = "JSON"; // 요청자료형식
// let base_date = "20220810"; // 발표일자
// let base_time = "2300"; // 발표시각
// let nx = "61"; // X좌표
// let ny = "126"; // Y좌표
// let url;
// let array_code = {
//     POP: { code: "POP", name: "강수확률", unit: "%" },
//     PTY: { code: "PTY", name: "강수형태", unit: "코드값" },
//     PCP: { code: "PCP", name: "1시간 강수량", unit: "범주 (1 mm)" },
//     REH: { code: "REH", name: "습도", unit: "%" },
//     SNO: { code: "SNO", name: "1시간 신적설", unit: "범주(1 cm)" },
//     SKY: { code: "SKY", name: "하늘상태", unit: "코드값" },
//     TMP: { code: "TMP", name: "1시간 기온", unit: "℃" },
//     UUU: { code: "UUU", name: "풍속(동서성분)", unit: "m/s" },
//     VVV: { code: "WSD", name: "풍속(남북성분)", unit: "m/s" },
//     WAV: { code: "WAV", name: "파고", unit: "M" },
//     VEC: { code: "VEC", name: "풍향", unit: "deg" },
//     WSD: { code: "WSD", name: "풍속", unit: "m/s" },
// };

//변수를 조합해 하나의 url로 만들기
// function create_url() {
//     return (
//         "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst" +
//         "serviceKey=" +
//         serviceKey +
//         "&numOfRows=" +
//         numOfRows +
//         "&pageNo=" +
//         pageNo +
//         "&dataType=" +
//         dataType +
//         "&base_date=" +
//         base_date +
//         "&base_time=" +
//         base_time +
//         "&nx=" +
//         nx +
//         "&ny=" +
//         ny
//     );
// }

//만든 url fetch() 통해 요청 보내기 비동기적으로 open api 응답받기
// function load_api() {
//     fetch(url) //url에 요청 보내기
//         .then((response) => response.json()) //응답이 json
//         .then((data) => {
//             if (parseInt(data.response.header.resultCode) > 0) { //resultCode가 0보다 크면 에러
//                 console.error(
//                     "ERROR: code: " +
//                     data.response.header.resultMsg +
//                     "(" +
//                     data.response.header.resultCode +
//                     ")"
//                 );
//             }
//             result = data.response.body.items.item; //응답에서 api 정보 부분만 가져오기
//             console.dir(result); //값 확인
//             for (const element of result) {
//                 let value;
//                 array_code[element.category].value = element.fcstValue; //각각 기상 정보를 array_code에 저장
//             }
//             console.table(array_code); //값 확인
//         });

// }

//현재 시간 정보를 이용해 예보 시간 구하기
// function loadDate() {
//     let public_time = new Date();
//     let current_time = new Date();
//     let diffTime = 0;
//     let month = public_time.getMonth();
//     // 가장 최근의 base_date, base_time 구하기
//     public_time.setHours(public_time.getHours() - 2);
//     public_time.setMinutes(public_time.getMinutes() - 10);
//     month = `${public_time.getMonth() + 1}`.padStart(2, "0");
//     public_time.setHours(parseInt(public_time.getHours() / 3) * 3 + 2);
//     public_time.setMinutes(10);
//     base_date = `${public_time.getFullYear()}${month}${public_time.getDate()}`;
//     base_time = public_time.getHours() * 100;
//     base_time = base_time.toString().padStart(4, "0");
//     //발표 시각과 현재 시간과의 차이를 구해 pageNo 찾기
//     diffTime = (current_time.getTime() - public_time.getTime()) / 60000;
//     if (diffTime < 50) pageNo = 1; //2310~2359
//     else if (diffTime < 110) pageNo = 2; //00~0:59
//     else if (diffTime < 170) pageNo = 3; //1:00~1:59
//     else pageNo = 4;
// }

//open api 호출
// function success(pos) {
//     // var crd = pos.coords;
//     // let rs = dfs_xy_conv("toXY", crd.latitude, crd.longitude);
//     // nx = rs.x;
//     // ny = rs.y;
//     // console.log("Your current position is:");
//     // console.log(`Latitude : ${crd.latitude}`);
//     // console.log(`Longitude: ${crd.longitude}`);
//     loadDate();
//     url = create_url();
//     load_api();
// }


//제이쿼리 이벤트 메서드 문서가 준비되면 매개변수로 넣은 콜백 함수를 실행하라
// dom(document object model 문서 객체 모델)이 생성되면 ready 메소드가 실행된다
$(document).ready(function () {
    let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=%2FeJ1zHmb8qeEge4qb8RONFKwdOUczYMUhK0L%2Fkbx6LlExpgro4780GzjZP4cN0MeT7IYti4VVsE2W%2BmD0ZfzzA%3D%3D&numOfRows=1000&pageNo=1&dataType=JSON&base_date=20241003&base_time=0500&nx=61&ny=126";
    fetch(url).then(res => res.json()).then(data => {
        // mise 변수 안에 data 넣기
        let gangnamSky = data.response.body.items.item[5];
        //날짜, 시간, 하늘상태
        let skyContent = 
        gangnamSky.baseDate + 
        " " +
        // gangnamSky.baseTime +
        // '\n' +
        gangnamSky.category 

        console.log(skyContent);

        // 날씨 아이디값 날씨상태 텍스트 변경해줌
        $('#weatherSky').text(skyContent)
    })
})