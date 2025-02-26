$(document).ready(function () {
  const events = [
    {
      id: "1",
      title: "Consultation",
      start: "2025-03-20",
      docteur: "Benja",
      horaire: "10h 20 - 10h 15", 
    },
    {
      id: "2",
      title: "Médicament",
      start: "2025-03-20",
      docteur: "Alice",
      horaire: "11h 00 - 11h 45", 
    },
    {
      id: "3",
      title: "Radio",
      start: "2025-03-20",
      docteur: "Marc",
      horaire: "14h 00 - 14h 30", 
    },
    {
      id: "4",
      title: "Échographie",
      start: "2025-03-20",
      docteur: "Sophie",
      horaire: "09h 00 - 09h 30", 
    },
    {
      id: "5",
      title: "Prise de Sang",
      start: "2025-03-20",
      docteur: "Léa",
      horaire: "15h 00 - 15h 30", 
    },
    {
      id: "6",
      title: "Consultation de Suivi",
      start: "2025-01-25",
      docteur: "Tom",
      horaire: "10h 00 - 10h 30", 
    },
    {
      id: "7",
      title: "Vaccination",
      start: "2025-03-26",
      docteur: "Claire",
      horaire: "13h 30 - 14h 00", 
    },
    {
      id: "8",
      title: "Rééducation",
      start: "2025-06-27",
      docteur: "Paul",
      horaire: "11h 15 - 11h 45", 
    },
    {
      id: "9",
      title: "Consultation d'Urgence",
      start: "2025-12-28",
      docteur: "Nina",
      horaire: "12h 00 - 12h 30", 
    },
    {
      id: "10",
      title: "Prescription Médicale",
      start: "2025-03-01",
      docteur: "Max",
      horaire: "14h 15 - 14h 45", 
    },
    {
      id: "11",
      title: "Examen Clinique",
      start: "2025-03-12",
      docteur: "Eva",
      horaire: "09h 30 - 10h 00", 
    },
    {
      id: "12",
      title: "Analyse de Sang",
      start: "2025-03-19",
      docteur: "Alex",
      horaire: "10h 30 - 11h 00", 
    },
    {
      id: "13",
      title: "Consultation Psychologique",
      start: "2025-03-22",
      docteur: "Julia",
      horaire: "13h 00 - 13h 30", 
    },
    {
      id: "14",
      title: "Examen Radiologique",
      start: "2025-04-07",
      docteur: "Simon",
      horaire: "15h 30 - 16h 00", 
    },
    {
      id: "15",
      title: "Suivi Post-Opératoire",
      start: "2025-03-07",
      docteur: "Lina",
      horaire: "11h 45 - 12h 15", 
    },
    {
      id: "16",
      title: "Évaluation Nutritionnelle",
      start: "2025-05-07",
      docteur: "Kévin",
      horaire: "10h 15 - 10h 45", 
    },
    {
      id: "17",
      title: "Consultation Gynécologique",
      start: "2025-09-08",
      docteur: "Chloé",
      horaire: "12h 30 - 13h 00", 
    },
    {
      id: "18",
      title: "Consultation Pédiatrique",
      start: "2025-03-10",
      docteur: "Julien",
      horaire: "14h 45 - 15h 15", 
    },
    {
      id: "19",
      title: "Intervention Chirurgicale",
      start: "2025-02-10",
      docteur: "Laura",
      horaire: "09h 15 - 09h 45", 
    },
    {
      id: "20",
      title: "Évaluation Cardiaque",
      start: "2025-01-11",
      docteur: "Louis",
      horaire: "10h 00 - 10h 30", 
    },
    {
      id: "21",
      title: "Consultation Dermatologique",
      start: "2025-01-12",
      docteur: "Emma",
      horaire: "11h 30 - 12h 00", 
    },
    {
      id: "22",
      title: "Consultation Endocrinologique",
      start: "2026-01-13",
      docteur: "Mila",
      horaire: "13h 15 - 13h 45", 
    },
    {
      id: "23",
      title: "Séance de Kinésithérapie",
      start: "2026-03-14",
      docteur: "Lucas",
      horaire: "14h 30 - 15h 00", 
    },
    {
      id: "24",
      title: "Consultation Cardiologique",
      start: "2025-02-15",
      docteur: "Sara",
      horaire: "15h 15 - 15h 45", 
    },
    {
      id: "25",
      title: "Bilan de Santé",
      start: "2025-03-16",
      docteur: "Antoine",
      horaire: "16h 00 - 16h 30", 
    },
  ];
  const Historiques = [
    { title: "Réunion Projet", start: "2025-02-24T10:00:00", timeStart: "10h 00", timeEnd: "11h 10" },
    { title: "Meetup Python", start: "2025-02-24T19:00:00", timeStart: "19h 00", timeEnd: "21h 30" },
    { title: "Design Review", start: "2025-02-25T11:00:00", timeStart: "11h 00", timeEnd: "12h 30" },
    { title: "Conférence Dev", start: "2025-02-25T14:00:00", timeStart: "14h 00", timeEnd: "15h 30" },
    { title: "Hackathon", start: "2025-02-26T08:00:00", timeStart: "08h 00", timeEnd: "20h 00" },
    { title: "Meetup JS", start: "2025-02-25T18:30:00", timeStart: "18h 30", timeEnd: "21h 00" },
    { title: "Sprint Planning", start: "2025-03-01T10:15:00", timeStart: "10h 15", timeEnd: "11h 45" },
    { title: "Atelier UX", start: "2025-03-03T15:00:00", timeStart: "15h 00", timeEnd: "17h 00" },
    { title: "Présentation produit", start: "2025-03-04T09:30:00", timeStart: "09h 30", timeEnd: "10h 45" },
    { title: "Démo Sprint", start: "2025-03-05T14:45:00", timeStart: "14h 45", timeEnd: "16h 00" },
    { title: "Séance brainstorming", start: "2025-03-06T13:00:00", timeStart: "13h 00", timeEnd: "14h 30" },
    { title: "Conférence IA", start: "2025-03-07T10:30:00", timeStart: "10h 30", timeEnd: "12h 00" },
    { title: "Réunion Équipe", start: "2025-03-08T17:00:00", timeStart: "17h 00", timeEnd: "18h 30" },
    { title: "Formation Docker", start: "2025-03-09T09:00:00", timeStart: "09h 00", timeEnd: "11h 30" },
    { title: "Cours Blockchain", start: "2025-03-10T14:00:00", timeStart: "14h 00", timeEnd: "16h 00" },
];


  Historique.init(Historiques);
  Calandar.rendezVous(events);
  // Calandar.init();
  Calandar.initialiseFullCalandar(events);
  Evenement.toogleShowPassword();
  // Evenement.initlTelInput();
});

