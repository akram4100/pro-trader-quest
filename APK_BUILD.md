# تحويل TradeMaster Academy إلى APK

المشروع الآن عبارة عن React/Vite ويمكن تغليفه كتطبيق Android باستخدام Capacitor.

## الطريقة الموصى بها (على Windows/Linux/macOS)

1. فك الضغط عن المشروع.
2. افتح Terminal داخل مجلد المشروع.
3. ثبّت الاعتمادات:
   npm install
4. ابنِ نسخة الويب:
   npm run build
5. أنشئ مشروع Android:
   npx cap add android
6. انسخ ملفات الويب إلى Android:
   npx cap sync android
7. افتح المشروع:
   npx cap open android
8. في Android Studio اختر:
   Build > Build APK(s)

ملف الـAPK الناتج يكون عادة داخل:
android/app/build/outputs/apk/debug/app-debug.apk

## تشغيل مباشر على هاتف متصل عبر USB
npm run mobile:run

## مهم
- تحتاج Node.js وAndroid Studio وAndroid SDK.
- لا تحتاج Lovable لإكمال واجهة React.
- إذا كانت Supabase متصلة بالمشروع، أبقِ متغيرات البيئة الخاصة بها في `.env` ولا تنشر المفاتيح السرية.
- Capacitor يحوّل تطبيق React/Vite إلى غلاف Android؛ ليس إعادة كتابة المشروع بـJava/Kotlin.
