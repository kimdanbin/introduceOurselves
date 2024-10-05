
//제이쿼리 이벤트 메서드 문서가 준비되면 매개변수로 넣은 콜백 함수를 실행하라
// dom(document object model 문서 객체 모델)이 생성되면 ready 메소드가 실행된다
$(document).ready(function () {
    let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=%2FeJ1zHmb8qeEge4qb8RONFKwdOUczYMUhK0L%2Fkbx6LlExpgro4780GzjZP4cN0MeT7IYti4VVsE2W%2BmD0ZfzzA%3D%3D&numOfRows=1000&pageNo=1&dataType=JSON&base_date=20241005&base_time=0500&nx=60&ny=127";
    fetch(url).then(res => res.json()).then(data => { ////요청을 받은 데이터는 res라는 이름으로 json화 함
        // gangnamSky 변수 안에 data 넣기
        let gangnamSky = data.response.body.items.item[5];

        //하늘 상태 변수 
        //디폴트 - 전운량 9~10 흐림 
        let skyStatus = "흐림";

        //하늘상태 값에 따른 텍스트 변경
        if(gangnamSky.fcstValue <= 5){ //전운량 0~5까지
            skyStatus ="맑음";
        } else if(gangnamSky.fcstValue <= 8){ //전운량 6~8까지
            skyStatus ="구름많음";
        }//else-if
    
        //날짜, 시간, 하늘상태 최종 데이터
        let skyContent = 
        gangnamSky.baseDate + 
        " " +
        skyStatus

        console.log(skyContent);

        // 날씨 아이디값 날씨상태 텍스트 변경해줌
        $('#weatherSky').text(skyContent)
    })//fetch
})