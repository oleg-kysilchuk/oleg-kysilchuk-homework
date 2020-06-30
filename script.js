/*1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

поле, хранящее радиус окружности;
get-свойство, возвращающее радиус окружности;
set-свойство, устанавливающее радиус окружности;
get-свойство, возвращающее диаметр окружности;
метод, вычисляющий площадь окружности;
метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов.*/

class Circle {
    constructor(r) {
        this.r = r;
    }

    get radius() {
        return this.r;
    }

    set radius(newR) {
        this.r = newR;
    }

    get diameter() {
        return this.r * 2;
    }

    circleSquare() {
        return Math.PI*Math.pow(this.r, 2);
    }

    circleLength() {
        return 2*Math.PI*this.r;
    }    
}

let c = new Circle(15);

document.write(`Радиус окружности: ${c.radius}<br><hr>`);

c.radius = 20;

document.write(`Новый радиус окружности: ${c.radius}<br><hr>`);

document.write(`Диаметр окружности: ${c.diameter}<br><hr>`);

document.write(`Площадь окружности: ~${Math.round(c.circleSquare())}<br><hr>`);

document.write(`Длина окружности: ~${Math.round(c.circleLength())}<br><hr>`);




/*2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

поле, которое хранит цвет маркера;
поле, которое хранит количество чернил в маркере (в процентах);
метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

Продемонстрировать работу написанных методов.*/ 

// prinText(text) {
//     let txt = "";
//     for(let i = 0; i < this.ink/0.005;i++) {
//         txt += text[i];
//         if(txt.length == text.length) {
//             break;
//         }
        
        
//     }
//     let spc = txt.split(" ").length-1;
//     let a = this.ink + spc*0.005;

//     for(let j = txt.length; j < (a/0.005)-1; j++){
//         txt += text[j];
//         if(txt.length + spc == text.length) {
//             break;
//         }
//     }
    
//     document.write(`<p style="color: ${this.color}">${txt}<p>`);
// }


class Marker {
    constructor(color, amount) {
        this.color = color;
        this.ink = amount;
    }

    prinText(text) {
        let txt = "";
        for(let i = 0; i < this.ink/0.005;i++) {
            txt += text[i];
            if (text[i] == " ") {
                this.ink + 0.005;
            } else if(txt.length == text.length) {
                break;
            }
        }
        
        document.write(`<p style="color: ${this.color}">${txt}<p>`);
    }
}

let m = new Marker("black", 0.15)

m.prinText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, impedit hic natus nemo fuga eum sint eius voluptate officiis esse porro omnis aspernatur expedita quae vitae voluptatibus voluptatem adipisci alias id corrupti soluta asperiores temporibus doloremque harum. Asperiores odio placeat quod iure necessitatibus, a quia magnam fuga suscipit optio numquam, nisi totam enim beatae amet impedit ipsam consectetur velit facilis excepturi, fugit reiciendis et exercitationem? Sint maiores placeat, eveniet accusamus ab a optio voluptatibus eos veritatis explicabo iusto dolorum voluptates porro quidem hic at fuga. Doloremque nihil magnam, obcaecati facilis voluptatum est, soluta in minus fugiat, neque necessitatibus recusandae nulla.");