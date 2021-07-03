let category_options = {
    series: [0, 0, 0, 0, 0],
    labels: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'],
    title: {
        text: 'Number of tenants (according to categories)',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '15px',
          fontWeight:  '400',
          fontFamily:  'Lato',
          color:  '#555',
        },
    },
    chart: {
        height: 350,
        type: "donut",
    },
    colors: ['#6ab04c', '#2980b9', '#f39c12', '#775DD0', '#d35400']
};

let category_chart = new ApexCharts(document.querySelector("#category-chart"), category_options);
category_chart.render();

var property_lists = [];
const property_names = document.querySelectorAll('#property_names_hidden');
property_names.forEach((e) => {
    property_lists.push(e.value.toUpperCase());
});

crayon = ['#6ab04c', '#2980b9', '#f39c12', '#775DD0', '#d35400']
var series = [];
var colors = [];
for (i = 0; i < property_lists.length; i++) {
    series.push({
        name: property_lists[i],
        data: [0, 0, 0, 0, 0]
    });
}

for (i = 0; i < property_lists.length; i++) {
    colors.push(crayon[i]);
}

let customer_options = {
    series: series,
    colors: colors,
    title: {
        text: 'Tenants (in each property)',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '15px',
          fontWeight:  '400',
          fontFamily:  'Lato',
          color:  '#555',
        },
    },
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: true
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'],
    },
    legend: {
        position: 'bottom'
    }
};

let customer_chart = new ApexCharts(document.querySelector("#customer-chart"), customer_options);
customer_chart.render();


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated')
            }, false)
        })
})()