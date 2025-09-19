// show, hide, toggle
$(function () {
    $(".show-btn").click(function () {
        $(".image").show(2000);
        //또는 "slow", "fast" 로 시간 제어
    });
    $(".hide-btn").click(function () {
        $(".image").hide(2000, function () {
            //콜백 함수. 이미지 숨기는 동작이 완료된 후에 실행됨
            alert("이미지 숨겨짐");
        });
    });
    //toggle()
    $(".toggle-btn").click(function () {
        $(".image").toggle(1000, function () {
            alert("이미지 토글됨")
        });
    });
});
$(function () {
    $(".fade-in-btn").on("click", function () {
        $(".box1").fadeIn();
        $(".box2").fadeIn("fast");
        $(".box3").fadeIn(2000, function () {
            alert("박스 보여짐");
        });
    });
    $(".fade-out-btn").on("click", function () {
        $(".box1").fadeOut(2000);
    });
    $(".fade-toggle-btn").on("click", function(){
        $(".box2").fadeToggle();
    });
});