const Evenement = {
  toogleShowPassword: function () {
    $("body").on("click", "#toogle-show-password", function () {
      const $password = $("#password");
      const $this = $(this);
      var icon = $this.find("i");

      if ($password.attr("type") == "password") {
        $password.attr("type", "text");
        icon.removeClass("bi-eye-slash").addClass("bi-eye");
      } else {
        $password.attr("type", "password");
        icon.removeClass("bi-eye").addClass("bi-eye-slash");
      }
    });
  },

  initlTelInput: function () {
    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
      initialCountry: "mg",
      separateDialCode: true,
      loadUtils: () => import("/intl-tel-input/js/utils.js?1733756310855"), // for formatting/placeholders etc
    });
  },
};

const Calandar = {
  currentDate: new Date(),
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  rendezVous: function (DataRendezVous) {
    const self = this; // Référence à l'objet courant
    $(".btn-prev").click(function () {
      calandarFunctions.previousMonth(DataRendezVous);
    });

    $(".btn-next").click(function () {
      calandarFunctions.nextMonth(DataRendezVous);
    });

    // Affichage initial  
    calandarFunctions.updateMonthYear(DataRendezVous);
  },

  initialiseFullCalandar: function (eventFullCalandar) {
    var calendarEl = $("#calendar")[0];
    this.calendar = new FullCalendar.Calendar(calendarEl, {
      events: eventFullCalandar,
      selectable: true,
      editable: true,
      initialView: "dayGridMonth",
      locale: "fr",
      timeZone: "Africa/Nairobi",
      themeSystem: "bootstrap5", 
      dateClick: function (info) {
        const date = info.dateStr;
        calandarFunctions.displayTodayEvents(date);
      },
      datesSet: function () {
        calandarFunctions.markEventDays();
      },
    });
    this.calendar.render();

    const today = new Date().toISOString().split("T")[0];
    calandarFunctions.displayTodayEvents(today);
  },
};

