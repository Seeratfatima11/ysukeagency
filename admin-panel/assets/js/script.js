// password show/hide js
$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
// Sidebar script
document.addEventListener("DOMContentLoaded", function () {
  let arrow = document.querySelectorAll(".arrow");
  for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", function (e) {
      let arrowParent = e.target.parentElement.parentElement; // Selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }

  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");

  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("close");
  });

  // Function to toggle sidebar based on screen size
  function toggleSidebar() {
    let screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      sidebar.classList.add("close");
    } else {
      sidebar.classList.remove("close");
    }
  }

  // Call the function initially
  toggleSidebar();

  // Listen for resize events to adjust sidebar
  window.addEventListener("resize", function () {
    toggleSidebar();
  });
});

// chart js
const ctx = document.getElementById("visitorsChart").getContext("2d");

const visitorsChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "1 Feb",
      "2 Feb",
      "3 Feb",
      "4 Feb",
      "5 Feb",
      "6 Feb",
      "7 Feb",
      "8 Feb",
      "9 Feb",
      "10 Feb",
      "11 Feb",
      "12 Feb",
      "13 Feb",
      "14 Feb",
      "15 Feb",
      "16 Feb",
      "17 Feb",
      "18 Feb",
      "19 Feb",
      "20 Feb",
      "21 Feb",
      "22 Feb",
    ],
    datasets: [
      {
        label: "Visitors",
        data: [
          0, 120, 100, 150, 20, 10, 170, 90, 200, 260, 90, 20, 250, 240, 100,
          50, 20, 10, 70, 100, 150, 250,
        ],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        borderColor: "#ff4081",
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#999",
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
        ticks: {
          color: "#999",
          font: {
            size: 12,
          },
          stepSize: 50,
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#fff",
        titleColor: "#ff4081",
        bodyColor: "#333",
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 12,
        },
        borderColor: "#ff4081",
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            return context.raw + " Visitors";
          },
        },
      },
    },
  },
  plugins: [
    {
      id: "customLabel",
      afterDatasetsDraw(chart, args, pluginOptions) {
        const { ctx } = chart;
        const meta = chart.getDatasetMeta(0);
        const dataPointIndex = 19; // index where 100 Visitors is (20 Feb)

        const x = meta.data[dataPointIndex].x;
        const y = meta.data[dataPointIndex].y;

        ctx.save();
        ctx.font = "bold 16px Arial";
        ctx.fillStyle = "#ff4081";
        ctx.textAlign = "center";
        ctx.fillText("100", x, y - 20);

        ctx.font = "12px Arial";
        ctx.fillStyle = "#ff4081";
        ctx.fillText("Visitors", x, y - 5);
        ctx.restore();
      },
    },
  ],
});

// pi chat js
const ctxs = document.getElementById("visitorChart").getContext("2d");

// Main Data
const labels = ["Others", "Canada", "Romania", "United State"];
const values = [15, 35, 20, 30];
const colors = ["#f971b4", "#adc9c3", "#ffb400", "#0d0b1f"];

const visitorChart = new Chart(ctxs, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderColor: "#ffffff",
        borderWidth: 5,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            let value = context.formattedValue || "";
            return label + ": " + value + "%";
          },
        },
      },
      datalabels: {
        color: "#ffffff",
        font: {
          weight: "bold",
          size: 14,
        },
        formatter: function (value, context) {
          let label = context.chart.data.labels[context.dataIndex];
          return value + "%\n" + label;
        },
        align: "center",
        anchor: "center",
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
  plugins: [ChartDataLabels],
});
