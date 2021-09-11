var output_text = document.getElementById('output_text');
var input_text, input_text_2;
var follow_mode_i = 0;
var giv_me_S2_i = 0;
var j = 0;
var play;
var index = 0;
var all_random = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var all_random_num = all_random.length;
var random_color = '';
var total_random_color = '#';

var question = "";
var answer = "";
var key = 0;

var json = 
[
    {
        "question" : "생일이 언제야?", 
        "answer" : "바로 내일이지롱!"
    }
]

function push_json(){
    json.push({question:`${question}`, answer:`${answer}`});
    document.getElementById("output_text").innerHTML = "그렇게 대답할게!";
    key = 0;
}

//춤춰줘 함수
function randomBackground(){
    for(j=0;j<6;j++){
        random_color = all_random[Math.floor(Math.random()*16)];
        total_random_color += random_color;
    }
    console.log(total_random_color);

    document.getElementById('container').style.backgroundColor = total_random_color;

    total_random_color = '#';
    console.log(total_random_color);
}

//타이핑 효과
new Typewriter('#typing', {
    strings: "모각코에 대해 물어보세요",
    autoStart: true,
    loop:true
});    

//하트주기 함수
function givMeS2_0(){
    document.getElementById('puppy_image').src = "흰둥_꼬옥.png";
}
function givMeS2_1(){
    document.getElementById('puppy_image').src = "흰둥_찢기.png";
}
function givMeS2_2(){
    document.getElementById('puppy_image').src = "흰둥_준다.png";
}
function givMeS2_3(){
    output_text.innerHTML = "자! 나눠줄게!";
}

