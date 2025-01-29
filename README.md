# Zaparoo ESP32

The goal of this project is to launch games via the [Zaparoo Service](https://wiki.zaparoo.org/Main_Page) on the a Mister over Wifi. It also supports launching games via [Simple Serial](https://wiki.zaparoo.org/Reader_Drivers#Simple_Serial).

The project is now supporting the initial release of the v2 api (which uses web-sockets). Further updates are required once the security layer is implemented in the api.

## This fork has been enhanced with new features & added support for both the the RC522 & PN532 rfid modules.  
New features:  
- Supports Universal launching for both MiSTer and SteamOS
- Play Audio files for Card Detected, Game Launched, and Card Removed events.  
- Play game specific Audio Files for Game Launched and Card Removed events (need 215 or 216 RFID Tags/Cards for the extra data)  
- SD Card Module support (Only Supported with PN532 Module installed) to store more audio files.
- A Simple Web UI to
  - configure the ESP32's LED's, Rumble Motor, & Audio Module's GPIO pins (if installed),
  - change Zaparoo MiSTer and SteamOS settings.
  - upload audio files to SD Card (if available), or SPIFFS partition.
  - Search for games & write NFC tag/Cards with extended information.
  - Set default detect, launch, and remove audio files
  - Configure unique launch audio and card removal audio sounds per game/card.


 Please refer to the [wiki](https://github.com/MintyTrebor/zaparoo-esp32/wiki) for full info and build details
