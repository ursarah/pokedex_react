/* eslint-disable react/prop-types */

import { Chart } from "chart.js/auto";
import { useEffect } from "react";

const Charts = ({ getUniquePoke }) => {
    console.log(getUniquePoke.map(stats => stats.stat.name));

    useEffect(() => {
        const labels = getUniquePoke.map(stats => stats.stat.name.toUpperCase())
        const data = getUniquePoke.map(stats => stats.base_stat)

        const ctx = document.getElementById("myChart");

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'STATS',
                    data: data,
                    borderWidth: 1,
                    backgroundColor: [
                        "#A60000",
                        "#F08030",
                        "#A1871F",
                        "#445E9C",
                        "#78C850",
                        "#FA92B2"
                    ],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
    }, [getUniquePoke])



    return (
        <>
            <div className="mx-auto w-full lg:w-[50vw]">
                <h1 className="font-bold text-center text-[20px]">STATS BASICOS</h1>
                <canvas id="myChart" />
            </div>
        </>
    )
}

export default Charts