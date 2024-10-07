

//데이터 저장하기
//등록하기 버튼이 클릭이 되면 코드 실행
$("#postingBtn").click(async function () {

    //입력값 가져오기
    let userName = $('#userName').val();//작성자 vlaue값 가져오기
    let postTitle = $('#postTitle').val();//제목 vlaue값 가져오기
    let content = $('#content').val();//내용 vlaue값 가져오기

    //넣고싶은 데이터
    let doc = {
        'userName': userName,
        'postTitle': postTitle,
        'content': content
    };
    await addDoc(collection(db, "post"), doc);

    // console.log("실행됨");
    // alert('연결확인');
})


$("#postingBtn").click(async function () {

    //넣고싶은 데이터
    let doc = {
        'name': '이름',
        'post': '제목',
    };
    await addDoc(collection(db, "post"), doc);

    // console.log("실행됨");
    // alert('연결확인');
})



// 게시글 작성하기
function posting() {

    //입력값 가져오기
    let userName = $('#userName').val();//작성자 vlaue값 가져오기
    let postTitle = $('#postTitle').val();//제목 vlaue값 가져오기
    let content = $('#content').val();//내용 vlaue값 가져오기


    // 게시글 등록하기 버튼을 누르면 게시글 목록이 늘어난다
    let postList = ` 
<tr>
    <td>글번호</td>
    <td><a href="askContent.html">${postTitle}</a></td>
    <td>${userName}</td>
</tr>
`;

    $('#list').append(postList);


    alert('게시글이 등록 되었습니다.');

}