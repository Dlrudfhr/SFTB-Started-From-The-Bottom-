// 스크롤 시 실행할 함수
window.onscroll = function () {
  myFunction();
};

// 네비게이션 바 요소 가져오기
var navbar = document.getElementById("navbar");

// 네비게이션 바의 상단 위치 가져오기
var sticky = navbar.offsetTop;
// 스크롤 위치에 따라 네비게이션 바에 "sticky" 클래스 추가 또는 제거
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
