# epubtransmitter

Dit project is een webapplicatie die het mogelijk maakt om epub-bestanden te verzenden. Hier is een korte handleiding over hoe je het project kunt starten en bouwen:

## Het project bouwen

Om het project te bouwen, gebruik je eerst `npm i` om de `Node modules` te installeren. Daarna gebruik je het `build` script dat gedefinieerd is in het `package.json` bestand. Dit script bouwt de Next.js applicatie voor productie. Je kunt dit script uitvoeren met het volgende commando in je terminal:

```bash
npm i
npm run build
```

## Het project starten

Om het project te starten, gebruik je het `start` script dat gedefinieerd is in het `package.json` bestand. Dit script start de Next.js server. Je kunt dit script uitvoeren met het volgende commando in je terminal:

```bash
npm start
```

## Het project in ontwikkelmodus draaien

Als je aan het project werkt en wilt dat het automatisch opnieuw start wanneer je wijzigingen aanbrengt in je code, kun je het `dev` script gebruiken. Dit script start de Next.js server in ontwikkelmodus. Je kunt dit script uitvoeren met het volgende commando in je terminal:

```bash
npm run dev
```

## Testen

Dit project maakt gebruik van Jest voor het uitvoeren van tests. Je kunt de tests uitvoeren met het volgende commando in je terminal:

```bash
npm run test
```

Zorg ervoor dat je deze commando's uitvoert in de hoofdmap van het project, waar het `package.json` bestand zich bevindt.

## Bijdragen

Als je wilt bijdragen aan dit project, zorg er dan voor dat je de ESLint regels volgt die zijn gedefinieerd in dit project. Je kunt de linter uitvoeren met het volgende commando in je terminal:

```bash
npm run lint
```

## Backend Vereisten

Dit project is een frontend webapplicatie die nauw samenwerkt met een backend service, genaamd `epubtransmitterbackend`. Om dit project volledig te kunnen gebruiken, moet je ook de backend service draaien en correct configureren.

De backend service is verantwoordelijk voor het verwerken van de epub-bestanden en het beheren van de codes die nodig zijn voor de communicatie tussen de frontend en de backend. Zonder de backend service zal deze frontend applicatie niet naar behoren functioneren.

### Backend Documentatie

Het is belangrijk om de documentatie van de backend service door te nemen voordat je dit project gebruikt. De documentatie bevat gedetailleerde instructies over hoe je de backend service kunt starten en configureren, evenals informatie over de verschillende endpoints die de service biedt.

Je kunt de documentatie van de backend service vinden in het `README.md` bestand van de `epubtransmitterbackend` repository. Zorg ervoor dat je de instructies in de documentatie zorgvuldig volgt om ervoor te zorgen dat de backend service correct is geconfigureerd en functioneert zoals verwacht.

Door de backend documentatie door te nemen, krijg je een beter begrip van hoe de backend service werkt en hoe het samenwerkt met deze frontend applicatie. Dit zal je helpen om eventuele problemen die je tegenkomt beter te begrijpen en op te lossen.
