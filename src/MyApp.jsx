import {
    Avatar,
    Card,
    CardHeader,
    Text,
    ShellBar,
    ShellBarItem,
    List,
    StandardListItem,
    ValueState,
    ProgressIndicator,
    Title,
    TitleLevel,
    FlexBox,
    FlexBoxJustifyContent,
    FlexBoxWrap,
    FlexBoxDirection,
    AnalyticalTable,
    Icon
} from "@ui5/webcomponents-react";

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

    const contentTitle = toggleCharts === 'lineChart' ? 'Line Chart' : 'BarChart';
    const switchToChart = toggleCharts === 'lineChart' ? 'Bar Chart' : 'Line Chart';

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
        <>
            <ShellBar 
            primaryTitle="My App" 
            logo={<img src="https://st4.depositphotos.com/33133132/38031/v/1600/depositphotos_380310194-stock-illustration-creative-brain-logo-design-brainstorm.jpg"/>}
            profile={<Avatar><img src="https://pusheen.com/wp-content/uploads/2020/12/What-Sweet-Quiz-SocialResults_Donut-1-e1608220861325.jpg"/></Avatar>}
            />

            <Card header={
                <CardHeader
                    titleText="Stock Prices"
                    subtitleText={`Click here to switch to ${switchToChart}`}
                    interactive
                    onClick={handleHeaderClick}
                    avatar={
                        <Icon
                            name={
                                toggleCharts ===
                                    "lineChart" ? "line-chart"
                                    :
                                    "horizontal-bar-chart"
                            }
                        />
                    }
                />
            }
                style={{ width: "300px" }}
            >
                <Text style={spacing.sapUiContentPadding}>
                    {contentTitle}
                </Text>
                {toggleCharts === "lineChart" ? (
                    <LineChart
                        measures={[{ accessor: "month" }]}
                        dimensions={[{ accessor: "data", label: "Stock Price" }]}
                        dataset={dataset}
                        loading={loading}
                    />
                ) : (
                    <BarChart
                        dimensions={[{ accessor: "month" }]}
                        measures={[{ accessor: "data", label: "Stock Price" }]}
                        dataset={dataset}
                        loading={loading}
                    />
                )}
            </Card>
        </>

    )

}

export default MyApp;