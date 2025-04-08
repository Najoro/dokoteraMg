
$(document).ready(function () {
  const Historiques = [
    {
      title: "Réunion Projet",
      start: "2025-02-24T10:00:00",
      timeStart: "10h 00",
      timeEnd: "11h 10",
    },
    {
      title: "Meetup Python",
      start: "2025-02-24T19:00:00",
      timeStart: "19h 00",
      timeEnd: "21h 30",
    },
    {
      title: "Design Review",
      start: "2025-02-25T11:00:00",
      timeStart: "11h 00",
      timeEnd: "12h 30",
    },
    {
      title: "Conférence Dev",
      start: "2025-02-25T14:00:00",
      timeStart: "14h 00",
      timeEnd: "15h 30",
    },
    {
      title: "Hackathon",
      start: "2025-02-26T08:00:00",
      timeStart: "08h 00",
      timeEnd: "20h 00",
    },
    {
      title: "Meetup JS",
      start: "2025-02-25T18:30:00",
      timeStart: "18h 30",
      timeEnd: "21h 00",
    },
    {
      title: "Sprint Planning",
      start: "2025-03-01T10:15:00",
      timeStart: "10h 15",
      timeEnd: "11h 45",
    },
    {
      title: "Atelier UX",
      start: "2025-03-03T15:00:00",
      timeStart: "15h 00",
      timeEnd: "17h 00",
    },
    {
      title: "Présentation produit",
      start: "2025-03-04T09:30:00",
      timeStart: "09h 30",
      timeEnd: "10h 45",
    },
    {
      title: "Démo Sprint",
      start: "2025-03-05T14:45:00",
      timeStart: "14h 45",
      timeEnd: "16h 00",
    },
    {
      title: "Séance brainstorming",
      start: "2025-03-06T13:00:00",
      timeStart: "13h 00",
      timeEnd: "14h 30",
    },
    {
      title: "Conférence IA",
      start: "2025-03-07T10:30:00",
      timeStart: "10h 30",
      timeEnd: "12h 00",
    },
    {
      title: "Réunion Équipe",
      start: "2025-03-08T17:00:00",
      timeStart: "17h 00",
      timeEnd: "18h 30",
    },
    {
      title: "Formation Docker",
      start: "2025-03-09T09:00:00",
      timeStart: "09h 00",
      timeEnd: "11h 30",
    },
    {
      title: "Cours Blockchain",
      start: "2025-03-10T14:00:00",
      timeStart: "14h 00",
      timeEnd: "16h 00",
    },
  ];

  if ($("body").hasClass("profile-page")) {     
    Historique.init(Historiques);
  }
  if($('body').hasClass('authentification-page')){
    Evenement.toogleShowPassword();
    Evenement.initlTelInput();
  }
  if($('body').hasClass('doctor-details')){
    calendar.init();
  }
  if($('body').hasClass('booking-page1')){
    Booking.stepOne();
    Booking.displayDayOn();
  }
  if($('body').hasClass('booking-page2')){
    Booking.stepTwo();
  }
});

const Booking = {
  allowedDates: [
    '2025-03-01',
    '2025-03-03',
    '2025-03-07',
    '2025-03-11',
    '2025-03-17',
    '2025-03-21',
  ],
  DayOn : [
    "07h 20",
    "08h 10",
    "10h 30",
    "11h 30",
    "13h 30",
    "15h 30",
  ],
  stepOne: function() {
    
    const pikerInit = calendar.init();
    pikerInit.on('select', (e) => {
      const $wrapperDateSelect = $('#selected-date');
      const selectedDate = e.detail.date.format('YYYY-MM-DD');
      $wrapperDateSelect.html(selectedDate)
    })
  },

  displayDayOn : function() {    
    let hourSelection = $("#hour-selection");
    this.DayOn.forEach(time => {
      let formattedTime = time.replace("h", ":").trim();
    
      let label = $("<label>").addClass("card-select-hour");
      let checkbox = $("<input>").attr({ type: "checkbox", value: formattedTime,class: "hour-checkbox" });

     
      label.append(checkbox).append(formattedTime);
      hourSelection.append(label);
      $(".hour-checkbox").change(function() {
        $(this).parent().toggleClass("selectedInput");
      });
    });
  },
  stepTwo : function() {
    Evenement.initlTelInput();
  }

}
const calendar = {
  allowedDates: [
    '2025-03-01',
    '2025-03-03',
    '2025-03-07',
    '2025-03-11',
    '2025-03-17',
    '2025-03-21',
  ],

  // Méthode d'initialisation du calendrier
  init: function() {
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
          // Bloquer toutes les dates sauf celles spécifiées dans allowedDates
          return calendar.allowedDates.includes(date.format('YYYY-MM-DD'));
        },
      },
      // Affichage du calendrier directement sans champ de saisie
      inline: true,
    });

    return picker;
  }
};

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

//Historique
var Historique = {
  events: [],

  init: function (events) {
    this.events = events;
    HistoriqueFunctions.cacheDOM();
    HistoriqueFunctions.bindEvents();
    HistoriqueFunctions.populateMonthAndYear();
    HistoriqueFunctions.updateEventList(this.events);
  },
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
    this.$monthSelect.on("change", () =>
      this.updateEventList(Historique.events)
    );
    this.$yearSelect.on("change", () =>
      this.updateEventList(Historique.events)
    );
  },

  populateMonthAndYear: function () {
    const months = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
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

    return eventDate.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  },

  updateEventList: function (events) {
    var selectedMonth = parseInt(this.$monthSelect.val());
    var selectedYear = parseInt(this.$yearSelect.val());

    var filteredEvents = events.filter((event) => {
      var eventDate = new Date(event.start);
      return (
        eventDate.getMonth() === selectedMonth &&
        eventDate.getFullYear() === selectedYear
      );
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
      let dateA = new Date(
        a === "Aujourd'hui"
          ? new Date()
          : a === "Demain"
          ? new Date().setDate(new Date().getDate() + 1)
          : a === "Hier"
          ? new Date().setDate(new Date().getDate() - 1)
          : a
      );
      let dateB = new Date(
        b === "Aujourd'hui"
          ? new Date()
          : b === "Demain"
          ? new Date().setDate(new Date().getDate() + 1)
          : b === "Hier"
          ? new Date().setDate(new Date().getDate() - 1)
          : b
      );
      return dateA - dateB;
    });

    $.each(sortedDates, (_, date) => {
      let $dateHeader = $("<div>").addClass("event-day").text(date);
      this.$eventList.append($dateHeader);

      let $eventContainer = $("<div>").addClass("event-list-container");
      if (date === "Aujourd'hui") $eventContainer.addClass("today-events");

      $.each(groupedEvents[date], (_, history) => {
        // let eventTime = new Date(history.start).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
        let $eventItem = $("<div>")
          .addClass("event-item")
          .html(Templante.EachHistorique(history));
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
  },
};


const Templante = {
  EachHistorique: function (Historique) {
    return `
        <div class="card-body d-flex align-items-center gap-3">
            <img src="./assets/images/amanda.png" class="rounded-circle me-2 small-img" alt="User Image">
            <span class="fw-bold">${Historique.title}</span>
            <i class="bi bi-file-earmark-text ms-auto text-primary fs-5"></i>
        </div>
        <div class="card-footer my-2 p-1 rounded-2 text-primary text-start time">
            ${Historique.timeStart} - ${Historique.timeEnd}
        </div>
    `;
  },
};
