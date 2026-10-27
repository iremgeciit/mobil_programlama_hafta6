# Hafta 6 - Expo Router Uygulamaları

Bu repository, Mobil Programlama dersi kapsamında Expo Router ve dinamik yönlendirme yapısını uygulamak amacıyla geliştirdiğim üç farklı React Native uygulamasını içermektedir.

## 📱 Uygulamalar

### 1. Arıza Takip Uygulaması

Teknik destek ve arıza kayıtlarının yönetilebildiği bir uygulamadır.

- Arıza kayıtlarını listeleme
- Yeni arıza oluşturma
- Oluşturulan arızayı listeye ekleme
- Arıza detaylarını görüntüleme
- `/ariza/[id]` ile dinamik yönlendirme
- `FlatList` kullanımı
- Context API ile ortak state yönetimi
- Geçersiz ID kontrolü
- Yeniden kullanılabilir `TicketCard` ve `StatusBadge` componentleri

### 2. Mini Ürün Kataloğu

Ürünlerin listelendiği ve her ürün için dinamik bir detay ekranının oluşturulduğu katalog uygulamasıdır.

- Ürünleri `FlatList` ile listeleme
- Yeniden kullanılabilir `ProductCard`
- Ürün adı, kategori, fiyat ve stok bilgilerinin gösterilmesi
- `/urun/[id]` ile dinamik detay sayfası
- `router.push()` ile sayfalar arası geçiş
- `useLocalSearchParams()` ile ID bilgisinin alınması
- Geçersiz ürün ID kontrolü

### 3. Öğrenci Ders Programı

Haftalık ders programındaki dersleri görüntülemek ve ders detaylarına ulaşmak amacıyla geliştirilmiştir.

- En az dört dersin listelenmesi
- Ders adı, gün, saat, derslik ve öğretim elemanı bilgileri
- Yeniden kullanılabilir `CourseCard`
- `/ders/[id]` dinamik route yapısı
- Ders detay ekranı
- Geçersiz ders ID kontrolü

## 🛠️ Kullanılan Teknolojiler

- React Native
- Expo
- Expo Router
- JavaScript
- React Hooks
- Context API
- FlatList
- StyleSheet

## 📂 Proje Yapısı

Repository içerisinde üç uygulama ayrı klasörlerde bulunmaktadır:

```text
mobil_programlama_hafta6/
├── ariza_takip/
├── urun_katalogu/
├── ders_programi/
└── README.md
```

Her uygulamada ekranlar, componentler ve veriler mümkün olduğunca ayrı dosyalarda tutularak daha düzenli bir proje yapısı oluşturulmuştur.

## ⚠️ Karşılaştığım Zorluklar

Çalışma sırasında en çok zorlandığım konulardan biri Expo Router'ın proje dizinini algılama biçimi oldu. Yeni oluşturulan Expo projesinin varsayılan olarak `src/app` klasörünü kullanması nedeniyle ayrıca oluşturduğum `app` klasörü başlangıçta devreye girmedi. Proje yapısını kontrol ederek bu çakışmayı giderdim ve uygulamaların doğru `app` dizini üzerinden çalışmasını sağladım.

Dinamik route yapısında liste ekranından gönderilen ID değerinin detay ekranında alınması da üzerinde çalıştığım konulardan biriydi. `[id].jsx` ve `useLocalSearchParams()` kullanarak ilgili kaydın bulunmasını sağladım. Geçersiz bir ID girildiğinde uygulamanın hata vermesi yerine kullanıcıya kontrollü bir uyarı gösterdim.

Arıza Takip uygulamasında yeni oluşturulan kaydın liste ekranına yansıtılması için ekranlar arasında ortak veri yönetimine ihtiyaç duydum. Bu problemi Context API ve `useState` kullanarak çözdüm.

Bu çalışmalar sayesinde özellikle Expo Router, dosya tabanlı yönlendirme, dinamik route, component kullanımı ve ekranlar arasındaki veri akışı konularını daha iyi kavradım.

## ▶️ Çalıştırma

İlgili proje klasörüne girilir. Örneğin:

```bash
cd ariza_takip
```

Bağımlılıklar kurulur:

```bash
npm install
```

Uygulama web ortamında başlatılır:

```bash
npx expo start --web
```

## 👩‍💻 Geliştirici

İrem Geçit  
Yazılım Mühendisliği