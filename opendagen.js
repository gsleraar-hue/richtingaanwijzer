// Open dagen, opgehaald van de websites van de scholen zelf (31-10-2026).
const OPEN_DAGEN = {
"Fontys Hogeschool": {
"site": "https://www.fontys.nl/Studeren/Open-dagen-bij-Fontys.htm",
"dagen": [
{
"datum": "2026-10-31",
"soort": "open dag",
"aanmelden": "https://www.fontys.nl/Studeren/Agenda-SKA.htm?studievorm=1&educatietype=01&educatietype=02&educatietype=08"
},
{
"datum": "2027-01-24",
"soort": "open dag",
"aanmelden": "https://www.fontys.nl/Studeren/Agenda-SKA.htm?studievorm=1&educatietype=01&educatietype=02&educatietype=08"
},
{
"datum": "2027-03-20",
"soort": "open dag",
"aanmelden": "https://www.fontys.nl/Studeren/Agenda-SKA.htm?studievorm=1&educatietype=01&educatietype=02&educatietype=08"
}
]
},
"Hogeschool Rotterdam": {
"site": "https://www.hogeschoolrotterdam.nl/open-dag",
"dagen": [
{
"datum": "2026-11-07",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Rotterdam",
"aanmelden": "https://www.hogeschoolrotterdam.nl/hogeschool/agenda/fysieke-events-2026-2027/open-dag-7-november-2026/"
},
{
"datum": "2026-12-09",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Rotterdam",
"aanmelden": "https://www.hogeschoolrotterdam.nl/hogeschool/agenda/fysieke-events-2026-2027/open-avond-9-december-2026/"
},
{
"datum": "2027-02-13",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Rotterdam"
},
{
"datum": "2027-04-03",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Rotterdam"
}
]
},
"NHL Stenden Hogeschool": {
"site": "https://www.nhlstenden.com/evenementen/open-dagen",
"dagen": [
{
"datum": "2026-11-07",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Leeuwarden, Groningen, Emmen, Assen, Meppel, Amsterdam (Amsterdam 10:00-13:00)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dagen/open-dag-7-november-2026"
},
{
"datum": "2026-11-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Leeuwarden (Agora 1, Van Hall Larenstein)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dag-life-science-technology-opleidingen"
},
{
"datum": "2026-11-21",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Leeuwarden (Agora 1, Van Hall Larenstein)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dag-life-science-technology-opleidingen"
},
{
"datum": "2026-11-23",
"tijd": "09:30-15:00",
"soort": "open dag",
"plaats": "Leeuwarden (Hotel Management School)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dag-hotel-management-school"
},
{
"datum": "2026-11-24",
"tijd": "09:30-15:00",
"soort": "open dag",
"plaats": "Leeuwarden (Hotel Management School)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dag-hotel-management-school"
},
{
"datum": "2026-11-28",
"tijd": "11:45-16:00",
"soort": "open dag",
"plaats": "Terschelling (MIWB)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dagen-miwb/open-dag-miwb-28-november-2026"
},
{
"datum": "2026-11-30",
"tijd": "09:30-15:00",
"soort": "open dag",
"plaats": "Leeuwarden (Hotel Management School)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dag-hotel-management-school"
},
{
"datum": "2026-12-03",
"tijd": "09:30-15:00",
"soort": "open dag",
"plaats": "Leeuwarden (Hotel Management School)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dag-hotel-management-school"
},
{
"datum": "2026-12-07",
"tijd": "09:30-15:00",
"soort": "open dag",
"plaats": "Leeuwarden (Hotel Management School)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dag-hotel-management-school"
},
{
"datum": "2026-12-14",
"tijd": "09:30-15:00",
"soort": "open dag",
"plaats": "Leeuwarden (Hotel Management School)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dag-hotel-management-school"
},
{
"datum": "2026-12-17",
"tijd": "09:30-15:00",
"soort": "open dag",
"plaats": "Leeuwarden (Hotel Management School)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dag-hotel-management-school"
},
{
"datum": "2027-02-05",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Leeuwarden (Agora 1, Van Hall Larenstein)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dag-life-science-technology-opleidingen"
},
{
"datum": "2027-02-06",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Leeuwarden (Agora 1, Van Hall Larenstein)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dag-life-science-technology-opleidingen"
},
{
"datum": "2027-03-06",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Leeuwarden, Groningen, Emmen, Assen, Meppel, Amsterdam (Amsterdam 10:00-13:00)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dagen/open-dag-6-maart-2027"
},
{
"datum": "2027-03-13",
"tijd": "11:45-16:00",
"soort": "open dag",
"plaats": "Terschelling (MIWB)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dagen-miwb/open-dag-miwb-13-maart-2027"
},
{
"datum": "2027-03-25",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Leeuwarden (Agora 1, Van Hall Larenstein)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dag-life-science-technology-opleidingen"
},
{
"datum": "2027-06-01",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Leeuwarden, Groningen, Emmen, Assen, Meppel, Amsterdam",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dagen/open-dag-1-juni-2027"
},
{
"datum": "2027-06-03",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Leeuwarden (Agora 1, Van Hall Larenstein)",
"aanmelden": "https://www.nhlstenden.com/evenementen/open-dag-life-science-technology-opleidingen"
}
]
},
"Hogeschool Utrecht": {
"site": "https://www.hu.nl/open-dag",
"dagen": [
{
"datum": "2026-11-04",
"tijd": "17:00-20:30",
"soort": "open dag"
},
{
"datum": "2026-11-14",
"tijd": "09:30-15:00",
"soort": "open dag",
"aanmelden": "https://events.blackthorn.io/nl/1tx3Ig6/g/MnW2nwpbfP"
},
{
"datum": "2027-01-30",
"soort": "open dag"
},
{
"datum": "2027-03-20",
"soort": "open dag"
}
]
},
"Hogeschool van Arnhem en Nijmegen": {
"site": "https://www.han.nl/evenementen/open-dag/",
"dagen": [
{
"datum": "2026-11-07",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Nijmegen",
"aanmelden": "https://crmwebforms.han.nl/nl-NL/OpenDagVT/?OpenDagNijmegen&ef=Open%20Dag%20VT%20-%20Gebeurtenisregistratie#/event-registration?id=e52f91dc-cf43-f111-88b5-7ced8d768d2e"
},
{
"datum": "2026-11-08",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Nijmegen",
"aanmelden": "https://crmwebforms.han.nl/nl-NL/OpenDagVT/?OpenDagNijmegen&ef=Open%20Dag%20VT%20-%20Gebeurtenisregistratie#/event-registration?id=e52f91dc-cf43-f111-88b5-7ced8d768d2e"
},
{
"datum": "2026-11-14",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Arnhem",
"aanmelden": "https://crmwebforms.han.nl/nl-NL/OpenDagVT/?OpenDagArnhem&ef=Open%20Dag%20VT%20-%20Gebeurtenisregistratie#/event-registration?id=5f49bd06-cfb8-f111-aaab-002248a43924"
},
{
"datum": "2027-01-12",
"tijd": "18:00-21:00",
"soort": "open dag",
"plaats": "Nijmegen"
},
{
"datum": "2027-01-23",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Nijmegen"
},
{
"datum": "2027-01-30",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Arnhem"
},
{
"datum": "2027-03-20",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Arnhem"
},
{
"datum": "2027-04-03",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Nijmegen"
}
]
},
"Christelijke Hogeschool Windesheim": {
"site": "https://www.windesheim.nl/studiekeuze/open-dag",
"dagen": [
{
"datum": "2026-11-06",
"tijd": "13:00-21:00",
"soort": "open dag",
"plaats": "Zwolle",
"aanmelden": "https://www.windesheim.nl/formulieren/aanmeldformulier-open-dag-zwolle-november"
},
{
"datum": "2026-11-14",
"tijd": "10:00-13:30",
"soort": "open dag",
"plaats": "Almere",
"aanmelden": "https://www.windesheim.nl/formulieren/aanmeldformulier-open-dag-almere-november"
},
{
"datum": "2027-01-21",
"tijd": "19:00-21:00",
"soort": "online open dag",
"plaats": "online (Almere)"
},
{
"datum": "2027-01-22",
"tijd": "14:00-20:30",
"soort": "open dag",
"plaats": "Zwolle"
},
{
"datum": "2027-01-23",
"tijd": "10:00-13:30",
"soort": "open dag",
"plaats": "Almere"
},
{
"datum": "2027-03-04",
"tijd": "18:30-21:00",
"soort": "open dag",
"plaats": "Almere"
},
{
"datum": "2027-04-06",
"tijd": "19:00-21:00",
"soort": "online open dag",
"plaats": "online (Almere)"
},
{
"datum": "2027-04-06",
"tijd": "19:00-21:00",
"soort": "online open dag",
"plaats": "online (Zwolle)"
},
{
"datum": "2027-04-09",
"tijd": "13:00-17:00",
"soort": "open dag",
"plaats": "Zwolle"
},
{
"datum": "2027-04-10",
"tijd": "10:00-13:30",
"soort": "open dag",
"plaats": "Almere"
}
]
},
"Hogeschool van Amsterdam": {
"site": "https://www.hva.nl/studeren/studiekeuze/open-dagen",
"dagen": [
{
"datum": "2026-11-07",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Amsterdam",
"aanmelden": "https://studiekiezen.hva.nl/form/open_dag_kort?lang=nl-nl&event_id=773"
},
{
"datum": "2026-12-09",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Amsterdam"
},
{
"datum": "2027-02-06",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Amsterdam"
},
{
"datum": "2027-03-16",
"tijd": "17:00-20:00",
"soort": "online open dag",
"plaats": "online"
},
{
"datum": "2027-04-13",
"tijd": "18:00-21:00",
"soort": "open dag",
"plaats": "Amsterdam"
}
]
},
"Hanzehogeschool Groningen": {
"site": "https://www.hanze.nl/nl/studiekeuze/open-dagen",
"dagen": [
{
"datum": "2026-11-21",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Groningen",
"aanmelden": "https://www.formdesk.com/hanzehogeschoolgroningen/Aanmelden_Open_Dag"
},
{
"datum": "2026-12-04",
"tijd": "13:30-17:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.hanze.nl/nl/evenementen/studeren/voorlichtingen/2026/12/online-open-day-december-2026"
},
{
"datum": "2027-02-13",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Groningen",
"aanmelden": "https://www.hanze.nl/nl/evenementen/studeren/voorlichtingen/2027/02/open-dag-februari-2027"
},
{
"datum": "2027-03-05",
"tijd": "13:30-17:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.hanze.nl/nl/evenementen/studeren/voorlichtingen/2027/03/online-open-day-maart-2027"
},
{
"datum": "2027-04-01",
"tijd": "17:00-20:00",
"soort": "open dag",
"plaats": "Groningen",
"aanmelden": "https://www.hanze.nl/nl/evenementen/studeren/voorlichtingen/2027/04/open-avond-april-2027"
}
]
},
"Saxion Hogeschool": {
"site": "https://www.saxion.nl/studeren-bij/opleiding-kiezen/open-dagen",
"dagen": [
{
"datum": "2026-10-31",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Deventer",
"aanmelden": "https://forms.hippocampus.eu/saxion/oujsdm5blkxzedse/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiI3Y2UzZDI2ZS0zOWMxLTRiYjAtYWVjZi02NDU0NDJjYjFiNjQifQ"
},
{
"datum": "2026-11-04",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Apeldoorn",
"aanmelden": "https://forms.hippocampus.eu/saxion/kkccev3nd6l463bs/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiI0MTE4Mjg3My0yZTM2LTQxMTEtODg1NS0yODc0ODMwNThmY2IifQ"
},
{
"datum": "2026-11-07",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Enschede",
"aanmelden": "https://forms.hippocampus.eu/saxion/nha5tqhs6lo13ftp/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiI4YjI1NDI4Ny1kNzBjLTRmMGUtOTExOS04N2RmN2E4NDAzN2YifQ"
},
{
"datum": "2027-01-23",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Deventer"
},
{
"datum": "2027-01-27",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Apeldoorn"
},
{
"datum": "2027-01-30",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Enschede"
},
{
"datum": "2027-04-03",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Enschede"
},
{
"datum": "2027-04-07",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Apeldoorn"
},
{
"datum": "2027-04-10",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Deventer"
}
]
},
"Hogeschool Inholland": {
"site": "https://www.inholland.nl/opendag/",
"dagen": [
{
"datum": "2026-11-11",
"tijd": "17:00-20:00",
"soort": "open dag",
"plaats": "Alkmaar, Amsterdam, Delft, Den Haag, Dordrecht, Haarlem, Rotterdam",
"aanmelden": "https://www.inholland.nl/opendag/aanmelden-open-dag/"
},
{
"datum": "2026-12-16",
"soort": "online open dag",
"plaats": "online"
},
{
"datum": "2027-02-03",
"soort": "open dag"
},
{
"datum": "2027-03-20",
"soort": "open dag"
}
]
},
"Avans Hogeschool": {
"site": "https://www.avans.nl/studeren/open-dagen",
"dagen": [
{
"datum": "2026-11-06",
"soort": "open dag",
"plaats": "Breda, Den Bosch, Tilburg",
"aanmelden": "https://forms.hippocampus.eu/avans/cp6p717wcyb83vfm/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiJkYmE5OGE4NC1lNzk3LTRlZDEtOGQyYS02NmU1MTc4MmZiYTYifQ?institute=avans%20voltijd%20%2F%20deeltijd%20%2F%20duaal"
},
{
"datum": "2026-11-07",
"soort": "open dag",
"plaats": "Breda, Den Bosch, Tilburg",
"aanmelden": "https://forms.hippocampus.eu/avans/cp6p717wcyb83vfm/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiJkYmE5OGE4NC1lNzk3LTRlZDEtOGQyYS02NmU1MTc4MmZiYTYifQ?institute=avans%20voltijd%20%2F%20deeltijd%20%2F%20duaal"
},
{
"datum": "2026-11-21",
"tijd": "10:00-13:00",
"soort": "open dag",
"plaats": "Roosendaal",
"aanmelden": "https://forms.hippocampus.eu/avans/8rcraoc9y5rwatey/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiJjYTk2ZDJiMi04YWQxLTQ1NTctYjQ0NC01NGExODQyYjA4MTAifQ?institute=ad%20academie"
},
{
"datum": "2026-11-24",
"tijd": "19:00-21:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://forms.hippocampus.eu/avans/ke1nxrcaodamufll/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiIyYzcwMjgzYS1lYWY5LTQwNjQtOTMyNS0yMzA1ZGQ2ZTlkMjgifQ?institute=avans%20voltijd%20%2F%20duaal"
},
{
"datum": "2027-01-20",
"tijd": "19:00-21:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://forms.hippocampus.eu/avans/z1m8bzy1oa12f3k6/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiI5ZTMzZDAxOC02ZWZhLTQzYWYtYWM1ZS1kMGQxZDAyMjc3NTcifQ?institute=avans%20voltijd%20%2F%20deeltijd%20%2F%20duaal"
},
{
"datum": "2027-01-29",
"soort": "open dag",
"plaats": "Breda, Den Bosch, Tilburg",
"aanmelden": "https://forms.hippocampus.eu/avans/x1x2p6ux6jinoh6h/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiIwMTlhNzliYi05NjJjLTRjYzctODZmZC05NDY0OTMwNzNjZWIifQ?institute=avans%20voltijd%20%2F%20duaal"
},
{
"datum": "2027-01-30",
"soort": "open dag",
"plaats": "Breda, Den Bosch, Tilburg",
"aanmelden": "https://forms.hippocampus.eu/avans/x1x2p6ux6jinoh6h/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiIwMTlhNzliYi05NjJjLTRjYzctODZmZC05NDY0OTMwNzNjZWIifQ?institute=avans%20voltijd%20%2F%20duaal"
},
{
"datum": "2027-02-02",
"tijd": "18:00-21:00",
"soort": "open dag",
"plaats": "Roosendaal",
"aanmelden": "https://forms.hippocampus.eu/avans/625pgtlplak7px1n/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiI3MDE4NjVkYi1lNTFlLTRiYmUtOTMyZC03YWM1MTIwNDFlNzkifQ?institute=ad%20academie"
},
{
"datum": "2027-02-25",
"tijd": "19:00-21:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://forms.hippocampus.eu/avans/1p6mfg0h5dhcb6w5/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiI1YzljNjI2MC1mZGMwLTQ2ZTQtYTI2ZC0xMGJmZWIyM2Q5N2MifQ?institute=avans%20voltijd%20%2F%20deeltijd%20%2F%20duaal"
},
{
"datum": "2027-03-17",
"tijd": "19:00-21:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://forms.hippocampus.eu/avans/jaclifydcq3ypr18/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiJkNGRiMzEzOS01YzIxLTRiOGQtYjRjYi00MDBmOWE5MTI2NWYifQ?institute=avans%20voltijd%20%2F%20deeltijd%20%2F%20duaal"
},
{
"datum": "2027-03-24",
"tijd": "17:00-21:30",
"soort": "open dag",
"plaats": "Breda, Den Bosch, Tilburg",
"aanmelden": "https://forms.hippocampus.eu/avans/saddgtgc4nh2azal/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiI3OGViOGViMi1jMzZiLTQ0YjEtYWM0Yy0zODBjMjE4NTRhYWYifQ?institute=avans%20voltijd%20%2F%20deeltijd%20%2F%20duaal"
},
{
"datum": "2027-04-08",
"tijd": "18:00-21:00",
"soort": "open dag",
"plaats": "Roosendaal",
"aanmelden": "https://forms.hippocampus.eu/avans/hx7cs8ljto0u7uxn/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiIwNjE1OGZiZi0yOWM0LTQ4OTAtOTIyMi1iZWFiMWU4ZjMyYTAifQ?institute=ad%20academie"
},
{
"datum": "2027-04-21",
"tijd": "19:00-21:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://forms.hippocampus.eu/avans/nepar80cqkrsj5gb/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiIyZjZlODE3NC1jZWViLTRlMGItYWE1Mi1hNDdkMGUzNjZhZmUifQ?institute=avans%20voltijd%20%2F%20deeltijd%20%2F%20duaal"
},
{
"datum": "2027-06-03",
"tijd": "18:00-20:00",
"soort": "open dag",
"plaats": "Roosendaal",
"aanmelden": "https://forms.hippocampus.eu/avans/o8pire7rvld19xdj/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiI0OTM2YzMzNi05MTg2LTRmMWMtOThjNS1mYWY0NmRiMWNiMDIifQ?institute=ad%20academie"
},
{
"datum": "2027-06-08",
"tijd": "19:00-21:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://forms.hippocampus.eu/avans/r54e1zsblqoi0mpm/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiI3OWMwZmI3NC04OWRhLTQ5NDUtYmY0ZS0yYTQxYTJiODgxYjMifQ?institute=avans%20voltijd%20%2F%20deeltijd%20%2F%20duaal"
}
]
},
"Zuyd Hogeschool": {
"site": "https://www.zuyd.nl/kom-kennismaken/open-dagen",
"dagen": [
{
"datum": "2026-11-14",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Heerlen, Maastricht, Sittard",
"aanmelden": "https://activities.hippocampus.eu/activities/zuyd?activityTypeId=0c623a87-4a5e-4909-b2d1-018d6e8015f5&culture=en-US"
},
{
"datum": "2027-01-21",
"tijd": "19:00-20:30",
"soort": "online open dag",
"plaats": "online"
},
{
"datum": "2027-02-27",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Heerlen, Maastricht, Sittard"
},
{
"datum": "2027-04-07",
"tijd": "18:00-21:00",
"soort": "open dag",
"plaats": "Heerlen, Maastricht, Sittard"
},
{
"datum": "2027-06-24",
"tijd": "19:00-20:30",
"soort": "online open dag",
"plaats": "online"
}
]
},
"De Haagse Hogeschool": {
"site": "https://www.dehaagsehogeschool.nl/studiekeuze/open-dag",
"dagen": [
{
"datum": "2026-11-07",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Den Haag (hoofdlocatie), Sportcampus Zuiderpark, Delft, Zoetermeer",
"aanmelden": "https://www.dehaagsehogeschool.nl/studiekeuze/open-dag/meld-je-aan-voor-de-open-dag"
},
{
"datum": "2027-02-06",
"tijd": "10:00-14:00",
"soort": "open dag"
},
{
"datum": "2027-04-02",
"tijd": "16:00-20:00",
"soort": "open dag"
}
]
},
"HZ University of Applied Sciences": {
"site": "https://hz.nl/open-dag",
"dagen": [
{
"datum": "2026-11-14",
"tijd": "09:30-14:30",
"soort": "open dag",
"plaats": "Vlissingen en Middelburg",
"aanmelden": "https://www.eventbrite.co.uk/e/registratie-hz-open-dag-14-november-2026-1994122373700"
},
{
"datum": "2027-01-09",
"soort": "open dag"
},
{
"datum": "2027-04-17",
"soort": "open dag"
}
]
},
"Hogeschool Leiden": {
"site": "https://hsleiden.nl/studeren/kennismaken/open-dag-hogeschool-leiden",
"dagen": [
{
"datum": "2026-11-21",
"tijd": "09:00-14:30",
"soort": "open dag",
"plaats": "Leiden",
"aanmelden": "https://formulieren.hsleiden.nl/open-dag-21-november-2026"
},
{
"datum": "2027-02-13",
"tijd": "09:00-14:30",
"soort": "open dag",
"plaats": "Leiden",
"aanmelden": "https://formulieren.hsleiden.nl/open-dag-13-februari-2027"
},
{
"datum": "2027-04-02",
"tijd": "09:00-14:30",
"soort": "open dag",
"plaats": "Leiden"
}
]
},
"Hogeschool Van Hall Larenstein": {
"site": "https://www.hvhl.nl/studiekeuze/open-dagen/",
"dagen": [
{
"datum": "2026-11-14",
"tijd": "12:30-15:00",
"soort": "online open dag",
"aanmelden": "https://www.vhluas.com/events/open-days/"
},
{
"datum": "2026-11-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Leeuwarden",
"aanmelden": "https://www.hvhl.nl/formulieren/aanmelden-open-dag-leeuwarden-vrijdag-20-november-2026/"
},
{
"datum": "2026-11-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Velp",
"aanmelden": "https://www.hvhl.nl/formulieren/aanmelden-open-dag-velp-vrijdag-20-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Leeuwarden",
"aanmelden": "https://www.hvhl.nl/formulieren/aanmelden-open-dag-leeuwarden-zaterdag-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Velp",
"aanmelden": "https://www.hvhl.nl/formulieren/aanmelden-open-dag-velp-zaterdag-21-november-2026/"
},
{
"datum": "2027-02-05",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Leeuwarden",
"aanmelden": "https://www.hvhl.nl/formulieren/aanmelden-open-dag-leeuwarden-vrijdag-5-februari-2027/"
},
{
"datum": "2027-02-05",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Velp",
"aanmelden": "https://www.hvhl.nl/formulieren/aanmelden-open-dag-velp-vrijdag-5-februari-2027/"
},
{
"datum": "2027-02-06",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Leeuwarden",
"aanmelden": "https://www.hvhl.nl/formulieren/aanmelden-open-dag-leeuwarden-zaterdag-6-februari-2027/"
},
{
"datum": "2027-02-06",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Velp",
"aanmelden": "https://www.hvhl.nl/formulieren/aanmelden-open-dag-velp-zaterdag-6-februari-2027/"
},
{
"datum": "2027-03-18",
"tijd": "14:30-17:00",
"soort": "online open dag",
"aanmelden": "https://www.vhluas.com/events/open-days/"
},
{
"datum": "2027-03-25",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Leeuwarden",
"aanmelden": "https://www.hvhl.nl/formulieren/aanmelden-open-dag-leeuwarden-donderdag-25-maart-2027/"
},
{
"datum": "2027-03-25",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Velp",
"aanmelden": "https://www.hvhl.nl/formulieren/aanmelden-open-dag-velp-donderdag-25-maart-2027/"
},
{
"datum": "2027-06-03",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Leeuwarden",
"aanmelden": "https://www.hvhl.nl/formulieren/aanmelden-open-dag-leeuwarden-donderdag-3-juni-2027/"
},
{
"datum": "2027-06-03",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Velp",
"aanmelden": "https://www.hvhl.nl/formulieren/aanmelden-open-dag-velp-donderdag-3-juni-2027/"
},
{
"datum": "2027-06-03",
"tijd": "19:00-20:00",
"soort": "online open dag",
"aanmelden": "https://www.vhluas.com/events/open-days/"
}
]
},
"Christelijke Hogeschool Ede": {
"site": "https://che.nl/studiekeuzehulp/open-dagen-avonden/",
"dagen": [
{
"datum": "2026-11-14",
"tijd": "10:00-16:00",
"soort": "open dag",
"plaats": "Ede",
"aanmelden": "https://che.nl/agenda/open-dag-14-november/"
},
{
"datum": "2027-02-06",
"soort": "open dag",
"plaats": "Ede"
},
{
"datum": "2027-03-24",
"soort": "open dag",
"plaats": "Ede"
},
{
"datum": "2027-06-02",
"soort": "open dag",
"plaats": "Ede"
}
]
},
"HAS green academy": {
"site": "https://www.has.nl/meer-has/evenementen/",
"dagen": [
{
"datum": "2026-11-12",
"tijd": "16:00-21:00",
"soort": "open dag",
"plaats": "'s-Hertogenbosch",
"aanmelden": "https://www.has.nl/meer-has/evenementen/open-dag-den-bosch-12-november-2026/"
},
{
"datum": "2026-11-13",
"tijd": "18:00-21:00",
"soort": "open dag",
"plaats": "Venlo",
"aanmelden": "https://www.has.nl/meer-has/evenementen/open-dag-venlo-13-november-2026/"
},
{
"datum": "2026-11-30",
"soort": "proefstuderen",
"plaats": "'s-Hertogenbosch",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-bedrijfskunde-en-agribusiness-den-bosch-30-november-2026/"
},
{
"datum": "2026-11-30",
"soort": "proefstuderen",
"plaats": "'s-Hertogenbosch",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-bedrijfskunde-en-foodbusiness-den-bosch-30-november-2026/"
},
{
"datum": "2026-11-30",
"soort": "proefstuderen",
"plaats": "'s-Hertogenbosch",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-hippische-bedrijfskunde-en-pet-business-den-bosch-30-november-2026/"
},
{
"datum": "2026-11-30",
"soort": "proefstuderen",
"plaats": "Venlo",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-hippische-bedrijfskunde-en-pet-business-venlo-30-november-2026/"
},
{
"datum": "2026-11-30",
"soort": "proefstuderen",
"plaats": "Venlo",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-bedrijfskunde-en-agribusiness-venlo-30-november-2026/"
},
{
"datum": "2026-11-30",
"soort": "proefstuderen",
"plaats": "Venlo",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-bedrijfskunde-en-foodbusiness-venlo-30-november-2026/"
},
{
"datum": "2026-12-01",
"soort": "online open dag",
"aanmelden": "https://www.has.nl/en/more-has/events/online-meet-greet-english-taught-bachelor-programmes-1-december-2026/"
},
{
"datum": "2026-12-01",
"soort": "proefstuderen",
"plaats": "'s-Hertogenbosch",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-toegepaste-biologie-den-bosch-1-december-2026/"
},
{
"datum": "2026-12-01",
"soort": "proefstuderen",
"plaats": "'s-Hertogenbosch",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-ad-groene-leefomgeving-den-bosch-1-december-2026/"
},
{
"datum": "2026-12-02",
"soort": "proefstuderen",
"plaats": "'s-Hertogenbosch",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-ad-ecologie-den-bosch-2-december-2026/"
},
{
"datum": "2026-12-02",
"soort": "proefstuderen",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-tuinbouw-en-akkerbouw-2-december-2026/"
},
{
"datum": "2026-12-03",
"soort": "proefstuderen",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-milieukunde-3-december-2026/"
},
{
"datum": "2026-12-03",
"soort": "proefstuderen",
"plaats": "Venlo",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-ad-groene-leefomgeving-venlo-3-december-2026/"
},
{
"datum": "2026-12-03",
"soort": "proefstuderen",
"plaats": "Venlo",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-ad-ecologie-venlo-3-december-2026/"
},
{
"datum": "2026-12-03",
"soort": "proefstuderen",
"plaats": "Venlo",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-ad-food-venlo-3-december-2026/"
},
{
"datum": "2026-12-04",
"soort": "proefstuderen",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-veehouderij-4-december-2026/"
},
{
"datum": "2026-12-04",
"soort": "proefstuderen",
"plaats": "'s-Hertogenbosch",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-ad-food-den-bosch-4-december-2026/"
},
{
"datum": "2026-12-07",
"soort": "proefstuderen",
"plaats": "Venlo",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-toegepaste-biologie-venlo-7-december-2026/"
},
{
"datum": "2026-12-07",
"soort": "proefstuderen",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-food-technology-7-december-2026/"
},
{
"datum": "2026-12-08",
"soort": "proefstuderen",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-management-van-de-leefomgeving-8-december-2026/"
},
{
"datum": "2026-12-09",
"soort": "proefstuderen",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-aarde-data-analyse-en-visualisatie-9-december-2026/"
},
{
"datum": "2026-12-09",
"soort": "proefstuderen",
"plaats": "'s-Hertogenbosch",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-food-innovation-den-bosch-9-december-2026/"
},
{
"datum": "2026-12-10",
"soort": "proefstuderen",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-international-food-agribusiness-10-december-2026/"
},
{
"datum": "2027-01-23",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "'s-Hertogenbosch",
"aanmelden": "https://www.has.nl/meer-has/evenementen/open-dag-den-bosch-23-januari-2027/"
},
{
"datum": "2027-01-30",
"tijd": "10:00-13:00",
"soort": "open dag",
"plaats": "Venlo",
"aanmelden": "https://www.has.nl/meer-has/evenementen/open-dag-venlo-30-januari-2027/"
},
{
"datum": "2027-04-01",
"soort": "proefstuderen",
"aanmelden": "https://www.has.nl/meer-has/evenementen/proefstuderen-international-food-agribusiness-1-april-2027/"
}
]
},
"Breda University of Applied Sciences": {
"site": "https://www.buas.nl/en/international-students/meet-us/open-day",
"dagen": [
{
"datum": "2026-11-21",
"tijd": "09:30-15:00",
"soort": "open dag",
"plaats": "Breda",
"aanmelden": "https://forms.hippocampus.eu/buas/217gitlnb7q08ofv/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiJkN2NkOGY4ZC0wYzQ4LTQyOGYtYjdhNS0zMWQ0MTY4ZGU0NTYifQ?culture=en-US"
},
{
"datum": "2027-01-23",
"tijd": "09:30-15:00",
"soort": "open dag",
"plaats": "Breda"
},
{
"datum": "2027-03-17",
"tijd": "18:00-21:00",
"soort": "open dag",
"plaats": "Breda"
}
]
},
"Aeres Hogeschool": {
"site": "https://www.aereshogeschool.nl/studeren/studiekeuze/open-dagen",
"dagen": [
{
"datum": "2026-11-14",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Almere, Dronten en Wageningen",
"aanmelden": "https://www.aereshogeschool.nl/agenda/open-dagen-en-voorlichting/261114-open-dag"
},
{
"datum": "2026-12-08",
"soort": "proefstuderen",
"aanmelden": "https://www.aeresuas.com/agenda/open-dagen-en-voorlichting/261208-proefstudeerdag"
},
{
"datum": "2027-01-30",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Almere, Dronten en Wageningen",
"aanmelden": "https://www.aereshogeschool.nl/agenda/open-dagen-en-voorlichting/270130-open-dag"
},
{
"datum": "2027-03-20",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Almere, Dronten en Wageningen",
"aanmelden": "https://www.aereshogeschool.nl/agenda/open-dagen-en-voorlichting/270320-open-dag"
},
{
"datum": "2027-04-13",
"soort": "proefstuderen",
"aanmelden": "https://www.aeresuas.com/agenda/open-dagen-en-voorlichting/270413-proefstudeerdag"
}
]
},
"Driestar educatief": {
"site": "https://www.driestar-hogeschool.nl/agenda-en-open-dagen",
"dagen": [
{
"datum": "2026-11-11",
"tijd": "20:00-21:30",
"soort": "online open dag",
"aanmelden": "https://www.driestar-hogeschool.nl/agenda-en-open-dagen/online-open-avond"
},
{
"datum": "2026-12-02",
"tijd": "17:00-20:30",
"soort": "proefstuderen",
"plaats": "Gouda",
"aanmelden": "https://www.driestar-hogeschool.nl/agenda-en-open-dagen/open-collegeweek-alle-opleidingen"
},
{
"datum": "2026-12-03",
"tijd": "16:00-21:00",
"soort": "proefstuderen",
"plaats": "Gouda",
"aanmelden": "https://www.driestar-hogeschool.nl/agenda-en-open-dagen/open-collegeweek-alle-opleidingen"
},
{
"datum": "2026-12-04",
"tijd": "10:00-13:45",
"soort": "proefstuderen",
"plaats": "Gouda",
"aanmelden": "https://www.driestar-hogeschool.nl/agenda-en-open-dagen/open-collegeweek-alle-opleidingen"
},
{
"datum": "2026-12-04",
"tijd": "10:30-13:30",
"soort": "proefstuderen",
"plaats": "Gouda",
"aanmelden": "https://www.driestar-hogeschool.nl/agenda-en-open-dagen/open-collegeweek-alle-opleidingen"
},
{
"datum": "2027-02-06",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Gouda"
}
]
},
"Stichting Hogeschool Viaa": {
"site": "https://www.viaa.nl/open-dagen/",
"dagen": [
{
"datum": "2026-11-14",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Zwolle",
"aanmelden": "https://www.viaa.nl/open-dagen/aanmelden-open-dag-14-november-2026/"
},
{
"datum": "2027-01-27",
"soort": "open dag",
"plaats": "Zwolle"
},
{
"datum": "2027-04-14",
"soort": "open dag",
"plaats": "Zwolle"
},
{
"datum": "2027-06-09",
"soort": "open dag",
"plaats": "Zwolle"
}
]
},
"Hogeschool KPZ": {
"site": "https://www.kpz.nl/open-dagen/",
"dagen": [
{
"datum": "2026-11-10",
"soort": "open dag",
"plaats": "Zwolle",
"aanmelden": "https://www.kpz.nl/activiteiten/open-avond-10-november-2026/"
},
{
"datum": "2027-01-07",
"soort": "open dag",
"plaats": "Zwolle",
"aanmelden": "https://www.kpz.nl/activiteiten/open-avond-ad-pep-en-kpznext-7-januari-2027/"
},
{
"datum": "2027-02-03",
"soort": "open dag",
"plaats": "Zwolle",
"aanmelden": "https://www.kpz.nl/activiteiten/open-avond-3-februari-2027/"
},
{
"datum": "2027-03-13",
"soort": "open dag",
"plaats": "Zwolle",
"aanmelden": "https://www.kpz.nl/activiteiten/open-dag-13-maart-2027/"
},
{
"datum": "2027-06-02",
"soort": "open dag",
"plaats": "Zwolle",
"aanmelden": "https://www.kpz.nl/activiteiten/open-avond-2-juni-2027/"
}
]
},
"Marnix Academie": {
"site": "https://www.marnixacademie.nl/open-dagen/",
"dagen": [
{
"datum": "2026-11-07",
"tijd": "10:00-13:00",
"soort": "open dag",
"plaats": "Utrecht",
"aanmelden": "https://www.marnixacademie.nl/evenementen/open-dag-7-november-2026/"
},
{
"datum": "2026-12-10",
"tijd": "18:00-21:00",
"soort": "open dag",
"plaats": "Utrecht",
"aanmelden": "https://www.marnixacademie.nl/evenementen/open-avond-10-december-2026/"
},
{
"datum": "2027-02-04",
"tijd": "18:00-21:00",
"soort": "open dag",
"plaats": "Utrecht"
},
{
"datum": "2027-04-10",
"tijd": "10:00-13:00",
"soort": "open dag",
"plaats": "Utrecht"
},
{
"datum": "2027-06-03",
"tijd": "18:00-21:00",
"soort": "open dag",
"plaats": "Utrecht"
}
]
},
"Iselinge Hogeschool": {
"site": "https://www.iselinge.nl/studie-kiezen/open-dag",
"dagen": [
{
"datum": "2026-11-07",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Doetinchem",
"aanmelden": "https://www.iselinge.nl/Aanmelden/Open-dag-aanmelden"
},
{
"datum": "2027-01-30",
"soort": "open dag",
"plaats": "Doetinchem",
"aanmelden": "https://www.iselinge.nl/Aanmelden/Open-dag-aanmelden"
},
{
"datum": "2027-04-15",
"tijd": "19:00-21:00",
"soort": "open dag",
"plaats": "Doetinchem",
"aanmelden": "https://www.iselinge.nl/Aanmelden/Open-dag-aanmelden"
}
]
},
"Hogeschool IPABO Amsterdam Alkmaar": {
"site": "https://www.ipabo.nl/open-dag/voltijd/",
"dagen": [
{
"datum": "2026-11-28",
"tijd": "10:00-13:00",
"soort": "open dag",
"plaats": "Amsterdam en Alkmaar",
"aanmelden": "https://www.ipabo.nl/open-dag/"
},
{
"datum": "2026-12-08",
"tijd": "09:45-12:00",
"soort": "proefstuderen",
"plaats": "Alkmaar",
"aanmelden": "https://www.ipabo.nl/studeren/proefstuderen/ps-2627-20261208-bachelor-zij/"
},
{
"datum": "2026-12-10",
"tijd": "09:45-12:00",
"soort": "proefstuderen",
"plaats": "Amsterdam",
"aanmelden": "https://www.ipabo.nl/studeren/proefstuderen/ps-2627-20261210-bachelor-zij/"
},
{
"datum": "2027-01-11",
"tijd": "09:45-12:00",
"soort": "proefstuderen",
"plaats": "Amsterdam",
"aanmelden": "https://www.ipabo.nl/studeren/proefstuderen/ps-2627-20270111-adpep/"
},
{
"datum": "2027-01-15",
"tijd": "09:45-12:00",
"soort": "proefstuderen",
"plaats": "Alkmaar",
"aanmelden": "https://www.ipabo.nl/studeren/proefstuderen/ps-2627-20270115-adpep/"
},
{
"datum": "2027-02-02",
"tijd": "18:00-20:30",
"soort": "open dag",
"plaats": "Amsterdam en Alkmaar",
"aanmelden": "https://www.ipabo.nl/open-dag/"
},
{
"datum": "2027-03-20",
"tijd": "10:00-13:00",
"soort": "open dag",
"plaats": "Amsterdam en Alkmaar",
"aanmelden": "https://www.ipabo.nl/open-dag/"
},
{
"datum": "2027-04-20",
"tijd": "19:00-21:00",
"soort": "online open dag",
"aanmelden": "https://www.ipabo.nl/open-dag/"
}
]
},
"Pedagogische Hogeschool De Kempel": {
"site": "https://www.kempel.nl/open-dagen/",
"dagen": [
{
"datum": "2026-11-01",
"tijd": "10:30-13:30",
"soort": "open dag",
"plaats": "Helmond"
},
{
"datum": "2027-01-17",
"tijd": "10:30-13:30",
"soort": "open dag",
"plaats": "Helmond",
"aanmelden": "https://www.kempel.nl/open-dagen/"
},
{
"datum": "2027-03-22",
"tijd": "18:00-20:00",
"soort": "open dag",
"plaats": "Helmond",
"aanmelden": "https://www.kempel.nl/open-dagen/"
}
]
},
"Hotelschool The Hague": {
"site": "https://www.hotelschool.nl/open-days/",
"dagen": [
{
"datum": "2026-11-05",
"soort": "online open dag",
"aanmelden": "https://www.eventbrite.co.uk/e/bachelor-online-discovery-session-hotelschool-the-hague-tickets-2003776225631"
},
{
"datum": "2026-11-10",
"soort": "online open dag",
"aanmelden": "https://www.eventbrite.co.uk/e/bachelor-online-discovery-session-hotelschool-the-hague-tickets-2003776412189"
},
{
"datum": "2026-11-11",
"tijd": "12:00-14:00",
"soort": "open dag",
"plaats": "Den Haag",
"aanmelden": "https://www.eventbrite.co.uk/e/bachelor-open-day-hotelschool-the-hague-tickets-1993127016560"
},
{
"datum": "2026-11-11",
"tijd": "12:00-14:00",
"soort": "open dag",
"plaats": "Amsterdam",
"aanmelden": "https://www.eventbrite.co.uk/e/bachelor-open-day-hotelschool-the-hague-tickets-1993127042638"
}
]
},
"Tio": {
"site": "https://www.tio.nl/opendagen/",
"dagen": [
{
"datum": "2026-10-31",
"tijd": "10:30, 12:00 en 13:00 (starttijden)",
"soort": "open dag",
"plaats": "Eindhoven",
"aanmelden": "https://www.tio.nl/opendagen/open-dagen/?opendag=1bc69094-3a9d-44a1-84c8-ad59c2244211"
},
{
"datum": "2026-11-07",
"tijd": "11:00 en 12:30 (starttijden)",
"soort": "open dag",
"plaats": "Utrecht",
"aanmelden": "https://www.tio.nl/opendagen/open-dagen/?opendag=e7cd9eb2-05ef-4a12-b612-4e879dcc86d5"
},
{
"datum": "2026-11-12",
"tijd": "10:15-13:55",
"soort": "proefstuderen",
"plaats": "Eindhoven",
"aanmelden": "https://www.tio.nl/contact/meeloopdag/"
},
{
"datum": "2026-11-14",
"tijd": "11:00 en 12:30 (starttijden)",
"soort": "open dag",
"plaats": "Groningen",
"aanmelden": "https://www.tio.nl/opendagen/open-dagen/?opendag=806268f5-bda9-4e97-b104-4eedfd2f7126"
},
{
"datum": "2026-11-18",
"tijd": "10:15-13:55",
"soort": "proefstuderen",
"plaats": "Utrecht",
"aanmelden": "https://www.tio.nl/contact/meeloopdag/"
},
{
"datum": "2026-11-21",
"tijd": "10:30, 12:00, 13:00 en 14:30 (starttijden)",
"soort": "open dag",
"plaats": "Amsterdam",
"aanmelden": "https://www.tio.nl/opendagen/open-dagen/?opendag=5d836a79-8795-f111-8076-7c1e523742b4"
},
{
"datum": "2026-11-21",
"tijd": "10:30, 12:00, 13:00 en 14:30 (starttijden)",
"soort": "open dag",
"plaats": "Rotterdam",
"aanmelden": "https://www.tio.nl/opendagen/open-dagen/?opendag=e2cbaa04-9dc4-4664-9d8c-a7be48f46973"
},
{
"datum": "2026-12-01",
"tijd": "19:00 en 20:30 (starttijden)",
"soort": "open dag",
"plaats": "Hengelo",
"aanmelden": "https://www.tio.nl/opendagen/open-dagen/?opendag=1410f5e5-1e6c-4a0c-9813-6260caf39e02"
},
{
"datum": "2026-12-01",
"tijd": "19:00 en 20:30 (starttijden)",
"soort": "open dag",
"plaats": "Utrecht",
"aanmelden": "https://www.tio.nl/opendagen/open-dagen/?opendag=c69e4927-c572-43d9-8ad4-72ca4b62ddff"
},
{
"datum": "2026-12-02",
"tijd": "10:15-13:55",
"soort": "proefstuderen",
"plaats": "Groningen",
"aanmelden": "https://www.tio.nl/contact/meeloopdag/"
},
{
"datum": "2026-12-03",
"tijd": "19:00 en 20:30 (starttijden)",
"soort": "open dag",
"plaats": "Eindhoven",
"aanmelden": "https://www.tio.nl/opendagen/open-dagen/?opendag=17b37248-159b-f111-b8db-7ced8d4a1d1e"
},
{
"datum": "2026-12-03",
"tijd": "10:15-13:55",
"soort": "proefstuderen",
"plaats": "Rotterdam",
"aanmelden": "https://www.tio.nl/contact/meeloopdag/"
},
{
"datum": "2026-12-04",
"tijd": "10:15-13:55",
"soort": "proefstuderen",
"plaats": "Amsterdam",
"aanmelden": "https://www.tio.nl/contact/meeloopdag/"
},
{
"datum": "2027-01-12",
"tijd": "10:15-13:55",
"soort": "proefstuderen",
"plaats": "Hengelo",
"aanmelden": "https://www.tio.nl/contact/meeloopdag/"
},
{
"datum": "2027-01-16",
"tijd": "10:30, 12:00, 13:00 en 14:30 (starttijden)",
"soort": "open dag",
"plaats": "Amsterdam",
"aanmelden": "https://www.tio.nl/opendagen/open-dagen/?opendag=919f136f-8e95-f111-8076-7ced8d4a12b6"
},
{
"datum": "2027-01-16",
"tijd": "11:00 en 12:30 (starttijden)",
"soort": "open dag",
"plaats": "Groningen",
"aanmelden": "https://www.tio.nl/opendagen/open-dagen/?opendag=005409ab-a082-48fb-beec-677c284dd8b5"
},
{
"datum": "2027-01-23",
"tijd": "11:00 en 12:30 (starttijden)",
"soort": "open dag",
"plaats": "Hengelo",
"aanmelden": "https://www.tio.nl/opendagen/open-dagen/?opendag=40ff94af-f6e5-4d2b-b717-18842ad48f0b"
},
{
"datum": "2027-01-23",
"tijd": "10:30, 12:00, 13:00 en 14:30 (starttijden)",
"soort": "open dag",
"plaats": "Rotterdam",
"aanmelden": "https://www.tio.nl/opendagen/open-dagen/?opendag=8e2fde9b-3a34-4622-91ea-05569c0fc891"
}
]
},
"Universiteit van Amsterdam": {
"site": "https://www.uva.nl/onderwijs/open-dagen/uva-bachelorweek/uva-bachelorweek.html",
"dagen": []
},
"Universiteit Leiden": {
"site": "https://www.universiteitleiden.nl/campagne/bachelor/open-dag/aanmelden",
"dagen": [
{
"datum": "2026-11-07",
"tijd": "09:00-18:00",
"soort": "open dag",
"plaats": "Leiden en Den Haag",
"aanmelden": "https://www.universiteitleiden.nl/formulieren/marketing?event=3131b707-79a7-f111-b8de-000d3adbdf94"
},
{
"datum": "2026-11-07",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.universiteitleiden.nl/formulieren/marketing?event=dfe330da-7aaf-f111-aaac-000d3adbdf94"
},
{
"datum": "2027-03-06",
"tijd": "09:00-18:00",
"soort": "open dag",
"plaats": "Leiden en Den Haag (deels ook online)"
}
]
},
"Rijksuniversiteit Groningen": {
"site": "https://www.rug.nl/education/bachelor/bachelors-open-day?lang=nl",
"dagen": [
{
"datum": "2026-12-07",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://go.rug.nl/form/reminderserviceonlinebachelorweekdec2026"
},
{
"datum": "2026-12-08",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://go.rug.nl/form/reminderserviceonlinebachelorweekdec2026"
},
{
"datum": "2026-12-09",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://go.rug.nl/form/reminderserviceonlinebachelorweekdec2026"
},
{
"datum": "2026-12-10",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://go.rug.nl/form/reminderserviceonlinebachelorweekdec2026"
},
{
"datum": "2026-12-11",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://go.rug.nl/form/reminderserviceonlinebachelorweekdec2026"
},
{
"datum": "2027-01-29",
"tijd": "10:00-17:00",
"soort": "open dag",
"plaats": "Groningen",
"aanmelden": "https://www.rug.nl/education/bachelor/bachelors-open-day?lang=nl"
},
{
"datum": "2027-04-10",
"tijd": "10:00-17:00",
"soort": "open dag",
"plaats": "Groningen",
"aanmelden": "https://www.rug.nl/education/bachelor/bachelors-open-day?lang=nl"
}
]
},
"Vrije Universiteit Amsterdam": {
"site": "https://vu.nl/en/education/more-about/vu-bachelor-s-day",
"dagen": [
{
"datum": "2026-11-06",
"tijd": "15:15-20:30",
"soort": "open dag",
"plaats": "Amsterdam (VU Campus, De Boelelaan 1105)",
"aanmelden": "https://vu.nl/en/education/more-about/vu-bachelor-s-day"
},
{
"datum": "2026-11-07",
"tijd": "09:00-16:30",
"soort": "open dag",
"plaats": "Amsterdam (VU Campus, De Boelelaan 1105)",
"aanmelden": "https://vu.nl/en/education/more-about/vu-bachelor-s-day"
},
{
"datum": "2027-02-06",
"soort": "open dag",
"plaats": "Amsterdam"
}
]
},
"Universiteit Utrecht": {
"site": "https://www.uu.nl/bachelors/open-dagen",
"dagen": [
{
"datum": "2026-11-04",
"tijd": "15:30-19:15",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://start.uu.nl/public/link/10339?lang=NL-nl"
},
{
"datum": "2026-11-20",
"tijd": "10:00-16:00",
"soort": "open dag",
"plaats": "Utrecht",
"aanmelden": "https://start.uu.nl/public/link/10450?lang=NL-nl"
},
{
"datum": "2026-11-21",
"tijd": "10:00-16:00",
"soort": "open dag",
"plaats": "Utrecht",
"aanmelden": "https://start.uu.nl/public/link/10451?lang=NL-nl"
}
]
},
"Radboud Universiteit Nijmegen": {
"site": "https://www.ru.nl/en/about-us/events/bachelors-open-day",
"dagen": [
{
"datum": "2026-11-13",
"tijd": "16:30-20:00",
"soort": "open dag",
"plaats": "Nijmegen",
"aanmelden": "https://www.ru.nl/en/about-us/events/bachelors-open-day"
},
{
"datum": "2026-11-14",
"tijd": "09:00-16:00",
"soort": "open dag",
"plaats": "Nijmegen",
"aanmelden": "https://www.ru.nl/en/about-us/events/bachelors-open-day"
}
]
},
"Universiteit Maastricht": {
"site": "https://www.maastrichtuniversity.nl/bachelors-open-day",
"dagen": [
{
"datum": "2026-11-04",
"tijd": "18:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.maastrichtuniversity.nl/online-information-sessions"
},
{
"datum": "2026-11-14",
"tijd": "09:30-16:30",
"soort": "open dag",
"plaats": "Maastricht",
"aanmelden": "https://events.maastrichtuniversity.nl/bod141126/start"
},
{
"datum": "2026-12-02",
"tijd": "18:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.maastrichtuniversity.nl/online-information-sessions"
},
{
"datum": "2027-01-19",
"tijd": "19:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.maastrichtuniversity.nl/online-information-sessions"
},
{
"datum": "2027-02-02",
"tijd": "19:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.maastrichtuniversity.nl/online-information-sessions"
},
{
"datum": "2027-02-03",
"tijd": "18:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.maastrichtuniversity.nl/online-information-sessions"
},
{
"datum": "2027-03-03",
"tijd": "18:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.maastrichtuniversity.nl/online-information-sessions"
},
{
"datum": "2027-04-07",
"tijd": "18:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.maastrichtuniversity.nl/online-information-sessions"
},
{
"datum": "2027-05-12",
"tijd": "18:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.maastrichtuniversity.nl/online-information-sessions"
}
]
},
"Erasmus Universiteit Rotterdam": {
"site": "https://www.eur.nl/en/education/bachelor-programmes/bachelor-open-day",
"dagen": [
{
"datum": "2027-02-06",
"tijd": "09:00-16:00",
"soort": "open dag",
"plaats": "Rotterdam (ook online te volgen)",
"aanmelden": "https://www.eur.nl/en/events/bachelor-open-day-2027-02-06"
},
{
"datum": "2027-03-06",
"tijd": "09:00-16:00",
"soort": "open dag",
"plaats": "Rotterdam (Erasmus MC)",
"aanmelden": "https://www.eur.nl/en/events/bachelor-open-day-erasmus-mc-2027-03-06"
}
]
},
"Tilburg University": {
"site": "https://www.tilburguniversity.edu/education/bachelors-programs/open-day",
"dagen": []
},
"Wageningen University": {
"site": "https://www.wur.nl/en/activity/bachelors-open-day",
"dagen": [
{
"datum": "2026-11-06",
"tijd": "14:00-19:30",
"soort": "open dag",
"plaats": "Wageningen",
"aanmelden": "https://www.wur.nl/en/education/bachelor/open-days-study-choice-bachelors/apply-bachelors-open-day"
},
{
"datum": "2026-11-07",
"tijd": "09:30-16:00",
"soort": "open dag",
"plaats": "Wageningen",
"aanmelden": "https://www.wur.nl/en/education/bachelor/open-days-study-choice-bachelors/apply-bachelors-open-day"
},
{
"datum": "2027-01-21",
"tijd": "15:00-20:30",
"soort": "online open dag",
"plaats": "online"
}
]
},
"Universiteit Twente": {
"site": "https://www.utwente.nl/en/education/studychoice/bachelor-open-days/",
"dagen": [
{
"datum": "2026-11-18",
"tijd": "14:00-16:30",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.utwente.nl/onderwijs/studiekeuze/bsc-online-open-days/2026-11-18/3631689/"
},
{
"datum": "2027-03-20",
"soort": "open dag",
"plaats": "Enschede"
}
]
},
"Technische Universiteit Delft": {
"site": "https://www.tudelft.nl/en/education/study-programme-orientation/preparing-for-a-bachelor/open-days",
"dagen": [
{
"datum": "2027-03-19",
"soort": "open dag",
"plaats": "Delft"
}
]
},
"Technische Universiteit Eindhoven": {
"site": "https://www.tue.nl/en/education/mystarttue/bachelor-open-days",
"dagen": [
{
"datum": "2027-01-30",
"soort": "open dag",
"plaats": "Eindhoven",
"aanmelden": "https://start.tue.nl/form/Voor_Aanmelden_OpenDag"
},
{
"datum": "2027-05-22",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://start.tue.nl/form/Voor_Aanmelden_B_OnlineOpenDag"
}
]
},
"Open Universiteit": {
"site": "https://www.ou.nl/openweek",
"dagen": [
{
"datum": "2026-11-17",
"tijd": "14:00-15:30",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.formdesk.com/openuniversiteit/aanmeldformulier_online_open_week_november_2026"
},
{
"datum": "2026-11-17",
"tijd": "19:15-20:30",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.formdesk.com/openuniversiteit/aanmeldformulier_online_open_week_november_2026"
},
{
"datum": "2026-11-17",
"tijd": "20:00-21:15",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.formdesk.com/openuniversiteit/aanmeldformulier_online_open_week_november_2026"
},
{
"datum": "2026-11-19",
"tijd": "16:00-17:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.formdesk.com/openuniversiteit/aanmeldformulier_online_open_week_november_2026"
},
{
"datum": "2026-11-24",
"tijd": "15:00-15:30",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.formdesk.com/openuniversiteit/aanmeldformulier_online_open_week_november_2026"
},
{
"datum": "2026-11-24",
"tijd": "19:00-20:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.formdesk.com/openuniversiteit/aanmeldformulier_online_open_week_november_2026"
},
{
"datum": "2026-11-25",
"tijd": "19:00-20:45",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.formdesk.com/openuniversiteit/aanmeldformulier_online_open_week_november_2026"
}
]
},
"Amsterdamse Hogeschool voor de Kunsten": {
"site": "https://www.ahk.nl/en/study/choose-your-study-programme/open-days/",
"dagen": [
{
"datum": "2026-11-14",
"tijd": "10:30",
"soort": "open dag",
"plaats": "Amsterdam (Conservatorium van Amsterdam; Klassiek, Jazz, Docent Muziek)",
"aanmelden": "https://www.ahk.nl/en/news-and-events/agenda/2026/11/14/opera-il-ritorno-dulisse-in-patria-1-1-2-1-1/"
},
{
"datum": "2026-11-28",
"tijd": "11:00",
"soort": "open dag",
"plaats": "Amsterdam (Conservatorium van Amsterdam Pop/AEMA, Q-Factory)",
"aanmelden": "https://www.ahk.nl/en/news-and-events/agenda/2026/11/28/pop-aema-open-dag-1-1/"
},
{
"datum": "2026-11-28",
"tijd": "11:00",
"soort": "open dag",
"plaats": "Amsterdam (Nederlandse Filmacademie)",
"aanmelden": "https://www.ahk.nl/en/news-and-events/agenda/2026/11/28/open-dag-filmacademie-2/"
},
{
"datum": "2026-11-28",
"tijd": "10:30",
"soort": "open dag",
"plaats": "Amsterdam (Academie voor Theater en Dans)",
"aanmelden": "https://www.atd.ahk.nl/en/news-and-events/open-days/open-day-atd/"
},
{
"datum": "2027-01-23",
"tijd": "11:00",
"soort": "open dag",
"plaats": "Amsterdam (Nederlandse Filmacademie)",
"aanmelden": "https://www.ahk.nl/en/news-and-events/agenda/2027/1/23/open-dag-filmacademie-1-1/"
},
{
"datum": "2027-01-30",
"soort": "open dag",
"plaats": "Amsterdam (Nationale Balletacademie)",
"aanmelden": "https://www.atd.ahk.nl/en/dance-programmes/dutch-national-ballet-academy/special-activities/open-day-nba/"
}
]
},
"ArtEZ": {
"site": "https://www.artez.nl/open-dagen",
"dagen": [
{
"datum": "2026-11-07",
"soort": "open dag",
"plaats": "Zwolle",
"aanmelden": "https://www.artez.nl/agenda/2026-11-07-open-dag-artez-academie-voor-art-en-design-zwolle"
},
{
"datum": "2026-11-14",
"soort": "open dag",
"plaats": "Arnhem",
"aanmelden": "https://www.artez.nl/agenda/2026-11-14-open-dag-artez-academie-voor-art-en-design-arnhem"
},
{
"datum": "2026-11-21",
"soort": "open dag",
"plaats": "Enschede",
"aanmelden": "https://www.artez.nl/agenda/2026-11-21-open-dag-aki-artez-academie-voor-art-en-design"
}
]
},
"Hogeschool voor de Kunsten Utrecht": {
"site": "https://www.hku.nl/en/study-at-hku/explore-and-apply/open-day",
"dagen": [
{
"datum": "2026-11-02",
"tijd": "13:30-16:30",
"soort": "meeloopdag",
"plaats": "Utrecht (Kunst en Economie)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-kunst-en-economie-2-november"
},
{
"datum": "2026-11-16",
"tijd": "09:00-12:30",
"soort": "meeloopdag",
"plaats": "Utrecht (Design for Change and Innovation)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-design-for-change-and-innovation-16-november"
},
{
"datum": "2026-11-21",
"tijd": "10:00-16:00",
"soort": "open dag",
"plaats": "Utrecht",
"aanmelden": "https://c.spotler.com/ct/m19/k1/j60SRiSWOSD1VUGzYlYROrgBpFhk-4JRSdAzWnQP3rsQxPcx_fqV8PvKMs9XzrbE/FH57iAaYMyy27hx"
},
{
"datum": "2026-11-30",
"tijd": "09:00-12:30",
"soort": "meeloopdag",
"plaats": "Utrecht (Design for Change and Innovation)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-design-for-change-and-innovation-30-november-ontwerp-les"
},
{
"datum": "2026-12-04",
"soort": "meeloopdag",
"plaats": "Utrecht (Fashion Design)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-fashion-design-4-december"
},
{
"datum": "2026-12-07",
"tijd": "10:00-18:00",
"soort": "meeloopdag",
"plaats": "Utrecht (Interactive Performance Design)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-interactive-performance-design-7-december-2026"
},
{
"datum": "2026-12-08",
"tijd": "09:00-16:00",
"soort": "meeloopdag",
"plaats": "Utrecht (Spatial Design)",
"aanmelden": "https://www.hku.nl/agenda/spatial-design-meeloopdag-8-december"
},
{
"datum": "2026-12-10",
"tijd": "13:30-16:30",
"soort": "meeloopdag",
"plaats": "Utrecht (Kunst en Economie)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-kunst-en-economie-10-december"
},
{
"datum": "2026-12-15",
"tijd": "12:00-17:00",
"soort": "meeloopdag",
"plaats": "Utrecht (Theatervormgeving; vol)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-tvg-15-december-2026"
},
{
"datum": "2026-12-17",
"soort": "meeloopdag",
"plaats": "Utrecht (Design for Change and Innovation)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-design-for-change-and-innovation-17-december-expositie-jaar-1"
},
{
"datum": "2027-01-12",
"tijd": "13:00-16:00",
"soort": "meeloopdag",
"plaats": "Utrecht (Kunst en Economie)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-kunst-en-economie-12-januari"
},
{
"datum": "2027-02-01",
"tijd": "10:00-18:00",
"soort": "meeloopdag",
"plaats": "Utrecht (Interactive Performance Design)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-interactive-performance-design-1-februari-2027"
},
{
"datum": "2027-03-09",
"tijd": "09:00-16:00",
"soort": "meeloopdag",
"plaats": "Utrecht (Spatial Design)",
"aanmelden": "https://www.hku.nl/agenda/spatial-design-meeloopdag-9-maart-2027"
},
{
"datum": "2027-03-18",
"tijd": "12:00-17:00",
"soort": "meeloopdag",
"plaats": "Utrecht (Theatervormgeving; vol)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-tvg-18-maart-2027"
},
{
"datum": "2027-04-02",
"soort": "meeloopdag",
"plaats": "Utrecht (Fashion Design)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-fashion-design-2-april-2027"
},
{
"datum": "2027-04-09",
"tijd": "09:00-16:00",
"soort": "meeloopdag",
"plaats": "Utrecht (Spatial Design)",
"aanmelden": "https://www.hku.nl/agenda/spatial-design-meeloopdag-9-april-2027"
},
{
"datum": "2027-04-20",
"soort": "meeloopdag",
"plaats": "Utrecht (Design for Change and Innovation)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-design-for-change-and-innovation-20-april-expositie-jaar-1,-diversiteit-en-inclusie"
},
{
"datum": "2027-06-24",
"tijd": "09:00",
"soort": "meeloopdag",
"plaats": "Utrecht (Design for Change and Innovation)",
"aanmelden": "https://www.hku.nl/agenda/meeloopdag-design-for-change-and-innovation-24-juni-exposure"
}
]
},
"Hogeschool der Kunsten Den Haag": {
"site": "https://www.kabk.nl/en/open-day",
"dagen": [
{
"datum": "2026-11-28",
"tijd": "10:00-16:00",
"soort": "open dag",
"plaats": "Den Haag (KABK, Prinsessegracht 4)",
"aanmelden": "https://kabk.stager.co/shop/open-day"
},
{
"datum": "2026-11-28",
"tijd": "09:30-17:00",
"soort": "open dag",
"plaats": "Den Haag (Koninklijk Conservatorium, Amare)",
"aanmelden": "https://hdkdenhaag.stager.co/shop/opendag/events/111688868"
}
]
},
"Codarts, Hogeschool voor de Kunsten": {
"site": "https://www.codarts.nl/en/practical-matters/information-events/open-days",
"dagen": [
{
"datum": "2026-11-21",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Rotterdam (Kruisplein 26) - Klassieke Muziek (ook online)",
"aanmelden": "https://forms.cloud.microsoft/pages/responsepage.aspx?id=P3m-qpyzDESOGg3PtiFWCQPmDtaCC0dAoxaMkvNtmAdUNloyTEtIVkJRMUlGQk9YN0tUVDdEVEpLVC4u&route=shorturl"
},
{
"datum": "2026-11-23",
"tijd": "19:00-21:00",
"soort": "online open dag",
"plaats": "online - Jazz",
"aanmelden": "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=P3m-qpyzDESOGg3PtiFWCVMijO-gpxVAkP2MiIDGNrRUQUlYMFdPUVdTTUNGWEhZVVpWSkFLVU9MWS4u"
},
{
"datum": "2026-11-26",
"tijd": "18:00-22:00",
"soort": "open dag",
"plaats": "Rotterdam (WMDC, Pieter de Hoochweg 125) - Pop, Jazz & Global Musics",
"aanmelden": "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=P3m-qpyzDESOGg3PtiFWCY3cm39SQ-BJjVRo7exgQvhUMllCN1BWMTlTSkIyQkNTM0daN1VIWDBPWS4u"
},
{
"datum": "2026-11-27",
"tijd": "18:00-20:30",
"soort": "open dag",
"plaats": "Rotterdam (Kruisplein 26) - Musical Theatre",
"aanmelden": "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=P3m-qpyzDESOGg3PtiFWCaLdeIomxqhPsUcNyxwJkvJUQzI4MzJOMkZXRE42SEZWTE0zSkhIUEtFWi4u&embed=true"
},
{
"datum": "2026-11-27",
"tijd": "18:00-21:00",
"soort": "open dag",
"plaats": "Rotterdam (Kruisplein 26) - Docent Muziek",
"aanmelden": "https://forms.cloud.microsoft/pages/responsepage.aspx?id=P3m-qpyzDESOGg3PtiFWCWfWE7bxfKhJipxDfQVQawFUQjJMOE84OFpKWjRDR0lPM1ZBTjJTVDFMMy4u&route=shorturl"
},
{
"datum": "2026-11-30",
"tijd": "16:00-17:15",
"soort": "online open dag",
"plaats": "online - Circus",
"aanmelden": "https://forms.cloud.microsoft/pages/responsepage.aspx?id=P3m-qpyzDESOGg3PtiFWCVjrn69O57tCpU7dNKC5O51URDhIS1NRWkhXT1g5NzA4STg3NEswUkQxRC4u"
},
{
"datum": "2026-12-11",
"tijd": "16:00-21:00",
"soort": "open dag",
"plaats": "Rotterdam (Kruisplein 26) - Docent Dans",
"aanmelden": "https://www.formdesk.com/codarts/openavonddd"
}
]
},
"Gerrit Rietveld Academie": {
"site": "https://rietveldacademie.nl/en/page/421/open-days",
"dagen": [
{
"datum": "2026-11-24",
"tijd": "16:00-17:15",
"soort": "online open dag",
"plaats": "online (Zoom)",
"aanmelden": "https://formz.adrez.plus/PTQ8V27lKX"
},
{
"datum": "2027-01-29",
"soort": "open dag",
"plaats": "Amsterdam (Fred. Roeskestraat 96)"
}
]
},
"Design Academy Eindhoven": {
"site": "https://www.designacademy.nl/page/500/info-days",
"dagen": [
{
"datum": "2026-11-27",
"soort": "proefstuderen",
"plaats": "Eindhoven (Emmasingel 14)",
"aanmelden": "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=JP0cLFxinkix_I90WDDqZwzkv_2oEEBItCiHBf-stmpUMVpCNjZJUzk2VElNQUFZSDFSUUhKWlVUUSQlQCN0PWcu"
},
{
"datum": "2026-12-11",
"tijd": "10:00-15:30",
"soort": "open dag",
"plaats": "Eindhoven (Emmasingel 14)",
"aanmelden": "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=JP0cLFxinkix_I90WDDqZwzkv_2oEEBItCiHBf-stmpUNlpROTdJU0g1VzlEMkRDWkwzS1IxOFEwNyQlQCN0PWcu"
},
{
"datum": "2027-01-29",
"soort": "proefstuderen",
"plaats": "Eindhoven (Emmasingel 14)",
"aanmelden": "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=JP0cLFxinkix_I90WDDqZwzkv_2oEEBItCiHBf-stmpUMVpCNjZJUzk2VElNQUFZSDFSUUhKWlVUUSQlQCN0PWcu"
}
]
},
"Universiteit voor Humanistiek": {
"site": "https://www.uvh.nl/onderwijs/open-dagen-en-proefcolleges/",
"dagen": [
{
"datum": "2026-11-07",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Utrecht (Kromme Nieuwegracht 29)",
"aanmelden": "https://crm.uvh.nl/e/69f1f8dbf398a67c5e7c1b08/?locale=nl"
},
{
"datum": "2026-12-09",
"tijd": "12:45-15:30",
"soort": "proefstuderen",
"plaats": "Utrecht (Kromme Nieuwegracht 29)",
"aanmelden": "https://www.uvh.nl/agenda/proefcollege-bachelor-humanistiek-9-december/"
},
{
"datum": "2027-03-13",
"tijd": "10:00-16:00",
"soort": "open dag",
"plaats": "Utrecht (Kromme Nieuwegracht 29)",
"aanmelden": "https://crm.uvh.nl/e/6ae1a27c9a52afb7949095af/?locale=nl"
}
]
},
"Protestantse Theologische Universiteit": {
"site": "https://www.pthu.nl/onderwijs/praktische-informatie/voorlichtingsdagen/",
"dagen": [
{
"datum": "2026-11-16",
"tijd": "09:00-16:15",
"soort": "meeloopdag",
"plaats": "Utrecht (Jansdam)",
"aanmelden": "https://www.pthu.nl/actueel/agenda/2026/11/meeloopdag-bachelor-theologie/"
},
{
"datum": "2026-11-21",
"tijd": "10:00-12:00",
"soort": "open dag",
"plaats": "Utrecht (Jansdam)",
"aanmelden": "https://www.pthu.nl/actueel/agenda/2026/11/bachelorvoorlichting-theologie-in-utrecht/"
},
{
"datum": "2026-12-07",
"tijd": "09:00-16:15",
"soort": "meeloopdag",
"plaats": "Utrecht (Jansdam)",
"aanmelden": "https://www.pthu.nl/actueel/agenda/2026/12/meeloopdag-bachelor-theologie/"
},
{
"datum": "2027-01-11",
"tijd": "09:00-16:15",
"soort": "meeloopdag",
"plaats": "Utrecht (Jansdam)",
"aanmelden": "https://www.pthu.nl/actueel/agenda/2027/01/meeloopdag-bachelor-theologie/"
},
{
"datum": "2027-02-10",
"tijd": "10:45-16:15",
"soort": "meeloopdag",
"plaats": "Utrecht (Jansdam)",
"aanmelden": "https://www.pthu.nl/actueel/agenda/2027/02/meeloopdag-bachelor-theologie/"
},
{
"datum": "2027-03-13",
"tijd": "10:00-12:00",
"soort": "open dag",
"plaats": "Utrecht (Jansdam)",
"aanmelden": "https://www.pthu.nl/actueel/agenda/2027/03/bachelorvoorlichting-theologie-in-utrecht/"
},
{
"datum": "2027-03-17",
"tijd": "10:45-16:15",
"soort": "meeloopdag",
"plaats": "Utrecht (Jansdam)",
"aanmelden": "https://www.pthu.nl/actueel/agenda/2027/03/meeloopdag-bachelor-theologie/"
},
{
"datum": "2027-04-26",
"tijd": "09:00-16:15",
"soort": "meeloopdag",
"plaats": "Utrecht (Jansdam)",
"aanmelden": "https://www.pthu.nl/actueel/agenda/2027/04/meeloopdag-bachelor-theologie/"
}
]
},
"Theologische Universiteit Apeldoorn": {
"site": "https://www.tua.nl/nl/onderwijs/dagje-meelopen-1",
"dagen": []
},
"Nyenrode Business Universiteit": {
"site": "https://www.nyenrode.nl/en/events",
"dagen": [
{
"datum": "2026-11-21",
"tijd": "09:30-13:30",
"soort": "open dag",
"plaats": "Breukelen (Straatweg 25)",
"aanmelden": "https://www.nyenrode.nl/en/events/e/open-day-breukelen-bsc-in-business-administration-21nov"
},
{
"datum": "2026-12-03",
"tijd": "14:30-16:30",
"soort": "open dag",
"plaats": "Amsterdam (Keizersgracht 285)",
"aanmelden": "https://www.nyenrode.nl/en/events/e/open-day-amsterdam-bsc-in-business-administration-3dec"
},
{
"datum": "2026-12-08",
"tijd": "15:00-16:00",
"soort": "online open dag",
"plaats": "online",
"aanmelden": "https://www.nyenrode.nl/en/events/e/online-information-session-bachelor-of-science-in-business-administration-8dec"
}
]
},
"Politieacademie": {
"site": "https://www.politieacademie.nl/over-ons/agenda",
"dagen": []
},
"Faculteit Militaire Wetenschappen van de Nederlandse Defensie Academie": {
"site": "https://www.defensie.nl/onderwerpen/d/defensieacademie/toelating",
"dagen": []
}
};
