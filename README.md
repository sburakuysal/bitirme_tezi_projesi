# Net-Prime: Web Tabanlı Programlarda Frontend Güvenliği (Tez Projesi)

Merhaba! Bu proje benim Marmara Üniversitesi - Yönetim Bilişim Sistemleri bölümündeki bitirme tezim için hazırladığım bir film izleme sitesi prototipidir. 

Projenin asıl amacı sadece film sitesi yapmak değil, giriş panellerinde "CAPTCHA" kullanarak frontend (ön yüz) güvenliğini nasıl sağlayabileceğimizi göstermekti. 

Proje Ne Yapıyor?
* **Kayıt & Giriş:** Önce kullanıcıdan kayıt olmasını bekliyor, sonra giriş ekranına yönlendiriyor.
* **Güvenlik Bariyeri (CAPTCHA):** Giriş yaparken her seferinde değişen bir güvenlik kodu var. Eğer yanlış girilirse "Hatalı" uyarısı verip kodu yeniliyor. Bu sayede botların (otomatik yazılımların) siteye sızmasını zorlaştırıyoruz.
* **Film Paneli:** Giriş başarılı olduktan sonra bizi 8 tane popüler filmden oluşan, Netflix tarzı karanlık temalı bir ana sayfa karşılıyor.


### Dosya Yapısı
* `index.html`: Sitenin ana iskeleti, kayıt ve giriş formları burada.
* `style.css`: Tüm o karanlık tema, buton efektleri ve Netflix stili burada tasarlandı.
* `script.js`: CAPTCHA'nın üretilmesi, doğrulanması ve sayfalar arası geçiş mantığı burada dönüyor.

---
Hazırlayan: Sabri Burak Uysal
Marmara Üniversitesi - MIS Mezuniyet Projesi
