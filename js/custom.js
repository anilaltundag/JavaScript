// Personel Class'ı oluşturuldu
var Personel = (function(){
    function Personel(name,surname, gender, age){    // Personel Class'ının Constructor'u oluşturuldu
        this.name = name;       // this.name : bir field
        this.surname = surname;     // this.surname : bir field
        this.gender = gender;
        this.age = age;

        this.ToSurname = function(){
            alert(this.surname);
        }
    }

    // Personel Class'ına toName adında personelin adını mesaj olarak gösteren bir method ekledik.
    Personel.prototype.ToName = function(){
        alert(this.name);
    }

    Personel.prototype.ToAge = function(){
        alert(this.age);
    }

    Personel.prototype.ToGender = function(){
        alert(this.gender);
    }

    // Property ve metotları eklediğimiz nesneyi en dıştaa yer alan personel değişkenine aktardık.
    return Personel;

    // (); kısmı kodun otomatik olarak çalışmasını ve class'ın oluşmasını sağlar.
})();