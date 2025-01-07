/* 
  - 스터디파이에 있는 강의 요소를 직접 컴포너늩로 따라 만들어보세요.
  - 이미지 주소, 태그(영어, 패키지, 최대할인), 제목, 가격, 유형(동영상 강의)을 Props로 받아서 처리하세요.
  - 태그와 유형은 배열로 전달받습니다.
  - 가격은 3자리 마다 콤마를 찍도록 합니다.
*/

import CourseCard from "./components/CourseCard";

export default function App() {
  return (
    <div style={{ padding: 30 }}>
      <CourseCard
        img="https://dst6jalxvbuf5.cloudfront.net/media/images/Course/cover_image/210909_191531/23.png"
        tag={["영어", "패키지", "최대할인"]}
        title="비즈니스 올인원, 방구석 어학연수 패키지"
        price={349000}
        type={["동영상 강의"]}
      />
    </div>
  );
}
