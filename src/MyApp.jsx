import {
    Card,
    Text,
    CardHeader,
    Icon
}
    from "@ui5/webcomponents-react";
import { spacing }
    from "@ui5/webcomponents-react-base";
import {
    BarChart,
    LineChart
}
    from "@ui5/webcomponents-react-charts";
import '@ui5/webcomponents-icons/dist/line-chart.js';
import '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';



import React, { useState } from "react";

const dataset = [
    {
        month: "January",
        data: 65
    },
    {
        month: "February",
        data: 59
    },
    {
        month: "March",
        data: 80
    },
    {
        month: "April",
        data: 81
    },
    {
        month: "May",
        data: 56
    },
    {
        month: "June",
        data: 55
    },
    {
        month: "July",
        data: 40
    }
];


function MyApp() {

    const [loading, setLoading] = useState(false);
    const [toggleCharts, setToggleCharts] = useState("lineChart");

    const handleHeaderClick = () => {
        if (toggleCharts === "lineChart") {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setToggleCharts("barChart");
            }, 2000);
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setToggleCharts("lineChart");
            }, 2000)
        }
    };

    return (

        <Card header={
            <CardHeader
                titleText="Card"
                interactive
                onClick={handleHeaderClick}
                avatar={<Icon name=
                    {toggleCharts ===
                        "lineChart" ? "line-chart"
                        :
                        "horizontal-bar-chart"} />}
            />
        }
            style={{ width: "300px" }}
        >
            <Text style={spacing.sapUiContentPadding}>
                This is the content area of the Card
            </Text>
            {toggleCharts === "lineChart" ? (
                <LineChart
                    measures={[{ accessor: "month" }]}
                    dimensions={[{ accessor: "data", label: "Stock Price" }]}
                    dataset={dataset}
                    loading= {loading}
                />
            ) : (
                <BarChart
                    dimensions={[{ accessor: "month" }]}
                    measures={[{ accessor: "data", label: "Stock Price" }]}
                    dataset={dataset}
                    loading= {loading}
                />
            )}
        </Card>

    )

}

export default MyApp;