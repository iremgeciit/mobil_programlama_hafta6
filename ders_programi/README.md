# Hafta 6 - Expo Router Uygulamaları

Bu repository, Mobil Programlama dersi kapsamında Expo Router yapısını ve dinamik yönlendirme mantığını uygulamak amacıyla geliştirdiğim üç farklı React Native uygulamasını içermektedir.

Projelerde temel olarak `Expo`, `React Native`, `Expo Router`, `FlatList`, yeniden kullanılabilir component yapıları ve dinamik route kullanılmıştır.

## Projeler

### 1. Arıza Takip Uygulaması

Teknik destek ve arıza kayıtlarının görüntülenebildiği basit bir takip uygulamasıdır.

Uygulamada kullanıcı mevcut arıza kayıtlarını listeleyebilir, kayıtların detaylarını görüntüleyebilir ve yeni bir arıza oluşturabilir.

Yeni oluşturulan arızalar uygulamanın state yapısına eklenerek doğrudan arıza listesinde gösterilir.

Kullanılan bazı yapılar:

- `FlatList` ile arıza kayıtlarının listelenmesi
- `/ariza/[id]` dinamik route yapısı
- `router.push()` ve `router.back()`
- `useLocalSearchParams()`
- React Context ve `useState`
- Tekrar kullanılabilir `TicketCard` ve `StatusBadge` componentleri
- Form doğrulama ve kontrollü kullanıcı girişi

---

### 2. Mini Ürün Kataloğu

Ürünlerin kart yapısında listelendiği ve her ürün için ayrı detay sayfasının bulunduğu katalog uygulamasıdır.

Her ürünün adı, kategorisi, fiyatı, stok bilgisi ve açıklaması bulunmaktadır.

Ürün kartına tıklandığında ürünün ID değeri kullanılarak dinamik detay sayfasına yönlendirme yapılmaktadır.

Kullanılan bazı yapılar:

- `FlatList`
- Yeniden kullanılabilir `ProductCard` componenti
- `/urun/[id]` dinamik route yapısı
- `router.push()`
- `useLocalSearchParams()`
- Geçersiz ürün ID kontrolü

---

### 3. Öğrenci Ders Programı

Haftalık ders programının görüntülenmesini sağlayan bir uygulamadır.

Her ders için ders adı, gün, saat, derslik ve öğretim elemanı bilgileri tutulmaktadır. Ders kartlarından ilgili dersin detay ekranına geçiş yapılabilmektedir.

Kullanılan bazı yapılar:

- `FlatList`
- Yeniden kullanılabilir `CourseCard` componenti
- `/ders/[id]` dinamik route yapısı
- `router.push()` ve `router.back()`
- `useLocalSearchParams()`
- Geçersiz ders ID kontrolü

## Proje Yapısı

Projelerde ekran yönlendirmeleri Expo Router'ın dosya tabanlı routing sistemi kullanılarak oluşturulmuştur.

Örneğin:

```text
app/
├── _layout.jsx
├── index.jsx
└── ders/
    └── [id].jsx
```

Buradaki `[id].jsx` yapısı sayesinde her kayıt için ayrı bir ekran dosyası oluşturmak yerine ID değerine göre dinamik detay ekranı oluşturulmuştur.

Componentler ve örnek veriler ekran dosyalarından ayrılarak proje yapısının daha düzenli ve tekrar kullanılabilir olması amaçlanmıştır.

## Karşılaştığım Zorluklar

Çalışma sırasında en çok zorlandığım noktalardan biri Expo Router'ın proje dizinini algılama biçimi oldu. Yeni oluşturulan Expo projesinde varsayılan olarak `src/app` dizini kullanıldığı için ayrıca oluşturduğum `app` klasörü başlangıçta yönlendirme sistemi tarafından kullanılmadı. Proje dizinini kontrol ederek bu çakışmayı giderdim ve uygulamaların doğru `app` dizini üzerinden çalışmasını sağladım.

Bir diğer önemli nokta dinamik route yapısının mantığını oturtmaktı. Liste ekranından gönderilen ID değerini `[id].jsx` içerisinde `useLocalSearchParams()` ile alarak ilgili kaydı veri dizisinde buldum. Aynı zamanda geçersiz bir ID girildiğinde uygulamanın hata vermesi yerine kontrollü bir bilgilendirme ekranı göstermesini sağladım.

Arıza Takip uygulamasında yeni oluşturulan kayıtların yalnızca form üzerinde kalmaması ve liste ekranına da yansıması için ortak state yönetimine ihtiyaç duydum. Bu nedenle Context API ve `useState` kullanarak arıza verilerini ekranlar arasında ortak şekilde yönettim.

Bu çalışma sayesinde özellikle dosya tabanlı routing, dinamik route, component kullanımı ve ekranlar arasında veri akışı konularını daha iyi kavradım.

## Çalıştırma

Çalıştırılmak istenen proje klasörüne girilir:

```bash
cd ariza_takip
```

veya:

```bash
cd urun_katalogu
```

veya:

```bash
cd ders_programi
```

Gerekli paketler kurulur:

```bash
npm install
```

Web ortamında çalıştırmak için:

```bash
npx expo start --web
```

## Kullanılan Teknolojiler

- React Native
- Expo
- Expo Router
- JavaScript
- React Hooks
- Context API
- FlatList
- StyleSheet

## Geliştirici

İrem Geçit  
Yazılım Mühendisliği