const calandarFunctions = {
  updateMonthYear: function (DataRendezVous) {
    const month = Calandar.currentDate.getMonth();
    const year = Calandar.currentDate.getFullYear();
    $(".month-year").text(`${Calandar.months[month]} ${year}`);
    Filter.displayFilterEvents(month, year, DataRendezVous);
  },

  previousMonth: function (DataRendezVous) {
    Calandar.currentDate.setMonth(Calandar.currentDate.getMonth() - 1);
    this.updateMonthYear(DataRendezVous);
  },

  nextMonth: function (DataRendezVous) {
    Calandar.currentDate.setMonth(Calandar.currentDate.getMonth() + 1);
    this.updateMonthYear(DataRendezVous);
  },

  displayTodayEvents: function (date) {
    var events = Calandar.calendar.getEvents();
    var $todayEventsDiv = $("#today-events");
    var todayEvents = events.filter((event) => event.start.toISOString().split("T")[0] === date);
    
    $todayEventsDiv.empty();
    if (todayEvents.length > 0) {
      todayEvents.forEach((event) => {
        
        $todayEventsDiv.append(Templante.eachEvent(event))
      })
    } else {
      $todayEventsDiv.html(Templante.noEvent());
    }
  },

  markEventDays: function () {
    var allDays = Calandar.calendar.getEvents();
    var $dayCells = $(".fc-day");

    $dayCells.removeClass("has-events");

    $.each(allDays, function (index, event) {
      var eventDate = event.start.toISOString().split("T")[0];
      var $cell = $('.fc-day[data-date="' + eventDate + '"]');
      if ($cell.length) {
        $cell.addClass("has-events");
      }
    });
  },


};

//Historique
var Historique = {
  events: [],

  init: function (events) {
      this.events = events;
      HistoriqueFunctions.cacheDOM();
      HistoriqueFunctions.bindEvents();
      HistoriqueFunctions.populateMonthAndYear();
      HistoriqueFunctions.updateEventList(this.events);
  }
};

var HistoriqueFunctions = {
  cacheDOM: function () {
      this.$eventList = $("#eventList");
      this.$monthSelect = $("#monthSelect");
      this.$yearSelect = $("#yearSelect");
      this.$addEventBtn = $("#addEventBtn");
      this.$eventModal = $("#eventModal");
      this.$closeModal = $(".close");
      this.$saveEventBtn = $("#saveEventBtn");
      this.$eventTitleInput = $("#eventTitle");
      this.$eventDateInput = $("#eventDate");
      this.currentDate = new Date();
  },

  bindEvents: function () {
      this.$addEventBtn.on("click", this.showModal.bind(this));
      this.$closeModal.on("click", this.hideModal.bind(this));
      this.$saveEventBtn.on("click", this.saveEvent.bind(this));
      this.$monthSelect.on("change", () => this.updateEventList(Historique.events));
      this.$yearSelect.on("change", () => this.updateEventList(Historique.events));
  },

  populateMonthAndYear: function () {
      const months = [
          "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
          "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
      ];

      $.each(months, (i, month) => {
          this.$monthSelect.append(`<option value="${i}">${month}</option>`);
      });

      const currentYear = new Date().getFullYear();
      for (let i = currentYear - 2; i <= currentYear + 2; i++) {
          this.$yearSelect.append(`<option value="${i}">${i}</option>`);
      }

      this.$monthSelect.val(this.currentDate.getMonth());
      this.$yearSelect.val(this.currentDate.getFullYear());
  },

  getFormattedDate: function (eventDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);

      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);

      eventDate.setHours(0, 0, 0, 0);

      if (eventDate.getTime() === today.getTime()) return "Aujourd'hui";
      if (eventDate.getTime() === tomorrow.getTime()) return "Demain";
      if (eventDate.getTime() === yesterday.getTime()) return "Hier";

      return eventDate.toLocaleDateString("fr-FR", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  },

  updateEventList: function (events) {
      var selectedMonth = parseInt(this.$monthSelect.val());
      var selectedYear = parseInt(this.$yearSelect.val());

      var filteredEvents = events.filter(event => {
          var eventDate = new Date(event.start);
          return eventDate.getMonth() === selectedMonth && eventDate.getFullYear() === selectedYear;
      });

      filteredEvents.sort((a, b) => new Date(a.start) - new Date(b.start));

      this.$eventList.empty();

      if (filteredEvents.length === 0) {
          this.$eventList.html("<p>Aucun événement ce mois-ci.</p>");
          return;
      }

      let groupedEvents = {};
      $.each(filteredEvents, (_, event) => {
          let eventDate = new Date(event.start);
          let formattedDate = this.getFormattedDate(eventDate);

          if (!groupedEvents[formattedDate]) {
              groupedEvents[formattedDate] = [];
          }
          groupedEvents[formattedDate].push(event);
      });

      let sortedDates = Object.keys(groupedEvents).sort((a, b) => {
          let dateA = new Date(a === "Aujourd'hui" ? new Date() : a === "Demain" ? new Date().setDate(new Date().getDate() + 1) : a === "Hier" ? new Date().setDate(new Date().getDate() - 1) : a);
          let dateB = new Date(b === "Aujourd'hui" ? new Date() : b === "Demain" ? new Date().setDate(new Date().getDate() + 1) : b === "Hier" ? new Date().setDate(new Date().getDate() - 1) : b);
          return dateA - dateB;
      });

      $.each(sortedDates, (_, date) => {
          let $dateHeader = $("<div>").addClass("event-day").text(date);
          this.$eventList.append($dateHeader);

          let $eventContainer = $("<div>").addClass("event-list-container");
          if (date === "Aujourd'hui") $eventContainer.addClass("today-events");

          $.each(groupedEvents[date], (_, history) => {
              // let eventTime = new Date(history.start).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
              let $eventItem = $("<div>").addClass("event-item").html(Templante.EachHistorique(history));
              $eventContainer.append($eventItem);
          });

          this.$eventList.append($eventContainer);
      });
  },

  showModal: function () {
      this.$eventModal.show();
      this.$eventTitleInput.val("");
      this.$eventDateInput.val("");
  },

  hideModal: function () {
      this.$eventModal.hide();
  },

  saveEvent: function () {
      const title = this.$eventTitleInput.val();
      const date = new Date(this.$eventDateInput.val());
      const now = new Date();

      if (title && this.$eventDateInput.val()) {
          if (date < now) {
              alert("Vous ne pouvez pas ajouter un événement à une date passée.");
          } else {
              Historique.events.push({ title: title, start: date.toISOString() });
              this.updateEventList(Historique.events);
              this.hideModal();
          }
      } else {
          alert("Veuillez remplir tous les champs.");
      }
  }
};


