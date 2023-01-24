var ctx = document.getElementById("chart").getContext("2d");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Bad Days", "Good Days", "Okay Days", "MH Score"],
        datasets: [{
            label: "Score",
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "#DE0000",
            data: [17/30, 6/30, 7/30, 40/100],
            maxBarThickness: 14
        },],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        scales: {
            y: {
                grid: {
                    drawBorder: false,
                    display: false,
                    drawOnChartArea: false,
                    drawTicks: false,
                },
                ticks: {
                    display: false
                },
            },
            x: {
                grid: {
                    drawBorder: false,
                    display: false,
                    drawOnChartArea: false,
                    drawTicks: false
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 5,
                    padding: 15,
                    font: {
                        size: 14,
                        family: "Open Sans",
                        style: 'bold',
                        lineHeight: 2
                    },
                    color: "#fff"
                },
            },
        },
    },
});