let members = []

let member = {
    name: "김단빈",
    mbti: "ISTP",
    blogAddr: "https://dreamcompass.tistory.com/",
    gitAdrr: "https://github.com/kimdanbin",
    image: "./img/kdb.jpg",
    merit: "여유로운 성격의 소유자입니다ㅎㅎ",
    hobby: "유튜브시청",
    comment: "4조 화이팅!!"
};

members.push(member);

member = {
    name: "유영상",
    mbti: "ENFP",
    blogAddr: "https://velog.io/@isyuyong6732/posts",
    gitAdrr: "https://github.com/Tehepero",
    image: "/img/yys.jpg",
    merit: "친화적인 성격을 가지고 있습니다 :)",
    hobby: "게임하기....",
    comment: "같이 화이팅해서 잘 해봐요 :)"
};

members.push(member);

member = {
    name: "류병길",
    mbti: "INTP",
    blogAddr: "https://velog.io/@fbqudrlf09/posts",
    gitAdrr: "https://github.com/fbqudrlf09",
    image: "/img/rbg.jpg",
    merit: "모든 일에 신중함을 가짐",
    hobby: "여행, 유튜브 시청",
    comment: "아자 아자 화이팅!!"
};

members.push(member)

member = {
    name: "한지연",
    mbti: "ESFP",
    blogAddr: "https://uhnn-archive.tistory.com",
    gitAdrr: "https://github.com/j-hann",
    image: "/img/hjy.jpg",
    merit: "긍정적으로 생각하며 좋은 점을 보려고 노력합니다 ^_^",
    hobby: "여행, 홈트",
    comment: "다같이 화이링!!!!!"
};

members.push(member);

member = {
    name: "정대현",
    mbti: "INTJ",
    blogAddr: "https://daehyeonj41.tistory.com/1",
    gitAdrr: "https://github.com/JEONGDAEHYUN",
    image: "/img/jdh.jpg",
    merit: "꼼꼼하고 탐구심이 강합니다.",
    hobby: "주식 투자",
    comment: "가보자고"
};

members.push(member);

$(document).ready(function () {
    let selectedName = localStorage.getItem("name");

    member = members.find(({name}) => name === selectedName);

    console.log(selectedName + " selected");
    console.log(member);

    let temp_html = `
    <div class="member">
            <div class="card mb-3", "member" class= "member">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="${member.image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${member.name}</h5>
                            <label>MBTI</label>
                            <p class="card-text">${member.mbti}</p>
                            <label>장점</label>
                            <p class="card-text">${member.merit}</p>
                            <label>취미</label>
                            <p class="card-text">${member.hobby}</p>
                            <label>깃 주소</label>
                            <p class="card-text">${member.gitAdrr}</p>
                            <label>블로그 주소</label>
                            <p class="card-text">${member.blogAddr}</p>
                            <label>한마디</label>
                            <p class="card-text">${member.comment}</p>
                            <button class="memBtn"><a href="./members.html">뒤로 가기</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </dib>`;

    $('#data').append(temp_html);
});