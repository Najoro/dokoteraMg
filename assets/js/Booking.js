const Booking = {
    stepOne: function() {
        console.log("Test");

        // Liste des dates autorisées
        const allowedDates = ["2025-02-24", "2025-02-25", "2025-03-26", "2025-03-27","2025-03-09", "2025-03-12", "2025-03-29"];

        const picker = new easepick.create({
          element: document.getElementById('datepicker'),
          css: [
            'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
            './assets/css/styles.css',
          ],
          locale: "fr-FR",
          plugins: ['LockPlugin','LangPlugin'],
          LockPlugin: {
            filter(date, picked) {
              // Vérifie si la date est dans allowedDates
              return allowedDates.includes(date.format('YYYY-MM-DD'));
            },
          },
          // Affichage du calendrier directement sans champ de saisie
          inline: true,
        });
    }
}

export default Booking;
