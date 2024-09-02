import ApexCharts from "apexcharts";

export default function StatsChart({intlist}: {intlist: string[]}){
    const stats = intlist
    const pokeStats = Object.values(stats)
    
    const hp = pokeStats[0]
    const attack = pokeStats[1]
    const defense = pokeStats[2]
    const special_attack = pokeStats[3]
    const special_defense = pokeStats[4]
    const speed = pokeStats[5]

    const options = {
        series: [
          {
            name: "stats",
            color: "#000000",
            data: [
              hp,
              attack,
              defense,
              special_attack,
              special_defense,
              speed
            ]
        }
        ],
        chart: {
            // sparkline: {
            //     enabled: false,
            //   },
            type: "bar",
            height: "280px",
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: true,
              columnWidth: "50%",
              borderRadius: 6,
              dataLabels: {
                position: "top",
              },
            },
        },
        xaxis:{
            labels:{
                show:false
            },
            axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            categories:[
                "HP", 
                "Attack", 
                "Defense", 
                "Special Attack", 
                "Special Defense", 
                "Speed"
            ],
        },
        yaxis: {
            labels:{
               show: true, 
            }
          },
        fill: {
            opacity: 1,
        }
        }     
        if (document.getElementById("bar-chart") && typeof ApexCharts !== 'undefined') {
            const chart = new ApexCharts(document.getElementById("bar-chart"), options);
            chart.render();
          }       
    return(
        <div id="bar-chart">
        </div>
    )
}
