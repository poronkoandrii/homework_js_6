// let arrProducts = [
//   {
//     title: "orange",
//     count: 6,
//     complete: true,
//   },
//   {
//     title: "apple",
//     count: 5,
//     complete: false,
//   },
//   {
//     title: "blackberry",
//     count: 10,
//     complete: false,
//   },
// ];

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// display = (arr) => {
//   for (let i of arr) {
//     if (i.complete) {
//       let a = arr.indexOf(i);
//       a = arr.splice(a, 1);
//       arr.push(a[0]);
//     }
//   }
//   for (let k of arr) {
//     console.log(k);
//   }
// };
// display(arrProducts);

// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// addProduct = (title, count, arr) => {
//   for (let i of arr) {
//     if (i.title === title) {
//       i.count += count;
//       break;
//     } else {
//       arr.push({ title: title, count: count, complete: false });
//       break;
//     }
//   }
//   return arr;
// };
// addProduct("banana", 11, arrProducts);

// Покупка продукта. Функция принимает название продукта и отмечает его как купленный
// boughtProduct = (prod, arr) => {
//   for (let i of arr) {
//     if (i.title === prod && !i.complete) {
//       i.complete = true;
//       break;
//     }
//   }
//   return arr;
// };
// boughtProduct("apple", arrProducts);

// let arrScore = [
//   {
//     title: "orange",
//     count: 6,
//     price: 40,
//   },
//   {
//     title: "apple",
//     count: 5,
//     price: 15,
//   },
//   {
//     title: "blackberry",
//     count: 10,
//     price: 80,
//   },
// ];
// Распечатка чека на экран;
// display = (arr) => {
//   for (let i of arr) {
//     console.log(`${i.title} x${i.count} : $${i.price}`);
//   }
// };
// display(arrScore);

// Подсчет общей суммы покупки;
// total = (arr) => {
//   let result = 0;
//   for (let i of arr) {
//     result += i.count * i.price;
//   }
//   console.log(`${result}$`);
// };
// total(arrScore);

// Получение самой дорогой покупки в чеке;
// topPrice = (arr) => {
//   let result = 0;
//   for (let i of arr) {
//     let total = i.price * i.count;
//     if (total > result) {
//       result = total;
//     }
//   }
//   console.log(`${result}$`);
// };
// topPrice(arrScore);

// Подсчет средней стоимости одного товара в чеке.
// averageСost = (arr) => {
//   let count = 0,
//     totalPrice = 0;
//   for (let i of arr) {
//     totalPrice += i.price;
//     count++;
//   }
//   console.log(`Средняя товара ${totalPrice / count}$`);
// };
// averageСost(arrScore);

// Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write()
// в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
// let arrStyle = [
//   {
//     color: "red",
//   },
//   {
//     "font-size": "30px",
//   },
//   {
//     "text-align": "center",
//   },
//   {
//     "text-decoration": "underline",
//   },
// ];
// style = (arr, text) => {
//   let a = "";
//   for (let i of arr) {
//     for (let k in i) {
//       a += `${k}: ${i[k]}; `;
//     }
//   }
//   document.write(`<p style="${a}">${text}</p>`);
// };
// style(arrStyle, "Какой-то текст");

// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20)
//  и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним
// let audience = [
//   {
//     title: "name1",
//     space: 10,
//     faculty: "IT",
//   },
//   {
//     title: "name2",
//     space: 15,
//     faculty: "managment",
//   },
//   {
//     title: "name3",
//     space: 20,
//     faculty: "social",
//   },
//   {
//     title: "name4",
//     space: 18,
//     faculty: "historical",
//   },
// ];
// Вывод на экран всех аудиторий;
// display = (arr) => {
//   for (let i of arr) {
//     console.log(i.title);
//   }
// };
// display(audience);

// Вывод на экран аудиторий для указанного факультета;
// displayAudi = (arr, fac) => {
//   for (let i of arr) {
//     if (i.faculty === fac) {
//       console.log(i.title);
//     }
//   }
// };
// displayAudi(audience, "historical");

// Функция сортировки аудиторий по количеству мест;
// function sortSpace(arr) {
//   return arr.sort((a, b) => (a.space > b.space ? 1 : -1));
// }
// console.log(sortSpace(audience));

// Функция сортировки аудиторий по названию (по алфавиту).
// function sortFaculty(arr) {
//   return arr.sort((a, b) => (a.faculty > b.faculty ? 1 : -1));
// }
// console.log(sortFaculty(audience));
