---
sidebar_label: addEvent()
title: addEvent Method
description: You can learn about the addEvent method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# addEvent()

### Description

@short: Adds a new event (without opening an editor)

### Usage

~~~jsx {}
addEvent({ event: object }): void;
~~~

### Parameters

- `event` - (required) an object of the event data

:::tip
The full list of the **event** parameters can be found [**here**](api/config/js_eventcalendar_events_config.md)
:::

### Example

~~~jsx {15}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// event data
const new_event_data = {
    id: "1.1",
    type: "Work",
    start_date: new Date("2021-05-24 00:00:00"),
    end_date: new Date("2021-06-08 00:00:00"),
    text: "New Event",
    details: "Philippe-Chatrier Court\n Paris, FRA"
};
// add new event
calendar.addEvent({ event: new_event_data });
~~~