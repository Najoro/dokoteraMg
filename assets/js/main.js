$(document).ready(function () {
  const events = [
    {
      id: "1",
      title: "Consultation",
      start: "2025-03-05",
      docteur: "Dr. Benja",
      horaire: "09h00 - 09h30",
      status: 0,
    },
    {
      id: "2",
      title: "Médicament",
      start: "2025-03-10",
      docteur: "Dr. Alice",
      horaire: "10h00 - 10h30",
      status: 1,
    },
    {
      id: "3",
      title: "Radio",
      start: "2025-06-15",
      docteur: "Dr. Paul",
      horaire: "11h15 - 11h45",
      status: 0,
    },
    {
      id: "4",
      title: "Échographie",
      start: "2025-09-08",
      docteur: "Dr. Chloé",
      horaire: "12h30 - 13h00",
      status: 2,
    },
    {
      id: "5",
      title: "Analyse sanguine",
      start: "2025-04-22",
      docteur: "Dr. Léo",
      horaire: "08h45 - 09h15",
      status: 0,
    },
    {
      id: "6",
      title: "Vaccination",
      start: "2025-07-01",
      docteur: "Dr. Karim",
      horaire: "10h00 - 10h30",
      status: 2,
    },
    {
      id: "7",
      title: "Consultation",
      start: "2025-02-18",
      docteur: "Dr. Emma",
      horaire: "09h30 - 10h00",
      status: 1,
    },
    {
      id: "8",
      title: "IRM",
      start: "2025-05-14",
      docteur: "Dr. Sofiane",
      horaire: "14h00 - 14h45",
      status: 0,
    },
    {
      id: "9",
      title: "Scanner",
      start: "2025-08-20",
      docteur: "Dr. Victor",
      horaire: "16h00 - 16h30",
      status: 1,
    },
    {
      id: "10",
      title: "Consultation",
      start: "2025-01-30",
      docteur: "Dr. Camille",
      horaire: "15h00 - 15h30",
      status: 2,
    },
    {
      id: "11",
      title: "Opération mineure",
      start: "2025-03-12",
      docteur: "Dr. Olivia",
      horaire: "17h00 - 17h45",
      status: 0,
    },
    {
      id: "12",
      title: "Consultation dermatologique",
      start: "2025-09-25",
      docteur: "Dr. Martin",
      horaire: "13h30 - 14h00",
      status: 1,
    },
    {
      id: "13",
      title: "Suivi post-opératoire",
      start: "2025-06-03",
      docteur: "Dr. Anaïs",
      horaire: "11h45 - 12h15",
      status: 2,
    },
    {
      id: "14",
      title: "Bilan de santé",
      start: "2025-10-10",
      docteur: "Dr. Julien",
      horaire: "09h15 - 09h45",
      status: 0,
    },
    {
      id: "15",
      title: "Consultation cardiologique",
      start: "2025-04-28",
      docteur: "Dr. Thomas",
      horaire: "08h30 - 09h00",
      status: 1,
    },
    {
      id: "16",
      title: "Chirurgie ambulatoire",
      start: "2025-07-12",
      docteur: "Dr. Clara",
      horaire: "14h30 - 15h15",
      status: 0,
    },
    {
      id: "17",
      title: "Vaccination grippe",
      start: "2025-12-05",
      docteur: "Dr. Richard",
      horaire: "10h15 - 10h45",
      status: 2,
    },
    {
      id: "18",
      title: "Test d'effort",
      start: "2025-08-29",
      docteur: "Dr. Nadia",
      horaire: "16h15 - 16h45",
      status: 0,
    },
    {
      id: "19",
      title: "Consultation neurologique",
      start: "2025-11-18",
      docteur: "Dr. François",
      horaire: "15h45 - 16h15",
      status: 1,
    },
    {
      id: "20",
      title: "Échographie abdominale",
      start: "2025-05-09",
      docteur: "Dr. Sophie",
      horaire: "12h00 - 12h30",
      status: 2,
    },
  ];

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
  const DocData = [
    { name: "Blood report", date: "May 14, 2023. 13:25 PM", isfavory: false },
    {
      name: "Dr. Inglais Prescription",
      date: "May 14, 2023. 13:25 PM",
      isfavory: true,
    },
    { name: "Blood report", date: "May 14, 2023. 13:25 PM", isfavory: false },
    {
      name: "Dr. Inglais Prescription",
      date: "May 14, 2023. 13:25 PM",
      isfavory: false,
    },
    { name: "Blood report", date: "May 14, 2023. 13:25 PM", isfavory: true },
    {
      name: "Dr. Inglais Prescription",
      date: "May 14, 2023. 13:25 PM",
      isfavory: false,
    },
    {
      name: "Dr. Inglais Prescription",
      date: "May 14, 2023. 13:25 PM",
      isfavory: true,
    },
  ];

  // Documents.display(DocData);
  if ($("body").hasClass("consultations-page")) {
    consultations.init(events);
  }else{
    Historique.init(Historiques);
    Calandar.rendezVous(events);
    Calandar.init();
    Calandar.initialiseFullCalandar(events);
    Evenement.toogleShowPassword();
    Evenement.initlTelInput();

  }
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
    var todayEvents = events.filter(
      (event) => event.start.toISOString().split("T")[0] === date
    );

    $todayEventsDiv.empty();
    if (todayEvents.length > 0) {
      todayEvents.forEach((event) => {
        $todayEventsDiv.append(Templante.eachEvent(event));
      });
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

const Documents = {
  display: function (Documents) {
    const $wrapperDoc = $("#list_documents");

    Documents.forEach((doc) => {
      const doctorName = doc.name;
      const date = doc.date;
      const isfavory = doc.isfavory;
      $wrapperDoc.append(Templante.eachDocument(doctorName, date, isfavory));
    });
  },
};

//Consultation
const consultations = {
  events: [],

  init(events) {
    this.events = events; // Assigner les événements
    this.updateMonthFilter();
    this.displayEvents();
    this.bindEvents();
    // Mettre le statut par défaut à "Prochains"
    this.setActiveStatusButton(0);
  },

  updateMonthFilter() {
    let months = [
      ...new Set(this.events.map((event) => event.start.slice(0, 7))),
    ];
    months.sort();

    $("#monthSelect")
      .empty()
      .append('<option value="">-- Tous les mois --</option>');
      months.forEach((month) => {
      let [year, mon] = month.split("-");
      let monthName = new Date(year, mon - 1).toLocaleString("fr-FR", {
        month: "long",
        year: "numeric",
      });
      $("#monthSelect").append(
        `<option value="${month}">${monthName}</option>`
      );
    });
  },

  displayEvents(month = "", status = null) {    
    $("#eventList").empty();
    let filteredEvents = this.events;

    if (status !== null) {
      filteredEvents = this.events.filter((event) => event.status === status);
    }

    if (month) {
      console.log("month :", month);
      
      filteredEvents = filteredEvents.filter((event) =>
        event.start.startsWith(month)
      );
    }

    if (filteredEvents.length === 0) {
      $("#eventList").append(
        "<li class='list-group-item text-muted'>Aucun événement trouvé.</li>"
      );
    } else {
      let currentMonth = "";
      filteredEvents.forEach((event) => {
        let eventMonth = event.start.slice(0, 7);
        if (eventMonth !== currentMonth) {
          let monthName = new Date(eventMonth + "-01").toLocaleString("fr-FR", {
            month: "long",
            year: "numeric",
          });
          $("#eventList").append(
            `<li class=""><strong class="fs-14-px">${monthName}</strong></li>`
          );
          currentMonth = eventMonth;
        }
        // ${event.start}
        const eventDate = new Date(event.start);
        const dayNumber = eventDate.getDate();
        let dayOfWeek = eventDate.toLocaleDateString("fr-FR", {
          weekday: "short",
        });
        $("#eventList").append(`
          <li class=" d-flex justify-content-between align-items-center my-3 bg-white p-3 rounded-3 flex-wrap">
            <div class="d-flex gap-2 gap-md-5 flex-wrap my-2">
                <div class="consultation-item">
                    <span class="fw-normal fs-14-px">${dayOfWeek}</span>
                    <span class="fw-bold fs-4">${dayNumber}</span>
                </div>
                <div class="d-flex justify-content-between flex-column align-items-start border-md-start">
                    <p class="fs-14-px m-0">
                        <i class="bi bi-stopwatch mx-2"></i>
                        ${event.horaire}
                    </p>
                    <p class="fs-14-px m-0">
                        <i class="bi bi-person-circle mx-2"></i>
                        ${event.docteur}
                    </p>
                </div>
                <div class="d-flex justify-content-between flex-column align-items-start ">
                    <p class="fs-14-px m-0">Problème : ${event.title}</p>
                    <a class="fs-14-px" href="#">Afficher les documents</a>
                </div>
            </div>
            <button class="btn bg-secondary-subtle " onclick="consultations.openEditModal('${event.id}')">Modifier</button>  
          </li>
              `);
      });
    }
  },

  openEditModal(eventId) {
    const eventToEdit = this.events.find((event) => event.id === eventId);
    $("#eventTitle").val(eventToEdit.title);
    $("#eventDate").val(eventToEdit.start);
    $("#eventDoctor").val(eventToEdit.docteur);
    $("#eventTime").val(eventToEdit.horaire);
    $("#eventStatus").val(eventToEdit.status);
    $("#eventModalLabel").text("Modifier l'événement");
    $("#eventForm")
      .off("submit")
      .on("submit", (e) => {
        e.preventDefault();
        eventToEdit.title = $("#eventTitle").val().trim();
        eventToEdit.start = $("#eventDate").val();
        eventToEdit.docteur = $("#eventDoctor").val().trim();
        eventToEdit.horaire = $("#eventTime").val().trim();
        eventToEdit.status = Number($("#eventStatus").val());
        this.updateMonthFilter();
        this.displayEvents($("#monthSelect").val(), null);
        $("#eventForm")[0].reset();
        $("#eventModal").modal("hide");
      });
    $("#eventModal").modal("show");
  },

  filterByStatus(status) {    
    this.displayEvents($("#monthSelect").val(), status);
    this.setActiveStatusButton(status);
  },

  setActiveStatusButton(status) {
    $(".status-btn").removeClass("active");
    if (status === 0) {
      $("#btnNext").addClass("active");
    } else if (status === 1) {
      $("#btnPast").addClass("active");
    } else if (status === 2) {
      $("#btnCancelled").addClass("active");
    }
  },

  bindEvents() {
    $("#monthSelect").change(() => {      
      this.displayEvents($("#monthSelect").val(), null);
    });

    $("#eventForm").submit((e) => {
      e.preventDefault();
      let title = $("#eventTitle").val().trim();
      let date = $("#eventDate").val();
      let docteur = $("#eventDoctor").val().trim();
      let horaire = $("#eventTime").val().trim();
      let status = Number($("#eventStatus").val());

      if (title && date && docteur && horaire) {
        let newEvent = {
          id: String(this.events.length + 1),
          title,
          start: date,
          docteur,
          horaire,
          status,
        };
        this.events.push(newEvent);
        this.updateMonthFilter();
        this.displayEvents($("#monthSelect").val(), null);

        // Réinitialiser le formulaire et fermer la modal
        $("#eventForm")[0].reset();
        $("#eventModal").modal("hide");
      }
    });
  },
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
    horaire = event.horaire == undefined ? "" : event.horaire;
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

  noEvent: function () {
    return `
      <li>
        <div class="rendez-vous my-6">
            <div class="sans-rendez-vous d-flex justify-content-center align-items-center flex-column">
                <i class="bi bi-calendar-week fs-1 text-primary"></i>
                <h4 class="fs-5">Aucun rendez-vous à venir</h4>
            </div>
        </div>
      </li>
    `;
  },

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

  eachDocument: function (name, date, isfavory) {
    var classFavory = isfavory ? "bi bi-star-fill text-warning" : "bi bi-star";

    return `
      <div class="col-md-3">
          <div class="card rounded-4 my-2 ">
              <div class=" d-flex justify-content-between p-2 pb-0">
                  <div id="document-favory" class="">
                      <i class="${classFavory}"></i>
                      <!-- <i class="bi bi-star-fill text-warning"></i> -->
                  </div>
                  <div class="dropdown">
                      <a class="fs-5" href="#" role="button" id="dropdownMenuLink"
                          data-bs-toggle="dropdown" aria-expanded="false">
                          &#8942;
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <li><a class="dropdown-item" href="#">Editer</a></li>
                          <li><a class="dropdown-item" href="#">Supprimer</a></li>
                      </ul>
                  </div>

              </div>
              <div class="d-flex justify-content-center align-items-center border-bottom">
                  <img src="./assets/images/document.png" alt="document" class=" rounded-4">
              </div>
              <div class="card-body text-center">
                  <h6 class="card-title">${name}</h6>
                  <p class="card-text fs-14-px opacity-50">${date}</p>
              </div>
          </div>
          
      </div>
    `;
  },
};
