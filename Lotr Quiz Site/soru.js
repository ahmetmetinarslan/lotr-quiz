function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap

}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

    let sorular = [
        new Soru("1-Aşağıdaki film sıralamalarından hangisi doğrudur?", {a: "Yüzük Kardeşliği – İki Kule – Kralın Dönüşü", b: "Kralın Dönüşü – Yüzük Kardeşliği – İki Kule", c: "İki Kule – Yüzük Kardeşliği – Kralın Dönüşü", d: " Kralın Dönüşü – İki Kule – Yüzük Kardeşliği"}, "a"),
        new Soru("2-Hobbitlerin yaşadığı kasabanın adı nedir?", {a: " Shire", b: "Sackville", c: "Shivillet", d: "Minas Tirith"}, "a"),
        new Soru("3-Ayrıkvadi’yi kim yönetmektedir?", {a: "Gandalf", b: "Aragorn", c: "Galadriel", d: "Elrond"}, "d"),
        new Soru("4-Kardeşlikte kaç Hobbit vardır?", {a: "5", b: "6", c: "4", d: "2"}, "c"),
    ];