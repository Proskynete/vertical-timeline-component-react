/* eslint-disable no-tabs */
import React from 'react';
import Timeline from './../components/timeline';
import Content from './../components/content';
import ContentYear from './../components/content_year';
import ContentBody from './../components/content_body';
import Description from './../components/description';

const DemoComponent = () => {
    return (
        <Timeline>
            <Content>
                <ContentYear
                    startMonth="12"
                    monthType="text"
                    startDay="24"
                    startYear="2016"
                    currentYear
                />
                <ContentBody title="Amazing Title">
                    <Description
                        text="I'm an amazing event"
                        optional="I'm an amazing optional text"
                    />
                    <Description
                        text="I'm an amazing event"
                        optional="I'm another amazing optional text"
                    />
                    <Description text="I'm an amazing event" />
                </ContentBody>
            </Content>
            <Content>...</Content>
        </Timeline>
    );
};


export default DemoComponent;
