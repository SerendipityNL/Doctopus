# Inhoudsopgave
- [Plan van aanpak](#plan-van-aanpak)
	- [Inleiding](#inleiding)
	- [Achtergrond](#achtergrond)
		- [Benamingen binnen het project](#benamingen-binnen-het-project)
		- [Locatie / situatie](#locatie--situatie)
	- [Projectresultaat](#projectresultaat)
		- [Aanleiding](#aanleiding)
		- [Opdracht](#opdracht)
		- [Eisen Randvoorwaarden](#eisen-randvoorwaarden)
			- [Kenniscentrum](#kenniscentrum)
			- [Probleemstelling](#probleemstelling)
		- [Doelstelling](#doelstelling)
		- [Resultaat](#resultaat)
	- [Projectactiviteiten](#projectactiviteiten)
		- [Work breakdown structure:](#work-breakdown-structure)
	- [Projectgrenzen](#projectgrenzen)
		- [Periode](#periode)
		- [Budget](#budget)
		- [Software en hardware](#software-en-hardware)
	- [Tussenresultaten](#tussenresultaten)
		- [Deel-producten:](#deel-producten)
			- [Versie 0.1.0 [Profiel]:](#versie-010-profiel)
			- [Versie 0.2.0 [Indeling en bewerking]:](#versie-020-indeling-en-bewerking)
			- [Versie 0.3.0 [Opslaan]:](#versie-030-opslaan)
			- [Versie 0.4.0 [Publiceren]:](#versie-040-publiceren)
			- [Versie 0.5.0 [Delen]:](#versie-050-delen)
			- [Versie 1.0.0 [Final]:](#versie-100-final)
			- [Mijlpalen en (tussen)resultaten:](#mijlpalen-en-tussenresultaten)
	- [Kwaliteit](#kwaliteit)
		- [Definition of done:](#definition-of-done)
		- [Quality Monitoring](#quality-monitoring)
			- [Monitoring:](#monitoring)
			- [Test-plan:](#test-plan)
			- [Scrum:](#scrum)
			- [Deelproducten en versiebeheer:](#deelproducten-en-versiebeheer)
		- [Methodes](#methodes)
	- [Projectorganisatie:](#projectorganisatie)
		- [Project organisatie en betrokken partijen](#project-organisatie-en-betrokken-partijen)
			- [Stakeholders](#stakeholders)
		- [Betrokken partijen](#betrokken-partijen)
	- [Project locatie](#project-locatie)
	- [Contactmomenten](#contactmomenten)
		- [Wekelijkse afspraak Tutor:](#wekelijkse-afspraak-tutor)
		- [Playtesting momenten:](#playtesting-momenten)
		- [Playtesting Extra momenten:](#playtesting-extra-momenten)
		- [De weekopening:](#de-weekopening)
		- [Scrum meeting:](#scrum-meeting)
		- [Daily scrum:](#daily-scrum)
	- [Regels en afspraken](#regels-en-afspraken)
		- [Projectgroep werkafspraken:](#projectgroep-werkafspraken)
		- [Software](#software)
	- [Planning](#planning)
	- [Kosten en baten](#kosten-en-baten)
		- [Velocity project groep:](#velocity-project-groep)
		- [Materiaal](#materiaal)
		- [Kosten overzicht](#kosten-overzicht)
	- [Risico analyse](#risico-analyse)
		- [Risico’s](#risicos)
		- [Analyse risico’s tabel](#analyse-risicos-tabel)
	- [Maatregelen](#maatregelen)
		- [Binnen Projectgroep](#binnen-projectgroep)
		- [Extern](#extern)
		- [Kwaliteit](#kwaliteit-1)
	- [Bijlage(s)](#bijlages)
	- [Work Break Down Structure](#work-break-down-structure)
	- [Samenwerkingscontract](#samenwerkingscontract)
		- [Projectgroep: DocBuilders](#projectgroep-docbuilders)
		- [Afspraken en regels:](#afspraken-en-regels)
	- [Begroting](#begroting)
	- [Risico Analyse](#risico-analyse-1)
	- [Definition of done](#definition-of-done-1)
- [Concepting](#concepting)
	- [Tot stand komen van het concept](#tot-stand-komen-van-het-concept)
	- [Wat is het?](#wat-is-het)
	- [Concept lagen](#concept-lagen)
		- [Het hart](#het-hart)
		- [Identiteit](#identiteit)
		- [Het doel](#het-doel)
		- [De vorm](#de-vorm)
		- [Conclusie](#conclusie)
	- [Concept presentatie](#concept-presentatie)
	- [Naamgeving concept](#naamgeving-concept)
		- [Wat is je product /service?](#wat-is-je-product-service)
		- [Wat zijn de unique selling points van de product of dienst?](#wat-zijn-de-unique-selling-points-van-de-product-of-dienst)
		- [Wat voor type uitstraling/imago zou je willen hebben?](#wat-voor-type-uitstralingimago-zou-je-willen-hebben)
		- [Welke markt/doelgroep bedien je?](#welke-marktdoelgroep-bedien-je)
		- [Power users](#power-users)
		- [Benchmark users](#benchmark-users)
		- [Dierenassociaties:](#dierenassociaties)
			- [De spin](#de-spin)
			- [De mier](#de-mier)
			- [Inktvis](#inktvis)
		- [Mogelijke namen:](#mogelijke-namen)
		- [Gekozen naam](#gekozen-naam)
		- [“Doctopus”](#doctopus)
	- [Bronnenlijst](#bronnenlijst)
- [Technical design](#technical-design)
	- [Introduction](#introduction-1)
	- [Specifications](#specifications)
	- [Hosting](#hosting)
		- [Appfog](#appfog)
		- [Heroku](#heroku)
		- [Nodester](#nodester)
		- [VPS server](#vps-server)
	- [Technical layers](#technical-layers)
	- [Application description](#application-description-1)
	- [Technical description](#technical-description)
		- [What is Node.js?](#what-is-nodejs)
		- [Why Node.js?](#why-nodejs)
		- [About MongoDB](#about-mongodb)
		- [Why MongoDB?](#why-mongodb)
		- [About Nodemon](#about-nodemon)
	- [Node Modules](#node-modules)
		- [Express](#express)
		- [Socket.IO](#socketio)
		- [Provider](#provider)
		- [Mongoose](#mongoose)
		- [Jade](#jade)
		- [Validator](#validator)
	- [Coding conventions](#coding-conventions)
		- [Global](#global)
			- [DRY](#dry)
			- [KISS](#kiss)
			- [CSS](#css)
			- [Variables and functions](#variables-and-functions)
			- [View files](#view-files)
			- [Database fields](#database-fields)
			- [Controllers (routes)](#controllers-routes)
			- [Models](#models)
	- [Database](#database)
		- [Users collection:](#users-collection)
		- [Documents collection:](#documents-collection)
		- [Database design](#database-design)
	- [Directory structure](#directory-structure)
		- [App.njs](#appnjs)
		- [Routes (controllers)](#routes-controllers)
			- [documents.index](#documentsindex)
			- [documents.new](#documentsnew)
			- [documents.create](#documentscreate)
			- [documents.edit](#documentsedit)
			- [documents.print](#documentsprint)
	- [Models](#models-1)
		- [user.njs](#usernjs)
		- [modelFunctions](#modelfunctions)
		- [findAll](#findall)
		- [findByUsername](#findbyusername)
		- [deleteByUsername](#deletebyusername)
		- [update](#update)
		- [save](#save)
		- [isAdmin](#isadmin)
		- [Auth](#auth)
	- [Views](#views)
	- [Modules](#modules)
		- [Descriptions](#descriptions)
		- [app.local.njs](#applocalnjs)
	- [Sources](#sources)
- [Functional design](#functional-design)
	- [Introduction](#introduction)
	- [Application Description](#application-description)
	- [Users](#users)
	- [Why make this application?](#why-make-this-application)
	- [MoSCoW model](#moscow-model)
		- [Must haves](#must-haves)
		- [Should haves](#should-haves)
		- [Could haves](#could-haves)
		- [Won’t haves](#wont-haves)
	- [Sitemap](#sitemap)
	- [Pages](#pages)
		- [Homepage](#homepage)
		- [Register new account](#register-new-account)
		- [Logging in](#logging-in)
		- [Forgot password](#forgot-password)
		- [Manage profile](#manage-profile)
		- [Sections](#sections)
		- [Document work area](#document-work-area)
		- [Editing a block](#editing-a-block)
		- [Image handling](#image-handling)
		- [Navigation bar](#navigation-bar)
		- [Elements](#elements)
		- [Manage documents](#manage-documents)
			- [Document title](#document-title)
			- [Share](#share)
			- [Edit](#edit)
			- [With selected (select box)](#with-selected-select-box)
			- [Styling the document](#styling-the-document)
		- [Sharing the document](#sharing-the-document)
			- [Change sharing options](#change-sharing-options)
			- [Sending the invitation](#sending-the-invitation)
			- [Communication with multiple users](#communication-with-multiple-users)
			- [Editing a document with multiple users](#editing-a-document-with-multiple-users)
- [Grafisch Ontwerp](#grafisch-ontwerp)
	- [Inleiding](#inleiding-1)
	- [De lay-out van de applicatie](#de-lay-out-van-de-applicatie)
		- [1. Document informatie](#1-document-informatie)
		- [2. Werkveld van de gebruiker](#2-werkveld-van-de-gebruiker)
		- [3. Blokken toevoegen/ verwijderen](#3-blokken-toevoegen-verwijderen)
		- [4. Sidebar](#4-sidebar)
		- [5. Blok informatie](#5-blok-informatie)
		- [6. Blok opties](#6-blok-opties)
		- [7. Scroll balk(en)](#7-scroll-balken)
		- [8. Product logo](#8-product-logo)
		- [9. Een tekst blok](#9-een-tekst-blok)
	- [De stijl van Doctopus](#de-stijl-van-doctopus)
		- [1. Kleur keuze/ gebruik:](#1-kleur-keuze-gebruik)
		- [2. Lettertype keuze/ gebruik:](#2-lettertype-keuze-gebruik)
	- [Het logo van Doctopus](#het-logo-van-doctopus)
		- [Gebruik](#gebruik)
		- [Product naam](#product-naam)
		- [Beeldmerk](#beeldmerk)
	- [Hardware](#hardware)
		- [Devices:](#devices)
		- [Scherm resoluties:](#scherm-resoluties)
		- [Browsers:](#browsers)
- [Quality Monitoring & Implementation](#quality-monitoring--implementation)
	- [Testmethode](#testmethode)
		- [Inleiding](#inleiding-2)
		- [Randvoorwaarden](#randvoorwaarden)
		- [Plan van Aanpak](#plan-van-aanpak-1)
		- [Met wie zal er getest worden?](#met-wie-zal-er-getest-worden)
		- [Middelen](#middelen)
		- [Testplan](#testplan)
			- [Stap 1:  Eerste indruk, algemene bevindingen](#stap-1--eerste-indruk-algemene-bevindingen)
			- [Stap 2: We geven een korte introductie in de vorm van een verhaal over wat ons product is en wat er verwacht wordt van de gebruiker,](#stap-2-we-geven-een-korte-introductie-in-de-vorm-van-een-verhaal-over-wat-ons-product-is-en-wat-er-verwacht-wordt-van-de-gebruiker)
			- [Stap 3: Stel opdrachten op, gerelateerd aan de functionaliteiten van het prototype.](#stap-3-stel-opdrachten-op-gerelateerd-aan-de-functionaliteiten-van-het-prototype)
			- [Stap 4: Observeer de gebruiker en notuleer pauzes / complicaties.](#stap-4-observeer-de-gebruiker-en-notuleer-pauzes--complicaties)
			- [Stap 5: Vat de problemen die de gebruikers hebben gehad samen tot een actielijst.](#stap-5-vat-de-problemen-die-de-gebruikers-hebben-gehad-samen-tot-een-actielijst)
	- [Paper prototype](#paper-prototype)
		- [Inleiding:](#inleiding-3)
		- [Resultaat:](#resultaat-1)
		- [Conclusie:](#conclusie-1)
	- [Concept](#concept)
		- [Beschrijving](#beschrijving)
	- [4. Prototype 1](#4-prototype-1)
		- [Beschrijving](#beschrijving-1)
		- [Testcase Prototype 1](#testcase-prototype-1)
			- [Inleiding](#inleiding-4)
			- [Testcase](#testcase)
		- [Conclusie / Actielijst Prototype 1](#conclusie--actielijst-prototype-1)
	- [5. Prototype 2](#5-prototype-2)
		- [Beschrijving](#beschrijving-2)
			- [Verbeteringen:](#verbeteringen)
			- [Toevoegingen:](#toevoegingen)
		- [Testcase Prototype 2](#testcase-prototype-2)
		- [Conclusie / Actielijst Prototype 2](#conclusie--actielijst-prototype-2)
	- [Prototype 3](#prototype-3)
		- [Beschrijving](#beschrijving-3)
			- [Verbeteringen:](#verbeteringen-1)
			- [Toevoegingen:](#toevoegingen-1)
		- [Testcase Prototype 3](#testcase-prototype-3)
		- [Conclusie / Actielijst Prototype 3](#conclusie--actielijst-prototype-3)
	- [7. Prototype 4 (beta 001)](#7-prototype-4-beta-001)
		- [Beschrijving](#beschrijving-4)
			- [Verbeteringen:](#verbeteringen-2)
			- [Toevoegingen:](#toevoegingen-2)
		- [Testcase prototype 4](#testcase-prototype-4)
		- [Algemene vragen](#algemene-vragen)
			- [Wat is de eerste indruk van het product en wat denk jij dat je ermee kan doen?](#wat-is-de-eerste-indruk-van-het-product-en-wat-denk-jij-dat-je-ermee-kan-doen)
			- [Als je iets zou kunnen veranderen binnen het product, wat zou dit dan zijn?](#als-je-iets-zou-kunnen-veranderen-binnen-het-product-wat-zou-dit-dan-zijn)
			- [Is de testpersoon geïnteresseerd in het product?](#is-de-testpersoon-genteresseerd-in-het-product)
		- [Conclusie / Actielijst Prototype 4](#conclusie--actielijst-prototype-4)
		- [Bewijsmateriaal](#bewijsmateriaal)
- [Multidisciplinary Teamwork](#multidisciplinary-teamwork)
	- [Inleiding](#inleiding-5)
	- [Vincent](#vincent)
		- [Positieve punten](#positieve-punten)
		- [Negatieve punten](#negatieve-punten)
	- [Edwin](#edwin)
		- [Positieve punten](#positieve-punten-1)
		- [Negatieve punten](#negatieve-punten-1)
	- [Douwe](#douwe)
		- [Positieve punten](#positieve-punten-2)
		- [Negatieve punten](#negatieve-punten-2)
	- [Tjerk](#tjerk)
		- [Positieve punten](#positieve-punten-3)
		- [Negatieve punten](#negatieve-punten-3)


# Plan van aanpak

## Inleiding

Er is binnen de project groep een idee ontstaan (en ingediend bij de minor The Next Web van de NHL Hogeschool Leeuwarden) om een nieuwe documentatie tool te ontwikkelen. Deze zal simpel zijn in gebruik en er kan nette documentatie mee gemaakt worden. Uitgangspunten zijn onder andere dat in huidige tools het lastig is om opmaak aan te passen, vooral wanneer meerdere documenten worden samengevoegd met verschillende opmaak-stijlen. Het gezamenlijk werken aan één bestand is in weinig documentatie tools mogelijk. Het opbouwen en wijzigen van opmaak is niet altijd even gebruiksvriendelijk en werkt vaak met veel extra stappen. Deze stappen zouden de gebruiker veel tijd kunnen schelen als ze geautomatiseerd zouden zijn. Met deze insteek wil de projectgroep die op dit project zit een nieuwe tool ontwikkelen die voor deze problemen een oplossing bied.

Het plan van aanpak zal inzicht geven in de werkwijze die gehanteerd zal worden tijdens het ontwikkelen van deze tool, welke stakeholders er betrokken zijn bij het project en wat de mogelijke risico’s zijn bij het ontwikkelen van deze tool.

## Achtergrond
### Benamingen binnen het project
Er is tijdens het project eerst gebruik gemaakt van een werknaam, namelijk DocBuilder. Deze is vervangen door de huidige projectnaam Doctopus.
### Locatie / situatie
De locatie is op de NHL - Hogeschool te Leeuwarden. De project groep werkt voornamelijk in Applab, dit is een lokaal in de NHL. De project leden zijn Vincent Bremer (cohort 2010 - 2011), Edwin ten Wolde (cohort 2011 - 2012), Douwe de Haan (2008 - 2009) en Tjerk Dijkstra (cohort 2011 - 2012). De project groep zal werken aan dit project.


Foto van de projectgroep.

## Projectresultaat
### Aanleiding
De aanleiding voor dit project is het gebrek aan goede documentatie software die beschikbaar is. Het gebrek dat de huidige software heeft zijn een te veel aan functies die de gebruiker in verwarring brengen en het overzicht laten vervagen voor de gebruiker, het gebrek aan regels die er voor kunnen zorgen dat de opmaak snel een chaos wordt, de combinatie van een simpel overzichtelijk werkveld met alleen de opties in beeld die daadwerkelijk van belang zijn voor het maken van nette en gestructureerde documentatie en een mogelijkheid samen tegelijkertijd aan dezelfde documenten te kunnen werken.

### Opdracht
Het ontwikkelen van een documentatietool die het maken van documentatie snel en simpel houd, waarin gezamenlijk aan documentatie kan worden gewerkt en waarbij de opmaak snel kan worden gedaan en aangepast zowel voor als tijdens en achteraf.

### Eisen Randvoorwaarden
#### Kenniscentrum
Vanuit het kenniscentrum is de voorwaarde naar voren gekomen om als groep te zoeken naar een externe validatie van het project.
Meerwaarde:
Het product moet een meerwaarde hebben tussen de reeds bestaande documentatie tools.

#### Probleemstelling
Hoe kan ons product voorzien in de behoefte aan een snelle simpele manier van correcte documentatie maken.

### Doelstelling
De doelstelling is om binnen het semester een online documentatie tool te creëren die het maken van documentatie versimpelt, versneld, en kan vergemakkelijken ten opzichte van andere vergelijkbare initiatieven. 

### Resultaat
Het resultaat van dit project voorziet in de behoefte aan een snel en simpele manier van correcte documentatie maken

## Projectactiviteiten
### Work breakdown structure:

Dit is de work breakdown structure van het project.

## Projectgrenzen
### Periode
Als we het hebben over de periode dat dit project loopt zijn de harde data de volgende twee:

Start: Maandag 25 Februari 2013
Deadline van alle documentatie: Woensdag 12 Juni 2013

Echter zal de projectgroep nog langer door werken aan het product. Dit om tot een goed eindproduct/ prototype te komen dat getoont kan worden aan geinteresseerden. Waarmee gewerkt kan worden door de doelgroep en wat gebruikt kan worden als portfolio materiaal voor de project leden.

### Budget
Er is voor dit project € 0,- aan budget kosten beschikbaar.
Kosten die gemaakt zullen gaan worden zijn voor de projectgroep zelf en zullen eerlijk worden verdeeld. Dit zullen consumptie kosten zijn en materiaalkosten zoals papier, pennen, stiften etc.
Voor iets meer beeldvorming, we financieren alle kosten omdat er geen budget beschikbaar is gesteld voor dit project.

### Software en hardware
Er is geen budget voor dit project. De leden van de projectgroep beschikken gelukkig zelf over de benodigde hardware (laptops), voor de software wordt ten alle tijden gezocht naar gratis software dat gebruikt kan worden.

## Tussenresultaten
### Deel-producten:
Om ervoor te zorgen dat er in het project genoeg momenten zijn om te kunnen reflecteren op het werk dat klaar is en op de voortgang, wordt er gebruik gemaakt van versie-planning. Het product heeft verschillende versies waarin het zich kan bevinden. Er wordt vooraf gedefinieerd wanneer een versie compleet is, tot die tijd wordt de versie nog niet als gereed beschouwd. Per versie wordt bepaald welke elementen, functionaliteiten, designs etc. er in moeten zitten en waar aan deze zullen moeten voldoen.

#### Versie 0.1.0 [Profiel]:
In deze versie zal het profiel centraal staan. Registratie van de gebruikers en een inlogsysteem zijn de hoofdelementen in deze versie.

#### Versie 0.2.0 [Indeling en bewerking]:
In deze versie zal het indelen van documenten en het bewerken er van centraal staan. Secties toevoegen en verwijderen, onderdelen invoegen (tekst-blokken, afbeeldingen, lijsten), indelingen beheren (secties van volgorde veranderen) en document opmaak zijn de hoofdelementen in deze versie.

#### Versie 0.3.0 [Opslaan]:
In deze versie zal het opslaan van documenten centraal staan. Documenten aanmaken, opslaan, opmaak opslaan en documenten beheren (overzicht, verwijderen) zijn de hoofdelementen in deze versie.

#### Versie 0.4.0 [Publiceren]:
In deze versie zal het publiceren van documenten centraal staan. Het publiceren van documenten is het hoofd element van deze versie.

#### Versie 0.5.0 [Delen]:
In deze versie zal het delen van documenten centraal staan. Document-rechten beheren en met meerdere gebruikers aan een document werken zijn de hoofdelementen in deze versie.

#### Versie 1.0.0 [Final]:
Dit is een werkende versie waarin versie 0.1.0 t/m 0.5.0 zijn samengevoegd en getest.

#### Mijlpalen en (tussen)resultaten:
Elk begin van een sprint wordt er bepaald welke doelen er worden gesteld voor die sprint. Ook vindt er binnen elke sprint een playtest plaats. Dit zijn de mijlpalen om het tussenresultaat te kunnen testen. Zijn de vooraf gestelde doelen behaald dan kan er gezegd worden dat het beoogde resultaat behaald is.

## Kwaliteit
### Definition of done:
De definition of done is een document dat wordt op gesteld door de projectgroep. Deze geeft aan wanneer werk daadwerkelijk als ‘klaar’ kan worden beschouwd. Deze wordt voornamelijk door de product owner (Tjerk Dijkstra) bijgewerkt en worden afgetekend. Op deze manier kan elke taak worden gecheckt door de desbetreffende persoon zodat alle producten die daadwerkelijk als af worden beschouwd ook echt af zijn.

Voor de gehele D.o.D. zie bijlage 11.5.

### Quality Monitoring
Om de kwaliteit te waarborgen en er voor te kunnen zorgen dat de project groep in staat is om aan de kwaliteitseisen te kunnen voldoen zal de kwaliteit moeten worden bewaakt.

#### Monitoring:
Om het product van een zo hoog mogelijke kwaliteit te kunnen voorzien zullen er veel test momenten plaats vinden. Er zijn een aantal vastgestelde test momenten gepland vanuit de minor The Next Web. Van deze momenten zal gebruik gemaakt gaan worden maar er zullen ook door de projectgroep zelf geplande testmomenten plaats gaan vinden.

#### Test-plan:
Er zal voor het project een test-plan worden opgesteld waarin het proces, de methoden en de resultaten van tests worden beschreven. Dit document wordt door leden van de projectgroep gemaakt en bijgehouden. Op deze manier is het altijd mogelijk de voortgang van de kwaliteit te bewaken en inzichtelijk te maken voor anderen.

#### Scrum:
Door te werken met sprints van 2 weken is er elke twee weken een moment waarop het product getest kan gaan worden. Hierdoor kan er een reflectie kan worden gedaan op wat de projectgroep gaat doen, blijft doen en stopt te doen. Dit is een reflectie op het werkproces zodat de groep zo productief mogelijk blijft.

#### Deelproducten en versiebeheer:
Door te werken met tussenproducten is de project groep verplicht te voldoen aan meerdere deadlines. Dit zorgt er voor dat bij elke deadline de projectgroep op scherp zal worden gezet om iets af te leveren. Op deze manier kan er op tijd worden in gegrepen als er dingen minder lekker lopen in het proces. Mocht er in de deadline van het Alpha prototype iets mis gaan is het minder erg dan als er alleen een deadline aan het einde van de periode plaats zal vinden.

### Methodes
Er zal nog een methode gezocht worden om het testen van het product goed uit te voeren. Deze methode zal worden beschreven in het test-plan.

## Projectorganisatie:
### Project organisatie en betrokken partijen
#### Stakeholders
NHL Hogeschool Leeuwarden:
Binnen de NHL zijn de volgende groepen betrokken bij het project.
Het Kenniscentrum
Vanuit het kenniscentrum is Jolanda Postma het aanspreekpunt.

[afbeelding]
Steakholder analyse.

### Betrokken partijen
Docenten en Tutor:
De docenten en tutor voor dit project hebben als rol, hulp en informatie te bieden op momenten dat de project groep hier baat bij heeft.

Docent programmeren en tutor van de projectgroep, Raymond van Dongelen.
Docent programmeren, Dirk Sierd de Vries.
Docent usability, Sjef Smeets.
Docent design, Jan-Wessel Hovingh.
Docent project management, Guido Swildens.
Docente project management, Jolanda Postma.
Medestudenten binnen de minor The Next Web:
Deze groep is niet direct betrokken bij het project zelf. Wel maken ze deel uit van een kennis bron waaruit informatie gehaald kan worden. Deze groep kan hulp nodig hebben van de Projectgroep en anders om kan natuurlijk ook.
Projectgroep
De project groep is samengesteld door de groep zelf. Het is een groep studenten die elkaar gevonden heeft in het beschikken over veel motivatie en verschillende expertises die op elkaar aansluiten.

#### Douwe de Haan
Taak binnen het project:  Programmeur.  
Gegevens:

<table>
	<tr><td>Naam</td><td>Douwe</td></tr>
	<tr><td>Achternaam</td><td>de Haan</td></tr>
	<tr><td>Adres</td><td>van Nispensingel 1</td></tr>
	<tr><td>Postcode</td><td>8016 LM</td></tr>
	<tr><td>Woonplaats</td><td>Zwolle</td></tr>
	<tr><td>Telefoonnummer</td><td>+316 25 14 64 23</td></tr>
	<tr><td>E-mailadres</td><td>douwedehaan@live.nl</td></tr>
	<tr><td>Geboortedatum</td><td>05-03-1990</td></tr>
</table>

#### Edwin ten Wolde
Taak binnen het project:  Scrum master en front-end developer.  
Gegevens:                          	

<table>	
	<tr><td>Naam</td><td>Edwin</td></tr>
	<tr><td>Achternaam</td><td>ten Wolde</td></tr>
	<tr><td>Adres</td><td>Johan Winklerwei 393</td></tr>
	<tr><td>Postcode</td><td>8915 EW</td></tr>
	<tr><td>Woonplaats</td><td>Leeuwarden</td></tr>
	<tr><td>Telefoonnummer</td><td>+316 11 58 15 54</td></tr>
	<tr><td>E-mailadres</td><td>ed.wolde@gmail.com</td></tr>
	<tr><td>Geboortedatum</td><td>27-07-1990</td></tr>
</table>

#### Tjerk Jippe Dijkstra
Taak binnen het project:  Project owner en programmeur.  
Gegevens:                          	


<table>	
	<tr><td>Naam</td><td>Tjerk Jippe</td></tr>
	<tr><td>Achternaam</td><td>Dijkstra</td></tr>
	<tr><td>Adres</td><td>Zonstraat 9</td></tr>
	<tr><td>Postcode</td><td>9801 VW</td></tr>
	<tr><td>Woonplaats</td><td>Zuidhorn</td></tr>
	<tr><td>Telefoonnummer</td><td>+316 15 50 25 30</td></tr>
	<tr><td>E-mailadres</td><td>tjerk.dijkstra@gmail.com</td></tr>
	<tr><td>Geboortedatum</td><td>09-07-1988</td></tr>
</table>

#### Vincent Bremer
Taak binnen het project:  Programmeur.  
Gegevens:                    	

<table>	
	<tr><td>Naam</td><td>Vincent</td></tr>
	<tr><td>Achternaam</td><td>Brmer</td></tr>
	<tr><td>Adres</td><td>Valkstraat 33</td></tr>
	<tr><td>Postcode</td><td>8605 AV</td></tr>
	<tr><td>Woonplaats</td><td>Sneek</td></tr>
	<tr><td>Telefoonnummer</td><td>+316 50 49 09 16</td></tr>
	<tr><td>E-mailadres</td><td>vbremer89@gmail.com</td></tr>
	<tr><td>Geboortedatum</td><td>09-02-1989</td></tr>
</table>

## Project locatie
Het project vind plaats op de NHL Hogeschool Leeuwarden, binnen de opleiding Communication Multimedia Design. Binnen deze opleiding wordt gewerkt met minors waarbij het project zal vallen onder de minor The Next Web. 

## Contactmomenten

### Wekelijkse afspraak Tutor:
Het is de bedoeling dat de project groep wekelijks een contactmoment heeft met de tutor.
Het is de bedoeling om hem op de hoogte te stellen van de voortgang van het project en eventuele groepsproblemen en of individuele zaken te kunnen bespreken.

### Playtesting momenten:
Aan het eind van elke sprint is er op donderdag middag om 13:00 uur een Playtest moment geplant. Tijdens deze Playtest kan de projectgroep laten zien aan de mede studenten van de minor The Next Web wat de voortgang van het project is. Het is de bedoeling een werkbaar prototype mee te nemen zodat deze door medestudenten getest kan worden. Op deze manier kunnen de studenten de projectgroep voorzien van feedback en tips die in de volgende sprint meegenomen kunnen worden.

### Playtesting Extra momenten:
Deze extra Playtest sessies zijn ingesteld met als reden dat de opdrachtgever kan worden uitgenodigd. Dit zodat deze ook betrokken wordt bij de voortgang van het project.

### De weekopening:
Deze vindt plaats op elke maandag morgen om 10:00 uur. Tijdens deze bijeenkomst wordt het laatste nieuws verteld dat binnen de minor The Next Web van belang is. Hier kan de projectgroep op de hoogte blijven van eventuele veranderingen en nieuws dat van belang is voor het project.

### Scrum meeting:
De scrum meeting vindt plaats op donderdag morgen om 9:30 uur. Deze meeting is bedoeld voor zowel de scrum master als de project owner. Het is een bijeenkomst voor de verschillende groepen met asl reden om de voortgang te bespreken en problemen binnen de groep aan te kaarten. Deze bijeenkomst wordt geleid door Jolanda Postma van het Kenniscentrum. Op deze manier blijven de verschillende groepen van elkaar op de hoogte en kan er ervaring worden uit gewisseld. Ook het Kenniscentrum kan op deze manier op de hoogte van eventuele problemen en moeilijkheden.

### Daily scrum:
Zoals de naam al zegt zal de Daily Scrum elke werkdag plaats vinden. Deze wordt geleid door de Scrum master en duurt ongeveer 15 minuten. Tijdens deze bespreking wordt van alle projectgroepsleden gevraagd wat ze de dag ervoor hebben gedaan, wat ze van plan zijn te gaan doen op de dag zelf en of er eventuele problemen zijn geweest of worden voorzien. Op deze manier blijft de groep op de hoogte van welke taken elk groepslid  doet en of er problemen zijn waar rekening mee gehouden moet worden. De meeting zal staande worden gehouden en met de werkplek uit het zicht.

## Regels en afspraken
### Projectgroep werkafspraken:
Voor alle regels en afspraken die de projectgroep heeft gemaakt en naleeft is het samenwerkingscontract toegevoegd in de bijlage (zie bijlage 11.2 Samenwerkingscontract).

### Software
De groep zal een groot aantal tools gaan gebruiken om het product te kunnen ontwikkelen. De tools die gebruikt zullen gaan worden zijn met zorg uitgekozen door de groep en door het afstemmen van deze tools zal voorkomen worden dat er problemen gaan ontstaan met het synchroniseren van bestanden die door verschillende personen zijn ontwikkeld.

Google Drive:

Google Drive is de plaats waar de groep gezamenlijke documenten tegelijkertijd kan gaan bewerken. Omdat Google Drive (als het via internet gebruikt wordt) minder handig is om snel (andere bestanden dan documentatie) te delen is de keuze gemaakt om Google Drive te gebruiken i.c.m. Dropbox.

Dropbox:

Dropbox wordt gebruikt om snel bestanden te kunnen delen met groepsleden. Het is handig als back-up tool en om alle groepsleden toegang te geven tot gemaakte documenten en bestanden. Een minpunt is dat er niet gezamenlijk aan dezelfde documenten (tegelijkertijd) gewerkt kan worden. Dit probleem vangen we af door Dropbox te gebruiken i.c.m. Google Drive.

Github:

Wordt gebruikt als gezamenlijke programmeer omgeving.

Sublime Text 2:

Sublime text 2 zal worden gebruikt voor het verwerken van codes en scripts.

Pivitol tracker:

Pivitol tracker is een tool die gebruikt gaat worden i.c.m. de scrum techniek. Met deze tool kan de groep de voortgang van het  project bijhouden. Ook geeft het inzicht in de taken die nog moeten gebeuren en de hoeveelheid tijd die deze kunnen gaan kosten. Het is een hulpmiddel die er voor moet zorgen dat het project overzichtelijk blijft en tijd moet gaan opleveren die belangrijk is voor het product.

Office Word:

Dit programma wordt gebruikt voor persoonlijke documentatie. Het is namelijk niet mogelijk gezamenlijk aan documentatie te kunnen werken. Maar omdat het project gaat over het verbeteren van documentatie en tools is het idee ontstaan om in meerdere (veel gebruikte) programma’s te werken zodat er bij de project ook een goed beeld kan ontstaan over eventuele mankementen aan deze programma’s maar ook aan de goede punten die deze tools hebben.

Office Excel:

Dit programma wordt gebruikt om lijsten bij te houden binnen de groep voor onder andere afwezigheid, overzichten van planningen en kosten die gemaakt worden voor het project.

## Planning
Stroken planning voor gehele periode:
Het project wordt een iteratief proces waarbij in elke sprint wordt gewerkt aan een functioneel en testbaar prototype. Doelen worden aan het begin van een sprint vastgesteld en aan het eind van elke sprint zal er worden getest of het prototype voldoet aan de verwachtingen en eisen die van te voren gesteld zijn. De feedback die tijdens het testen terugkomt zal worden gebruikt en meegenomen in de volgende sprint om het eindproduct van een zo hoog mogelijke kwaliteit te kunnen voorzien.


Speciale momenten
Sprints:
Sprint 0: Begint op Maandag 25 Februari 2013
Sprint 1: Begint op Maandag 11 Maart 2013
Sprint 2: Begint op Maandag 25 Maart 2013
Sprint 3: Begint op Maandag 8 April 2013
Sprint 4: Begint op Maandag 22 April 2013       	*Deze sprint bevat de Mei vakantie
Sprint 5: Begint op Maandag 13 Mei 2013
Sprint 6: Begint op Maandag 27 Mei 2013

Playtests:
Playtest 1: Vind plaats op Donderdag 7 Maart 2013 om 13:00 uur
Playtest 2: Vind plaats op Donderdag 21 Maart 2013 om 13:00 uur    * Dit is een Playtest Extra
Playtest 3: Vind plaats op Donderdag 4 April 2013 om 13:00 uur
Playtest 4: Vind plaats op Woensdag 8 Mei 2013 om 13:00 uur
Playtest 5: Vind plaats op Donderdag 23 Mei 2013 om 13:00 uur
Playtest 6: Vind plaats op Donderdag 6 Juni 2013 om 13:00 uur       * Dit is een Playtest Extra
Feestdagen en vakanties die binnen de werkdagen vallen:
Tweede paasdag: Vind plaats op Maandag 1 April 2013
Meivakantie: Vind plaats vanaf Maandag 29 April 2013 t/m Vrijdag 3 Mei 2013
Koninginnedag: Vind plaats op Dinsdag 30 April 2013

Projectgroep excursie Lissabon: 
Vind plaats vanaf maandag 6 mei 2013 t/m vrijdag 10 mei 2013

Hemelvaartsdag: Vind plaats op donderdag 9 Mei 2013
Pinksteren: Vind plaats op maandag 20 Mei 2013
Afstemmingsgesprek:
Het afstemmingsgesprek valt in            	week 21

Deadlines:
Deadline tussen Assessment is op      	28 maart 2013
Deadline eind Assessment is op            	12 juni 2013

Assessments:
Het tussen assessment is in                     	week 15 of 16
De individuele assessments zijn in      	week 25
Het eind assessment is in                          	week 26 of 27

## Kosten en baten
### Velocity project groep:
Het project zou in eerste instantie gebruik maken van Pivotal na verloop van tijd hebben we gemerkt dat dit niet ideaal werkt omdat het een omslachtig programma is waar een hoop extra werk achter vandaan komt voor de project leden. Dit zou dus sneller moeten kunnen. Daarna is overgestapt op een eigen uren schema bijgehouden in Google Drive ook dit bleek niet ideaal te zijn. Het bleef een online programma wat snel vergeten wordt in te vullen waar door de informatie niet compleet genoeg is. Daarna is het scrumboard aan de muur gehangen het bijhouden van uren blijft een hekelpunt maar er wordt in elk geval meer mee gedaan dan de online varianten. Hierdoor hebben we deze manier van werken behouden.

### Materiaal
Materiaal dat nodig is tijdens het project zal voornamelijk papier zijn en schrijfgerij zijn.
Ook zal er een host moeten worden gezocht om het product op te kunnen draaien, er zal in eerste instantie worden gezocht naar een gratis host maar mocht dit niet lukken zal er naar een betaalde versie moeten worden gezocht.
Misschien dat er boeken zullen moeten worden aangeschaft voor bepaalde research.
En eventuele bibliotheek kosten zullen misschien ook worden gemaakt.

### Kosten overzicht
Voor een overzicht van de kosten die gemaakt moeten en gaan worden tijdens dit project is de begroting toegevoegd in de bijlage. (Zie bijlage 11.3 Begroting).

## Risico analyse
### Risico’s
Tijdens het proces zijn er verschillende risico’s die het behalen van de doelstelling kunnen beïnvloeden.  Door het in kaart brengen van deze risico’s en het vooraf beschrijven van de maatregelen kan er zo effectief mogelijk worden omgesprongen op het moment dat een risico werkelijkheid zal worden.

### Analyse risico’s tabel
Voor alle risico’s die in kaart zijn gebracht is de risico analyse toegevoegd in de bijlage (zie bijlage 11.4 Risico Analyse). Hieronder staan alleen de risico’s met een waardering hoog of gemiddeld.

Hoog gewaardeerde risico’s:
Risico’s
Omschrijving
Waarschijnlijk-heid
Impact
Waardering
Binnen projectgroep
Projectleden hebben behaalde punten al binnen maar nog niet verkregen
4
4
Hoog
Extern
Er is geen groep die belang heeft bij het product
2
4
Hoog
 
Gevonden externe validatie ziet af van deze taak
2
4
Hoog
Kwaliteit
Het product is door slechte afstemming met de doelgroep niet genoeg op de wensen aan gepast en onbruikbaar voor deze groep
2
4
Hoog
 
Scrum master en project owner hebben geen goede samenwerking of genoeg kennis en zijn niet in staat samen het project in goede banen te leiden
2
4
Hoog
 
 
Gemiddeld gewaardeerde risico’s:
Binnen projectgroep
Groep heeft niet voldoende skills en kennis om het project af te ronden
1
4
Gemiddeld
 
Te weinig communicatie richting stakeholders
1
4
Gemiddeld
Extern
Niet in staat externe validatie te vinden
1
4
Gemiddeld


## Maatregelen
### Binnen Projectgroep
Factoren die binnen de projectgroep het grootste risico hebben zijn kort samengevat. Projectleden hebben meer punten dan ze van tevoren hadden gedacht, de groep heeft te weinig ervaring, slechte communicatie richting de stakeholders.

Communiceren met alle externe partijen is een zeer belangrijk punt om constant in de gaten te houden. Niet alleen om de stakeholders op de hoogte te houden van de voortgang maar ook om ze alert, betrokken en scherp te houden bij het project. Het is namelijk van belang voor het slagen van het project om deze mensen er bij te betrekken.

Er zijn projectleden die als ze met het project door zouden gaan meer punten halen dan dat deze nodig zouden hebben. In het geval dat deze projectleden uit het project zouden stappen om deze reden zou dit veel impact hebben op de voortgang van het project. Er wordt verwacht dat deze leden zo snel mogelijk inzicht kunnen geven in wat ze van plan zijn en welke maatregelen er daarna getroffen moeten gaan worden.

### Extern
De externe validatie kan niet worden gevonden of ziet af van zijn/ haar taak. In dit geval zou er nieuwe validatie gezocht moeten worden. Het gevolg zou zijn dat er geen externe validatie heeft plaats gevonden of dat een deel van het project zonder externe validatie plaats vindt. Dit zou voor het project kunnen laten falen omdat er zonder externe validatie geen geldig project gedraaid is.

### Kwaliteit
Het product is niet genoeg afgestemd op de doelgroep waardoor deze niet aanslaat of gebruikt gaat worden. Dit zou betekenen dat het project voor een deel gefaald is omdat het doel is om voor deze groep een tool te bouwen die ze willen gebruiken boven andere tools die al op de markt zijn. Echter is er in dit geval wel een tool aanwezig dus als school opdracht is het project wel geslaagd maar zonder het beoogde resultaat.

## Bijlage(s)
## Work Break Down Structure



## Samenwerkingscontract
### Projectgroep: DocBuilders
Projectleden:

- Edwin ten Wolde
- Douwe de Haan
- Tjerk Jippe Dijkstra
- Vincent Bremer

### Afspraken en regels:

Tijd:

- Er wordt vanuit gegaan dat elk groepslid, minimaal 32 uren per week, werkt aan het project.
- Indien een persoon deze uren niet kan maken op school dan wordt er verwacht dat hij thuis verder werkt aan zijn taken.
- Ieder groepslid is standaard elke werkdag om 10 uur aanwezig.
- Een standaard werkdag is van 10 uur t/m 16:00 uur.
- Extra uren kunnen worden gemaakt (thuis).

Te laat komen:
- Mocht een persoon te laat komen of niet aanwezig kunnen zijn die dag dan meld deze dat bij een ander groepslid (de voorkeur is om dit bij de Scrummaster Edwin ten Wolde te doen).
- Mocht er een patroon ontstaan in het te laat komen van een persoon (meerdere malen in een korte periode of door dezelfde reden) zal er een gesprek met deze persoon plaats vinden.
Mochten er meerdere van deze gesprekken moeten plaats vinden en de groep stemt er mee in loopt de desbetreffende persoon de kans uit de groep te worden geplaats.

Vrij:
- Vrije dagen worden uiterlijk een dag van te voren aangevraagd (bij voorkeur eerder i.v.m. de planning).
- Vrije dagen kunnen alleen worden toegekend in overleg met de groep, mocht het voor het project te belangrijk zijn om een dag vrij te nemen en de reden van vrij nemen is niet urgent genoeg kan het zijn dat de vrijdag op de gewenste dag niet wordt toegekend.
Locatie:
- De standaard werklocatie is op de NHL Hogeschool in het App-lab.
Kosten:
- Kosten worden van te voren met de gehele project groep overlegt.
- Kosten voor het project worden genoteerd en eerlijk verdeelt onder alle groepsleden.
Werk:
- Elke persoon doet mee aan de daily stand-up.
- Elke persoon heeft op een werkdag recht op een pauze van 30 min.

* Bij zetten van een handtekening gaat persoon akkoord met alle regels, afspraken en consequenties die zijn genoemd in het Samenwerkingscontract.

Edwin ten Wolde         Douwe de Haan         Tjerk Jippe Dijkstra      Vincent Bremer

## Begroting

Benodigde materialen
Kosten
Hoe vaak
Papier
2,-
eenmalig
Pennen
2,-
eenmalig
Stiften
2,-
eenmalig
Lijm
1,-
eenmalig
Hosting (virtual private server)
29,-
per maand
Domeinnaam
1,-
per maand
Scrum logboek
…
eenmalig

## Risico Analyse
Risico’s
Omschrijving
Waarschijnlijkheid
Impact
Waardering
Binnen projectgroep
Projectleden hebben behaalde punten al binnen maar nog niet verkregen
4
4
Hoog
 
Groep heeft niet voldoende ervaring en kennis om het project af te ronden
1
4
Gemiddeld
 
Te weinig communicatie richting stakeholders
1
4
Gemiddeld
 
Groepsleden houden zich niet aan de opgestelde groepsregels
2
1
Laag
 
Documentatie wordt niet tijdig bijgewerkt
2
2
Laag
 
Er is te veel gepland in te weinig tijd
2
2
Laag
 
Het aantal gestelde milestones is te weinig
1
2
Laag
Budget
Groep moet kosten maken om het product tot een goed einde te brengen
1
2
Laag
Extern
Er is geen groep die belang heeft bij het product
2
4
Hoog
 
Gevonden externe validatie ziet af van deze taak
2
4
Hoog
 
Niet in staat externe validatie te vinden
1
4
Gemiddeld
Kwaliteit
Het product is door slechte afstemming met de doelgroep niet genoeg op de wensen aan gepast en onbruikbaar voor deze groep
2
4
Hoog
 
Scrum master en project owner hebben geen goede samenwerking of genoeg kennis en zijn niet in staat samen het project in goede banen te leiden
2
4
Hoog
 
Er is te veel onduidelijkheid over het resultaat van het product
1
3
Laag
 
Er zijn niet genoeg middelen om het product tot een goed eindproduct te maken
1
3
Laag

## Definition of done
Documentatie
- Documentatie moet volledig in het Engels worden geschreven.
- De vormgeving en lettertype moeten aansluiten bij de huidige conventie.
- Het stuk moet eerst zijn gecheckt door tenminste 1 groepslid op spelling en inhoud.
- Er mogen geen ontbrekende onderdelen / losse einden in het stuk zitten. Hiermee wordt bedoeld dat elk geschreven stuk volledig af moet zijn en een doel vervuld.
- Indien er bronnen aanwezig zijn, moeten deze vermeld worden in een bronnenlijst die onderin het stuk wordt weergegeven.
Programmeren
- Alle grote functionaliteiten moeten voorzien van volledig Engelse commentaar.
- Code moet juist inspringen (geen wirwar aan functies).
- Indien er afhankelijkheden zijn naar andere bestanden moeten deze in de commentaar worden vermeld.
- (x)HTML 5 valid strict, kan worden gevalideerd met wc3 validator.
- Voor Model en Class namen wordt camelCase gebruikt.
- Bestandsnamen moeten logisch zijn en mag geen spaties bevatten (test_bestand.js).
Design
- Alle mogelijke schetsen moeten worden bewaard voor het assessment.
- Moet voldoen aan de huidige conventie (lettertype, huisstijl).
- De lagen in PSD's moeten allemaal een naam hebben en indien er meer dan 20 lagen zijn moeten deze worden verdeeld over mappen.
- Bestandsnamen moeten logisch zijn en mag geen spaties bevatten (test_bestand.psd)


# Concepting

## Tot stand komen van het concept
Het concept voor Doctopus is ontstaan uit de frustratie van ons als studenten die veel documentatie moeten schrijven. Deze frustratie is ontstaan tijdens het typen van documentatie met softwarepakketten die alleen maar tegenwerken, pagina’s en alinea’s die verspringen, verborgen enters en lege koppen, falende inhoudsopgaven en uitgerekte plaatjes. Uiteindelijk stellen wij onszelf de vraag “Dit kan toch beter?”. Dit is de basis waarop dit concept is gebaseerd.

De basis bestaat dus enigszins uit eigen frustratie, de punten die bij ons als team naar boven springen zullen daarom ook prioriteit krijgen. Het tot stand komen voor de oplossing voor ons probleem zullen wij proberen te verwerken in dit concept, wij zullen ons afvragen wat het concept zou moeten bevatten zodat wij tevreden zijn. 

Op het moment dat dit concept duidelijk op papier staat zullen wij deze presenteren aan onze doelgroep om te zien of deze aanslaat en om te kijken of onze frustratie daadwerkelijk overeenstemt met die van onze doelgroep.

## Wat is het?
Als er over Doctopus wordt gesproken in een metafoor dan zou het een wiskunde schrift kunnen zijn. In dit schrift is het a4’tje al verdeeld in kleine blokken, met behulp van deze blokken is het dus gemakkelijker om een rechte of diagonale lijn te tekenen. Dit schrift kun je indelen zoals je wil maar helpt je precies te blijven met behulp van hulplijnen. 

De ambitie is om de doelgroep een tool aan te bieden die meer structuur biedt dan een traditionele tekstverwerker. Wij hopen dat hierdoor mensen minder snel gefrustreerd raken bij het maken en indelen van het document. Waar Microsoft Word aanvoelt als een slagveld waarop alles kan gebeuren moet Doctopus aanvoelen als een veilige stad waarin alles netjes op zijn plek staat.

## Concept lagen
Om een beter beeld te krijgen over hoe ons concept in elkaar steekt, hebben wij het concept verdeeld over verschillende concept lagen. In deze lagen benoemen wij waar het concept voor staat, waar het in gelooft en waar het hart ligt. De methode is onder andere geïnspireerd door de “The Golden Circle (1)”.

[afbeelding]
### Het hart
Dit concept gelooft in een plek waarbij het maken van een tekst document volledig intuïtief kan verlopen, geen enkele gebruiker hoeft na te denken over welke handeling nodig is om iets te bereiken. Deze handelingen zullen aanvoelen als logisch. Dit product zal werken als tool die de gebruiker helpt en ondersteunt, het zal structuur brengen aan het opbouwen van een document en het opmaken daarvan.

### Identiteit
Doctopus staat voor gestructureerd en netjes, logisch en intuïtief. Doctopus is een tool die de gebruiker helpt en ondersteunt.

### Het doel
Het doel is om een tool te ontwikkelen waarin de gebruiker zonder frustratie een document kan opmaken en bewerken. Deze tool zal intuïtief en logisch aanvoelen voor een gebruiker en helpt, ondersteunt en structureert waar nodig.

### De vorm

[afbeelding]

Afbeelding concept ontwikkeling van de pitch pagina

Om het concept visueel te maken hebben we gekozen voor een pitch pagina. Binnen deze pagina is het de bedoeling dat de kern van het concept wordt uitgelegd. Daarnaast is het van belang om de boodschap zo goed mogelijk over te brengen. De pagina is in vier stappen verdeeld. De eerste stap is de kern van het concept zo kort en pakkend mogelijk uitgelegd. Stap twee is een iets meer uitgebreide uitleg over wat het probleem is waarmee wij zitten en geloven te kunnen oplossen. Bij stap drie worden de pluspunten zo kort en pakkend mogelijk behandeld. Deze wordt gevolgd door stap vier het inschrijven voor de mail lijst. 

### Conclusie
Uiteindelijk gaat het concept richting een tool, deze moet ondersteunen en frustratie wegnemen. Deze tool moet logisch aanvoelen en biedt de mogelijkheid voor structuur. Hieraan wordt gedacht aan het indelen van een document in blokken of lijnen. Een tool die een soort basis structuur kan neerleggen waarin het vervolgens prettiger is om te werken.

## Concept presentatie
Op de pitch pagina staan de kernwaarden van ons product beschreven en kunnen potentiële gebruiker inschrijven voor een beta lijst.

[afbeelding]
Afbeelding 1: De slogan voor op de pitch pagina

Het doel van deze pitch pagina is om de interesse bij mensen te wekken voor het product wat wij willen gaan maken, daarnaast willen wij ook meten in hoeverre mensen geïnteresseerd zijn in een product zoals deze door middel van het inschrijfformulier.

[afbeelding]
Afbeelding 2, de vergelijking tussen de huidige tools en de ambitie van onze.

[afbeelding]
afbeelding 3: hierbij wordt puntsgewijs aangewezen wat er mist in de huidige tools en wat onze tool wel bied.


## Naamgeving concept
Voor het bedenken van de naam maken wij gebruik van een concepting methode die vergelijkbaar is met woorden associatie en begrippennetten. Deze methode is eerder toegepast door groepsgenoten Vincent Bremer en Douwe de haan.

De methode begint met het verdelen van een vel papier over 36 vakken in elk vak kan een begrip geplaatst worden gerelateerd aan ons concept, elk vak wordt ingevuld door een teamlid in volgorde. Het woord dat in een vak wordt geplaatst moet ook aansluiten bij de omheen liggende woorden. Uiteindelijk zal er een rij in het midden vormen van 6 begrippen die centraal staan voor ons concept.

- Vertrouwen
- Snelheid
- Proactief
- Adaptief
- Fusie
- Samenwerken

[afbeelding]

Vanuit deze concepting sessie zijn wij verder gegaan met het ontwikkelen van de naam. Om tot een goede naam te komen zijn er verschillende vragen die wij onszelf gesteld hebben:

### Wat is je product /service?
Ons product is een tool waarmee documentatie gemaakt kan worden op een gestructureerde, intuïtieve manier.

### Wat zijn de unique selling points van de product of dienst?
Een grid systeem die het document verdeeld in kolommen en structuur bied.
Het werken met blokken die kunnen worden ingedeeld over de kolommen.
Het aanpassen van de stijl en opmaak over het gehele document door middel van stijl regels.

### Wat voor type uitstraling/imago zou je willen hebben?
Gestructureerd, netjes, logisch, multifunctioneel.

### Welke markt/doelgroep bedien je?
Mensen die veel documentatie moeten schrijven, mensen die bekend zijn met het aanbod van huidige software/tools zoals Word, Google Drive, OpenOffice en/of Pages. 

### Power users
Personalia

Student van 22 jaar oud die beschikt over een desktop en een laptop met Windows 7 of 8 met daarop recente web browsers en software. Studeert aan een HBO opleiding en heeft ervaring met Photoshop, Google Drive, Dropbox en is van jongs af aan al in aanraking met computers. Schrijft voor school regelmatig verslagen en deze moeten ook netjes gestructureerd zijn en bevatten vaak een inhoudsopgave of pagina-nummering.

### Benchmark users

Personalia
Een student van 17 jaar studeert op het MBO beschikt over een laptop met Windows 7 met daarop redelijk up to date software, maakt gebruik van Google Chrome en het office pakket.
Is niet bekend met Dropbox en Google Drive en gebruikt Windows live services voor e-mail, agenda. Maakt af en toe een verslag voor school maar deze beschikt niet over een inhoudsopgave of paginanummering meestal twee á drie a4’tjes.

### Dierenassociaties:
Vanuit deze vragen zijn wij op zoek gegaan naar een metafoor die deze kernwaarden en uitstraling samenvatten, hieruit is een lijst met potentiële namen ontstaan.
De bever
Bouwt gestructureerd aan dammen en is altijd bezig met het opbouwen van zijn nest. Is veelzijdig en heeft inzicht. Is een ervaren bouwer die de grootste dammen kan maken, blokkeert het stromen van de grootste rivieren met teamwork.

#### De spin
Weeft een spinnenweb met prachtige lijnen en structuren / patronen. Beschikt over veel zijde kant dit zelf aanmaken. Zijde is licht en sterk.

#### De mier
Een werker die door grote aantallen en teamwork de grootste gebouwen onder en boven de grond kan maken. Is een harde werker die grote ondergrondse structuren en steden graaft.

#### Inktvis
Heeft 8 tentakels met zuignappen en spuit inkt. Kan zichzelf camoufleren en ingraven diep in de zee. Kan snel voortbewegen dankzij de vele tentakels en sommige inktvis soorten geven licht.

### Mogelijke namen:
- Blocknode
	- Een combinatie van de blokken waarmee we willen indelen en NodeJS de taal waarin we dit concept - willen realiseren.
- Charta
	- Betekent papier in latijn, ook het engelse woord voor een kaart of koers.
- Codex
	- Is het latijnse woord voor blok, zou ook op code kunnen slaan.
- Docbuilder
	- Het opbouwen van een document.
- Blueprint
	- In de bouw gebruikt om de lijnen van het gebouw vast te stellen (bouwtekening).
- Doqs
	- Afkorting van docs.
- Octodoc
	- Combinatie tussen octopus en document.
- Doctopus
	- Combinatie tussen octopus en document.

### Gekozen naam

### “Doctopus”
Uiteindelijk is er er gekozen voor de naam Doctopus, deze naam valt samen met de dieren associatie met een octopus. Het multitasken kan worden uitgebeeld door middel van de acht armen waarmee een octopus meerdere taken tegelijk kan uitvoeren. Het werken aan een document of tekst kan worden uitgebeeld door middel van de inkt.

Het slepen en indelen van blokken kan op een ludieke wijze worden uitgebeeld door middel van tentakels die met zuignappen op een speelse wijze een document indelen.



## Bronnenlijst
(1). 9-06-2013, The Golden Circle
http://www.eurib.org/fileadmin/user_upload/Documenten/PDF/Positionering/n_-_De_Golden_Circle.pdf


# Technical design
## Introduction
In this part of the project documentation you will find the technical specifications of the Doctopus project. Here is described what is needed to run the application and how the system is build. This includes an installation guide, conventions, version history, database layout and some other relevant technical information.

This document is chronologically structured, this means that if you follow the basic structure you will find the information you need in the right order for making the Doctopus product.

While making this document, the application is not finished. This is noted throughout the document where this applies.

## Specifications
System requirements:	Windows, Linux, OS X
Installed software:		Node.js (http://nodejs.org/)
				MongoDB 
Required modules:		ExpressJS (http://expressjs.com/)
				Socket.IO (http://socket.io/)
				Mongoose (http://mongoosejs.com/)
				Jade (http://jade-lang.com)
Validator (https://github.com/chriso/node-validator)

## Hosting
There are a few free options regarding the hosting of the application including Heroku, Nodester and Nodecloud. Another option could be hosting on a Virtual Private Server which has to be configured and installed for running the Node.js.

### Appfog
Pros: Supports multiple types of programming languages like Node.js, Ruby, PHP and Java. The free accounts provides 5GB data traffic, 2GB ram, 100MB storage and 100 requests per second. Deployment of the application is made easy with an command line utility.

Cons: When the free account isn’t sufficient, the cheapest paid account costs $50 per month. There is no option for custom domains in the free account.

### Heroku
Pros: It’s accessible, safe and free. There is a lot of documentation available for starting and running a Node.js server on Heroku which makes it good for a quick launch. Custom domain can be linked to Heroku through CNAME.

Cons: It’s not possible to have assets like external images hosted on Heroku, which means that an alternative service has to be implemented to accommodate this. One of these services is Amazon S3 which can be used to a certain extend and comes with a pricetag.

### Nodester
Pros: Nodester is made with Node in mind, which means deployment is very quick and easy.

Cons: It also uses Amazon EC2, Rackspace, HP Cloud or Azure for storage.

### VPS server
Pros:  Flexibility, with a private server you can install all the modules / extensions you need and want depending on your wishes. 

Cons:  Load balancing / traffic handling, services like Heroku and Nodester have this build in or they have an entire team to make sure the traffic

## Technical layers

[afbeelding]

We will use Node.js for handling all our requests which will happen at the client side. Between the client side and the database are several Node.js modules which take care of the data handling and basic structure. 

## Application description
Our application will consist of mostly front-end Javascript functions (jQuery) which has an open connection with the server via a socket, which updates the database sending JSON data. We use NodeJS and SocketIO because this structure provides instant communication between front-end and server-side Javascript.

Installation
1. Download Node.js from http://www.nodejs.org/
2. Install Node.js
3. Install the module “nodemon” by executing the command:
On Windows: “npm install nodemon”
On Linux and OS X: “sudo npm install nodemon”
4. Install MongoDB

## Technical description
### What is Node.js?
“Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.” (http://www.nodejs.org)

### Why Node.js?
Node.js has the perfect integration of multiple modules which is needed for making this product work. For instance, it should be possible to edit a document with multiple users simultaneously and with the easy integration of websockets in Node this is possible. There is also a large community with lots of templating languages, MVC structures and other modules that can be used to build the project faster and more efficient.

### About MongoDB
MongoDB (from "humongous") is a scalable, high-performance, open source NoSQL database. Written in C++.

### Why MongoDB?
This project will produce a lot of requests containing mostly text. The ambition is to make the requests and posts on the client side using Javascript (jQuery) in combination with Express. JSON is the preferred format for making these requests and MongoDB saves data as JSON objects so there is no conversion needed when storing the data.
Another important pro for choosing MongoDB is the speed, because Mongo scales well it has great potential for either a small or large database.

### About Nodemon
Nodemon is a packaging service used for installing and maintaining Node.JS in combination with modules. It makes sure everything is in the right place and updated and makes it  easier to add or access new modules.

## Node Modules
### Express
Express is a web application framework made for Node, this needed for structuring the application, express gives us the possibility to install modules and other plug-ins that we need. This is the most important layer of the application since its connects multiple modules and adds the needed MVP structure to further expand our application.

### Socket.IO
Socket.IO enables the application to push realtime data from the server to the client and vice versa. It supports multiple transport methods for different devices and web browsers. This is needed when multiple users need to edit documents simultaneously. 

### Provider
The provider is a self written script that makes it possible to load a model with just one line or two lines of code. It provides a easy way to access the models (hence the name).

### Mongoose
Mongoose is a module which enables the application to make use of object modeling. It makes it easier to retrieve and save data from and to the MongoDB database.

### Jade
Jade is a templating engine which is heavily related to HAML, which is a templating engine for Ruby, designed for NodeJs. With this engine DOM elements are shortened to just the tag and indentation decides whether the element is a child of the previous one or not.

### Validator
Validator is a Node.js module that allows for validation methods within the Model. It contains basic validation methods like checking if a field is empty or valid. Useful for checking all the POST data that comes into the model. At this moment Validator is not yet implemented.

For more information, visit: https://github.com/chriso/node-validator

## Coding conventions
Here are the conventions listed by which the application is build, when extending or updating the application, the conventions should be followed to maintain a consistent code base.

### Global
#### DRY
Don’t Repeat Yourself is a global convention that follows through all the programming that will happen on this project.

#### KISS
Keep It Short and Simple, omit useless words and try not to overcomplicate things, make functions fulfill a clear purpose, don’t write code that overkills.

#### CSS
Global styles will be defined at the top of the document. Global styles are all basic HTML elements. (like html, div, span etcetera)

Classes and ID’s will be written with an hyphen. When a class is a child to another class this will be shown by indenting the code as follows:

	div.parent-class {
		property: value
	}
	span.child-class {
		property: value
	}

	.highlight {
		property: value
	}

All elements are defined with their type first and then the identifier. This does not apply for styling rules (like font-size, background-color) that could be used throughout the whole system.

#### Variables and functions
These are written in camelCase, following the conventions used on the Node.js website. For example:

	var camelCase;
	var userId;
	function setName() {
	    // Function actions
	}
	function renderPage() {
	    // Function actions
	}

#### View files
The view files are lowercase, words separated with a dash, and have the extension *.jade.
For example:

	index.jade
	view_user.jade
	delete_document.jade

#### Database fields
Database fields/columns are written in lowercase, and words are separated with an underscore.
For example:

	user_items
	firstname

#### Controllers (routes)
The controller filename is written in plural and lowercase.
For example:

	users.njs
	documents.njs

Routes example:
The DELETE and PUT methods will omitted the because web browsers doesn’t fully support these standards [1]. Instead only the GET and POST methods are used, and the right actions are called based on the URL.

[1] http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html

	Method   Route              Controller.method
	GET      /users             -> users.index
	GET      /users/new         -> users.new
	POST     /users/new         -> users.create
	GET      /users/edit/*      -> users.edit
	POST     /users/edit/*      -> users.update
	POST     /users/delete/*    -> users.delete

#### Models
The model filename is written in singular and lowercase. For example:

	user.njs
	document.njs

## Database 

### Users collection:

	{
	   _id: 432943232,
	   nickname: John1923,
	   firstname: John,
	   lastname: Baker,
	   email: jb@mail.com,
	   password_hash: aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d,
	   salt: f73e205c3b56aec53e,
	   level: 1
	}


### Documents collection:

	{
		"_id": 3432342343,
		"title": "Technical design",
		"collaborators": ["43255443", "133214", "943723"],
		"public": false,
		"deleted": false,
		"styling": {
			"p": {
				"font_size": 14,
				"color": "#000000"
			},
			"li": {
				"list_style_type": "disc"
			}
		},
		"blocks": [
			{
				"_id": 3432342343,
				"type": "text",
				"content": "Lorem ipsum..",
				"order": 3,
				"cols": 4
			},
			{
				"_id": 3432342343,
				"type": "list",
				"content": ["list item #1","list item #2"],
				"order": 1,
				"cols": 2
			},
			{
				"_id": 3432342343,
				"type": "image",
				"content": "uploads/hjt34d.png",
				"order": 2,
				"cols": 2
			}
		]
	}

### Database design

[afbeelding]


## Directory structure

[afbeelding]


### App.njs
App.njs is the starting point of the application, it requires the core modules of the framework and initializes the web server. The configuration of the application can also be found in this file.

### Routes (controllers)
Because the backend serves mainly as an API, all routes are linked to specific functions. These functions can return (json) data, insert/update data to the database model or render views. 

#### documents.index
route: GET /documents
Render the document index page with an overview of all documents the user has access to.

#### documents.new
route: GET /documents/new
Render the page to create a new document.

#### documents.create
route: POST /documents/create
Create a new document and save it to the model/database.

#### documents.edit
route: GET /documents/:id
Renders the page for editing the document and passes all data from the document model to the view.

#### documents.print
route: GET /documents/print/:id
Renders the page for printing the document.

Example users route:

	// App.njs
	app.get('/users', users.index);
	app.get('/users/view/:id', users.view);

	// Users.njs
	var users = ['John', 'Kate', 'Rick'];
	module.exports = {
	   index: function(req, res) {
	      res.render('pages/users/index, {
	         'pageName': 'Users',
	         'users': users
	      });
	   },
	   view: function(req, res) {
	      var id = req.param.id;
	      res.render('pages/users/view' {
	         'pageName': 'View user',
	         'user': users[id]
	      });
	   }
	}

## Models
At this very moment the models aren’t implemented yet. These will be implemented in the future and how they should be written is described here.

### user.njs
In the user model the information from the database concerning users is handled. Users have the following keys in the database:
- username			(string, required, unique)
- email address		(string, required, unique)
- firstname			(string, required)
- lastname			(string, required)
- password_hash		(string, required)
- salt				(string, required)
- admin			(number, required, default: 0)

### modelFunctions
To easily get all the functions you want access to, the variable modelFunctions is created and defined as function(){}. After that, all the other functions are extended into this variable with the prototype method.

### findAll
This function finds all the users in the database, with all the information that is present. 

### findByUsername
This function returns a single user, that is searched by username.

### deleteByUsername
This function deletes a single user, which is found by its username

### update
This function finds one user in the database, and updates it with the parameters given. If the user does not exists already, use the save function 

### save
This function saves a new user into the database. If the user already exists, use the update function.

### isAdmin
This function checks whether the user is an administrator or not.

### Auth
Validates the posted login data and verifies that the user exists in the database with the right password and email combination, if there are any validation errors it will return an error object filled with these errors, if not the error object will return false and the user controller will set the sessions accordingly and redirect the user to the users view.

## Views
View files are placed in the directory “/views/” and need to have the *.jade extension. The template engine used is Jade and their conventions are followed. For more information see the documentation of Jade on http://www.jade-lang.com

## Modules
### Descriptions
We decided to use our own modules folder instead of the default node_modules folder for our modules. All third party modules specified in the package.json which are installed with the npm command will be placed in node_modules. All modules we write specific for our own project, will be placed in the modules directory.

### app.local.njs
The functions and data in this file will be accessible within the view files, for example:

	module.exports = {
	   dateDMY: function(val) {
	      var date = new Date(value);
	      var day = date.getDate();
	      var month = date.getMonth();
	      var year = date.getFullYear();
	      return day + '-' + month + '-' + year;
	   }
	}

## Sources

Robbins, C. (2011, October 17). Scaling Isomorphic Javascript Code. [Web log post]
Retrieved March 12, 2013, from
https://blog.jit.su/scaling-isomorphic-javascript-code

Bhatt, N. (2009, January 18). MVC vs. MVP vs. MVVM. [Web log post]
Retrieved March 12, 2013, from
http://nirajrules.wordpress.com/2009/07/18/mvc-vs-mvp-vs-mvvm/

Seshadri, G. (1999, December 29). Understanding JavaServer Pages Model 2 architecture.
Retrieved March 12, 2013, from
http://www.javaworld.com/javaworld/jw-12-1999/jw-12-ssj-jspmvc.html

Fowler, M. (2006, July 18). GUI Architectures.
Retrieved March 12, 2013, from
http://martinfowler.com/eaaDev/uiArchs.html




# Functional design

## Introduction
This functional design describes all the requirements needed for the application. This section is written in English because we will possibly open source the project, including the functional and technical design. 

## Application Description
The application is an online editor for text and image based documents. The application aims to simplify and structurize the current way of making documents, by introducing a four column grid, drag and drop elements and an easy to manage stylesheet. The best way to describe the application is a mix between Google Docs and Indesign.

## Users
The primary target audience (power users) are students with a technical and multimedia background, Who often need to make a lot of documentation and most of the times work together in teams. For our power users it is important that there are a lot of advanced options which make their work easier and faster and frustration free.

Our basic target audience are students with an average education. They need to make documentation on school, but not very often. For them it’s important the application works intuitive, simple and doesn’t require much technical knowledge.

## Why make this application?
When using an application like Microsoft Word or LibreOffice Writer, working in the same document with multiple users at the same time will cause conflicts when the document gets saved. Google Docs (Drive) solves this problem, but still doesn’t provide the structure to easily build a neat looking document with images and a consistent styling.

## MoSCoW model
### Must haves
CRUD* documents
This is the core of the application.
Document management
When a document has been created, there must be a place where the user can manage his or her documents.
CRUD* sections
All the elements of an page are placed within these sections, without sections it would be impossible to navigate through the document.
CRUD* elements/blocks
These are elements which can be dragged inside a section and make up the content of the document.
CRUD* users
Documents are linked to users.
User login
To make sure documents are private, a user must login to access his or her documents.
Export to HTML
When the document needs to be send to someone else, or the user wants a preview of the document, it’s necessary to export to HTML. These HTML pages can also be printed.
Define styles
Define styles of the document, this is one of the USP of the application and when it’s not possible to define styles, the project would have failed.

### Should haves
Document sharing
When competing with Google Docs, it’s a must to implement document sharing. This means multiple users can access and edit the document, preferably at the same time with websockets.
Export to PDF
On many schools PDF is the preferred format to deliver documents. These files can’t be easily changed, look the same on all platforms (Windows, OSX, Linux, iPad etcetera)

### Could haves

Multiple user editing
When editing an element on the page, that element will be locked for other users. It would perhaps be better to allow users to type in the same blocks 
User chat
Possibility for chatting with other users within document.
Add comments
Add comments to certain lines of text
Responsive layout
Scale the complete application according to the screen size so it will also work on smaller screens. When implementing this, it’s also necessary to make all the technical functions compatible with a tablet/smartphone with a touchscreen.
Responsive view
Scale the view of a document to tablet devices


### Won’t haves

Export to other formats
The application won’t be able to export the document to other formats, like txt, docx, odt or md. Because of the complex grid system, it’s nearly impossible to create a file that looks exactly the same in another word processor.


* CRUD = Create, Read, Update and Delete


## Sitemap
[afbeelding]

## Pages
### Homepage

[afbeelding]

The user goes to the website where information is given about DocBuilder in the form of some screenshots and an screencast. When the user visits the website and isn’t logged in, the user is shown some information about DocBuilder and a screencast explaining what DocBuilder is. Registered users can fill in their username plus password and login, while new users can click on a link to register a new account.

The purpose of this page is the inform the user about the application and convince them to register. This page should give the user an impression of what the application does and how it could help them.

### Register new account

[afbeelding]

When the user has clicked on the link to register a new account, the users gets redirected to the register page. When all fields are valid, the user receives a verification e-mail with a unique link. Before logging in the user needs to verificate it’s account by clicking on this link.

### Logging in

[afbeelding]

On the homepage there is a login form where the user can login with email and password. When the email and password match the user will be redirected to the document management page. When they don’t match, the user will get an error message and needs to try to login again.

### Forgot password

[afbeelding]

When the user forgets his password, there is a link near the login form on which the user reset their password. When the user clicks this link a reset password form appears and the user must enter the email used when registered. If the entered email is valid, a password reset link will be sent to the user. After clicking on this link to user is able to enter a new password.

### Manage profile

[afbeelding]

When a user is logged in, there is an option to change the profile. On this page its possible to change the following fields or settings:

- Firstname and lastname
- Password
- Email
- Avatar (Gravatar or a custom avatar)

[afbeelding]

### Sections
On the green part of the wireframe are the sections. These sections can be added, removed and sorted by order. These sections can be seen as chapters in a book, each chapter could contain multiple pages of content. Each section has a title and a order, each section can be sorted to be a subsection of another section.

### Document work area
This area contains a four column grid on which blocks can be dragged and dropped. The blocks snap to the grid and can be resized from one column to four columns with a click, everytime the user clicks on a block it will grow one column in size, if the block reaches four columns it will resize back to one column.

[afbeelding]

### Editing a block
Each block can be edited once they are inside the document work area by hovering with the cursor on the block that needs to be edited. An edit button will then appear and the user can change the content of the block. Once inside the editing mode of a block its block, its possible to do some simple formatting and change the size of the block (S, M, L, XL) this stands for the columns (1-4).

[afbeelding]

### Image handling
If the user adds an image block to the document work area, it is possible to upload an image into that block by clicking on the upload button inside that block, the image will resize according to the grid.

[afbeelding]

### Navigation bar
The upper right corner of the navigation bar contains the login information, the user has the possibility to log out and go to the profile page. In the middle of the navigation bar there is dialog that reminds the user when the document was last saved.

[afbeelding]

### Elements
Elements are blocks that can contain the following: 

List item (yellow)

Text (blue)

Image(red)

[afbeelding]

[afbeelding]

[afbeelding]


These blocks can be dragged and dropped to the document work area where they will snap to a grid. 

### Manage documents

[afbeelding]

When the user is logged in and visits the website, he gets redirected to the “Manage documents” page. On this page the user can search for documents he owns or are shared with this user. There are a view links which on this page:

#### Document title
Opens the HTML page where the complete document can be viewed, this would be the same page as when a document gets exported.

#### Share
Brings up a popup to manage the sharing settings like removing users from the document, and inviting them to a document.

#### Edit
Sends the user to the page where the document can be modified.

#### With selected (select box)
Offers different options to quickly manage multiple selected documents, like; remove, export and sharing documents.
Saving the document
The entire document is saved automatically after one minute, after every edit the document is also saved. The user can trigger the same save event manually with the save button.

#### Styling the document

[afbeelding]

The user has the possibility to add a style for the entire document at the styling window. The elements the user can style are as follows:

- Font size		(12pt)
- Font color		(#f02f2f (hex value))
- Font family		(Arial, sans-serif)
- Line-height		(18pt)
- Heading 1, 2 ,3, 4 	
- color		(#2312 (hex value))
- size		(18pt)

Everytime the user changes a style it will be applied to the whole document and is automatically saved.


### Sharing the document

#### Change sharing options
The user can change the sharing options for the document at any time, when pressing the share button a popup will appear in which the user can manage the rights for the current users and has the possibility to add/remove users, this will work the same as sending an invitation.

When the user presses the share button a pop up dialog will appear, in this pop up the user can invite other users via e-mail and adjust the rights to each invited user (read, write, edit, owner).

#### Sending the invitation
If the user has made a selection of users the invitations can be send to the corresponding email addresses. The invited users will receive an email containing a hyperlink to the document and information about the document they were invited to.

#### Communication with multiple users
When multiple users are working together on one document its possible to communicate via chat. The chat is optional and can be turned on and off, and is off by default.

#### Editing a document with multiple users
Its possible to work with multiple users on one document, when a user is editing a block its not possible for other users to edit that block as well. It will appear locked, when the user is done editing the block it is saved and unlocked. This means only one user at a time can edit one block.



# Grafisch Ontwerp

## Inleiding
Het grafisch document is onderdeel van het project Doctopus. In het document is alle informatie te vinden over het gebruik van de stijl binnen dit product. Qua usability wordt beschreven waarmee rekening gehouden is in het ontwerp om het voor de gebruiker zo gebruiksvriendelijk mogelijk te maken.

## De lay-out van de applicatie

[afbeelding]

### 1. Document informatie
Op deze plek zal de gebruiker alle informatie vinden over het document waarin deze zich bevind. Deze beweegt
 te allen tijde mee met de gebruiker omdat het belangrijk is dat de gebruiker altijd weet in welk document hij of zij zich bevindt.

### 2. Werkveld van de gebruiker
Binnen het werk veld kan de gebruiker visueel zien hoe het document er uit eindelijk uit komt te zien. De gebruiker kan op deze plek al zijn content toevoegen en rangschikken. Alle mogelijke handelingen worden visueel ondersteund zodat de gebruiker zo intuïtief mogelijk zijn of haar content kan bewerken tot het gewenste resultaat. Het werkveld staat gecentreerd in het scherm en vult het grootste deel van de ruimte. Dit omdat het werkveld element het belangrijkste element van het gehele product is en de gebruiker hier de meeste handelingen zal verrichten.

### 3. Blokken toevoegen/ verwijderen
Op deze plek staan twee zeer belangrijke en veel gebruikte acties die de gebruiker vaak zal gaan gebruiken, namelijk het toevoegen en verwijderen van blokken. De knoppen zijn net naast het werkveld  gepositioneerd zodat dat de gebruiker er snel bij kan en ze niet in de weg staan tijdens het bewerken van de content. Visueel zijn ze zo ontworpen dat meteen duidelijk is wat de functie van de knop inhoud.

### 4. Sidebar
In de sidebar kan de gebruiker alle informatie vinden die beschikbaar is over het element dat hij of zij heeft geselecteerd. De sidebar staat rechts in beeld omdat de meeste focus zodoende valt op het werkveld.

### 5. Blok informatie
Deze informatie staat boven aan in de sidebar  en is het grootste element in de sidebar. Dit is gedaan om binnen de sidebar al eerst de focus op dit element te leggen. Hierdoor kan de gebruiker snel en duidelijk zien wat het element is dat deze geselecteerd heeft en eventueel aanpast.

### 6. Blok opties
De blok opties zijn donker weergegeven behalve wanneer deze in gebruik is, dan licht deze namelijk op. Hierdoor ziet de gebruiker visueel meteen welke optie hij of zij gebruikt. Daarnaast staat in elke optie de beschrijving links en de eventuele aanpassingen die gedaan kunnen worden rechts.

### 7. Scroll balk(en)
1. Scroll balk links:
Deze balk verschijnt als het er meer opties in de ‘Blok opties’ zitten dan kan worden weergegeven op het scherm. Door te scrollen zal de gebruiker alle opties kunnen opvragen en blijven gebruiken, ook op een kleiner scherm.
2. Scroll balk rechts:
Deze balk verschijnt als het werkveld langer is dan visueel in het scherm kan worden weergegeven. Door te scrollen zal de  gebruiker het gehele werkveld kunnen bekijken en niet belemmerd worden door de grootte van zijn of haar beeldscherm.

### 8. Product logo
Dit logo wordt rechts boven in weergegeven zodat de gebruiker kan zien dat hij of zij aan het werk is in Doctopus. Tevens is het logo een link om naar de startpagina van het systeem te gaan, waarop de gebruiker zijn of haar documenten kan zien en instellingen omtrent profiel en weergave kan wijzigen.

### 9. Een tekst blok
Een tekstblok (of ander element) wordt binnen het werkveld weergegeven. Er zijn veel verschillende opties en functies die deze blokken bevatten.

## De stijl van Doctopus

[afbeelding]

### 1. Kleur keuze/ gebruik:
Voor het product Doctopus is gekozen voor een donkere interface. Dit is gedaan om de ogen van de gebruiker zo veel mogelijk te ontlasten van het felle licht dat uit het beeldscherm schijnt. Daarnaast ligt hierdoor de focus op het lichtere element en trekt de rest van de interface niet teveel aandacht. Het werkveld is echter wel wit gebleven omdat dit papier simuleert, het is anders voor de gebruiker anders lastig in te schatten hoe het document uit te printer zal gaan komen.
De kleur groen is gekozen om het geheel een frisse, moderne en serieuze uitstraling mee te geven. De combinatie van de verschillende grijstinten steken leuk af met het frisse groen. Door de groene tint te gebruiken om elementen die meer aandacht nodig hebben extra uit te lichten is het een handige combinatie van kleuren om de gebruiker te sturen binnen het product. De kleur rood is gebruikt bij de verwijder functie om extra visuele feedback aan deze functie te geven.

### 2. Lettertype keuze/ gebruik:
1. Bebas Regular
Het lettertype ‘Bebas Regular’ is een strak en smal lettertype. Het bestaat alleen uit hoofdletters, en wordt binnen het product vooral gebruikt bij grotere elementen die de aandacht van de gebruiker moeten vragen. Het is qua vormgeving een strak en modern lettertype dat door het gebruik dit ook uitstraalt op het product.

2. Roboto Slab Regular
Het lettertype ‘Roboto Slab Regular’ is een web-font dat voor commerciële doeleinden gebruikt mag worden. Het is op een kleine schaal nog steeds goed leesbaar en straalt door de haakjes die aan veel letters zitten een eigen identiteit uit. Door het gebruik van dit font zullen veel gebruikers snel de huisstijl van Doctopus herkennen  terwijl het een goed leesbaar lettertype is.

Het gebruik van de lettertypes zal voor alle elementen verschillen, belangrijkste punten zijn hierbij leesbaarheid(qua grootte) en een duidelijk contrast(qua kleur in combinatie met de achtergrond-kleur).

## Het logo van Doctopus

[afbeelding]

### Gebruik
Het logo bestaat uit twee delen, het icoon/ beeldmerk en de tekst. Deze kunnen zowel in combinatie met elkaar als los van elkaar gebruikt worden. In dien mogelijk zou het logo zo veel mogelijk gebruikt moeten worden met de groene kleur die Doctopus hanteert, echter kan hier van afgeweken worden als hiermee het doel (waarvoor het logo gebruikt gaat worden) in deze specifieke situatie anders niet zal worden bereikt. De mening van een ervaren designer kan hierin een (belangrijke) rol spelen.

### Product naam
De naam Doctopus is afgeleid van Doc (documentatie) en Octopus (een zeedier met acht tentakels).
Door een dier te combineren met het product heeft als doel om zo sneller en connectie te kweken tussen de gebruiker en het product. Daarnaast heeft de octopus acht tentakels die symbool staan voor het efficiënte en snellere werken wat het product als hoofd prioriteit stelt.

### Beeldmerk
Het beeldmerk  is zo ontworpen dat het makkelijk gebruikt kan worden als icoon (bijvoorbeeld voor een app versie van het product). Door het niet volledig tonen van de octopus, wordt er ruimte gecreëerd voor een eigen aanvulling van de gebruiker en krijgt het icoon een spannender dynamiek.

## Hardware
Voor het product dat wordt ontwikkeld moet er qua grafische productie rekening worden gehouden met een aantal belangrijke facetten. Het product zal niet voor mobiele telefoon of tablet worden ontwikkeld, maar wel voor devices zoals laptops en desktops. Omdat er binnen dit producten aanbod een groot verschil zit in de resoluties zal het product schaalbaar moeten worden zodat op elke resolutie er mee gewerkt kan worden. De resoluties zullen een minimun van 800 bij 600 pixels moeten hebben, omdat anders niet alle elementen op het scherm passen.. Wat een ander belangrijk element is, is dat het product online zal gaan werken, dit houdt in dat het product via een browser bezocht kan gaan worden door de gebruikers. Waar rekening mee gehouden moet worden is dat er gewerkt gaat worden met HTML5 en CSS3. De browsers waarvoor geschreven gaat worden zullen dit dus moeten ondersteunen.

### Devices:
De devices waarop het product zal gaan draaien zijn laptops, netbooks en desktops.

### Scherm resoluties:
De minimale scherm resolutie is 800 bij 600 pixels.

### Browsers:
De browser moet HTML5 en CSS3 compatibel zijn.



# Quality Monitoring & Implementation
## Testmethode
### Inleiding
Voor dit project gaan wij de scrum methode hanteren, dit gaat ook samenhangen met onze test momenten. Wij zullen aan het einde van elke sprint een prototype ontwikkelen die verschillende functionaliteiten zullen bevatten. 

Inspiratie voor onze testmethode halen wij uit eerdere testervaringen en het boek “Don’t make me think” door Steve Krug*. Hij beschrijft in zijn boek wat een goedkope en snelle user-test minimaal zou moeten bevatten. De conventies die hij stelt nemen wij over en breiden wij uit waar nodig. Hierdoor zijn wij tot de volgende randvoorwaarden gekomen voor het uitvoeren van een prototype test.

* Krug, Steve Don’t make me think- pagina 137

### Randvoorwaarden

- Doe een test met minimaal 3 a 4 testpersonen.
- Leg bevindingen vast (dit kan op papier, met Silverback of notuleren op de computer). 
- Voer de test uit met minimaal 2 personen (persoon 1 begeleidt de testpersoon indien nodig, persoon 2 observeert en ondersteunt).
- Voor aanvang van de test de testpersoon eerst een goede introductie/ uitleg bieden.
- Eerste indruk is belangrijk, vraag de testpersoon naar algemene indruk / verwachtingen van het testen van het product.
- Vraag of de testpersoon interesse heeft naar het product.
- Alle bevindingen verwerken in het testverslag.
	- Inleiding + Afbeelding
	- Verbeteringen / Veranderingen ten opzichte van vorig prototype
	- Beschrijving + Testcase + Observatiepunten
	- Conclusie + Actielijst

### Plan van Aanpak
Aan het einde van elke sprint wordt er getest volgens de bovenstaande randvoorwaarden. Dit zal om de twee weken zijn afhankelijk van de sprint. Dit zal uitkomen op ongeveer zeven test momenten met daarin verschillende prototypes c.q. beta versies.

### Met wie zal er getest worden?
Wij gaan voornamelijk testen met onze power users (zie concepting pagina [9]). Dit zijn mensen die veel documentatie moeten maken en bekend zijn met de huidige tools (Google Drive, Microsoft Word). Deze power users hebben in zekere mate ervaring met het gebruik van computers en software. Een reden waarom we met de power users testen is omdat deze mensen veeleisend en veel verwachtend zijn, wij verwachten daarom ook dat zij met een kritische blik naar het product zullen kijken.

Bij voorkeur zal er getest worden met personen die in elk geval niet in de minor Next Web zitten (indien mogelijk). Dit omdat deze personen over te veel inside-informatie kunnen beschikken. Dit zal bij de eerste test momenten nog niet een al te grote rol spelen maar bij latere test momenten is het van belang een blanco mening en inzicht te verkrijgen over het product.

### Middelen
- Pen en papier
- Silverback (camera registratie)
- Macbook + notule software
- Prototype

### Testplan
Hier staat beschreven over wat een test minimaal zou moeten bevatten.

#### Stap 1:  Eerste indruk, algemene bevindingen
We laten de gebruiker het prototype zien en stellen de vraag : “Wat denk jij dat hiermee mogelijk is?” Deze bevindingen nemen wij mee voor voornamelijk vormgeving aangezien dit de eerste indruk geeft maar zou ook relevant kunnen zijn aan onze naamgeving / product identiteit.

#### Stap 2: We geven een korte introductie in de vorm van een verhaal over wat ons product is en wat er verwacht wordt van de gebruiker, 
Dit doen we om de gebruiker een indruk te geven van wat het prototype zou moeten doen en wat ermee mogelijk is, dit werkt als inleiding voor op de test.

#### Stap 3: Stel opdrachten op, gerelateerd aan de functionaliteiten van het prototype.
Denk hierbij aan verschillende opdrachten die de functionaliteiten van het prototype op de proef gaan stellen en aan taken waar een gebruiker gewend is en waarschijnlijk vaker zal gaan gebruiken.

Bijvoorbeeld: “Bewerk een tekst een verander de opmaak naar bold, plaats deze tekst vervolgens rechts bovenin”

#### Stap 4: Observeer de gebruiker en notuleer pauzes / complicaties.
Let bij het testen op de denk- / pauzemomenten van de gebruiker. Kijk bij het uitvoeren van een opdracht naar waar de gebruiker na moet denken en waarom. Noteer vervolgens bij welke opdracht(en) problemen voorkwamen. Als een gebruiker moeite heeft met het uitvoeren van de opdracht dan zal er hoogstwaarschijnlijk iets niet duidelijk zijn, spring niet direct in om te helpen maar observeer en noteer wat er gebeurt, vraag achteraf naar meer details.

#### Stap 5: Vat de problemen die de gebruikers hebben gehad samen tot een actielijst.
Bekijk alle problemen die voorkwamen en beoordeel deze, kijk naar welke problemen meer prioriteit hebben dan anderen en kom zo tot een actielijst. Deze lijst kan direct mee worden genomen in de volgende sprint.

## Paper prototype

[afbeelding]
Paper prototype, afbeelding 1.

### Inleiding:
Het paper prototype is bedoeld om een eerste beeld te krijgen van het product dat wij gaan ontwikkelen. Het kan getest worden bij gebruikers en op die manier kunnen wij snel een globaal beeld krijgen over hoe de gebruiker reageert op het product dat wij gaan bouwen. 

### Resultaat:
- Gebruikers hadden snel een beeld bij het product dat gebouwd gaat worden. 
- Het voelde aan als spelen met Lego.
- De algemene reactie was positief na een korte uitleg over wat het product zal moeten gaan worden. 
- Verder was het nog lastig in te schatten hoe het product daadwerkelijk zal gaan werken omdat het een analoog product is in plaats van een digitaal product.

### Conclusie:
Het volgende prototype zal een digitale variant zijn waarin zo goed mogelijk de basis zal worden gelegd van de USP’s (unique selling points) van het product. 

## Concept

[afbeelding]

Concept, afbeelding 2.

### Beschrijving
Vanuit het paper prototype is deze basis ontstaan, de basis waarop elk prototype is gebaseerd, is een werkveld waarin blokken kunnen worden geplaatst en gesorteerd. Dit werkveld bevat verschillende soorten blokken ook wel elementen genoemd. Elementen bestaan uit: tekst, afbeeldingen en lijsten.

Het principe is dat er nieuwe elementen kunnen worden toegevoegd, gesorteerd en vervolgens kunnen worden bewerkt / gevuld. Al deze elementen kunnen in een keer worden opgemaakt door middel van overervende opmaak regels. Deze kunnen op elk moment gewijzigd worden, bijvoorbeeld: Alle koptekst moet 24px groot zijn en de kleur zwart worden.

## 4. Prototype 1

[afbeelding]

Prototype 1, afbeelding 3.

### Beschrijving
Uitgaande van het concept bestaat dit prototype uit een 4 koloms werkveld met rechts een sidebar met daarin de verschillende elementen die naar het werkveld gesleept kunnen worden. Elk element kan door middel van een klik op het vergroot icoon rechtsonder veranderen van grootte, hier in zijn drie incrementele stappen het element is standaard een kolom, het element kan nooit groter zijn dan vier koloms. Op het moment dat een element vier koloms is en er op vergroten geklikt veranderd het element terug naar een kolom.

### Testcase Prototype 1
#### Inleiding
Dit prototype zal mensen introduceren met het werken met blokken om het document in te delen volgens een vooraf ingesteld vier koloms grid. Wij zijn benieuwd naar hoe intuïtief dit prototype overkomt op de eindgebruiker en waar er onduidelijkheden liggen. Daarom zullen wij simpele taken vragen van de gebruiker zoals het toevoegen van nieuwe elementen en het wijzigen van tekst / opmaak naar eigen smaak.

#### Testcase
Voor de volgende testcase zijn deze punten van belang:

1. We vragen de gebruiker om nieuwe elementen op het werkveld toe te voegen, hierbij kijken wij naar hoe snel gebruikers dit door hebben.
2. Begrijpen gebruikers de functionaliteit van het schalen van blokken, we vragen ons af of het icoon intuïtief is en of deze functie werkt zoals verwacht.
3. Zijn de knoppen waar de gebruiker op moet klikken duidelijk?
4. Leggen de iconen goed uit waar voor de knop dient?
5. Wat is de reactie van de gebruiker op het grid systeem?
6. Algemene indruk / bevindingen.

### Conclusie / Actielijst Prototype 1

	1. Probleem: Meerdere gebruikers hadden moeite met het vergroten en verkleinen van de elementen.

	1. Actie: Dit is op te lossen door de manier waarop de blokken vergroten duidelijker maken met knoppen voor elke maat dus 1 t/m 4. 

	2. Probleem: Het icoon is niet duidelijk in het uitleggen van de functie ook het feit dat de elementen in stappen vergroot zorgt voor verwarring.

	2. Actie: Dit is op te lossen door het icoon opnieuw vorm te geven, zodat deze uitbeeld dat het blok vergroot.

	3. Probleem: Het slepen en plaatsen van nieuwe elementen werkt niet zoals de gebruiker verwacht, de positie van het nieuwe element is niet duidelijk.

	3. Actie: Dit is op te lossen door een schaduw (placeholder) onder het nieuwe element te plaatsen zodat het duidelijk is waar deze gaat landen in het werkveld.

	4. Probleem: Enkele gebruikers gaven aan dat het niet duidelijk was hoe groot het grid is ze zouden dit graag visueel willen zien.

	4. Actie: De vormgeving van het grid zal worden aangepast zodat deze duidelijker wordt.

## 5. Prototype 2

[afbeelding]

Prototype 2, afbeelding 4.

### Beschrijving
Dit prototype neemt de verbeteringen mee die aan de hand van de feedback op prototype 1 naar voren zijn gekomen, deze zijn als volgt:

#### Verbeteringen:
- Het vergroten van blokken kan nu door simpelweg op een blok te klikken.
- De sidebar is kleiner geworden en elementen hebben een kleurcode gekregen, met een schaduw tijdens het slepen is het duidelijk geworden waar een element gaat landen.
- Vormgeving is duidelijker geworden en bevat meer nuancering.

#### Toevoegingen:
- Het is mogelijk om de inhoud van een element te bewerken door op “edit” te klikken.
- Er is een functie “toggle borders” toegevoegd om aan te geven hoe het grid is ingesteld.


### Testcase Prototype 2
1. We vragen de gebruiker om nieuwe elementen op het werkveld toe te voegen, hierbij kijken wij naar hoe snel gebruikers dit door hebben.
2. Begrijpen gebruikers de functionaliteit van het schalen van blokken door op het blok zelf te klikken?
3. Zijn de acties die gebruiker moet nemen om de inhoud van een blok te wijzigen duidelijk?
4. Wat is de reactie van de gebruiker op het grid-system?
5. Algemene indruk / bevindingen.


### Conclusie / Actielijst Prototype 2

	1. Probleem: Veel gebruikers zijn op zoek naar opties van een element of een soort menu balk waarin alles samengevat staat, sommige proberen met rechtermuisknop zo’n soort menu naar voren te halen.

	1. Actie: Er moet meer informatie getoond worden over de blokken en de eigenschappen er van, het design is te minimalistisch op dit moment.

	2. Probleem: Bij het wijzigen van tekst in het kleinste blok is er te weinig ruimte, ook missen de gebruikers tekstopmaak mogelijkheden zoals bold, italic, underline.

	2. Actie: Dit valt op te lossen door een teksteditor te maken met deze opties, dit stond ook in de planning.

	3. Probleem: Gebruikers geven aan de het slepen om nieuwe elementen toe te voegen niet snel genoeg werkt op het moment dat er veel nieuwe elementen bij moeten, of meerdere tegelijk.

	3. Actie: Er moet een andere manier komen voor het toevoegen van elementen.


## Prototype 3

[afbeelding]

Prototype 3, afbeelding 5.

### Beschrijving
Bij het maken van dit prototype heeft het bewerken van een element de meeste prioriteit, dit prototype bevat een teksteditor met opmaak mogelijkheden. In dit prototype is het toevoegen van elementen aangepast, in plaats van het slepen van nieuwe elementen naar het werkveld zijn de nieuwe elementen nu direct zichtbaar als een doorzichtig blok, op het moment dat de gebruiker op het blok klikt wordt deze toegevoegd aan het werkveld.

Dit is een andere van werken ten opzichte van vorige prototypes en wij zijn benieuwd naar de werking van deze methode. In ons opzicht wordt het indelen van een document nu duidelijker weergegeven.

#### Verbeteringen:
- Teksteditor toegevoegd met opmaak mogelijkheden (bold, italic, underline).
- Opslaan van tekst mogelijk.
- Vormgeving geeft het kolom weer.

#### Toevoegingen:
- Het toevoegen van nieuwe blokken gaat nu in het werkveld aan de hand van een leeg blok.
- Het wijzigen van de inhoud van een element gebeurt nu in de sidebar in plaats van in het blok zelf.

### Testcase Prototype 3
Het bewerken van een blok heeft bij deze test het meeste prioriteit, is dit een logische plek om de inhoud van een blok te wijzigen en zijn er genoeg opmaak mogelijkheden voor tekst? Daarnaast is de nieuwe manier van een element toevoegen aan het werkveld een punt die wij willen behandelen in deze test.

1. We vragen de gebruiker om de inhoud van een blok te wijzigen en op te maken, dit vragen wij om de nieuwe werking van de sidebar te testen.
2. De elementen moeten worden geactiveerd. Het systeem om nieuwe blokken aan te maken willen we testen op gebruiksgemak.
3. Het indelen van blokken is duidelijker gemaakt door een schaduw toe te voegen aan het blok dat gesleept wordt, wij willen testen of dit daadwerkelijk zo is.

### Conclusie / Actielijst Prototype 3

	1. Probleem: De inhoud van het blok wijzigen door middel van de sidebar is niet bij iedereen direct duidelijk, meerdere gebruikers hebben eerst moeten zoeken naar waar de inhoud gewijzigd moet worden, een merendeel verwacht het in het blok zelf.

	1. Actie: Dit probleem herkennen wij en we gaan dit terugbrengen naar tekst wijzigen in het blok zelf i.p.v. de sidebar.

	2. Probleem: Het opmaken van de tekst gaat vrijwel vlekkeloos bij iedereen, sommige mensen geven aan dat ze de mogelijkheid missen om tekst uit te lijnen naar links en / of naar rechts, 3, 2. 

	2. Actie: Deze mogelijkheid gaan wij toevoegen.

	3. Probleem: Bij het toevoegen van het nieuwe element is het niet duidelijk wat voor element het wordt, een tekstblok, afbeelding of lijst op dit moment is er geen optie voor om dit te wijzigen ook net achteraf. Het toevoegen op zich werkt bij alle gebruikers prima.

	3. Actie: Wij gaan een manier bedenken waarop er een keuze gemaakt kan worden tussen wat voor element je toevoegt.


## 7. Prototype 4 (beta 001)

[afbeelding]

Beta versie 001, Prototype 4, afbeelding 6.

### Beschrijving
Prototype 4 is gelijk de eerste beta versie van het product, we zijn tot deze beta gekomen na het testen van drie verschillende prototypes, na het verwerken van de resultaten van deze prototypes zijn we tot deze beta versie gekomen.

#### Verbeteringen:
- De grafische stijl van het prototype is flink verbeterd met een duidelijk onderscheiding tussen het werkveld en de sidebar en er is gekozen voor een steunkleur die de stijl van doctopus definieert.
- De sidebar heeft een nieuwe functionaliteit, het laat standaard de opmaak van het document zien, op het moment dat de gebruiker op een element klikt laat het informatie over het desbetreffende element zien.
- Het direct bewerken van een tekstblok, dit gebeurt niet meer in de sidebar maar direct in het veld zelf.

#### Toevoegingen:
- De complete opmaak van het document kan worden gewijzigd in de sidebar door middel van een optieveld.
- Het is mogelijk om blokken te verwijderen met de prullenbak tool.
- Het is mogelijk om lege blokken toe te voegen.
- Het lege blok omzetten naar een specifiek element (lijst, text afbeelding) (afbeelding 6).

[afbeelding]

Het omzetten van een element, afbeelding 7.

### Testcase prototype 4
Voor dit prototype is er gekeken naar hoe de gebruiker om gaat met de vernieuwde functionaliteiten. Belangrijk tijdens het testen van dit prototype is de usability van het product, er komen veel functionaliteiten samen in deze beta, de vraag is of deze goed samenwerken en ook logisch zijn ingedeeld voor gebruikers die voor het eerst met die product werken. Daarvoor hebben wij een testcase beschreven die al deze functionaliteiten behandelt, zodat wij bij het testen/observeren zoveel mogelijk  problemen kunnen achterhalen.

De gebruiker zal een aantal taken krijgen die deze moet uitvoeren. Tijdens het observeren zal duidelijk moeten worden waar voor de gebruiker de haperingen zitten. Tijdens het uitvoeren van de taken zullen alle nieuwe functionaliteiten aan bod komen zodat elke functie kan worden getest op usability.

### Algemene vragen
#### Wat is de eerste indruk van het product en wat denk jij dat je ermee kan doen?
Deze vraag stellen wij voornamelijk voor de grafische stijl en of deze overkomt op de gebruiker.
En of de functionaliteiten duidelijk zijn naar de gebruiker toe.

#### Als je iets zou kunnen veranderen binnen het product, wat zou dit dan zijn?
Dit vragen wij om achter nieuwe inzichten te komen en ons te laten inspireren door de gebruikers.

#### Is de testpersoon geïnteresseerd in het product?
Deze vraag stellen wij om een beeld te krijgen over de vraag die er is naar het product.

	1. Maak een nieuw blok. 
	Bij het uitvoeren van deze handeling zullen wij kijken naar hoe lang de gebruiker nodig heeft om de “toevoegen” knop te vinden en of deze zijn functie duidelijk vertolkt.

	2. Verander het nieuwe blok in een tekst blok
	Hierbij gaan wij kijken naar of de gebruiker op de goede plek zocht naar deze knop en of de iconen die verschijnen duidelijk waren. Door te kijken naar hoe de gebruiker deze handeling uitvoert kunnen wij concluderen of deze handeling logisch is.

	3. Typ de tekst: 'De kat krabt de krullen van de trap.' in het tekst blok.
	4. Maak de door jou getypte tekst 'dik gedrukt en cursief'
	Dit vragen wij van de gebruiker om te kijken of de tekst editor logisch werkt. We zijn ook benieuwd naar hoe zij deze editor gaan aanroepen.

	5. Vergroot het tekst blok naar een breedte van 3 kolommen.
	De optie voor het vergroten hebben wij nu in de sidebar verwerkt, wij zijn benieuwd of dit een logische plek daarvoor is.

	6. Verander de kleur van de tekst naar blauw.
	Hierbij gaan we wederom kijken naar de sidebar of de opties daar binnen logisch zijn ingedeeld en benoemd.

	7. Sla jou wijzigingen op
	Positie van de “opslaan” knop en snelheid van het vinden van deze knop.

	8. Verwijder de titel van dit document.
	Het testen van de “drag and drop” delete functionaliteit en de logica daarvan.

	9. Zet de door jou getypte tekst rechtsboven aan de pagina.
	Het testen van de “drag and drop” voor het indelen van de blokken.

### Conclusie / Actielijst Prototype 4

	1. Probleem:
	Het wijzigen van de tekstkleur was onduidelijk en de sidebar waarin dit moet gebeuren wordt ook over het hoofd gezien.

	1. Actie:
	Dit gaan wij verhelpen door de sidebar duidelijk te laten inspringen op het moment dat er op een blok geklikt wordt. De opties die vervolgens verschijnen zijn ook direct gerelateerd aan het blok wat geselecteerd is, dit betekent als je bijvoorbeeld een tekstblok aanklikt dat er opties voor een tekstblok verschijnen.

	2. Probleem: De “drag and drop” was onduidelijk voor de gebruiker, de gebruiker verwacht eerst op een element te klikken en vervolgens op de prullenbak te klikken om te verwijderen. 

	2. Actie: Op het moment dat de gebruiker met de muis boven een blok hangt gaan er opties verschijnen die uitbeelden wat er met het blok kan gebeuren bijvoorbeeld het verslepen van een blok of bewerken van een blok.

	3. Probleem: De omgeving waar de notificaties naar de gebruiker worden gestuurd (de linkerbovenhoek) viel niet op bij de gebruiker, nadat de test was afgelopen kon niemand vertellen waar deze stond.

	3. Actie: Wij gaan de locatie van deze notificaties verplaatsen naar midden boven de pagina en er zal een animatie worden toegevoegd zodat deze meer de aandacht trekt.

	4. Probleem: De sidebar viel bij geen enkele gebruiker op, alle gebruikers legden de focus op het blok waarin ze bezig waren, pas na lang zoeken werd de opties in de sidebar gevonden.

	4. Actie: De oplossing valt onder punt 1.

	5. Probleem: Meerdere gebruikers konden de opslaan knop van het tekstveld niet vinden, deze stond op de verkeerde positie (onderaan het tekstvak).

	5. Actie: De positie van deze knop zal worden gewijzigd naar de rechterbovenhoek van het blok.

	6. Probleem: De optie “Save and Cancel” werd door geen enkele gebruiker gebruikt.

	6. Actie: Deze optie gaan wij verwijderen.

	7. Probleem: Gebruikers klikken 1 maal op het tekst blok om vervolgens tekst in te voegen inplaats van twee keer.

	7. Actie: Er komt een edit knop waar maar eenmaal op geklikt hoeft te worden om het blok te bewerken. De dubbelklik zal echter blijven bestaan.

	8. Probleem: De stijl die de gebruiker mee geeft aan de tekst wordt niet doorgevoerd binnen de tekst editor, dit zorgt voor veel verwarring bij de gebruiker.

	8. Actie: Deze bug zullen wij oplossen door de editor aan te passen zodat deze de stijl ook overneemt.

	9. Probleem
	De iconen voor het uitlijnen van tekst binnen de tekst-editor niet meer aanwezig.

	9. Actie
	Wij dachten dat deze niet nodig waren, dit blijkt niet zo te zijn, ze worden weer hersteld.

	10. Probleem
	De knop voor het vergroten en verkleinen van blokken is zeer onlogisch weergegeven voor de gebruiker, ook was er veel moeite met het vinden en gebruiken van deze functie.

	10.Actie
	Deze knop zal nu twee keer voorkomen, eenmaal in de sidebar en nogmaals in de opties van een blok op het moment dat deze bewerkt wordt. Dit zal verwarring moeten voorkomen.


	11. Probleem
	Er zijn bepaalde gebruikers die toetsenbord knoppen willen gebruiken om bepaalde acties uit te voeren die algemeen worden geïmplementeerd in veel software (zoals de enter knop, delete knop, snelkoppelingen voor het wijzigen van tekst dikte enzovoorts).

	11. Actie
	Deze functionaliteiten hebben geen prioriteit maar gaan op de lijst van could haves.


	12. Probleem
	Er is geen functie aanwezig waardoor de gebruiker op een logische manier blokken kan deselecteren.

	12. Actie
	Deze functie gaat er komen.

	13. Probleem
	Het drag and drop systeem wordt pas gebruikt na dat de gebruiker hier over is geïnformeerd. Er is te weinig informatie richting de gebruiker dat dit systeem aanwezig binnen het product.

	13. Actie
	Zie punt 2.

	14. Probleem
	De cursor verandert niet altijd mee met de actie die door de gebruiker wordt uitgevoerd.

	14. Actie
	Dit gaan wij oplossen, dit hebben wij over het hoofd gezien.

	15. Probleem:
	De sidebar staat rechts in beeld en wordt vaak over het hoofd gezien.

	15. Actie:
	De positie van de sidebar zal op dezelfde plek blijven, maar hij zal de aandacht van de gebruiker meer gaan trekken door dat hij straks over de functie beschikt om nieuwe content in te laden op het moment dat een gebruiker een blok selecteert.


### Bewijsmateriaal
Alle volledige notities / individuele testresultaten en Silverback opnamen zijn opgeslagen op onze gedeelde Dropbox, aangezien de omvang van al deze bestanden groot zijn, zijn deze niet meegestuurd met dit verslag, mocht het nodig zijn om deze in te willen zien dan kunnen wij dit alsnog opsturen.


# Multidisciplinary Teamwork
## Inleiding
Om op elkaar te reflecteren hebben we als groep een feedback ronde gehouden. Hierbij hebben we een lijst op internet opgezocht met heel veel karakter eigenschappen. Deze lijst heeft Vincent door een kort scriptje gehaald waardoor er een lijst van 20 willekeurige eigenschappen uit rolde. Daarna mocht elk teamlid om de beurt een eigenschap kiezen uit de lijst waar op hij wilde dat gereflecteerd werd. Na het kiezen van een eigenschap mocht iedereen even na denken bij wie hij deze het beste vond passen en als iedereen er uit was werd er afgeteld. Op de laatste tel wees iedereen de persoon aan waarvan hij vond dat de eigenschap het meest van toepassing was. Daarna werd er door iedereen toegelicht waarom hij dit vond. Hierdoor ontstond vaak wel een discussie of gedeelde meningen over de uitkomst. Door dit spel te spelen heeft iedereen een beter beeld gekregen van hoe hij binnen de groep functioneert.

## Vincent
### Positieve punten
- Zelfopofferend
	- Legt snel iets van zichzelf aan de kant om anderen te helpen.
- Gedisciplineerd
	- Altijd aanwezig en structureel in dingen aanpassen.
- Geen half werk
	- Kan beter, netter. Maakt dingen af totdat ze echt klaar zijn/
- Hoge tolerantie
	- Krijg je niet snel boos. Als de rest aan het stuiteren is, blijft Vincent rustig. Blijft fatsoenlijk.
- Vindingrijk
	- Zoekt snel dingen op en test ze om te kijken of het werkt.
- Trouw
	- Reactie (lees met zwoele stem): ‘Ja!’. Verantwoordelijkheden kun je bij Vincent neerleggen.

### Negatieve punten

- Te stil / afstandelijk
	- Mag wel wat vaker roepen waar het op staat, je mening meer naar voren brengen. Je bent soms wat te stil
- Ontwijkend
	- Soms iets te snel niet de confrontatie aan willen gaan.



## Edwin
### Positieve punten
- Gedisciplineerd
	-Altijd aanwezig, duidelijk scrummen, rest van de groep wat losjes soms, misschien wel iets sterker worden met scrumboard. Onstuimig groepje, scrum wat lastig te hanteren.
- Ernstig
	- Toen je de deadline hoorde ineens een beetje paniek. Houd je wel scherp. Je neemt dingen serieus waardoor de rest dat ook doet.
- Creatief
	- Tjerk: ‘Ik denk dat ik soms creatief ben, maar dan kijk ik naar Edwin…’ Denkt snel aan zaken waar anderen niet aan denken.
- Waakzaam
	- Je houdt in de gaten of we teveel afdwalen, wil de focus behouden.
- Vindingrijk
	- Vaak ideeën terwijl je aan het designen bent. Nieuwe wegen die we in kunnen slaan.

### Negatieve punten
- Te vasthoudend
	- Als je een idee hebt dan kan je dat moeilijk loslaten. Moet overtuigd zijn, misschien iets meer ballen om toch het onbekende te kiezen.

## Douwe
### Positieve punten
- Nuchter
	- Niet zo moeilijk doen, doen we wel. In vergaderingen als het moeilijk lijkt, snel van ‘Doen we even, zus en zo’.
- Geen half werk
	- Optimaliserend en maakt efficiënt
- Pakt snel dingen op
	- Leert snel hoe je binnen het project werkt en wat je moet doen.
- Het voortouw willen nemen
	- Moet je wel mee oppassen, maar kan wel werken als het even kort stil ligt. Kun je wel anderen mee overrompelen.
- Zelfverzekerd
	- Stapt snel op mensen af, zegt snel dingen. Maakt je niet zozeer uit wie het is tegen wie je praat.
- Vindingrijk
	- Probleemoplossend denken, altijd de oplossing zoeken.
- Besluitvaardig
	-‘We doen dit, bam, klaar, geen gezeur! Ff doorpakken!’

### Negatieve punten
- Te snel afgeleid
	- Kan beide kanten op, snel switchen, wat soms een negatieve uitwerking heeft. Qua timing soms wat switchen betreft wat onhandig.

## Tjerk
### Positieve punten
- Nuchter
	- Geen gedoe, beetje relativeren ‘zo is het, punt klaar!’ maak je niet zo druk. Kan wel doorslaan naar laksheid.
- Geen half werk
	- Maakt je werk af en zorgt dat het het goed doet.
- Pakt snel dingen op
	- Leert snel hoe je je code in de rest moet laten passen.
- Besluitvaardig
- Knoopdoorhakkend.
	- Wil graag verder en test iets liever dan er te lang over te discussiëren.

### Negatieve punten
- Eigenwijs
	- Doet soms z’n eigen wil, kan blijven hangen in z’n idee.
- Onrustig
	- Kan een druk dagje hebben, op de bank liggen, rondlopen etc.
 
[afbeelding]

Foto door  Edwin ten Wolde. (v.l.n.r.) Douwe de Haan, Tjerk Dijkstra en Vincent Bremer.
