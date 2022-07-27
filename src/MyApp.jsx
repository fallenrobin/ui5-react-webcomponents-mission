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
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/list.js";
import "@ui5/webcomponents-icons/dist/table-view.js";




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

const tableData = new Array(500).fill(null).map((_, index) => {
    return {
        name: `name${index}`,
        age: Math.floor(Math.random() * 100),
        friend: {
            name: `friend.Name${index}`,
            age: Math.floor(Math.random() * 100)
        }
    };
});

const tableColumns = [
    {
        Header: "Name",
        accessor: "name" // String-based value accessors!
    },
    {
        Header: "Age",
        accessor: "age"
    },
    {
        Header: "Friend Name",
        accessor: "friend.name"
    },
    {
        Header: "Friend Age",
        accessor: "friend.age"
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
                logo={<img src="https://st4.depositphotos.com/33133132/38031/v/1600/depositphotos_380310194-stock-illustration-creative-brain-logo-design-brainstorm.jpg" />}
                profile={<Avatar>
                    <img src="https://pusheen.com/wp-content/uploads/2020/12/What-Sweet-Quiz-SocialResults_Donut-1-e1608220861325.jpg" />
                </Avatar>}
            >
                <ShellBarItem icon="add" text="Add" />
            </ShellBar>
            <FlexBox
                justifyContent={FlexBoxJustifyContent.Center}
                wrap={FlexBoxWrap.Wrap}
                style={spacing.sapUiContentPadding}
            >
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
                    style={{ width: "300px", ...spacing.sapUiContentPadding }}
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
                <Card
                    header={
                        <CardHeader
                            titleText="Progress"
                            subtitleText="List"
                            avatar={<Icon name="list" />}
                        />
                    }
                    style={{ width: "300px", ...spacing.sapUiContentPadding }}
                >
                    <List>
                        <StandardListItem
                            additionalText="finished"
                            additionalTextState={ValueState.Success}>
                            Activity 1
                        </StandardListItem>

                        <StandardListItem
                            additionalText="failed"
                            additionalTextState={ValueState.Error}>
                            Activity 2
                        </StandardListItem>

                        <StandardListItem
                            additionalText="in progress"
                            additionalTextState={ValueState.Warning}
                            style={{ height: "80px" }}
                        >
                            <Title level={TitleLevel.H5}>
                                Activity 3
                            </Title>
                            <ProgressIndicator
                                value={89}
                                valueState={ValueState.Success} />
                        </StandardListItem>

                        <StandardListItem
                            additionalText="in progress"
                            additionalTextState={ValueState.Warning}
                            style={{ height: "80px" }}
                        >
                            <Title level={TitleLevel.H5}>
                                Activity 4
                            </Title>
                            <ProgressIndicator
                                value={5}
                                valueState={ValueState.Error} />
                        </StandardListItem>
                    </List>

                </Card>
                <Card
                    header={
                        <CardHeader
                            titleText="Analytical Table"
                            avatar={<Icon name="table-view" />}
                        />
                    }
                    style={{ maxWidth: "900px", ...spacing.sapUiContentPadding }}
                >
                    <AnalyticalTable
                        data={tableData}
                        columns={tableColumns}
                        visibleRows={5}
                    />
                </Card>
            </FlexBox>

        </>

    )

}

export default MyApp;