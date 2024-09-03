import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false }); //normal apex-charts import does not work in nextjs 


export default function StatsChart({intlist}: {intlist:string[]}){
    //destructuring stats variable
    const stats = intlist
    const pokeStats = Object.values(stats)

    //pulling seperate state variables
    const hp: number = Number(pokeStats[0])
    const attack:number = Number(pokeStats[1])
    const defense:number = Number(pokeStats[2])
    const special_attack:number = Number(pokeStats[3])
    const special_defense:number = Number(pokeStats[4])
    const speed:number = Number(pokeStats[5])

    //I give thanks to the apexcharts documentation
    //but also not because at no point do they suggest
    //that apexcharts doesn't usually work on nextjs
        const options = {
          chart: {
            id: "bar"
          },
          colors:['#000000'],
          xaxis: {
            categories: [
              "HP", 
              "Attack", 
              "Defense", 
              "Special Attack", 
              "Special Defense", 
              "Speed"]
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
        }
        }
        const series = [
          {
            name: "series",
            data: [
              hp,
              attack,
              defense,
              special_attack,
              special_defense,
              speed
            ]
          }
        ]
      
    return(
        <div>
          <ApexChart type="bar" options={options} series={series} height={200} width={500} />
        </div>
    )
}
