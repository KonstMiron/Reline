# Оптимізація відео для швидшого завантаження

## Що зроблено в коді:
✅ Додано `preload="metadata"` - завантажує тільки метадані, а не всє відео
✅ Додано `loading="lazy"` - відео завантажуються тільки коли користувач доскролює до них

## Як стиснути відео файли:

### Варіант 1: Онлайн сервіс (найпростіше)
1. Відкрий https://www.freeconvert.com/video-compressor
2. Завантаж свої .mp4 файли
3. Вибери якість 70-80%
4. Скачай стиснуті файли
5. Заміни старі відео у папках:
   - `src/shared/assets/images/laser-makijaz-remover/`
   - `src/shared/assets/images/laser-tattoo-removal/`

### Варіант 2: FFmpeg (для більшого контролю)
Якщо маєш FFmpeg встановлений:

```bash
# Стиснути відео зі збереженням якості
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4

# Або зменшити розмір більш агресивно
ffmpeg -i input.mp4 -c:v libx264 -crf 32 -preset slow -vf "scale=iw*0.75:ih*0.75" -c:a aac -b:a 96k output.mp4
```

### Варіант 3: Handbrake (безкоштовна програма)
1. Скачай https://handbrake.fr/
2. Відкрий відео
3. Вибери preset "Fast 1080p30" або "Fast 720p30"
4. Натисни "Start Encode"

## Поточні розміри:
- portfolio1.mp4: 4.1MB
- portfolio2.mp4: 7.6MB
- portfolio3.mp4: 12MB

**Мета:** стиснути кожне відео до ~2-3MB

## Додаткові поради:
- Зменши роздільну здатність до 720p якщо зараз 1080p
- Знизь frame rate до 24-30fps якщо вище
- Використовуй формат WebM як альтернативу (краще стискається)
