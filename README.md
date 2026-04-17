# G9 CMD

Ett lokalt kommandoreferensverktyg byggt med Electron. Samlar SSH- och Linux-kommandon på ett ställe med syntaxfärgning, sökning och kategorisering.

## Funktioner

- Två flikar — PowerShell och SSH / Linux
- Kategorier med färgkodade badges (SSH, Nätverk, System, Filer, Jellyfin, Egna)
- Klicka på ett kommando för att kopiera det
- Sök i namn, kommando eller beskrivning
- Lägg till egna kommandon via formulär eller CSV-import
- Sortering efter mest använda
- Persistent lagring via localStorage

## Installation

Ladda ner senaste versionen under [Releases](https://github.com/castravarmland/-g9-cmd/releases):

- **G9.CMD.1.4.0.exe** — portable, kör direkt utan installation
- **G9.CMD.Setup.1.4.0.exe** — installerar appen med genväg i startmenyn

## Köra från källkod

Kräver [Node.js](https://nodejs.org/).

```powershell
git clone https://github.com/castravarmland/-g9-cmd.git
cd g9-cmd
npm install
npm start
```

## Lägga till egna kommandon

**Manuellt:** Klicka på `+ Lägg till` i appen.

**Via CSV:** Klicka på ⚙ → Importera kommandon. Format:

```csv
tab,cat,name,cmd,desc
linux,System,Kolla loggar,journalctl -f,Följer loggen live
powershell,Nätverk,Ping server,ping 192.168.1.1,Enkel livskontroll
```

| Kolumn | Obligatorisk | Möjliga värden |
|---|---|---|
| `tab` | ✅ | `linux`, `powershell` |
| `cat` | ✅ | `SSH`, `Nätverk`, `System`, `Filer`, `Jellyfin`, `Egna` |
| `name` | ✅ | Fritext |
| `cmd` | ✅ | Fritext |
| `desc` | ❌ | Fritext |

## Bygga från källkod

```powershell
npm run dist
```

Outputfiler hamnar i `dist/`.
