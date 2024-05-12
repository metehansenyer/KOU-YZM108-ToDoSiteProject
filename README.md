# KOÜ Yazılım Müh. Web Teknolojileri Dersi Dönem Projesi
Kocaeli Üniversitesi Mühendislik Fakültesi Yazılım Mühendisliği 23-24 Web Teknolojileri Projesi GitHub sayfası. To Do sitesi.

# İçerik

- [Kullanılan Araçlar](https://github.com/metehansenyer/KOU-YZM108-ToDoSiteProject?tab=readme-ov-file#kullanılan-araçlar)
- [Amaç](https://github.com/metehansenyer/KOU-YZM108-ToDoSiteProject?tab=readme-ov-file#amaç)
- [Projeden Beklenenler](https://github.com/metehansenyer/KOU-YZM108-ToDoSiteProject?tab=readme-ov-file#projeden-beklenenler)
- [Karşılanan Beklentiler](https://github.com/metehansenyer/KOU-YZM108-ToDoSiteProject?tab=readme-ov-file#karşılanan-beklentiler)
- [İndirme ve Çalıştırma](https://github.com/metehansenyer/KOU-YZM108-ToDoSiteProject?tab=readme-ov-file#indirme-ve-çalıştırma)
- [Teşekkürler](https://github.com/metehansenyer/KOU-YZM108-ToDoSiteProject?tab=readme-ov-file#teşekkürler)
- [Proje Ekibi](https://github.com/metehansenyer/KOU-YZM108-ToDoSiteProject?tab=readme-ov-file#proje-ekibi)

## Kullanılan Araçlar

<p align="center">
  <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html" width="40" height="40"/> </a>
  <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css" width="40" height="40"/> </a>
  <a href="https://tc39.es/ecma262/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
  <a href="https://visualstudio.microsoft.com/tr/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-original.svg" alt="visualstudio" width="40" height="40"/> </a>
  <a href="https://github.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="40" height="40"/> </a>
  <a href="https://fontawesome.com/" target="_blank" rel="noreferrer"> <img src="https://avatars.githubusercontent.com/u/1505683?s=48&v=4" alt="fontawesome" width="40" height="40"/> </a>
</p>

- Site oluşturulurken sadece HTML, CSS, JS ve DOM manipülasyonu teknikleri kullanılmıştır.
- Tercih ettiğimiz kod editörü Visual Studio Code.
- Sitemizin test barındırma ve dağıtım hizmeti için Github ve Github Pages kullandık.
- Site içerisindeki tuş ikonları için Fontawesome servisini kullandık.

| Kullanılan Araç | Kaynak Alınan Yer |
|:---:|:---:|
| HTML | [W3Schools](https://www.w3schools.com/html/) |
| HTML | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| CSS | [W3Schools](https://www.w3schools.com/css/) |
| CSS | [PROTOTURK CSS Dersleri](https://youtube.com/playlist?list=PLfAfrKyDRWrFYc77WNfwQpS9-DBBdir_I) |
| JS and DOM | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) |
| Fontawesome | [Fontawesome Docs](https://docs.fontawesome.com/web/) |


## Amaç

YZM108 dersi kapsamında bugüne kadar öğrendiğimiz bilgilerle birlikte HTML, CSS ve JS kullanarak DOM manipülasyonu tekniği ile çalışan bir "To Do" sitesi yapmak.

## Projeden Beklenenler

```json
{
  "Anahtar Özellikler": {
    "Ekle": "Görev ekleme özelliği.",
    "Düzenle": "Görevleri düzenleme özelliği.",
    "Sil": "Görevleri silme özelliği.",
    "İşaretle": "Görevleri tamamlandı olarak işaretleyebilme özelliği.",
    "Filtrele": "Görevleri tamamlanma durumlarına göre filtreleme."
  },
  "HTML Yapısı": {
    "Input Field and Button": "Görev eklemek için girdi alanı ve tuşu.",
    "Unordered List": "Görevleri görüntülemek için bir sırasız liste oluşturun."
  },
  "CSS ile Stillendirme": "Body, container, heading, input alanları ve tuşlar için color, margin, padding ve border ayarları kullanarak görsel olarak çekiçi bir düzen oluşturun.",
  "JavaScript ve DOM Manipülasyonu": {
    "getElementById": "GetElementById kullanarak HTML öğelerinin referansları alın.",
    "addEventListener": "Sol tık olaylarını yönetmek için 'Görev Ekle' düğmesine bir addEventListener ekleyin.",
    "li Oluştur": "Yeni bir liste öğesi elemanı (li) oluşturun ve metin içeriğini giriş alanına girilen değere ayarlayın.",
    "ul'ye Ekle": "Yeni liste öğesini görev listesine (ul) ekleyin."
  },
  "JavaScript ile Etkileşim Oluşturma": {
    "addEventListener": "Sol tık olaylarını yönetmek için görev listesine (ul) bir addEventListener ekleyin.",
    "Kontrol Et": "Sol tıklanan öğenin bir liste elemanı (li) olup olmadığını kontrol edin.",
    "Değiştir": "Tamamlanmış olarak işaretlemek için tıklanan liste elemanının sınıfını değiştirin."
  },
  "Ek İşlevsellikler": {
    "addEventListener": "Sağ tık olaylarını yönetmek için görev listesine (ul) bir addEventListener ekleyin.",
    "İçerik Menüsünü Gizle": "Varsayılan sağ tık menüsünün görünmesini engelleyin.",
    "Kontrol Et": "Sağ tıklanan öğenin bir liste elemanı (li) olup olmadığını kontrol edin.",
    "Kaldır": "Sağ tıklanan liste öğesini görev listesinden kaldırın."
  },
  "Dağıtım": "HTML, CSS ve JavaScript dosyalarını bir web barındırma hizmetine veya platformuna yükleyin."
}
```

## Karşılanan Beklentiler

| Beklenti | Durum | Detay |
|:---:|:---:|:---:|
| Anahtar Özellikler | ✅ | - |
| HTML Yapısı | ✅ | Yapılacak ve Yapıldı alanları olarak 2 farklı sırasız liste (ul) oluşturulmuş. <br>Görsel filtreleme sağlanmıştır. |
| CSS ile Stillendirme | ✅ | - |
| JavaScript ve DOM Manipülasyonu | ✅ | Tuş ile görev eklemeye ek olarak, klavyeden "enter" etkileşimi ile de çalışması sağlanmıştır. |
| JavaScript ile Etkileşim Oluşturma | ✅ | Göreve sol tıklamaya ek olarak değiştirme işlevi için bir tuş da eklenmiştir. <br>Ayrıca iki farklı liste bulunduğundan iki liste arasında durum geçişi sağlanmıştır. |
| Ek İşlevsellikler | ✅ | Göreve sağ tıklama ile kaldırmaya ek olarak görevlere kaldırma tuşu da eklenmiştir. |
| Dağıtım | ✅ | Github Pages servisi aracılığıyla site oluşturulmuştur. [AlMeAs To Do Site](https://almeas.me/) |

## İndirme ve Çalıştırma

[Bu bağlantıyı](https://github.com/metehansenyer/KOU-YZM108-ToDoSiteProject/archive/refs/heads/main.zip) kullanarak kaynak dosyaları indirebilir ve projemizi yerel olarak çalıştırabilirsiniz. Git üzerinden indirmek isterseniz:
```
git clone https://github.com/metehansenyer/KOU-YZM108-ToDoSiteProject.git
```
Sitenin verimlilik testleri Chrome web tarayıcısı üzerinden yapılmıştır. Tavsiye edilen kullanım platformudur.

## Teşekkürler

Web teknolojileri alanındaki öğrenimimizdeki katkılarından dolayı Kocaeli Üniversitesi Yazılım Mühendisliği Bölümü'den Dr. Öğr. Üyesi Hakan GÜNDÜZ hocamıza teşekkürlerimizi arz ederiz.

## Proje Ekibi

| İsim Soyisim | Öğrenci Numarası | Linkedin |
|:---:|:---:|:---:|
| Metehan Şenyer | 230229047 | [@Metehan Şenyer](https://www.linkedin.com/in/metehansenyer) |
| Alperen Türk | 230229019 | [@Alperen Türk](https://www.linkedin.com/in/alperen-t%C3%BCrk-9a9a0b285) |
| Asaf Erdem Kılıç | 230229070 | [@Asaf Kılıç](https://www.linkedin.com/in/asaf-k%C4%B1l%C4%B1%C3%A7-4b33bb308/) |
