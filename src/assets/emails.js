export const mails = [
  {
    subject: "Ihr Konto wurde gesperrt",
    body: "Bitte klicken Sie auf folgenden Link, um es zu reaktivieren: http://meine-bank-login.de",
    isPhishing: true,
    explanation: "Die Domain ist gefälscht – offizielle Banken nutzen keine generischen Links."
  },
  {
    subject: "Newsletter-Bestätigung",
    body: "Danke für Ihre Anmeldung zum Newsletter. Wir freuen uns, Sie an Bord zu haben!",
    isPhishing: false,
    explanation: "Kein Link, keine Bedrohung – eine typische Willkommensmail."
  },
  {
    subject: "Ihr Paket konnte nicht zugestellt werden",
    body: "Verfolgen Sie Ihre Sendung hier: http://dhl-pakettracking-abc.com",
    isPhishing: true,
    explanation: "Die URL ist gefälscht – offizielle Paketdienste haben .de oder echte Domains."
  },
  {
    subject: "Amazon – Ihre Rechnung vom 15. Juli",
    body: "Ihre Rechnung steht in Ihrem Kundenkonto zum Download bereit.",
    isPhishing: false,
    explanation: "Keine Bedrohung, kein Link, ein typischer Hinweis auf das Kundenkonto."
  },
  {
    subject: "Bestätigen Sie Ihre Apple-ID",
    body: "Ihr Apple-Konto wurde eingeschränkt. Bitte klicken Sie hier: http://apple-support-login.info",
    isPhishing: true,
    explanation: "Fake-URL – Apple würde niemals eine .info-Domain verwenden."
  },
  {
    subject: "Spotify – Neues Gerät erkannt",
    body: "Jemand hat sich aus Berlin bei Ihrem Konto angemeldet. Warst du das?",
    isPhishing: false,
    explanation: "Typische Sicherheitsbenachrichtigung von echten Anbietern."
  },
  {
    subject: "Schnell handeln – Ihr Konto läuft ab!",
    body: "Wenn Sie nicht innerhalb von 24h reagieren, wird Ihr Konto deaktiviert. Link: http://update-konto-mailservice.com",
    isPhishing: true,
    explanation: "Druck + falsche Domain = klassisches Phishing-Muster."
  },
  {
    subject: "REWE – Ihr digitaler Kassenzettel",
    body: "Im Anhang finden Sie Ihre digitale Quittung vom Einkauf am 14.07.",
    isPhishing: false,
    explanation: "Kassenzettel per Mail ist bei REWE digital üblich – kein Link, kein Druck."
  },
  {
    subject: "Microsoft-Sicherheitsupdate",
    body: "Ihr PC ist nicht geschützt! Laden Sie hier den Patch herunter: http://secure-microsoft-patch.exe",
    isPhishing: true,
    explanation: "Echte Mails haben keine .exe-Downloads – und Microsoft verschickt keine Links so."
  },
  {
    subject: "PayPal – Verdächtige Zahlung erkannt",
    body: "Wir haben eine verdächtige Zahlung erkannt. Loggen Sie sich in Ihr Konto ein, um zu überprüfen.",
    isPhishing: false,
    explanation: "Solche Mails sind oft echt – solange kein verdächtiger Link enthalten ist."
  }
]