function check_text(){
    //설정 초기화
    clearInterval(play);
    document.getElementById('container').style.backgroundColor = "rgb(219, 219, 255)";
    output_text.style.fontSize = "3em";
    document.getElementById('container').style.alignItems = "center";
    if(giv_me_S2_i == 4){
        document.getElementById('puppy_image').src = "흰둥_기본2.png";
    }
    else {
        document.getElementById('puppy_image').src = "흰둥_기본.png";
    }

    //input_text : 사용자 입력받은 값
    input_text = document.getElementById('input_text').value;
    console.log("입력한 문자 : " + input_text);

    //하트 줘 모드
    if(input_text == "하트 줘" || input_text == "그 하트 나 줘" || input_text == "들고 있는 하트 나 줘" || input_text == "하트 나도 줘"){
        output_text.innerHTML = "싫지롱~";
        document.getElementById('puppy_image').src = "흰둥_메롱.png";
        giv_me_S2_i = 1;
    }
    else if(giv_me_S2_i == 1 && (input_text == "갖고 싶어" || input_text == "하트 갖고 싶어" || input_text == "갖고 싶단 말이야" || input_text == "가지고 싶어")){
        output_text.innerHTML = "정말..?";
        document.getElementById('puppy_image').src = "흰둥_띠용.png";
        giv_me_S2_i = 2;
    }
    else if(giv_me_S2_i == 2 && (input_text == "응!" || input_text == "응" || input_text == "정말로" || input_text == "응 줘!")){
        output_text.innerHTML = "...";
        document.getElementById('puppy_image').src = "흰둥_고민.png";
        giv_me_S2_i = 3;
    }
    else if(giv_me_S2_i == 3 && input_text == "제발"){
        document.getElementById('puppy_image').src = "흰둥_고민.png";
        setTimeout(givMeS2_0 , 1000);
        setTimeout(givMeS2_1 , 2000);
        setTimeout(givMeS2_2 , 3000);
        setTimeout(givMeS2_3 , 3050);

        giv_me_S2_i = 4;
    }
    else if(giv_me_S2_i == 4 && (input_text == "하트 더 줘" || input_text == "하트 더 주면 안돼?" || input_text == "하트 더 주라" || input_text == "더 주면 안돼?")){
        output_text.innerHTML = "이제 못 줘! 내 꺼야";
        document.getElementById('puppy_image').src = "흰둥_기본2.png";
    }

    //일반 문답
    else if(input_text == "모각코가 뭐야?"){
        output_text.innerHTML = "모각코란... 온라인 무료 코딩 스터디 과정이야! 모여서! 각자! 코딩하자!";
        document.getElementById('puppy_image').src = "흰둥_선생.png";
    }
    else if(input_text == "바보" || input_text == "바보야"){
        output_text.innerHTML = "너무해...";
        
        alert("예쁜 말을 써주세요!");
        console.log("경고창 출력");
    }
    else if(input_text == "야" || input_text == "잘가" || input_text == "고마워" || input_text == "그만" || input_text == "스탑" || input_text == "잘하네"){
        output_text.innerHTML = "웅";
    }
    else if(input_text == "안녕" || input_text == "하잉" || input_text == "hi" || input_text == "하이"){
        output_text.innerHTML = "나두 안녕~!";
    }
    else if(input_text == "밥 먹었어?"){
        output_text.innerHTML = "너의 사랑을 먹었지!";
    }
    else if(input_text == "선생님 첫사랑 얘기 해주세요!" || input_text == "선생님 첫사랑 얘기 해주세요" || input_text == "선생님 첫사랑 얘기해주세요" || input_text == "선생님 첫사랑 얘기해주세요!"){
        output_text.innerHTML = "좋은 질문이다, 학생. 라떼는 말이야 전교생이 날 좋아했지. 선생님은 첫사랑 따위 없는 인기스타였다~ 이 말이여 엉? 뭔 데이마다 아주 그냥 초콜릿이 한가득 ... (생략)";
        document.getElementById('puppy_image').src = "흰둥_선생.png";
    }
    else if(input_text == "불 꺼줘" || input_text == "불꺼줘" || input_text == "불꺼" || input_text == "불 꺼" || input_text == "불끄라고"){
        output_text.innerHTML = "(˵ ͡° ͜ʖ ͡°˵)";
        document.getElementById('puppy_image').src = "흰둥_눈코입.png";
        document.getElementById('container').style.backgroundColor = '#000000';
    }
    else if(input_text == "춤 춰줘" || input_text == "춤 춰줘!" || input_text == "춤춰줘" || input_text == "춤 춰" || input_text == "춤춰"){
        output_text.innerHTML = "ጿኈ ቼ ዽ";
        play = setInterval(randomBackground, 200); 
    }
    else if(input_text == "너 토끼야?"){
        output_text.innerHTML = "개야!!!!!";
        output_text.style.fontSize = "10em";
    }
    else if(input_text == "오른쪽"){
        output_text.innerHTML = "오른쪽으로 붙어~!";
        document.getElementById('container').style.alignItems = "flex-end";
    }
    else if(input_text == "왼쪽"){
        output_text.innerHTML = "왼쪽으로 붙어~!";
        document.getElementById('container').style.alignItems = "flex-start";
    }
    else if(input_text == "테두리 거슬려"){
        output_text.innerHTML = "없애드리지요!";
        output_text.style.borderStyle = "hidden";
    }
    else if(input_text == "입체 테두리"){
        output_text.innerHTML = "짜잔~";
        output_text.style.borderStyle = "ridge";
    }
    else if(input_text == "귀여운 테두리"){
        output_text.innerHTML = "요건 어때?";
        output_text.style.borderStyle = "dashed";
    }
    else if(input_text == "테두리 원래대로 해줘"){
        output_text.innerHTML = "역시 이게 제일 예쁘지?";
        output_text.style.borderStyle = "solid";
    }
    else{        
        console.log("key값 :: " + key);
        if(key == 1){
            if(input_text == "네"){
                output_text.innerHTML = "대답을 입력해주세요.";
                key = 2;
            }
            else{
                output_text.innerHTML = "그럼 다시 말 걸어줘!";
                key = 0;
            }
            return;
        }

        if(key == 2){
            answer = input_text;
            console.log("입력된 대답은 :: "+answer);
            push_json();
            return;
        }
    
        for(let q=0; q<json.length; q++){
            if(input_text == json[q].question){
                output_text.innerHTML = json[q].answer;
                return;
            }
        }
        output_text.innerHTML = "말을 가르쳐 주실래요? (네 or 아니오)";
        question = input_text;
        key = 1;

    }
}

document.getElementById('input_button').addEventListener('click', check_text);
//엔터 쳐도 값 나오게 하기
document.getElementById('input_text').addEventListener('keydown', function(e){
    if(e.key == "Enter"){
        check_text();
    }
})