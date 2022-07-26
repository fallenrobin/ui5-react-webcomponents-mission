import {
    Card,
    Text,
    CardHeader,

}
    from "@ui5/webcomponents-react";
import { spacing }
    from "@ui5/webcomponents-react-base";
import React from "react";

function MyApp() {

const handleHeaderClick = () => {
    alert("Header clicked!")
};

    return (

        <Card header={
            <CardHeader
                titleText="Card"
                interactive
                onClick={handleHeaderClick}
            />
            }>
            <Text style={spacing.sapUiContentPadding}>
                This is the content area of the Card
            </Text>
        </Card>

    )

}

export default MyApp;