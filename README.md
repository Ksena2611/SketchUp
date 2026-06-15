
Interaktivní webové portfolio navržené pro prezentaci architektonických 3D modelů, technických schémat a jejich reálných výstupů či vizualizací pomocí AI. Aplikace funguje jako digitální „kniha projektů“, která uživateli umožňuje plynule procházet jednotlivé fáze návrhu domu od konceptu až po finální realizaci.

---

## ✨ Hlavní Funkce

- **📖 Efekt Knihy (Book View):** Plynulý přechod z úvodní obrazovky (`introScreen`) do interaktivního prohlížeče projektů.
- **🔄 Srovnání "Před & Po" (Before / After):** Každý projekt přehledně zobrazuje technický návrh ze SketchUpu a jeho odpovídající vizualizaci (vygenerovanou pomocí **Gemini AI**) nebo reálnou fotografii hotové stavby.
- **🔍 Fullscreen Náhled (Modal):** Možnost kliknout na jakýkoliv obrázek a zobrazit si ho v plném rozlišení v responzivním modálním okně.
- **⌨️ Ovládání Klávesnicí:**
  - `Šipka vlevo` / `Šipka vpravo` pro rychlé přepínání mezi projekty.
  - `Escape` pro návrat na úvodní obrazovku nebo zavření zvětšeného obrázku.
- **🛡️ Fallback Obrázků:** Ošetření chyb při načítání (pokud obrázek chybí, automaticky se zobrazí přehledný zástupný placeholder).

---

## 📂 Struktura Dat Projektů

Aplikace dynamicky pracuje s 10 klíčovými projekty rozdělenými do 3 tematických fází:

1. **Stavební plány (1. a 2. patro):** Základní 3D modely podlaží vytvořené v programu **SketchUp** transformované pomocí **Gemini** do realistických vizualizací.
2. **Technické rozvody (Elektrika & Kanalizace):** Schémata a rozvržení inženýrských sítí vytvořená v kombinaci programů SketchUp a Paint.
3. **Exteriér & Realizace:** Architektonické návrhy fasády a stěn domu (přední, zadní, levá, pravá strana) přímo srovnané s **reálnými fotografiemi realizované stavby**.

---

## 🛠️ Použité Technologie

- **HTML5** – Sémantická struktura a modální prvky.
- **CSS3** – Pokročilé animace (transition efekty pro otvírání knihy), stylování a responzivní layout.
- **JavaScript (Vanilla)** – Kompletní logika pro správu stavu (`currentIndex`), dynamické vykreslování dat a zachytávání uživatelských událostí (Event Listeners).

---

## 🚀 Jak Projekt Spustit

1. Naklonujte si tento repozitář:
   ```bash
   git clone [https://github.com/vase-jmeno/sketchup-vizualizace.git](https://github.com/vas