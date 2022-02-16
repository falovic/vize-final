
var vize = 50;
var final = 80;
var ortalama = (vize * 0.3) + (final * 0.7);
var harf;
var durum;

if (ortalama >= 0 && ortalama <= 100) {

    if (ortalama >= 80) {
        harf = "AA";
        durum = `Geçtiniz`;
    }

    else if (ortalama >= 71) {
        harf = "BA";
        durum = `Geçtiniz`;
    }

    else if (ortalama >= 63) {
        harf = "BB";
        durum = `Geçtiniz`;
    }

    else if (ortalama >= 55) {
        harf = "CB";
        durum = `Geçtiniz`;
    }

    else if (ortalama >= 50) {
        harf = "CC";
        durum = `Geçtiniz`;
    }

    else if (ortalama >= 45) {
        harf = "DC";
        durum = `Geçtiniz`;
    }

    else if (ortalama >= 35) {
        harf = "DD";
        durum = `Koşullu geçtiniz`;
    }

    else if (ortalama >= 0) {
        harf = "FF";
        durum = `Kaldınız`;
    }

} else {
    ortalama = "-";
    harf = "-";
    durum = "-";
}

function push() {
    document.getElementById("ortalama").innerHTML = `${ortalama}`;
    document.getElementById("harf").innerHTML = `${harf}`;
    document.getElementById("durum").innerHTML = `${durum}`;
}