// đối tượng

const user = {
  // thuộc tính của đối tượng
  name: "Hiếu võ ",
  age: 20,
  "giới tính": "Nam",

  //   phương thức
  xinChao() {
    console.log("Xin chào " + this.name);
  },
};
console.log(user);
console.log(user.name);
console.log(user["giới tính"]);

user.xinChao();

// class
class User {
  // phương thức khởi tạo
  constructor(name, age) {
    this.ten = name;
    this.tuoi = age;
  }
  xinChao() {
    console.log("Xin chào " + this.ten);
    console.log("Tuổi của bạn là: " + this.tuoi);
    return 1;
  }
}

const user1 = new User("Hiếu1111111111111", 2011111);
user1.xinChao();
