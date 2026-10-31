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
},
"Noorderpoort": {
"site": "https://noorderpoort.nl/over-noorderpoort/agenda",
"dagen": [
{
"datum": "2026-11-18",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Appingedam",
"adres": "Pastorielaan 4",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2026-11-18",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Delfzijl",
"adres": "Duurswoldlaan 2A",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2026-11-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Groningen",
"adres": "Bornholmstraat 31, Boumaboulevard 113, Hora Siccamasingel 177, Muntinglaan 3, Verlengde Visserstraat 20, Verzetsstrijderslaan 2, Winschoterdiep 50, Zernikeplein 11",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2026-11-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Stadskanaal",
"adres": "Sportparklaan 5",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2026-11-18",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Veendam",
"adres": "Hertenkampstraat 6",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2026-11-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Winschoten",
"adres": "P.C. Hooftlaan 1",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2026-11-28",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Delfzijl",
"adres": "Duurswoldlaan 2A (alleen scheepvaart, AOT en procestechniek)",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/agenda/open-dag-28-november-2026"
},
{
"datum": "2027-01-20",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Appingedam",
"adres": "Pastorielaan 4",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2027-01-20",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Delfzijl",
"adres": "Duurswoldlaan 2A",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2027-01-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Groningen",
"adres": "Bornholmstraat 31, Boumaboulevard 113, Hora Siccamasingel 177, Muntinglaan 3, Verlengde Visserstraat 20, Verzetsstrijderslaan 2, Winschoterdiep 50, Zernikeplein 11",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2027-01-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Stadskanaal",
"adres": "Sportparklaan 5",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2027-01-20",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Veendam",
"adres": "Hertenkampstraat 6",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2027-01-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Winschoten",
"adres": "P.C. Hooftlaan 1",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2027-03-17",
"tijd": "17:00-19:00",
"soort": "open dag",
"plaats": "Appingedam",
"adres": "Pastorielaan 4",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2027-03-17",
"tijd": "17:00-19:00",
"soort": "open dag",
"plaats": "Delfzijl",
"adres": "Duurswoldlaan 2A",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2027-03-17",
"tijd": "17:00-20:00",
"soort": "open dag",
"plaats": "Groningen",
"adres": "Bornholmstraat 31, Boumaboulevard 113, Hora Siccamasingel 177, Muntinglaan 3, Verlengde Visserstraat 20, Verzetsstrijderslaan 2, Winschoterdiep 50, Zernikeplein 11",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2027-03-17",
"tijd": "17:00-20:00",
"soort": "open dag",
"plaats": "Stadskanaal",
"adres": "Sportparklaan 5",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2027-03-17",
"tijd": "17:00-19:00",
"soort": "open dag",
"plaats": "Veendam",
"adres": "Hertenkampstraat 6",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2027-03-17",
"tijd": "17:00-20:00",
"soort": "open dag",
"plaats": "Winschoten",
"adres": "P.C. Hooftlaan 1",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/opendagen"
},
{
"datum": "2027-06-16",
"tijd": "17:00-19:00",
"soort": "open dag",
"plaats": "Groningen",
"adres": "Bornholmstraat 31 (Last Minute Event, alle opleidingen aanwezig)",
"aanmelden": "https://noorderpoort.nl/over-noorderpoort/agenda/last-minute-event-16-juni-2027"
}
]
},
"Alfa-college": {
"site": "https://www.alfa-college.nl/studiekeuze/open-dagen",
"dagen": [
{
"datum": "2026-11-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Groningen",
"adres": "meerdere locaties in Groningen (o.a. Boumaboulevard, Admiraal de Ruyterlaan, Kardingerplein)",
"aanmelden": "https://forms.hippocampus.eu/alfacollege/opendaggroningen/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiJlODEyODFiMy0zN2JmLTRiYTktODI1OS1lNGM2ODMwYjJlYjgifQ"
},
{
"datum": "2026-11-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Hardenberg",
"adres": "Parkweg 1a1 (LOC)",
"aanmelden": "https://forms.hippocampus.eu/alfacollege/nnwaocxv4x4tksu7/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiI3OTA5M2FlNy0wMjcwLTQxYzEtOTEwNy0xMDMxMzRlMGUxNGMifQ"
},
{
"datum": "2026-11-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Hoogeveen",
"adres": "Voltastraat 33 & De Stroom 3 (KARgo!)",
"aanmelden": "https://forms.hippocampus.eu/alfacollege/t6er43wdozgp8y52/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiI1ZWMwYzYzMC1lYzA2LTRlYzQtYWE1Zi1mODczZGQzYTE1ZDgifQ"
},
{
"datum": "2026-11-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Assen",
"adres": "Anne de Vriesstraat 70 (Sport- en Beweegcampus, alleen Sport en Bewegen)",
"aanmelden": "https://studiekeuze.dcterra.nl/agenda/item/44"
},
{
"datum": "2027-01-20",
"soort": "open dag",
"adres": "locaties in Groningen, Hoogeveen, Hardenberg en Assen",
"aanmelden": "https://www.alfa-college.nl/studiekeuze/open-dagen"
},
{
"datum": "2027-03-17",
"soort": "open dag",
"adres": "locaties in Groningen, Hoogeveen, Hardenberg en Assen",
"aanmelden": "https://www.alfa-college.nl/studiekeuze/open-dagen"
},
{
"datum": "2027-06-16",
"soort": "open dag",
"adres": "Last Minute Studiekeuze",
"aanmelden": "https://www.alfa-college.nl/studiekeuze/open-dagen"
}
]
},
"Drenthe College": {
"site": "https://mbo.dcterra.nl/agenda/",
"dagen": [
{
"datum": "2026-11-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Assen",
"adres": "Anne de Vriesstraat 70; Aziëweg 2; De Haar 17; Vredeveldseweg 55",
"aanmelden": "https://studiekeuze.dcterra.nl/agenda/item/44"
},
{
"datum": "2026-11-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Emmen",
"adres": "Anna Paulownalaan 1; Atlantis 2; Huizingsbrinkweg 9; Ubbekingecamp 1; Van Schaikweg 94; Van Schaikweg 98; Veldlaan 2",
"aanmelden": "https://studiekeuze.dcterra.nl/agenda/item/44"
},
{
"datum": "2026-11-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Groningen",
"adres": "Hereweg 99",
"aanmelden": "https://studiekeuze.dcterra.nl/agenda/item/44"
},
{
"datum": "2026-11-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Meppel",
"adres": "Ambachtsweg 2; Werkhorst 56",
"aanmelden": "https://studiekeuze.dcterra.nl/agenda/item/44"
},
{
"datum": "2026-11-21",
"tijd": "12:00-15:00",
"soort": "open dag",
"plaats": "Exloo",
"adres": "Hippisch Centrum Exloo (alleen Paardensport en -houderij)",
"aanmelden": "https://studiekeuze.dcterra.nl/agenda/item/45"
},
{
"datum": "2027-01-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Assen",
"adres": "Anne de Vriesstraat 70; Aziëweg 2; De Haar 17; Vredeveldseweg 55",
"aanmelden": "https://mbo.dcterra.nl/agenda/open-dag-januari/"
},
{
"datum": "2027-01-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Emmen",
"adres": "Anna Paulownalaan 1; Atlantis 2; Huizingsbrinkweg 9; Ubbekingecamp 1; Van Schaikweg 94; Van Schaikweg 98; Veldlaan 2",
"aanmelden": "https://mbo.dcterra.nl/agenda/open-dag-januari/"
},
{
"datum": "2027-01-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Groningen",
"adres": "Hereweg 99",
"aanmelden": "https://mbo.dcterra.nl/agenda/open-dag-januari/"
},
{
"datum": "2027-01-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Meppel",
"adres": "Ambachtsweg 2; Werkhorst 56",
"aanmelden": "https://mbo.dcterra.nl/agenda/open-dag-januari/"
},
{
"datum": "2027-01-23",
"tijd": "12:00-15:00",
"soort": "open dag",
"plaats": "Exloo",
"adres": "Hippisch Centrum Exloo (alleen Paardensport en -houderij)",
"aanmelden": "https://mbo.dcterra.nl/agenda/open-dag-paardensport-en-houderij-januari/"
},
{
"datum": "2027-03-17",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Assen",
"adres": "Anne de Vriesstraat 70; Aziëweg 2; De Haar 17; Vredeveldseweg 55",
"aanmelden": "https://mbo.dcterra.nl/agenda/open-dag-maart/"
},
{
"datum": "2027-03-17",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Emmen",
"adres": "Anna Paulownalaan 1; Atlantis 2; Huizingsbrinkweg 9; Ubbekingecamp 1; Van Schaikweg 94; Van Schaikweg 98; Veldlaan 2",
"aanmelden": "https://mbo.dcterra.nl/agenda/open-dag-maart/"
},
{
"datum": "2027-03-17",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Groningen",
"adres": "Hereweg 99",
"aanmelden": "https://mbo.dcterra.nl/agenda/open-dag-maart/"
},
{
"datum": "2027-03-17",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Meppel",
"adres": "Ambachtsweg 2; Werkhorst 56",
"aanmelden": "https://mbo.dcterra.nl/agenda/open-dag-maart/"
},
{
"datum": "2027-06-16",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Assen",
"adres": "Anne de Vriesstraat 70 (Last Minute Studiekeuze)",
"aanmelden": "https://mbo.dcterra.nl/agenda/last-minute-studiekeuze/"
},
{
"datum": "2027-06-16",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Emmen",
"adres": "Van Schaikweg 98 (Last Minute Studiekeuze)",
"aanmelden": "https://mbo.dcterra.nl/agenda/last-minute-studiekeuze/"
},
{
"datum": "2027-06-16",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Groningen",
"adres": "Hereweg 99 (Last Minute Studiekeuze)",
"aanmelden": "https://mbo.dcterra.nl/agenda/last-minute-studiekeuze/"
},
{
"datum": "2027-06-16",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Meppel",
"adres": "Ambachtsweg 2 (Last Minute Studiekeuze)",
"aanmelden": "https://mbo.dcterra.nl/agenda/last-minute-studiekeuze/"
}
]
},
"Firda": {
"site": "https://www.firda.nl/open-dag",
"dagen": [
{
"datum": "2026-11-19",
"tijd": "15:00-20:00",
"soort": "open dag",
"adres": "alle Firda-locaties",
"aanmelden": "https://www.firda.nl/open-dag#aanmelden"
},
{
"datum": "2026-11-21",
"tijd": "09:30-12:30",
"soort": "open dag",
"plaats": "Urk",
"adres": "Scheepvaart en Visserij",
"aanmelden": "https://www.firda.nl/agenda/open-dag-scheepvaart-en-visserij-21-november-jongeren#aanmelden"
},
{
"datum": "2027-01-28",
"tijd": "15:00-20:00",
"soort": "open dag",
"adres": "alle Firda-locaties behalve Urk",
"aanmelden": "https://www.firda.nl/open-dag"
},
{
"datum": "2027-01-29",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Urk",
"aanmelden": "https://www.firda.nl/open-dag"
},
{
"datum": "2027-01-30",
"tijd": "09:30-12:30",
"soort": "open dag",
"plaats": "Urk",
"aanmelden": "https://www.firda.nl/open-dag"
}
]
},
"Menso Alting": {
"site": "https://www.mbomensoalting.nl/open-dag/",
"dagen": [
{
"datum": "2026-11-06",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Zwolle",
"adres": "Fuchsiastraat 1",
"aanmelden": "https://events.blackthorn.io/nl/24rIcd6/g/C9CTAGF35Z/open-dag-or-vrijdag-6-november-5a3uTg2pB3V/overview"
},
{
"datum": "2027-01-15",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Zwolle",
"adres": "Fuchsiastraat 1"
},
{
"datum": "2027-03-12",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Zwolle",
"adres": "Fuchsiastraat 1"
},
{
"datum": "2027-06-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Zwolle",
"adres": "Fuchsiastraat 1 (Informatiemarkt)"
}
]
},
"Landstede": {
"site": "https://www.landstedembo.nl/open-dagen/",
"dagen": [
{
"datum": "2026-11-06",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Zwolle",
"aanmelden": "https://events.blackthorn.io/nl/24rIcd6/g/cphjvQqB2Z?search=&sortBy=date&category=&date=TODAY&keywords="
},
{
"datum": "2026-11-06",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Harderwijk",
"aanmelden": "https://events.blackthorn.io/nl/24rIcd6/g/cphjvQqB2Z?search=&sortBy=date&category=&date=TODAY&keywords="
},
{
"datum": "2026-11-06",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Raalte",
"adres": "Zwolsestraat 63a",
"aanmelden": "https://events.blackthorn.io/nl/24rIcd6/g/cphjvQqB2Z?search=&sortBy=date&category=&date=TODAY&keywords="
},
{
"datum": "2026-11-06",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Lelystad",
"adres": "Het Ravelijn 1",
"aanmelden": "https://events.blackthorn.io/nl/24rIcd6/g/cphjvQqB2Z?search=&sortBy=date&category=&date=TODAY&keywords="
},
{
"datum": "2026-11-06",
"tijd": "15:00-18:00",
"soort": "open dag",
"plaats": "Dronten",
"adres": "De Arend 4",
"aanmelden": "https://events.blackthorn.io/nl/24rIcd6/g/cphjvQqB2Z?search=&sortBy=date&category=&date=TODAY&keywords="
},
{
"datum": "2027-01-15",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Zwolle",
"aanmelden": "https://events.blackthorn.io/nl/24rIcd6/g/cphjvQqB2Z?search=&sortBy=date&category=&date=TODAY&keywords="
},
{
"datum": "2027-01-15",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Harderwijk",
"aanmelden": "https://events.blackthorn.io/nl/24rIcd6/g/cphjvQqB2Z?search=&sortBy=date&category=&date=TODAY&keywords="
},
{
"datum": "2027-01-15",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Raalte",
"adres": "Zwolsestraat 63a",
"aanmelden": "https://events.blackthorn.io/nl/24rIcd6/g/cphjvQqB2Z?search=&sortBy=date&category=&date=TODAY&keywords="
},
{
"datum": "2027-01-15",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Lelystad",
"adres": "Het Ravelijn 1",
"aanmelden": "https://events.blackthorn.io/nl/24rIcd6/g/cphjvQqB2Z?search=&sortBy=date&category=&date=TODAY&keywords="
},
{
"datum": "2027-01-15",
"tijd": "15:00-18:00",
"soort": "open dag",
"plaats": "Dronten",
"adres": "De Arend 4",
"aanmelden": "https://events.blackthorn.io/nl/24rIcd6/g/cphjvQqB2Z?search=&sortBy=date&category=&date=TODAY&keywords="
}
]
},
"Deltion College": {
"site": "https://www.deltion.nl/voor-jongeren/open-dagen",
"dagen": [
{
"datum": "2026-11-13",
"tijd": "16:00-20:30",
"soort": "open dag",
"plaats": "Zwolle",
"adres": "Mozartlaan 15",
"aanmelden": "https://www.deltion.nl/aanmelding-open-dag-avond?eventId=2441"
},
{
"datum": "2026-11-14",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Zwolle",
"adres": "Mozartlaan 15",
"aanmelden": "https://www.deltion.nl/aanmelding-open-dag-avond?eventId=2441"
},
{
"datum": "2027-01-15",
"tijd": "16:00-20:30",
"soort": "open dag",
"plaats": "Zwolle",
"adres": "Mozartlaan 15",
"aanmelden": "https://www.deltion.nl/onze-school/ontdek-deltion/events/2027/januari/opendagenjanuari"
},
{
"datum": "2027-01-16",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Zwolle",
"adres": "Mozartlaan 15",
"aanmelden": "https://www.deltion.nl/onze-school/ontdek-deltion/events/2027/januari/opendagenjanuari"
},
{
"datum": "2027-03-19",
"tijd": "16:00-20:30",
"soort": "open avond",
"plaats": "Zwolle",
"adres": "Mozartlaan 15",
"aanmelden": "https://www.deltion.nl/onze-school/ontdek-deltion/events/2027/maart/openavondmaart"
},
{
"datum": "2027-06-04",
"tijd": "18:00-20:30",
"soort": "open avond",
"plaats": "Zwolle",
"adres": "Mozartlaan 15 (informatieavond)",
"aanmelden": "https://www.deltion.nl/onze-school/ontdek-deltion/events/2027/juni/openavondjuni"
}
]
},
"Graafschap College": {
"site": "https://www.graafschapcollege.nl/open-dagen-en-events",
"dagen": [
{
"datum": "2026-11-06",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Doetinchem",
"adres": "J.F. Kennedylaan 49; Maria Montessoristraat 3; Sportweg 3",
"aanmelden": "https://forms.hippocampus.eu/graafschapcollege/opendagen/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiIxZjhmNmI3Ny1mNTJhLTQ3OWYtYmVkNS05NWExNTA2YmNmN2YifQ"
},
{
"datum": "2026-11-06",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Groenlo",
"adres": "Schralenstein 2",
"aanmelden": "https://forms.hippocampus.eu/graafschapcollege/opendagen/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiIxZjhmNmI3Ny1mNTJhLTQ3OWYtYmVkNS05NWExNTA2YmNmN2YifQ"
},
{
"datum": "2027-01-29",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "deelnemende locaties (nog niet gespecificeerd)",
"aanmelden": "https://www.graafschapcollege.nl/open-dagen-en-events/open-dag-januari-2027"
}
]
},
"Aventus": {
"site": "https://www.aventus.nl/agenda",
"dagen": [
{
"datum": "2026-11-27",
"tijd": "17:00-20:00",
"soort": "open avond",
"plaats": "Apeldoorn",
"adres": "Laan van de Mensenrechten; Musschenbroekstraat; Opleidingsbedrijf Bouwmensen",
"aanmelden": "https://events.blackthorn.io/b0cjXs6/4a3lP6D7Jp"
},
{
"datum": "2026-11-27",
"tijd": "17:00-20:00",
"soort": "open avond",
"plaats": "Deventer",
"adres": "Snipperlingsdijk; Middelweg; Technicampus",
"aanmelden": "https://events.blackthorn.io/b0cjXs6/4a3lP6D7Jp"
},
{
"datum": "2026-11-27",
"tijd": "17:00-20:00",
"soort": "open avond",
"plaats": "Zutphen",
"adres": "Stationsplein; Schildersvakopleiding",
"aanmelden": "https://events.blackthorn.io/b0cjXs6/4a3lP6D7Jp"
},
{
"datum": "2027-01-23",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Apeldoorn",
"adres": "Laan van de Mensenrechten; Musschenbroekstraat; Opleidingsbedrijf Bouwmensen",
"aanmelden": "https://www.aventus.nl/agenda/open-dag"
},
{
"datum": "2027-01-23",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Deventer",
"adres": "Snipperlingsdijk; Middelweg; Technicampus",
"aanmelden": "https://www.aventus.nl/agenda/open-dag"
},
{
"datum": "2027-01-23",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Zutphen",
"adres": "Stationsplein; Schildersvakopleiding",
"aanmelden": "https://www.aventus.nl/agenda/open-dag"
},
{
"datum": "2027-03-10",
"tijd": "17:00-20:00",
"soort": "open avond",
"plaats": "Apeldoorn",
"adres": "Laan van de Mensenrechten; Musschenbroekstraat; Opleidingsbedrijf Bouwmensen",
"aanmelden": "https://www.aventus.nl/agenda/open-avond-2027"
},
{
"datum": "2027-03-10",
"tijd": "17:00-20:00",
"soort": "open avond",
"plaats": "Deventer",
"adres": "Snipperlingsdijk; Middelweg; Technicampus",
"aanmelden": "https://www.aventus.nl/agenda/open-avond-2027"
},
{
"datum": "2027-03-10",
"tijd": "17:00-20:00",
"soort": "open avond",
"plaats": "Zutphen",
"adres": "Stationsplein; Schildersvakopleiding",
"aanmelden": "https://www.aventus.nl/agenda/open-avond-2027"
}
]
},
"Rijn IJssel": {
"site": "https://www.rijnijssel.nl/opendagen",
"dagen": [
{
"datum": "2026-11-05",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Arnhem",
"adres": "Apeldoornseweg; Beukenlaan (CIOS); Kazerneplein; Kronenburgsingel; Loods; Middachtensingel; Tech Plaza Tivolilaan; Velperweg; Witte Villa Tivolilaan",
"aanmelden": "https://assets-eur.mkt.dynamics.com/bd89140f-6c51-40b8-9197-37a1b5d8f9aa/digitalassets/standaloneforms/56dffb7e-09ca-f011-bbd3-000d3a69b5e5?readableEventId=Open_dag_5_november_20263410113788"
},
{
"datum": "2026-11-05",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Huissen",
"adres": "Nijverheidsstraat",
"aanmelden": "https://assets-eur.mkt.dynamics.com/bd89140f-6c51-40b8-9197-37a1b5d8f9aa/digitalassets/standaloneforms/56dffb7e-09ca-f011-bbd3-000d3a69b5e5?readableEventId=Open_dag_5_november_20263410113788"
},
{
"datum": "2026-11-05",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Nijmegen",
"adres": "Laan van Scheut",
"aanmelden": "https://assets-eur.mkt.dynamics.com/bd89140f-6c51-40b8-9197-37a1b5d8f9aa/digitalassets/standaloneforms/56dffb7e-09ca-f011-bbd3-000d3a69b5e5?readableEventId=Open_dag_5_november_20263410113788"
},
{
"datum": "2026-11-05",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Wageningen",
"adres": "Marijkeweg",
"aanmelden": "https://assets-eur.mkt.dynamics.com/bd89140f-6c51-40b8-9197-37a1b5d8f9aa/digitalassets/standaloneforms/56dffb7e-09ca-f011-bbd3-000d3a69b5e5?readableEventId=Open_dag_5_november_20263410113788"
},
{
"datum": "2026-11-07",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Nijmegen",
"adres": "Laan van Scheut (alleen laboratorium-opleidingen)",
"aanmelden": "https://assets-eur.mkt.dynamics.com/bd89140f-6c51-40b8-9197-37a1b5d8f9aa/digitalassets/standaloneforms/2b9bf5ec-e3a4-f011-bbd3-7ced8d2c38aa?readableEventId=Open_dag_7_november_2026_alleen_voor_Analist_Nijmegen2170577252"
},
{
"datum": "2027-01-13",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Arnhem",
"adres": "Apeldoornseweg; Beukenlaan (CIOS); Kazerneplein; Kronenburgsingel; Loods; Middachtensingel; Tech Plaza Tivolilaan; Velperweg; Witte Villa Tivolilaan",
"aanmelden": "https://www.rijnijssel.nl/opendagen/opendag-13-januari-2027"
},
{
"datum": "2027-01-13",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Huissen",
"adres": "Nijverheidsstraat",
"aanmelden": "https://www.rijnijssel.nl/opendagen/opendag-13-januari-2027"
},
{
"datum": "2027-01-13",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Nijmegen",
"adres": "Laan van Scheut",
"aanmelden": "https://www.rijnijssel.nl/opendagen/opendag-13-januari-2027"
},
{
"datum": "2027-01-13",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Wageningen",
"adres": "Marijkeweg",
"aanmelden": "https://www.rijnijssel.nl/opendagen/opendag-13-januari-2027"
},
{
"datum": "2027-01-23",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Nijmegen",
"adres": "Laan van Scheut (alleen laboratorium-opleidingen)",
"aanmelden": "https://www.rijnijssel.nl/opendagen/open-dag-laboratorium-opleidingen-nijmegen-23-januari-2027"
},
{
"datum": "2027-03-02",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Arnhem",
"adres": "Alexanderstraat; Apeldoornseweg; Beukenlaan (CIOS); Kazerneplein; Kronenburgsingel; Loods; Middachtensingel; Tech Plaza Tivolilaan; Velperweg; Witte Villa Tivolilaan",
"aanmelden": "https://www.rijnijssel.nl/opendagen/opendag-mbo-vavo-2-maart-2027"
},
{
"datum": "2027-03-02",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Huissen",
"adres": "Nijverheidsstraat",
"aanmelden": "https://www.rijnijssel.nl/opendagen/opendag-mbo-vavo-2-maart-2027"
},
{
"datum": "2027-03-02",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Nijmegen",
"adres": "Laan van Scheut",
"aanmelden": "https://www.rijnijssel.nl/opendagen/opendag-mbo-vavo-2-maart-2027"
},
{
"datum": "2027-03-02",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Wageningen",
"adres": "Marijkeweg",
"aanmelden": "https://www.rijnijssel.nl/opendagen/opendag-mbo-vavo-2-maart-2027"
},
{
"datum": "2027-04-03",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Nijmegen",
"adres": "Laan van Scheut (alleen laboratorium-opleidingen)",
"aanmelden": "https://www.rijnijssel.nl/opendagen/open-dag-laboratorium-opleidingen-nijmegen-3-april-2027"
},
{
"datum": "2027-05-24",
"tijd": "16:00-19:00",
"soort": "open avond",
"plaats": "Arnhem",
"adres": "Apeldoornseweg; Beukenlaan (CIOS); Kazerneplein; Kronenburgsingel; Loods; Middachtensingel; Tech Plaza Tivolilaan; Velperweg; Witte Villa Tivolilaan",
"aanmelden": "https://www.rijnijssel.nl/opendagen/informatieavond-mbo-24-mei-2027"
},
{
"datum": "2027-05-24",
"tijd": "16:00-19:00",
"soort": "open avond",
"plaats": "Huissen",
"adres": "Nijverheidsstraat",
"aanmelden": "https://www.rijnijssel.nl/opendagen/informatieavond-mbo-24-mei-2027"
},
{
"datum": "2027-05-24",
"tijd": "16:00-19:00",
"soort": "open avond",
"plaats": "Nijmegen",
"adres": "Laan van Scheut",
"aanmelden": "https://www.rijnijssel.nl/opendagen/informatieavond-mbo-24-mei-2027"
},
{
"datum": "2027-05-24",
"tijd": "16:00-19:00",
"soort": "open avond",
"plaats": "Wageningen",
"adres": "Marijkeweg",
"aanmelden": "https://www.rijnijssel.nl/opendagen/informatieavond-mbo-24-mei-2027"
}
]
},
"ROC Nijmegen": {
"site": "https://www.roc-nijmegen.nl/mbo-opleidingen/open-dagen",
"dagen": [
{
"datum": "2027-01-29",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Nijmegen",
"adres": "Campusbaan 6; Energieweg 25; Heyendaalseweg 98",
"aanmelden": "https://www.roc-nijmegen.nl/events/open-dagen-mbo/open-dag-mbo-op-29-januari-2027"
},
{
"datum": "2027-01-29",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Boxmeer",
"adres": "Begijnenstraat 2",
"aanmelden": "https://www.roc-nijmegen.nl/events/open-dagen-mbo/open-dag-mbo-op-29-januari-2027"
},
{
"datum": "2027-03-19",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Nijmegen",
"adres": "Campusbaan 6; Energieweg 25; Heyendaalseweg 98",
"aanmelden": "https://www.roc-nijmegen.nl/events/open-dagen-mbo/open-dag-mbo-op-19-maart-2027"
},
{
"datum": "2027-03-19",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Boxmeer",
"adres": "Begijnenstraat 2",
"aanmelden": "https://www.roc-nijmegen.nl/events/open-dagen-mbo/open-dag-mbo-op-19-maart-2027"
},
{
"datum": "2027-06-22",
"tijd": "18:00-20:00",
"soort": "open avond",
"plaats": "Nijmegen",
"adres": "Campusbaan 6; Energieweg 25; Heyendaalseweg 98",
"aanmelden": "https://www.roc-nijmegen.nl/events/open-dagen-mbo/info-avond-mbo-op-22-juni-2027"
},
{
"datum": "2027-06-22",
"tijd": "18:00-20:00",
"soort": "open avond",
"plaats": "Boxmeer",
"adres": "Begijnenstraat 2",
"aanmelden": "https://www.roc-nijmegen.nl/events/open-dagen-mbo/info-avond-mbo-op-22-juni-2027"
}
]
},
"Hoornbeeck College": {
"site": "https://www.hoornbeeck.nl/open-avonden/",
"dagen": [
{
"datum": "2026-11-19",
"tijd": "19:00-21:30",
"soort": "open avond",
"plaats": "Rotterdam",
"adres": "Carnissesingel 210",
"aanmelden": "https://www.hoornbeeck.nl/open-avonden/open-avond-rotterdam/"
},
{
"datum": "2026-11-26",
"tijd": "19:00-21:30",
"soort": "open avond",
"plaats": "Apeldoorn",
"adres": "Musschenbroekstraat 11",
"aanmelden": "https://www.hoornbeeck.nl/open-avonden/open-avond-apeldoorn/"
},
{
"datum": "2026-12-10",
"tijd": "19:00-21:30",
"soort": "open avond",
"plaats": "Geldermalsen",
"adres": "Burg. Roozeveld van der Venlaan 7",
"aanmelden": "https://www.hoornbeeck.nl/open-avonden/open-avond-geldermalsen/"
},
{
"datum": "2027-01-12",
"tijd": "19:30-21:30",
"soort": "open avond",
"plaats": "Kampen",
"adres": "Willem Hendrik Zwartallee 1",
"aanmelden": "https://www.hoornbeeck.nl/open-avonden/open-avond-kampen/"
},
{
"datum": "2027-01-14",
"tijd": "19:00-21:00",
"soort": "open avond",
"plaats": "Goes",
"adres": "Van Dusseldorpstraat 45",
"aanmelden": "https://www.hoornbeeck.nl/open-avonden/open-avond-goes/"
},
{
"datum": "2027-01-16",
"tijd": "10:00-12:30",
"soort": "open dag",
"plaats": "Gorinchem",
"adres": "Hoefslag 11",
"aanmelden": "https://www.hoornbeeck.nl/open-avonden/open-avond-gorinchem/"
},
{
"datum": "2027-01-28",
"tijd": "16:00-21:30",
"soort": "open avond",
"plaats": "Amersfoort",
"adres": "Utrechtseweg 230",
"aanmelden": "https://www.hoornbeeck.nl/open-avonden/open-avond-amersfoort/"
},
{
"datum": "2027-01-28",
"tijd": "19:00-22:00",
"soort": "open avond",
"plaats": "Gouda",
"adres": "Noordelijk Halfrond 10",
"aanmelden": "https://www.hoornbeeck.nl/open-avonden/open-avond-gouda/"
},
{
"datum": "2027-02-11",
"tijd": "19:00-21:00",
"soort": "open avond",
"plaats": "Apeldoorn",
"adres": "Musschenbroekstraat 11",
"aanmelden": "https://www.hoornbeeck.nl/open-avonden/open-avond-apeldoorn/"
},
{
"datum": "2027-02-11",
"tijd": "19:00-21:30",
"soort": "open avond",
"plaats": "Geldermalsen",
"adres": "Burg. Roozeveld van der Venlaan 7",
"aanmelden": "https://www.hoornbeeck.nl/open-avonden/open-avond-geldermalsen/"
},
{
"datum": "2027-03-04",
"tijd": "19:00-21:30",
"soort": "open avond",
"plaats": "Rotterdam",
"adres": "Carnissesingel 210",
"aanmelden": "https://www.hoornbeeck.nl/open-avonden/open-avond-rotterdam/"
},
{
"datum": "2027-03-16",
"tijd": "19:00-21:30",
"soort": "open avond",
"plaats": "Amersfoort",
"adres": "Utrechtseweg 230",
"aanmelden": "https://www.hoornbeeck.nl/open-avonden/open-avond-amersfoort/"
}
]
},
"Aeres MBO": {
"site": "https://www.aeresmbo.nl/agenda",
"dagen": [
{
"datum": "2026-11-10",
"tijd": "19:00-21:00",
"soort": "open avond",
"plaats": "Buitenpost",
"adres": "Aeres MBO Buitenpost",
"aanmelden": "https://www.aeresmbo.nl/agenda/buitenpost/open-avond---dinsdag-10-november"
},
{
"datum": "2026-11-19",
"tijd": "12:45-16:00",
"soort": "open dag",
"plaats": "Dronten",
"adres": "Aeres MBO Dronten Warmonderhof",
"aanmelden": "https://www.aeresmbo.nl/agenda/dronten-warmonderhof/open-dag-bol---donderdag-19-november"
},
{
"datum": "2026-11-19",
"tijd": "18:00-20:00",
"soort": "open avond",
"plaats": "Ede",
"adres": "Aeres MBO Ede",
"aanmelden": "https://www.aeresmbo.nl/agenda/ede/open-avond---donderdag-19-november"
},
{
"datum": "2026-11-19",
"tijd": "14:00-20:00",
"soort": "open dag",
"plaats": "Leeuwarden",
"adres": "Aeres MBO Leeuwarden",
"aanmelden": "https://www.aeresmbo.nl/agenda/leeuwarden/open-dag---donderdag-19-november"
},
{
"datum": "2026-11-21",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Barneveld",
"adres": "Aeres MBO Barneveld",
"aanmelden": "https://www.aeresmbo.nl/agenda/barneveld/open-dag---zaterdag-21-november"
},
{
"datum": "2026-11-24",
"tijd": "19:00-21:00",
"soort": "open avond",
"plaats": "Dronten",
"adres": "Aeres MBO Dronten",
"aanmelden": "https://www.aeresmbo.nl/agenda/dronten/open-avond---dinsdag-24-november"
},
{
"datum": "2026-11-24",
"tijd": "19:00-21:00",
"soort": "open avond",
"plaats": "Heerenveen",
"adres": "Aeres MBO Heerenveen",
"aanmelden": "https://www.aeresmbo.nl/agenda/heerenveen/open-avond---dinsdag-24-november"
},
{
"datum": "2026-11-26",
"tijd": "19:00-21:00",
"soort": "open avond",
"plaats": "Emmeloord",
"adres": "Aeres MBO Emmeloord",
"aanmelden": "https://www.aeresmbo.nl/agenda/emmeloord/open-avond---donderdag-26-november"
},
{
"datum": "2026-12-08",
"tijd": "18:30-20:30",
"soort": "open avond",
"plaats": "Almere",
"adres": "Aeres MBO Almere",
"aanmelden": "https://www.aeresmbo.nl/agenda/almere/open-avond---dinsdag-8-december"
},
{
"datum": "2027-01-22",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Barneveld",
"adres": "Aeres MBO Barneveld",
"aanmelden": "https://www.aeresmbo.nl/agenda/barneveld/open-dag---vrijdag-22-januari"
},
{
"datum": "2027-01-23",
"tijd": "10:00-13:00",
"soort": "open dag",
"plaats": "Ede",
"adres": "Aeres MBO Ede",
"aanmelden": "https://www.aeresmbo.nl/agenda/ede/open-dag---zaterdag-23-januari"
},
{
"datum": "2027-01-28",
"tijd": "14:00-20:00",
"soort": "open dag",
"plaats": "Leeuwarden",
"adres": "Aeres MBO Leeuwarden",
"aanmelden": "https://www.aeresmbo.nl/agenda/leeuwarden/open-dag---donderdag-28-januari"
},
{
"datum": "2027-01-29",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Velp",
"adres": "Aeres MBO Velp",
"aanmelden": "https://www.aeresmbo.nl/agenda/velp/open-dag---vrijdag-29-januari"
},
{
"datum": "2027-02-04",
"tijd": "19:00-21:00",
"soort": "open avond",
"plaats": "Buitenpost",
"adres": "Aeres MBO Buitenpost",
"aanmelden": "https://www.aeresmbo.nl/agenda/buitenpost/open-avond---donderdag-4-februari"
},
{
"datum": "2027-02-06",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Almere",
"adres": "Aeres MBO Almere",
"aanmelden": "https://www.aeresmbo.nl/agenda/almere/open-dag---zaterdag-6-februari"
},
{
"datum": "2027-02-06",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Dronten",
"adres": "Aeres MBO Dronten Warmonderhof",
"aanmelden": "https://www.aeresmbo.nl/agenda/dronten-warmonderhof/open-dag-bol-en-bbl---zaterdag-6-februari"
},
{
"datum": "2027-02-06",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Dronten",
"adres": "Aeres MBO Dronten",
"aanmelden": "https://www.aeresmbo.nl/agenda/dronten/open-dag---zaterdag-6-februari"
},
{
"datum": "2027-02-11",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Emmeloord",
"adres": "Aeres MBO Emmeloord",
"aanmelden": "https://www.aeresmbo.nl/agenda/emmeloord/open-dag---donderdag-11-februari"
},
{
"datum": "2027-02-16",
"tijd": "19:00-21:00",
"soort": "open avond",
"plaats": "Heerenveen",
"adres": "Aeres MBO Heerenveen",
"aanmelden": "https://www.aeresmbo.nl/agenda/heerenveen/open-avond---dinsdag-16-februari"
},
{
"datum": "2027-02-17",
"tijd": "19:00-21:00",
"soort": "open avond",
"plaats": "Sneek",
"adres": "Aeres MBO Sneek",
"aanmelden": "https://www.aeresmbo.nl/agenda/sneek/open-avond---woensdag-17-februari"
},
{
"datum": "2027-03-11",
"tijd": "18:30-20:30",
"soort": "open avond",
"plaats": "Almere",
"adres": "Aeres MBO Almere",
"aanmelden": "https://www.aeresmbo.nl/agenda/almere/open-avond---donderdag-11-maart"
},
{
"datum": "2027-03-18",
"tijd": "12:45-16:00",
"soort": "open dag",
"plaats": "Dronten",
"adres": "Aeres MBO Dronten Warmonderhof",
"aanmelden": "https://www.aeresmbo.nl/agenda/dronten-warmonderhof/open-dag-bol---donderdag-18-maart"
},
{
"datum": "2027-03-20",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Barneveld",
"adres": "Aeres MBO Barneveld",
"aanmelden": "https://www.aeresmbo.nl/agenda/barneveld/open-dag---zaterdag-20-maart"
},
{
"datum": "2027-06-01",
"tijd": "19:00-21:00",
"soort": "open avond",
"plaats": "Dronten",
"adres": "Aeres MBO Dronten",
"aanmelden": "https://www.aeresmbo.nl/agenda/dronten/open-avond---dinsdag-1-juni"
},
{
"datum": "2027-06-10",
"tijd": "12:45-16:00",
"soort": "open dag",
"plaats": "Dronten",
"adres": "Aeres MBO Dronten Warmonderhof",
"aanmelden": "https://www.aeresmbo.nl/agenda/dronten-warmonderhof/open-dag-bol---donderdag-10-juni"
}
]
},
"ROC A12": {
"site": "https://www.a12.nl/kom-kennismaken-met-onze-scholen",
"dagen": [
{
"datum": "2026-11-13",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Velp",
"adres": "Astrum College, Gruttostraat 10",
"aanmelden": "https://www.astrumcollege.nl/aanmelden-open-dag-astrum-college"
},
{
"datum": "2026-11-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Ede",
"adres": "Dulon College, Reehorsterweg 80 (Sport & Bewegen: Burgemeester Cees van der Knaapweg 10)",
"aanmelden": "https://www.duloncollege.nl/aanmelden-open-dag-dulon-college"
},
{
"datum": "2026-11-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Ede",
"adres": "Technova College, Bovenbuurtweg 7",
"aanmelden": "https://www.technovacollege.nl/aanmelden-open-dag-technova-college"
},
{
"datum": "2027-01-22",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Velp",
"adres": "Astrum College, Gruttostraat 10",
"aanmelden": "https://www.astrumcollege.nl/aanmelden-open-dag-astrum-college"
},
{
"datum": "2027-01-23",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Ede",
"adres": "Dulon College, Reehorsterweg 80 (Sport & Bewegen: Burgemeester Cees van der Knaapweg 10)",
"aanmelden": "https://www.duloncollege.nl/aanmelden-open-dag-dulon-college"
},
{
"datum": "2027-01-23",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Ede",
"adres": "Technova College, Bovenbuurtweg 7",
"aanmelden": "https://www.technovacollege.nl/aanmelden-open-dag-technova-college"
},
{
"datum": "2027-03-16",
"tijd": "17:30-20:00",
"soort": "open dag",
"plaats": "Velp",
"adres": "Astrum College, Gruttostraat 10",
"aanmelden": "https://www.astrumcollege.nl/aanmelden-open-dag-astrum-college"
},
{
"datum": "2027-03-16",
"tijd": "17:30-20:30",
"soort": "open dag",
"plaats": "Ede",
"adres": "Dulon College, Reehorsterweg 80 (Sport & Bewegen: Burgemeester Cees van der Knaapweg 10)",
"aanmelden": "https://www.duloncollege.nl/aanmelden-open-dag-dulon-college"
},
{
"datum": "2027-03-16",
"tijd": "17:30-20:30",
"soort": "open dag",
"plaats": "Ede",
"adres": "Technova College, Bovenbuurtweg 7",
"aanmelden": "https://www.technovacollege.nl/aanmelden-open-dag-technova-college"
},
{
"datum": "2027-06-03",
"tijd": "18:00-20:00",
"soort": "open dag",
"plaats": "Velp",
"adres": "Astrum College, Gruttostraat 10",
"aanmelden": "https://www.astrumcollege.nl/aanmelden-open-dag-astrum-college"
},
{
"datum": "2027-06-03",
"tijd": "18:00-20:00",
"soort": "open dag",
"plaats": "Ede",
"adres": "Dulon College, Reehorsterweg 80 (Sport & Bewegen: Burgemeester Cees van der Knaapweg 10)",
"aanmelden": "https://www.duloncollege.nl/aanmelden-open-dag-dulon-college"
},
{
"datum": "2027-06-03",
"tijd": "18:00-20:00",
"soort": "open dag",
"plaats": "Ede",
"adres": "Technova College, Bovenbuurtweg 7",
"aanmelden": "https://www.technovacollege.nl/aanmelden-open-dag-technova-college"
},
{
"datum": "2027-07-07",
"tijd": "15:00-19:00",
"soort": "open dag",
"plaats": "Ede",
"adres": "Dulon College, Reehorsterweg 80 (uitsluitend vavo & entree)",
"aanmelden": "https://www.duloncollege.nl/aanmelden-open-dag-dulon-college"
}
]
},
"ROC van Amsterdam": {
"site": "https://www.rocva.nl/jongeren/open-dagen",
"dagen": [
{
"datum": "2026-11-19",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "Amsterdam, Amstelveen, Diemen, Hoofddorp, Bussum & Hilversum",
"aanmelden": "https://www.rocva.nl/jongeren/open-dagen/19-november-2026"
},
{
"datum": "2027-01-30",
"tijd": "10:00-14:00",
"soort": "open dag",
"adres": "Amsterdam, Amstelveen, Diemen, Hoofddorp, Bussum & Hilversum",
"aanmelden": "https://www.rocva.nl/jongeren/open-dagen/30-januari-2027"
},
{
"datum": "2027-03-20",
"tijd": "10:00-14:00",
"soort": "open dag",
"adres": "Hilversum & Bussum",
"aanmelden": "https://www.rocva.nl/jongeren/open-dagen/20-maart-2027-hsum"
},
{
"datum": "2027-03-23",
"tijd": "16:00-19:00",
"soort": "open dag",
"adres": "Amsterdam, Amstelveen, Diemen, Hoofddorp",
"aanmelden": "https://www.rocva.nl/jongeren/open-dagen/23-maart-2027"
}
]
},
"Nova College": {
"site": "https://www.novacollege.nl/actueel/agenda/open-dag-mbo-30-nov/",
"dagen": [
{
"datum": "2026-11-30",
"tijd": "18:00-21:00",
"soort": "open dag",
"aanmelden": "https://aanmelden.novacollege.nl/ords/r/wda/f_400/event?p250_event_code=OD2026NOV&org_id_hash=FB1642871542BD6B&clear=250"
},
{
"datum": "2027-02-03",
"tijd": "18:00-20:00",
"soort": "open dag"
},
{
"datum": "2027-03-22",
"tijd": "16:00-18:00",
"soort": "open dag"
},
{
"datum": "2026-11-20",
"tijd": "17:00-20:00",
"soort": "open dag",
"plaats": "Harlingen",
"adres": "Almenumerweg 1 (Scheepvaart)"
},
{
"datum": "2027-01-20",
"tijd": "17:00-20:00",
"soort": "open dag",
"plaats": "Harlingen",
"adres": "Almenumerweg 1 (Scheepvaart)"
},
{
"datum": "2027-03-24",
"tijd": "17:00-20:00",
"soort": "open dag",
"plaats": "Harlingen",
"adres": "Almenumerweg 1 (Scheepvaart)"
},
{
"datum": "2027-04-14",
"tijd": "17:00-20:00",
"soort": "open dag",
"plaats": "Harlingen",
"adres": "Almenumerweg 1 (Scheepvaart)"
},
{
"datum": "2027-01-23",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "IJmuiden",
"adres": "Kanaalstraat 7 (Scheepvaart)"
}
]
},
"Vonk": {
"site": "https://www.vonknh.nl/mbo/open-dagen-mbo",
"dagen": [
{
"datum": "2026-11-24",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "Alle locaties (Alkmaar, Hoorn, Den Helder en Schagen)",
"aanmelden": "https://www.vonknh.nl/evenementen/2026-11-24/open-dag-mbo"
},
{
"datum": "2027-02-09",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "Alle locaties (Alkmaar, Hoorn, Den Helder en Schagen)",
"aanmelden": "https://www.vonknh.nl/evenementen/2027-02-09/open-dag-mbo"
}
]
},
"ROC van Flevoland": {
"site": "https://www.rocvanflevoland.nl/jongeren/open-dagen",
"dagen": [
{
"datum": "2026-11-26",
"tijd": "16:00-19:00",
"soort": "open dag",
"adres": "Almere Buiten, Almere Poort & Lelystad",
"aanmelden": "https://www.rocvanflevoland.nl/jongeren/open-dagen/26-november-2026"
},
{
"datum": "2027-01-23",
"tijd": "10:00-13:00",
"soort": "open dag",
"adres": "Almere Buiten, Almere Poort & Lelystad",
"aanmelden": "https://www.rocvanflevoland.nl/jongeren/open-dagen/23-januari-2027"
},
{
"datum": "2027-03-16",
"tijd": "16:00-19:00",
"soort": "open dag",
"adres": "Almere Buiten, Almere Poort & Lelystad",
"aanmelden": "https://www.rocvanflevoland.nl/jongeren/open-dagen/16-maart-2027"
}
]
},
"MBO Utrecht": {
"site": "https://mboutrecht.nl/studiekeuze-events/",
"dagen": [
{
"datum": "2026-11-19",
"tijd": "18:00-20:30",
"soort": "open dag",
"plaats": "Utrecht",
"adres": "Australiëlaan 25 en Sportpark Zuilen",
"aanmelden": "https://aanmelden.mboutrecht.nl/ords/r/wda/f_400/event?p250_event_code=OD-NOV-26&org_id_hash=7C80DA7018A6AF95&clear=250"
},
{
"datum": "2027-01-16",
"tijd": "10:00-13:00",
"soort": "open dag",
"plaats": "Utrecht",
"adres": "Australiëlaan 25 en Sportpark Zuilen",
"aanmelden": "https://mboutrecht.nl/studiekeuze-events/open-dag-16-januari/"
},
{
"datum": "2027-01-23",
"soort": "open dag",
"plaats": "Utrecht",
"adres": "Herman Brood Academie, Australiëlaan 25",
"aanmelden": "https://mboutrecht.nl/studiekeuze-events/open-dag-2027/"
},
{
"datum": "2027-03-16",
"tijd": "18:00-20:30",
"soort": "open dag",
"plaats": "Utrecht",
"adres": "Australiëlaan 25 en Sportpark Zuilen",
"aanmelden": "https://mboutrecht.nl/studiekeuze-events/open-dag-16-maart/"
}
]
},
"ROC Midden Nederland": {
"site": "https://www.rocmn.nl/agenda/open-dag-9-december",
"dagen": [
{
"datum": "2026-12-09",
"tijd": "18:00-21:00",
"soort": "open dag",
"adres": "Amersfoort, Nieuwegein en Utrecht (per college)",
"aanmelden": "https://www.rocmn.nl/agenda/open-dag-9-december"
},
{
"datum": "2027-01-19",
"tijd": "18:00-21:00",
"soort": "open dag",
"adres": "Amersfoort, Nieuwegein en Utrecht (per college)",
"aanmelden": "https://www.rocmn.nl/agenda/open-dag-19-januari"
},
{
"datum": "2027-03-13",
"tijd": "10:00-13:00",
"soort": "open dag",
"adres": "Amersfoort, Nieuwegein en Utrecht (per college)",
"aanmelden": "https://www.rocmn.nl/agenda/open-dag-13-maart"
}
]
},
"MBO Amersfoort": {
"site": "https://www.mboamersfoort.nl/agenda/",
"dagen": [
{
"datum": "2026-11-09",
"tijd": "18:00-21:00",
"soort": "open dag",
"adres": "Alle 10 locaties in Amersfoort en Utrecht",
"aanmelden": "https://www.mboamersfoort.nl/agenda/open-dag-0911/"
},
{
"datum": "2027-01-23",
"tijd": "10:00-14:00",
"soort": "open dag",
"aanmelden": "https://www.mboamersfoort.nl/agenda/open-dag-2301/"
},
{
"datum": "2027-03-17",
"tijd": "18:00-21:00",
"soort": "open dag",
"aanmelden": "https://www.mboamersfoort.nl/agenda/open-dag-1703/"
},
{
"datum": "2027-06-14",
"tijd": "18:00-20:00",
"soort": "open dag",
"aanmelden": "https://www.mboamersfoort.nl/agenda/open-dag-1406/"
}
]
},
"mboRijnland": {
"site": "https://mborijnland.nl/voorlichtingskalender/",
"dagen": [
{
"datum": "2026-11-09",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "Alle locaties (behalve Leiden Zernikedreef)",
"aanmelden": "https://mborijnland.nl/events/open-dag-9nov26/"
},
{
"datum": "2027-02-04",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "Alle locaties",
"aanmelden": "https://mborijnland.nl/events/opendag-4feb27/"
},
{
"datum": "2027-02-13",
"soort": "open dag",
"plaats": "Leiden",
"adres": "Zernikedreef (Middelbaar Laboratoriumonderwijs)",
"aanmelden": "https://mborijnland.nl/events/middelbaar-laboratoriumonderwijs-13feb27/"
},
{
"datum": "2027-03-11",
"tijd": "16:00-18:00",
"soort": "open dag",
"adres": "Alle locaties",
"aanmelden": "https://mborijnland.nl/events/opendag-11mrt27/"
},
{
"datum": "2027-04-02",
"soort": "open dag",
"plaats": "Leiden",
"adres": "Zernikedreef (Middelbaar Laboratoriumonderwijs)",
"aanmelden": "https://mborijnland.nl/events/middelbaar-laboratoriumonderwijs-2apr27/"
}
]
},
"ROC Mondriaan": {
"site": "https://www.rocmondriaan.nl/open-dagen",
"dagen": [
{
"datum": "2026-11-03",
"tijd": "15:00-20:00",
"soort": "open dag",
"adres": "meerdere locaties",
"aanmelden": "https://aanmelden.rocmondriaan.nl/ords/r/wda/f_400/event?p250_event_code=2627_OD_1&org_id_hash=0FF9F5EB7CF6CCBF&p250_label_id=2523&clear=250"
}
]
},
"Albeda": {
"site": "https://www.albeda.nl/opendagen",
"dagen": [
{
"datum": "2026-11-26",
"tijd": "15:00-20:00",
"soort": "open dag",
"adres": "Diverse Albeda-locaties in Rotterdam e.o. (o.a. Vlaardingen, Poortugaal, Spijkenisse)",
"aanmelden": "https://forms.hippocampus.eu/albeda/235lg69chkoafxcd/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiI5NjY2MjEyYi0zOWFhLTRiZjctOThlYy1lYWM3ZWMzZmQwZDgifQ"
},
{
"datum": "2027-01-20",
"tijd": "15:00-20:00",
"soort": "open dag",
"adres": "Diverse Albeda-locaties in Rotterdam e.o. (o.a. Vlaardingen, Poortugaal, Spijkenisse)"
},
{
"datum": "2027-03-18",
"tijd": "15:00-20:00",
"soort": "open dag",
"adres": "Diverse Albeda-locaties in Rotterdam e.o. (o.a. Vlaardingen, Poortugaal, Spijkenisse)"
}
]
},
"Zadkine": {
"site": "https://www.zadkine.nl/open-dagen",
"dagen": [
{
"datum": "2026-11-25",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "alle locaties"
},
{
"datum": "2027-01-29",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "alle locaties behalve Vakschool Schoonhoven"
},
{
"datum": "2027-01-30",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Schoonhoven",
"adres": "Vakschool Schoonhoven"
},
{
"datum": "2027-03-24",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "alle locaties"
}
]
},
"Techniek College Rotterdam": {
"site": "https://www.techniekcollegerotterdam.nl/studeren-bij-ons/open-dag",
"dagen": [
{
"datum": "2027-01-22",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Rotterdam"
},
{
"datum": "2027-03-19",
"tijd": "15:00-20:00",
"soort": "open dag",
"plaats": "Rotterdam"
}
]
},
"Da Vinci College": {
"site": "https://www.davinci.nl/studeren-bij-da-vinci/kom-langs/open-dagen/",
"dagen": [
{
"datum": "2026-11-27",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "Meerdere locaties",
"aanmelden": "https://forms.hippocampus.eu/davinci/opendagen/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiI0NDkyN2RlMC1lNDhlLTQ4NmUtOGM1ZS0zNjY5YjZhOTI5N2IifQ"
},
{
"datum": "2027-01-27",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "Meerdere locaties"
},
{
"datum": "2027-03-10",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "Meerdere locaties"
}
]
},
"Lentiz": {
"site": "https://www.lentiz.nl/voorlichting/open-dagen/",
"dagen": [
{
"datum": "2026-11-26",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Barendrecht",
"adres": "Lentiz | MBO Barendrecht"
},
{
"datum": "2026-11-26",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Bleiswijk",
"adres": "Lentiz | MBO Oostland"
},
{
"datum": "2026-11-26",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Maasland",
"adres": "Lentiz | MBO Maasland"
},
{
"datum": "2026-11-26",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Middelharnis",
"adres": "Lentiz | MBO Middelharnis"
},
{
"datum": "2026-11-26",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Naaldwijk",
"adres": "Lentiz | MBO Westland"
},
{
"datum": "2026-11-26",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Schiedam",
"adres": "Lentiz | MBO LIFE College"
},
{
"datum": "2026-11-26",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Schipluiden",
"adres": "Lentiz | Equestrum Hippische campus (MBO Maasland)"
},
{
"datum": "2027-01-19",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Barendrecht",
"adres": "Lentiz | MBO Barendrecht"
},
{
"datum": "2027-01-19",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Bleiswijk",
"adres": "Lentiz | MBO Oostland"
},
{
"datum": "2027-01-19",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Maasland",
"adres": "Lentiz | MBO Maasland"
},
{
"datum": "2027-01-19",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Naaldwijk",
"adres": "Lentiz | MBO Westland"
},
{
"datum": "2027-01-19",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Schiedam",
"adres": "Lentiz | MBO LIFE College"
},
{
"datum": "2027-01-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Middelharnis",
"adres": "Lentiz | MBO Middelharnis"
},
{
"datum": "2027-01-23",
"tijd": "11:00-14:00",
"soort": "open dag",
"plaats": "Schipluiden",
"adres": "Lentiz | Equestrum Hippische campus (MBO Maasland)"
},
{
"datum": "2027-03-04",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Barendrecht",
"adres": "Lentiz | MBO Barendrecht"
},
{
"datum": "2027-03-04",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Bleiswijk",
"adres": "Lentiz | MBO Oostland"
},
{
"datum": "2027-03-04",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Maasland",
"adres": "Lentiz | MBO Maasland"
},
{
"datum": "2027-03-04",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Naaldwijk",
"adres": "Lentiz | MBO Westland"
},
{
"datum": "2027-03-04",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Schiedam",
"adres": "Lentiz | MBO LIFE College"
},
{
"datum": "2027-03-04",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Schipluiden",
"adres": "Lentiz | Equestrum Hippische campus (MBO Maasland)"
},
{
"datum": "2027-03-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Middelharnis",
"adres": "Lentiz | MBO Middelharnis"
}
]
},
"Yuverta": {
"site": "https://www.yuverta.nl/open-dagen/",
"dagen": [
{
"datum": "2026-11-20",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "'s-Hertogenbosch",
"adres": "Yuverta mbo Den Bosch, Vlijmenseweg 1a",
"aanmelden": "https://www.yuverta.nl/mbo-den-bosch/open-dag-mbo-den-bosch-20-november-2026/"
},
{
"datum": "2026-11-20",
"tijd": "15:00-19:00",
"soort": "open dag",
"plaats": "Houten",
"adres": "Yuverta mbo Houten, Randhoeve 2",
"aanmelden": "https://www.yuverta.nl/mbo-houten/open-dag-mbo-houten-20-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "09:00-12:00",
"soort": "open dag",
"plaats": "'s-Hertogenbosch",
"adres": "Yuverta mbo Den Bosch, Vlijmenseweg 1a",
"aanmelden": "https://www.yuverta.nl/mbo-den-bosch/open-dag-mbo-den-bosch-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Aalsmeer",
"adres": "Yuverta mbo Aalsmeer, Linnaeuslaan 2",
"aanmelden": "https://www.yuverta.nl/mbo-aalsmeer/open-dag-mbo-aalsmeer-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Amsterdam",
"adres": "Yuverta mbo Amsterdam, Leslocatie in Artis - Plantage kerklaan 38-40",
"aanmelden": "https://www.yuverta.nl/mbo-amsterdam/open-dag-mbo-amsterdam-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "11:00-15:00",
"soort": "open dag",
"plaats": "Boxtel",
"adres": "Yuverta mbo Boxtel, Schouwrooij 2",
"aanmelden": "https://www.yuverta.nl/mbo-boxtel/open-dag-mbo-boxtel-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "09:00-14:00",
"soort": "open dag",
"plaats": "Dordrecht",
"adres": "Yuverta mbo Dordrecht, Groenezoom 398",
"aanmelden": "https://www.yuverta.nl/mbo-dordrecht/open-dag-mbo-dordrecht-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "10:00-13:00",
"soort": "open dag",
"plaats": "Heerlen",
"adres": "Yuverta mbo Heerlen, Heldevierlaan 12",
"aanmelden": "https://www.yuverta.nl/mbo-heerlen/open-dag-mbo-heerlen-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "09:00-13:00",
"soort": "open dag",
"plaats": "Helmond",
"adres": "Yuverta mbo Helmond, Scheepsboulevard 1",
"aanmelden": "https://www.yuverta.nl/mbo-helmond/open-dag-mbo-helmond-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "11:00-14:00",
"soort": "open dag",
"plaats": "Horst",
"adres": "Yuverta mbo Horst, Spoorweg 8",
"aanmelden": "https://www.yuverta.nl/mbo-horst-spoorweg/open-dag-mbo-horst-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Houten",
"adres": "Yuverta mbo Houten, Randhoeve 2",
"aanmelden": "https://www.yuverta.nl/mbo-houten/open-dag-mbo-houten-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "10:00-15:00",
"soort": "open dag",
"plaats": "Nijmegen",
"adres": "Yuverta mbo Nijmegen, Energieweg 19",
"aanmelden": "https://www.yuverta.nl/mbo-nijmegen/open-dag-mbo-nijmegen-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Rijswijk",
"adres": "Yuverta mbo Rijswijk, Huis te Landelaan 2",
"aanmelden": "https://www.yuverta.nl/mbo-rijswijk/open-dag-mbo-rijswijk-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "09:00-12:00",
"soort": "open dag",
"plaats": "Roermond",
"adres": "Yuverta mbo Roermond, Jagerstraat 6",
"aanmelden": "https://www.yuverta.nl/mbo-roermond/open-dag-mbo-roermond-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Rotterdam",
"adres": "Yuverta mbo Rotterdam, Laanslootseweg 1",
"aanmelden": "https://www.yuverta.nl/mbo-rotterdam/open-dag-mbo-rotterdam-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "10:00-12:00",
"soort": "open dag",
"plaats": "Tilburg",
"adres": "Yuverta mbo Tilburg, Spoorlaan 21",
"aanmelden": "https://www.yuverta.nl/mbo-tilburg/open-dag-mbo-tilburg-21-november-2026/"
},
{
"datum": "2026-11-21",
"tijd": "09:00-13:00",
"soort": "open dag",
"plaats": "Velp",
"adres": "Yuverta mbo Velp, Larensteinselaan 26",
"aanmelden": "https://www.yuverta.nl/mbo-velp/open-dag-mbo-velp-21-november-2026/"
},
{
"datum": "2026-11-25",
"tijd": "19:00-20:30",
"soort": "open dag",
"plaats": "Boskoop",
"adres": "Yuverta mbo Aalsmeer, locatie Boskoop",
"aanmelden": "https://www.yuverta.nl/mbo-aalsmeer/open-dag-mbo-aalsmeer-boskoop-25-november-2026/"
},
{
"datum": "2027-01-29",
"tijd": "15:00-19:00",
"soort": "open dag",
"plaats": "'s-Hertogenbosch",
"adres": "Yuverta mbo Den Bosch, Vlijmenseweg 1a",
"aanmelden": "https://www.yuverta.nl/mbo-den-bosch/open-dag-mbo-den-bosch-29-januari-2027/"
},
{
"datum": "2027-01-29",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Aalsmeer",
"adres": "Yuverta mbo Aalsmeer, Linnaeuslaan 2",
"aanmelden": "https://www.yuverta.nl/mbo-aalsmeer/open-dag-mbo-aalsmeer-29-januari-2027/"
},
{
"datum": "2027-01-29",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Amsterdam",
"adres": "Yuverta mbo Amsterdam, Leslocatie in Artis - Plantage kerklaan 38-40",
"aanmelden": "https://www.yuverta.nl/mbo-amsterdam/open-dag-mbo-amsterdam-29-januari-2027/"
},
{
"datum": "2027-01-29",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Boxtel",
"adres": "Yuverta mbo Boxtel, Schouwrooij 2",
"aanmelden": "https://www.yuverta.nl/mbo-boxtel/open-dag-mbo-boxtel-29-januari-2027/"
},
{
"datum": "2027-01-29",
"tijd": "15:00-19:00",
"soort": "open dag",
"plaats": "Dordrecht",
"adres": "Yuverta mbo Dordrecht, Groenezoom 398",
"aanmelden": "https://www.yuverta.nl/mbo-dordrecht/open-dag-mbo-dordrecht-29-januari-2027/"
},
{
"datum": "2027-01-29",
"tijd": "17:00-20:00",
"soort": "open dag",
"plaats": "Helmond",
"adres": "Yuverta mbo Helmond, Scheepsboulevard 1",
"aanmelden": "https://www.yuverta.nl/mbo-helmond/open-dag-mbo-helmond-29-januari-2027/"
},
{
"datum": "2027-01-29",
"tijd": "17:00-20:00",
"soort": "open dag",
"plaats": "Horst",
"adres": "Yuverta mbo Horst, Spoorweg 8",
"aanmelden": "https://www.yuverta.nl/mbo-horst-spoorweg/open-dag-mbo-horst-29-januari-2027/"
},
{
"datum": "2027-01-29",
"tijd": "15:00-19:00",
"soort": "open dag",
"plaats": "Houten",
"adres": "Yuverta mbo Houten, Randhoeve 2",
"aanmelden": "https://www.yuverta.nl/mbo-houten/open-dag-mbo-houten-29-januari-2027/"
},
{
"datum": "2027-01-29",
"tijd": "16:00-19:30",
"soort": "open dag",
"plaats": "Nijmegen",
"adres": "Yuverta mbo Nijmegen, Energieweg 19",
"aanmelden": "https://www.yuverta.nl/mbo-nijmegen/open-dag-mbo-nijmegen-29-januari-2027/"
},
{
"datum": "2027-01-29",
"tijd": "15:30-19:30",
"soort": "open dag",
"plaats": "Rijswijk",
"adres": "Yuverta mbo Rijswijk, Huis te Landelaan 2",
"aanmelden": "https://www.yuverta.nl/mbo-rijswijk/open-dag-mbo-rijswijk-29-januari-2027/"
},
{
"datum": "2027-01-29",
"tijd": "17:00-20:00",
"soort": "open dag",
"plaats": "Roermond",
"adres": "Yuverta mbo Roermond, Jagerstraat 6",
"aanmelden": "https://www.yuverta.nl/mbo-roermond/open-dag-mbo-roermond-29-januari-2027/"
},
{
"datum": "2027-01-29",
"tijd": "15:30-19:30",
"soort": "open dag",
"plaats": "Rotterdam",
"adres": "Yuverta mbo Rotterdam, Laanslootseweg 1",
"aanmelden": "https://www.yuverta.nl/mbo-rotterdam/open-dag-mbo-rotterdam-29-januari-2027/"
},
{
"datum": "2027-01-29",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Tilburg",
"adres": "Yuverta mbo Tilburg, Spoorlaan 21",
"aanmelden": "https://www.yuverta.nl/mbo-tilburg/open-dag-mbo-tilburg-29-januari-2027/"
},
{
"datum": "2027-01-29",
"tijd": "18:00-21:00",
"soort": "open avond",
"plaats": "Velp",
"adres": "Yuverta mbo Velp, Larensteinselaan 26",
"aanmelden": "https://www.yuverta.nl/mbo-velp/open-avond-mbo-velp-29-januari-2027/"
},
{
"datum": "2027-02-03",
"tijd": "19:00-20:30",
"soort": "open dag",
"plaats": "Boskoop",
"adres": "Yuverta mbo Aalsmeer, locatie Boskoop",
"aanmelden": "https://www.yuverta.nl/mbo-aalsmeer/open-dag-mbo-aalsmeer-boskoop-3-februari-2026/"
},
{
"datum": "2027-03-11",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "'s-Hertogenbosch",
"adres": "Yuverta mbo Den Bosch, Vlijmenseweg 1a",
"aanmelden": "https://www.yuverta.nl/mbo-den-bosch/open-dag-mbo-den-bosch-11-maart-2027/"
},
{
"datum": "2027-03-11",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Aalsmeer",
"adres": "Yuverta mbo Aalsmeer, Linnaeuslaan 2",
"aanmelden": "https://www.yuverta.nl/mbo-aalsmeer/open-dag-mbo-aalsmeer-11-maart-2027/"
},
{
"datum": "2027-03-11",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Amsterdam",
"adres": "Yuverta mbo Amsterdam, Leslocatie in Artis - Plantage kerklaan 38-40",
"aanmelden": "https://www.yuverta.nl/mbo-amsterdam/open-dag-mbo-amsterdam-11-maart-2027/"
},
{
"datum": "2027-03-11",
"tijd": "18:00-21:00",
"soort": "open dag",
"plaats": "Boxtel",
"adres": "Yuverta mbo Boxtel, Schouwrooij 2",
"aanmelden": "https://www.yuverta.nl/mbo-boxtel/open-dag-mbo-boxtel-11-maart-2027/"
},
{
"datum": "2027-03-11",
"tijd": "14:00-18:00",
"soort": "open dag",
"plaats": "Dordrecht",
"adres": "Yuverta mbo Dordrecht, Groenezoom 398",
"aanmelden": "https://www.yuverta.nl/mbo-dordrecht/open-dag-mbo-dordrecht-11-maart-2027/"
},
{
"datum": "2027-03-11",
"tijd": "16:00-19:00",
"soort": "open dag",
"plaats": "Helmond",
"adres": "Yuverta mbo Helmond, Scheepsboulevard 1",
"aanmelden": "https://www.yuverta.nl/mbo-helmond/open-dag-mbo-helmond-11-maart-2027/"
},
{
"datum": "2027-03-11",
"tijd": "15:00-19:00",
"soort": "open dag",
"plaats": "Houten",
"adres": "Yuverta mbo Houten, Randhoeve 2",
"aanmelden": "https://www.yuverta.nl/mbo-houten/open-dag-mbo-houten-11-maart-2027/"
},
{
"datum": "2027-03-11",
"tijd": "16:00-19:30",
"soort": "open dag",
"plaats": "Nijmegen",
"adres": "Yuverta mbo Nijmegen, Energieweg 19",
"aanmelden": "https://www.yuverta.nl/mbo-nijmegen/open-dag-mbo-nijmegen-11-maart-2027/"
},
{
"datum": "2027-03-11",
"tijd": "15:00-18:00",
"soort": "open dag",
"plaats": "Rijswijk",
"adres": "Yuverta mbo Rijswijk, Huis te Landelaan 2",
"aanmelden": "https://www.yuverta.nl/mbo-rijswijk/open-dag-mbo-rijswijk-11-maart-2027/"
},
{
"datum": "2027-03-11",
"tijd": "18:00-20:00",
"soort": "open dag",
"plaats": "Roermond",
"adres": "Yuverta mbo Roermond, Jagerstraat 6",
"aanmelden": "https://www.yuverta.nl/mbo-roermond/open-dag-mbo-roermond-11-maart-2027/"
},
{
"datum": "2027-03-11",
"tijd": "15:00-18:00",
"soort": "open dag",
"plaats": "Rotterdam",
"adres": "Yuverta mbo Rotterdam, Laanslootseweg 1",
"aanmelden": "https://www.yuverta.nl/mbo-rotterdam/open-dag-mbo-rotterdam-11-maart-2027/"
},
{
"datum": "2027-03-11",
"tijd": "16:00-18:00",
"soort": "open dag",
"plaats": "Tilburg",
"adres": "Yuverta mbo Tilburg, Spoorlaan 21",
"aanmelden": "https://www.yuverta.nl/mbo-tilburg/open-dag-mbo-tilburg-11-maart-2027/"
},
{
"datum": "2027-03-11",
"tijd": "18:00-21:00",
"soort": "open avond",
"plaats": "Velp",
"adres": "Yuverta mbo Velp, Larensteinselaan 26",
"aanmelden": "https://www.yuverta.nl/mbo-velp/open-avond-mbo-velp-11-maart-2027/"
},
{
"datum": "2027-03-17",
"tijd": "19:00-20:30",
"soort": "open dag",
"plaats": "Boskoop",
"adres": "Yuverta mbo Aalsmeer, locatie Boskoop",
"aanmelden": "https://www.yuverta.nl/mbo-aalsmeer/open-dag-mbo-aalsmeer-boskoop-17-maart-2027/"
},
{
"datum": "2027-06-11",
"tijd": "15:30-18:00",
"soort": "open dag",
"plaats": "Boskoop",
"adres": "Yuverta mbo Aalsmeer, locatie Boskoop",
"aanmelden": "https://www.yuverta.nl/mbo-aalsmeer/open-dag-mbo-aalsmeer-boskoop-11-juni-2027/"
}
]
},
"Curio": {
"site": "https://www.curio.nl/mbo/studiekeuze/open-dagen",
"dagen": [
{
"datum": "2026-11-19",
"tijd": "15:30-20:30",
"soort": "open dag",
"adres": "mbo-locaties van Curio (Breda, Bergen op Zoom, Roosendaal, Hoogerheide); per datum niet gespecificeerd",
"aanmelden": "https://www.curio.nl/evenementen/mbo-open-dag-19-november-2026"
},
{
"datum": "2027-01-21",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "mbo-locaties van Curio (Breda, Bergen op Zoom, Roosendaal, Hoogerheide); per datum niet gespecificeerd"
},
{
"datum": "2027-03-18",
"tijd": "17:00-20:00",
"soort": "open dag",
"adres": "mbo-locaties van Curio (Breda, Bergen op Zoom, Roosendaal, Hoogerheide); per datum niet gespecificeerd"
}
]
},
"Summa College": {
"site": "https://summa-onderwijs.nl/open-dagen",
"dagen": [
{
"datum": "2026-10-31",
"tijd": "10:00-15:00",
"soort": "open dag",
"adres": "alle locaties ('onze locaties'; geen adres vermeld)"
},
{
"datum": "2026-12-10",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "alle locaties ('onze locaties'; geen adres vermeld)"
},
{
"datum": "2027-01-15",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "alle locaties ('onze locaties'; geen adres vermeld)"
},
{
"datum": "2027-02-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "alle locaties ('onze locaties'; geen adres vermeld)"
},
{
"datum": "2027-03-19",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "alle locaties ('onze locaties'; geen adres vermeld)"
}
]
},
"Koning Willem I College": {
"site": "https://www.kw1c.nl/open-dagen/",
"dagen": [
{
"datum": "2026-11-20",
"tijd": "15:00-20:00",
"soort": "open dag",
"adres": "alle locaties behalve Beversestraat Cuijk (info daarover op Jan van Cuijkstraat, Cuijk)",
"aanmelden": "https://www.kw1c.nl/open-dagen/twintig-november/"
},
{
"datum": "2027-01-29",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "alle locaties behalve Beversestraat Cuijk (info daarover op Jan van Cuijkstraat, Cuijk)"
},
{
"datum": "2027-03-17",
"tijd": "16:00-20:00",
"soort": "open dag",
"adres": "alle locaties behalve Beversestraat Cuijk (info daarover op Jan van Cuijkstraat, Cuijk)"
}
]
},
"Gilde Opleidingen": {
"site": "https://www.gildeopleidingen.nl/jongeren/studiekeuze/open-dag",
"dagen": [
{
"datum": "2027-01-24",
"tijd": "09:30-14:00",
"soort": "open dag",
"adres": "alle vakscholen van Gilde Opleidingen (geen adres per locatie vermeld)",
"aanmelden": "https://www.gildeopleidingen.nl/events/open-dag-2027"
}
]
},
"VISTA college": {
"site": "https://vistacollege.nl/open-dagen",
"dagen": [
{
"datum": "2026-11-08",
"tijd": "10:00-15:00",
"soort": "open dag",
"adres": "alle 8 locaties: Beek (Stationsstraat 100), Heerlen (Valkenburgerweg 148; Henri Dunantstraat 2; Schandelermolenweg 21), Maastricht (Sibemaweg 20), Maastricht-Airport (Horsterweg 13), Sittard (Arendstraat 12; Milaanstraat 125)",
"aanmelden": "https://forms.hippocampus.eu/vista/opendag/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiJiNTJiZDlmOC0xMzU5LTQ2NzgtODFmNy1hNzhhZjkxMTQ4MzkifQ"
}
]
},
"Scalda": {
"site": "https://www.scalda.nl/mbo-onderwijs/eerste-hulp-bij-studiekeuze/open-dagen",
"dagen": [
{
"datum": "2026-11-13",
"tijd": "15:30-19:30",
"soort": "open dag",
"adres": "Goes, Middelburg, Terneuzen, Tholen en Vlissingen (Scalda, CIOS Zuidwest-NL en MLC De Ruyter); locatie kiezen via scalda.nl/kies-je-open-dag-locatie",
"aanmelden": "https://www.scalda.nl/agenda/open-dag-13-november-2026"
},
{
"datum": "2027-01-08",
"tijd": "15:30-19:30",
"soort": "open dag",
"adres": "Goes, Middelburg, Terneuzen, Tholen en Vlissingen (Scalda en CIOS Zuidwest-NL)",
"aanmelden": "https://www.scalda.nl/agenda/open-dag-8-januari-2027"
},
{
"datum": "2027-03-18",
"tijd": "18:00-20:00",
"soort": "open avond"
}
]
},
"Talland College": {
"site": "https://www.talland.nl/mbo/open-dagen",
"dagen": [
{
"datum": "2026-12-09",
"tijd": "16:00-20:00",
"soort": "open dag",
"aanmelden": "https://www.talland.nl/agenda/open-dag-9-december-2026"
},
{
"datum": "2027-02-11",
"tijd": "16:00-20:00",
"soort": "open dag",
"aanmelden": "https://www.talland.nl/agenda/open-dag-11-februari-2027"
}
]
},
"Zone.college": {
"site": "https://zonecollege.nl/jongeren/open-dagen",
"dagen": [
{
"datum": "2026-11-13",
"tijd": "15:00-20:00",
"soort": "open dag",
"adres": "Almelo, Deventer, Doetinchem, Zwolle (geen adressen vermeld)",
"aanmelden": "https://forms.hippocampus.eu/zonecollege/37ikdjfqt2ajt3sn/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiJmNTk1ZjMzMy1jNzhhLTQyMzMtYTkxOC0xYjdkY2FlYzZkY2EifQ"
},
{
"datum": "2026-11-18",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Hardenberg",
"aanmelden": "https://forms.hippocampus.eu/zonecollege/opendaghb/open/eyJSZWdpc3RyYXRpb25MaW5rSWQiOiJiYTU1OTUxOS0yOWRmLTRhMjktODFiOS02NGYzYzIwYjViZmUifQ"
},
{
"datum": "2027-01-20",
"tijd": "16:00-20:00",
"soort": "open dag",
"plaats": "Hardenberg",
"aanmelden": "https://zonecollege.nl/agenda/open-dag-20-jan-mbo-hardenberg"
},
{
"datum": "2027-01-22",
"tijd": "15:00-20:00",
"soort": "open dag",
"adres": "Almelo, Deventer, Doetinchem, Zwolle (geen adressen vermeld)",
"aanmelden": "https://zonecollege.nl/agenda/open-dag-22-jan-mbo"
},
{
"datum": "2027-03-11",
"tijd": "18:00-20:00",
"soort": "open avond",
"adres": "Almelo, Deventer, Doetinchem, Zwolle (geen adressen vermeld)",
"aanmelden": "https://zonecollege.nl/agenda/open-dag-11-mrt-mbo"
},
{
"datum": "2027-03-17",
"tijd": "18:00-20:00",
"soort": "open avond",
"plaats": "Hardenberg",
"aanmelden": "https://zonecollege.nl/agenda/open-dag-17-mrt-mbo"
}
]
},
"Yonder": {
"site": "https://www.yonder.nl/voor-studenten/agenda",
"dagen": [
{
"datum": "2026-10-31",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Tilburg",
"adres": "Mindlabs, Locomotiefboulevard 101 (alleen creatieve opleidingen)"
},
{
"datum": "2026-11-22",
"tijd": "10:00-14:00",
"soort": "open dag",
"plaats": "Tilburg",
"adres": "de campus (geen adres vermeld)",
"aanmelden": "https://aanmelden.yonder.nl/ords/r/wda/f_400/event?p250_event_code=OD_NOV2026&org_id_hash=6C57197EB4CFD31B&p250_label_id=901&clear=250"
},
{
"datum": "2027-02-18",
"tijd": "18:00-21:00",
"soort": "open avond",
"plaats": "Tilburg",
"adres": "de campus (geen adres vermeld)"
}
]
}
};
// Mbo: DUO-naam van een college of locatie -> merk met open dagen
const OD_MERK = {"Vonk Hoorn mbo":"Vonk","Vonk Schagen mbo":"Vonk","Vonk Alkmaar mbo":"Vonk","Nova College Campus Beverwijk":"Nova College","Nova College Campus Haarlem":"Nova College","Nova College Campus Haarlemmermeer":"Nova College","Nova College CIOS Haarlem":"Nova College","Nova College MyTalent":"Nova College","Nova College Maritiem College":"Nova College","MBO Terra":"Drenthe College","Summa Wonen en Design":"Summa College","Summa Artiest":"Summa College","Summa Bouw":"Summa College","Summa Engineering":"Summa College","Summa Luchtvaartdienstverlening":"Summa College","Summa Procestechnologie":"Summa College","Summa Sport":"Summa College","Summa Techniek":"Summa College","Summa Transport en Logistiek":"Summa College","Summa Vrije tijd":"Summa College","Summa college":"Summa College","Summa Beauty and Lifestyle":"Summa College","Summa Automotive":"Summa College","Summa Laboratorium":"Summa College","Summa Elektro- en Installatietechniek":"Summa College","Summa Brood en Banket":"Summa College","Summa Horeca":"Summa College","Summa Fashion":"Summa College","Summa ICT":"Summa College","Summa Plus":"Summa College","Summa Facilitair":"Summa College","Summa Zorg":"Summa College","Summa Veiligheid":"Summa College","ROC Mondriaan Lifestyle, Sport & Bewegen":"ROC Mondriaan","ROC Mondriaan International Hotel & Management":"ROC Mondriaan","ROC Mondriaan Technologie & Engineering":"ROC Mondriaan","ROC Mondriaan Entreeopleidingen":"ROC Mondriaan","ROC Mondriaan Autotechniek & Mobiliteit":"ROC Mondriaan","ROC Mondriaan Bouw & Infra":"ROC Mondriaan","ROC Mondriaan Metaal-, Elektro-installatietechniek":"ROC Mondriaan","ROC Mondriaan Orde & Veiligheid":"ROC Mondriaan","ROC Mondriaan Horeca & Facilitaire dienstverlening":"ROC Mondriaan","ROC Mondriaan Toerisme & Recreatie en evenementen":"ROC Mondriaan","ROC Mondriaan Zorg & Welzijn Den Haag":"ROC Mondriaan","ROC Mondriaan Pedagogische en Sociale beroep":"ROC Mondriaan","ROC Mondriaan Maatschappelijke zorg & verzorgende":"ROC Mondriaan","ROC Mondriaan Gezondheidszorg Den Haag":"ROC Mondriaan","ROC Mondriaan Zorg & Welzijn Delft":"ROC Mondriaan","ROC Mondriaan Zorg & Welzijn Leiden":"ROC Mondriaan","ROC Mondriaan Zorg & Welzijn Westland":"ROC Mondriaan","VISTA college":"VISTA college","ROC van Amsterdam - MBO College Zuid":"ROC van Amsterdam","ROC van Amsterdam - MBO College Noord":"ROC van Amsterdam","ROC van Amsterdam - MBO College Zuidoost":"ROC van Amsterdam","ROC van Amsterdam - MBO College Amstelland":"ROC van Amsterdam","Deltion College - Welzijn & Gezondheid":"Deltion College","ROC van Flevoland - MBO College Almere":"ROC van Flevoland","ROC van Flevoland - MBO College Poort":"ROC van Flevoland","ROC van Flevoland - MBO College Lelystad":"ROC van Flevoland","ROC van Amsterdam - MBO College Westpoort":"ROC van Amsterdam","ROC van Amsterdam - MBO College Hilversum":"ROC van Amsterdam","ROC van Amsterdam - MBO College Centrum":"ROC van Amsterdam","ROC van Amsterdam - MBO College West":"ROC van Amsterdam","ROC van Amsterdam - MBO College Airport":"ROC van Amsterdam","MBO Amersfoort School voor Economie en Ondernemen":"MBO Amersfoort","MBO Amersfoort School voor Toerisme en Management":"MBO Amersfoort","Kappersschool Amersfoort (MBO Amersfoort)":"MBO Amersfoort","MBO Amersfoort School voor Schoonheidsspecialisten":"MBO Amersfoort","Zadkine Brood & Banket College":"Zadkine","Hoornbeeck College":"Hoornbeeck College","Zadkine Vakschool Schoonhoven":"Zadkine","Deltion College - Techniek & Gebouwde Omgeving":"Deltion College","Deltion College - Sport, Opvoeding & Maatschappij":"Deltion College","Deltion College - Mobiliteit, Logistiek & Veiligheid":"Deltion College","Deltion College - Horeca, Reizen & Dienstverlening":"Deltion College","Deltion College - Economie & Ondernemen":"Deltion College","Deltion College - Design, Media & ICT":"Deltion College","Scalda - Dienstverlening, Veiligheid en Gastvrijheid":"Scalda","Scalda - Maritiem, ICT en Techniek":"Scalda","Scalda - Zorg, Welzijn en Uiterlijke Verzorging":"Scalda","Scalda - Educatie":"Scalda","Scalda - Groen":"Scalda","Scalda - Sport":"Scalda","Zadkine Veiligheidsacademie & Sport":"Zadkine","Zadkine Startcollege":"Zadkine","Zadkine Optiek College":"Zadkine","Zadkine Beauty & Fashion College":"Zadkine","Zadkine Logistiek College":"Zadkine","Zadkine Gezondheid & Welzijn College":"Zadkine","Zadkine Business College":"Zadkine","Zadkine Hospitality College":"Zadkine","Graafschap College, Techniek & Informatica":"Graafschap College","Graafschap College, Zorg, Welzijn & Sport":"Graafschap College","Graafschap College, Educatie & Participatie":"Graafschap College","Dutch HealthTec Academy (MBO Amersfoort)":"MBO Amersfoort","MBO Amersfoort School voor Welzijn":"MBO Amersfoort","MBO Amersfoort School voor Techniek":"MBO Amersfoort","MBO Amersfoort School voor Gezondheidszorg":"MBO Amersfoort","Hotelschool Amersfoort (MBO Amersfoort)":"MBO Amersfoort","Entree Opleidingen (MBO Amersfoort)":"MBO Amersfoort","Yonder Entree, Vavo, Educatie en Inburgering":"Yonder","Yonder Business, ICT en Logistiek":"Yonder","Yonder Techniek":"Yonder","Yonder Lifestyle en Creatieve Industrie":"Yonder","Yonder Onderwijs, Kinderopvang, Sport en Veiligheid":"Yonder","Yonder Zorg en Welzijn":"Yonder","ROC Nijmegen directie Zorg en Welzijn":"ROC Nijmegen","ROC Nijmegen directie Techniek":"ROC Nijmegen","ROC Nijmegen directie Economie":"ROC Nijmegen","Aventus sector Creatieve Industrie":"Aventus","Aventus sector Economie & Handel":"Aventus","Aventus sector Techniek & Mobiel":"Aventus","Landstede MBO":"Landstede","mbo Menso Alting Zwolle":"Menso Alting","Drenthe College":"Drenthe College","Koning Willem I College":"Koning Willem I College","ROC Midden Nederland - Beauty College":"ROC Midden Nederland","ROC Midden Nederland - Bouw & Interieur College (Amersfoort)":"ROC Midden Nederland","ROC Midden Nederland - Business & Administration College (Amersfoort)":"ROC Midden Nederland","ROC Midden Nederland - Business & Administration College (Utrecht)":"ROC Midden Nederland","ROC Midden Nederland - Creative College (Utrecht)":"ROC Midden Nederland","ROC Midden Nederland - Gezondheidszorg College (Amersfoort)":"ROC Midden Nederland","ROC Midden Nederland - Gezondheidszorg College (Utrecht)":"ROC Midden Nederland","ROC Midden Nederland - Horeca & Toerisme College":"ROC Midden Nederland","ROC Midden Nederland Amersfoort":"ROC Midden Nederland","ROC Midden Nederland - Sport College (Amersfoort)":"ROC Midden Nederland","ROC Midden Nederland - Sport College (Utrecht)":"ROC Midden Nederland","ROC Midden Nederland - Tech College (Amersfoort)":"ROC Midden Nederland","ROC Midden Nederland - Veiligheid & Defensie College":"ROC Midden Nederland","ROC Midden Nederland - Welzijn College (Amersfoort)":"ROC Midden Nederland","ROC Midden Nederland - Welzijn College (Utrecht)":"ROC Midden Nederland","DA VINCI COLLEGE":"Da Vinci College","ROC A12":"ROC A12","Graafschap College, Economie & Dienstverlening":"Graafschap College","Yuverta mbo Rotterdam":"Yuverta","Yuverta mbo Aalsmeer":"Yuverta","Yuverta mbo Rijswijk":"Yuverta","Yuverta mbo Houten":"Yuverta","Yuverta mbo Amsterdam":"Yuverta","Yuverta mbo Dordrecht":"Yuverta","Aeres MBO Barneveld":"Aeres MBO","Aeres MBO Almere":"Aeres MBO","Aeres MBO Ede":"Aeres MBO","Aeres MBO Emmeloord":"Aeres MBO","mboRijnland Mbo-college Techniek & ICT":"mboRijnland","mboRijnland Mbo-college Start-Up":"mboRijnland","mboRijnland Mbo-college Welzijn en Zorg":"mboRijnland","ROC Gilde Opleidingen":"Gilde Opleidingen","Sportacademie Amersfoort (MBO Amersfoort)":"MBO Amersfoort","MBO Amersfoort School voor Economie en Ondernemen niveau 2":"MBO Amersfoort","MBO Amersfoort School voor Veiligheid":"MBO Amersfoort","Zone.college mbo":"Zone.college","ROC Menso Alting":"Menso Alting","Aeres MBO Velp":"Aeres MBO","Aeres MBO Dronten Warmonderhof":"Aeres MBO","Lentiz | MBO Westland":"Lentiz","Lentiz | MBO Oostland":"Lentiz","Lentiz | MBO Middelharnis":"Lentiz","Lentiz | MBO Maasland":"Lentiz","Lentiz | MBO LIFE College":"Lentiz","Lentiz | MBO Barendrecht":"Lentiz","Alfa-college voor Sport en Bewegen & Veiligheid Groningen":"Alfa-college","Alfa-college voor Business, Design & IT Groningen":"Alfa-college","Alfa-college voor Techniek, Bouw & Interieur Groningen":"Alfa-college","Alfa-college voor Beroepsopleidingen Hoogeveen":"Alfa-college","Alfa-college voor Beroepsopleidingen Hardenberg":"Alfa-college","Alfa-college voor Zorg, Welzijn & Dienstverlening Groningen":"Alfa-college","MBO Utrecht":"MBO Utrecht","Albeda MBO Theaterschool":"Albeda","Albeda Facilitair & Veiligheidscollege":"Albeda","Albeda Horecacollege":"Albeda","Albeda Travel & Leisure College":"Albeda","Albeda Rotterdam The Hague Airport College":"Albeda","Albeda Beauty & Fashioncollege":"Albeda","Albeda Sportcollege":"Albeda","Albeda Danscollege":"Albeda","Albeda College Muzikant Producer":"Albeda","Albeda College Sociaal & Pedagogisch Werk":"Albeda","Albeda Zorgcollege":"Albeda","Albeda Startcollege":"Albeda","Albeda College Economie & Ondernemen":"Albeda","ROC Mondriaan Beauty, Hair & Fashion":"ROC Mondriaan","Curio economie en ondernemen":"Curio","Curio techniek en technologie":"Curio","Curio voedsel, groen en gastvrijheid":"Curio","Curio zorg en welzijn":"Curio","Curio startcollege":"Curio","ROC Mondriaan Business & Retail":"ROC Mondriaan","Yuverta mbo Tilburg":"Yuverta","Yuverta mbo Nijmegen":"Yuverta","Yuverta mbo Velp":"Yuverta","Yuverta mbo Geldermalsen":"Yuverta","Yuverta mbo Helmond":"Yuverta","Yuverta mbo Den Bosch":"Yuverta","Yuverta mbo Boxtel":"Yuverta","Yuverta mbo Horst-Spoorweg":"Yuverta","Yuverta mbo Heerlen":"Yuverta","Yuverta mbo Roermond":"Yuverta","Yuverta llo":"Yuverta","Aeres MBO Sneek":"Aeres MBO","Aeres MBO Leeuwarden":"Aeres MBO","Aeres MBO Heerenveen":"Aeres MBO","Aeres MBO Buitenpost":"Aeres MBO","Summa College Duale trajecten":"Summa College","Techniek College Rotterdam - Bouwen & Wonen":"Techniek College Rotterdam","Aeres MBO Dronten":"Aeres MBO","Techniek College Rotterdam - IT & Online":"Techniek College Rotterdam","Techniek College Rotterdam - Proces & Maintenance":"Techniek College Rotterdam","Techniek College Rotterdam - Mobiliteit":"Techniek College Rotterdam","Techniek College Rotterdam - Maakindustrie & Onderhoud":"Techniek College Rotterdam","Techniek College Rotterdam - Lab & Research":"Techniek College Rotterdam","Hoornbeeck Connect":"Hoornbeeck College","Vonk Bouw":"Vonk","Vonk Middenkader techniek":"Vonk","Vonk Welzijn":"Vonk","Vonk Veiligheid en vakmanschap-maritiem":"Vonk","Vonk Veiligheid en vakmanschap-grondoptreden":"Vonk","Vonk veiligheid en vakmanschap-mechatronica":"Vonk","Vonk Toezicht en veiligheid":"Vonk","Vonk Sport en bewegen":"Vonk","Vonk Mobiele werktuigen":"Vonk","Vonk Mechatronica":"Vonk","Vonk Maritiem":"Vonk","Vonk Logistiek":"Vonk","Vonk Leisure & hospitality":"Vonk","Vonk Kappen":"Vonk","Vonk ICT":"Vonk","Vonk Horeca":"Vonk","Vonk Handel en Commercie":"Vonk","Vonk Gezondheidszorg":"Vonk","Vonk Financieel en juridisch":"Vonk","Vonk Entree":"Vonk","Vonk Autotechniek":"Vonk","Aventus MBO Basis & Lyceum":"Aventus","ROC Midden Nederland - Tech Campus":"ROC Midden Nederland","ROC Mondriaan Business & Logistics":"ROC Mondriaan","ROC Mondriaan Business & Law":"ROC Mondriaan","mboRijnland Mbo-college Business en Hospitality":"mboRijnland","Firda Heerenveen":"Firda","Firda Leeuwarden Zuid":"Firda","Firda Drachten":"Firda","Firda Sneek":"Firda","Firda Emmeloord":"Firda","Firda Leeuwarden/Dokkum Noord":"Firda","ROC Midden Nederland - ICT College (Amersfoort)":"ROC Midden Nederland","ROC Midden Nederland - Creative College (Amersfoort)":"ROC Midden Nederland","Rijn IJssel Zorg & Welzijn":"Rijn IJssel","ROC Mondriaan Smart Technology":"ROC Mondriaan","Talland College - Start":"Talland College","Talland College - Business & IT":"Talland College","Talland College - Hospitality, Events & Security":"Talland College","Talland College - Techniek":"Talland College","Talland College - Gezondheidszorg":"Talland College","ROC Mondriaan Techniek en Gebouwde Omgeving":"ROC Mondriaan","Summa Economie en ondernemen":"Summa College","Curio C":"Curio","Curio I":"Curio","Curio O":"Curio","Curio R":"Curio","Curio U":"Curio","Talland College - Welzijn en Sport":"Talland College","MBO Amersfoort":"MBO Amersfoort"};