const Filter = {
  displayFilterEvents: function (month, year, events) {
    const Days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    
    // Filtrer les rendez-vous en fonction du mois et de l'année
    const eventsFilter = events.filter((event) => {
      const date = new Date(event.start);
      return date.getMonth() === month && date.getFullYear() === year;
    });

    // Afficher les rendez-vous filtrés
    $(".appointment-list").empty();
    if (eventsFilter.length > 0) {
      eventsFilter.forEach((event) => {
        $(".appointment-list").append(Templante.eachEvent(event));
      });
    } else {
      $(".appointment-list").append(Templante.noEvent());
    }
  },
};

const Templante = {
  eachEvent: function (event) {
    const eventDate = new Date(event.start);        
    const dayNumber = eventDate.getDate();
    let dayOfWeek = eventDate.toLocaleDateString("fr-FR", {
      weekday: "short",
    });
    eventTitle = event.docteur ? event.docteur : event.title;
    horaire = event.horaire == undefined ? '' : event.horaire;
    return `
      <li>
        <div class="d-flex align-items-center gap-3  my-1 rounded-2" >
          <div class="d-flex justify-content-center align-items-center flex-column m-2 rounded-2" style="width:50px;height:50px; background : #EEF5DF;">
            <span class="opacity-75 fs-14-px">${dayOfWeek}</span>
            <span class="fw-bold fs-6">${dayNumber}</span>
          </div>
          <div class="d-flex justify-content-center align-items-start flex-column ">
            <span class="">${eventTitle}</span>
            <span class="opacity-75 fs-14-px">${horaire}</span>
          </div>
        </div>
      </li>`;
  },
  
  noEvent : function() {
    return `
      <li>
        <div class="rendez-vous my-6">
            <div class="sans-rendez-vous d-flex justify-content-center align-items-center flex-column">
                <i class="bi bi-calendar-week fs-1 text-primary"></i>
                <h4 class="fs-5">Aucun rendez-vous à venir</h4>
            </div>
        </div>
      </li>
    `
  },
  EachHistorique : function(Historique) {
    return `
                    <div class="card-body d-flex align-items-center gap-3">
                        <img src="./assets/images/amanda.png" class="rounded-circle me-2 small-img" alt="User Image">
                        <span class="fw-bold">${Historique.title}</span>
                        <i class="bi bi-file-earmark-text ms-auto text-primary fs-5"></i>
                    </div>
                    <div class="card-footer my-2 p-1 rounded-2 text-primary text-start time">
                        ${Historique.timeStart} - ${Historique.timeEnd}
                    </div>
                `
  }


};
