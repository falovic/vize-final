
var vize = 50;
var final = 80;
var ortalama = (vize * 0.3) + (final * 0.7);

if (ortalama >= 0 && ortalama < 35) {
    var harf = "FF";
    var durum = `Kaldınız`;
}

else if (ortalama >= 35 && ortalama < 45) {
    var harf = "DD";
    var durum = `Koşullu geçtiniz`;
}

else if (ortalama >= 45 && ortalama < 50) {
    var harf = "DC";
    var durum = `Geçtiniz`;
}

else if (ortalama >= 50 && ortalama < 55) {
    var harf = "CC";
    var durum = `Geçtiniz`;
}

else if (ortalama >= 55 && ortalama < 63) {
    var harf = "CB";
    var durum = `Geçtiniz`;
}

else if (ortalama >= 63 && ortalama < 71) {
    var harf = "BB";
    var durum = `Geçtiniz`;
}

else if (ortalama >= 71 && ortalama < 80) {
    var harf = "BA";
    var durum = `Geçtiniz`;
}

else if (ortalama >= 80 && ortalama <= 100) {
    var harf = "AA";
    var durum = `Geçtiniz`;
}