 /* 파일로 저장하여 유지보수가 유리해진다. */
 /* 객체를 생성할때는 객체명{};  <-- 이 형태를 사용한다.*/
 var imformations={
    "pet":"dog",
    "address":"607-1201"
};
document.write("pet: "+imformations.pet+"<br>");         // 객체에 메서드를 불러낼때는 객체.메서드 <-이러한 형식으로 불러야한다.
document.write("address: "+imformations.address+"<br>"); // imformations.address로 객체에서의 메서드를 불러냄.
imformations.phone ="iphone xs max";                     // 객체명.메서드명 = "내용" 이런식으로 만들어진 객체에 메서드 추가 O
document.write("phone: "+imformations.phone+"<br>");            // imformations.phone
imformations["data scientist"] = "sj";                   // *** 객체명[]을 사용하면 띄어쓰기된 단어도 메서드로 추가할 수 있다.
document.write("data scientist: "+imformations["data scientist"]+"<br>");